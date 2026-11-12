import { useState } from "react";
import { X, Plus, Trash2, LogOut } from "lucide-react";
import { useSite } from "../../context/SiteContent";
import { accents, textFields, type Project, type SiteOverrides } from "../../data/editable";

type Tab = "text" | "theme" | "projects";

const input =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-silver-200 outline-none focus:border-royal-400/50";

export default function AdminPanel({ onClose }: { onClose: () => void }) {
  const { content, logout, save, previewTheme } = useSite();
  const [draft, setDraft] = useState<SiteOverrides>(() => structuredClone(content));
  const [tab, setTab] = useState<Tab>("text");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const setText = (key: string, value: string) =>
    setDraft((d) => ({ ...d, texts: { ...d.texts, [key]: value } }));

  const setProject = (id: string, patch: Partial<Project>) =>
    setDraft((d) => ({ ...d, projects: d.projects.map((p) => (p.id === id ? { ...p, ...patch } : p)) }));

  const addProject = () =>
    setDraft((d) => ({
      ...d,
      projects: [...d.projects, { id: crypto.randomUUID(), title: "", category: "", description: "", image: "", link: "" }],
    }));

  const onSave = async () => {
    setBusy(true);
    setStatus("");
    const err = await save(draft);
    setBusy(false);
    setStatus(err ?? "Saved. Changes are live.");
  };

  const close = () => {
    previewTheme(content.theme.accent); // drop unsaved theme preview
    onClose();
  };

  return (
    <div className="fixed inset-y-0 right-0 z-[100] flex w-full max-w-md flex-col border-l border-white/10 bg-navy-900/95 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <h2 className="font-display text-base font-semibold text-silver-200">Site admin</h2>
        <div className="flex items-center gap-3 text-silver-400">
          <button onClick={() => { logout(); onClose(); }} aria-label="Sign out" title="Sign out" className="hover:text-silver-200">
            <LogOut className="h-4 w-4" />
          </button>
          <button onClick={close} aria-label="Close" className="hover:text-silver-200">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-1 border-b border-white/10 px-3 py-2 text-sm">
        {(["text", "theme", "projects"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-lg px-3 py-1.5 capitalize ${tab === t ? "bg-white/10 text-silver-200" : "text-silver-500 hover:text-silver-300"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {tab === "text" &&
          textFields.map((f) => (
            <label key={f.key} className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-silver-400">{f.label}</span>
              {f.multiline ? (
                <textarea rows={3} className={input} value={draft.texts[f.key] ?? f.value} onChange={(e) => setText(f.key, e.target.value)} />
              ) : (
                <input className={input} value={draft.texts[f.key] ?? f.value} onChange={(e) => setText(f.key, e.target.value)} />
              )}
            </label>
          ))}

        {tab === "theme" && (
          <div className="grid grid-cols-2 gap-3">
            {accents.map((a) => (
              <button
                key={a.id}
                onClick={() => {
                  setDraft((d) => ({ ...d, theme: { accent: a.id } }));
                  previewTheme(a.id);
                }}
                className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-sm text-silver-200 ${
                  draft.theme.accent === a.id ? "border-white/40 bg-white/10" : "border-white/10 hover:bg-white/5"
                }`}
              >
                <span className="h-5 w-5 rounded-full" style={{ background: a.shades[2] }} />
                {a.label}
              </button>
            ))}
          </div>
        )}

        {tab === "projects" && (
          <>
            {draft.projects.map((p) => (
              <div key={p.id} className="space-y-2 rounded-xl border border-white/10 p-3">
                <input className={input} placeholder="Title" value={p.title} onChange={(e) => setProject(p.id, { title: e.target.value })} />
                <input className={input} placeholder="Category (e.g. Web App)" value={p.category} onChange={(e) => setProject(p.id, { category: e.target.value })} />
                <textarea rows={3} className={input} placeholder="Description" value={p.description} onChange={(e) => setProject(p.id, { description: e.target.value })} />
                <input className={input} placeholder="Image URL (https://...)" value={p.image} onChange={(e) => setProject(p.id, { image: e.target.value })} />
                <input className={input} placeholder="Project link (https://...)" value={p.link} onChange={(e) => setProject(p.id, { link: e.target.value })} />
                <button
                  onClick={() => setDraft((d) => ({ ...d, projects: d.projects.filter((x) => x.id !== p.id) }))}
                  className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Remove
                </button>
              </div>
            ))}
            <button onClick={addProject} className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 py-3 text-sm text-silver-300 hover:bg-white/5">
              <Plus className="h-4 w-4" /> Add project
            </button>
          </>
        )}
      </div>

      <div className="border-t border-white/10 px-5 py-4">
        {status && <p className="mb-2 text-xs text-silver-400">{status}</p>}
        <button
          onClick={onSave}
          disabled={busy}
          className="w-full rounded-xl bg-gradient-to-r from-royal-500 to-royal-600 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {busy ? "Saving..." : "Save changes"}
        </button>
      </div>
    </div>
  );
}
