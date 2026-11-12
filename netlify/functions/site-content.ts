// GET: public site overrides. PUT: admin-only save (requires Bearer token).
import { getStore } from "@netlify/blobs";
import { json, verifyToken } from "../lib/auth";

export const config = { path: "/api/site-content" };

const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max) : "");
const safeUrl = (v: unknown) => {
  const s = str(v, 2000).trim();
  return /^https?:\/\//i.test(s) ? s : "";
};

const sanitize = (raw: any) => {
  const texts: Record<string, string> = {};
  if (raw?.texts && typeof raw.texts === "object") {
    for (const [k, v] of Object.entries(raw.texts).slice(0, 100)) {
      if (typeof v === "string") texts[k.slice(0, 60)] = v.slice(0, 2000);
    }
  }
  const projects = (Array.isArray(raw?.projects) ? raw.projects : []).slice(0, 50).map((p: any) => ({
    id: str(p?.id, 60) || crypto.randomUUID(),
    title: str(p?.title, 120),
    category: str(p?.category, 60),
    description: str(p?.description, 1000),
    image: safeUrl(p?.image),
    link: safeUrl(p?.link),
  }));
  return { texts, theme: { accent: str(raw?.theme?.accent, 30) || "blue" }, projects };
};

export default async (request: Request): Promise<Response> => {
  const store = getStore("site");

  if (request.method === "GET") {
    const data = await store.get("content", { type: "json" });
    return json(200, data ?? {});
  }

  if (request.method === "PUT") {
    if (!verifyToken(request.headers.get("authorization"))) {
      return json(401, { error: "Unauthorized" });
    }
    const text = await request.text();
    if (text.length > 300_000) return json(413, { error: "Too large" });
    let raw: unknown;
    try {
      raw = JSON.parse(text);
    } catch {
      return json(400, { error: "Invalid JSON" });
    }
    const clean = sanitize(raw);
    await store.setJSON("content", clean);
    return json(200, clean);
  }

  return json(405, { error: "Method not allowed" });
};
