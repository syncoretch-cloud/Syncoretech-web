import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { accents, emptyOverrides, textFields, type SiteOverrides } from "../data/editable";

const TOKEN_KEY = "syncore_admin_token";

type Ctx = {
  content: SiteOverrides;
  text: (key: string) => string;
  isAdmin: boolean;
  login: (password: string) => Promise<string | null>;
  logout: () => void;
  save: (next: SiteOverrides) => Promise<string | null>;
  previewTheme: (accentId: string) => void;
};

const SiteContext = createContext<Ctx | null>(null);

const defaults = Object.fromEntries(textFields.map((f) => [f.key, f.value]));

const applyAccent = (id: string) => {
  const accent = accents.find((a) => a.id === id) ?? accents[0];
  [300, 400, 500, 600, 700].forEach((n, i) =>
    document.documentElement.style.setProperty(`--color-royal-${n}`, accent.shades[i])
  );
};

const readToken = () => {
  try {
    return sessionStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
};

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteOverrides>(emptyOverrides);
  const [token, setToken] = useState<string | null>(readToken);

  useEffect(() => {
    fetch("/api/site-content")
      .then((r): Promise<Partial<SiteOverrides>> => (r.ok ? r.json() : Promise.resolve({})))
      .then((data) => {
        const next: SiteOverrides = {
          texts: data.texts ?? {},
          theme: data.theme ?? emptyOverrides.theme,
          projects: data.projects ?? [],
        };
        setContent(next);
        applyAccent(next.theme.accent);
      })
      .catch(() => {});
  }, []);

  const text = useCallback((key: string) => content.texts[key]?.trim() || defaults[key] || "", [content]);

  const logout = useCallback(() => {
    try {
      sessionStorage.removeItem(TOKEN_KEY);
    } catch {
      /* ignore */
    }
    setToken(null);
  }, []);

  const login = useCallback(async (password: string) => {
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return data.error || "Login failed";
      try {
        sessionStorage.setItem(TOKEN_KEY, data.token);
      } catch {
        /* ignore */
      }
      setToken(data.token);
      return null;
    } catch {
      return "Could not reach the server";
    }
  }, []);

  const save = useCallback(
    async (next: SiteOverrides) => {
      try {
        const res = await fetch("/api/site-content", {
          method: "PUT",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify(next),
        });
        if (res.status === 401) {
          logout();
          return "Session expired, please sign in again";
        }
        if (!res.ok) return "Save failed";
        const saved = await res.json();
        setContent(saved);
        applyAccent(saved.theme.accent);
        return null;
      } catch {
        return "Could not reach the server";
      }
    },
    [token, logout]
  );

  const value = useMemo<Ctx>(
    () => ({ content, text, isAdmin: !!token, login, logout, save, previewTheme: applyAccent }),
    [content, text, token, login, logout, save]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteContentProvider");
  return ctx;
}
