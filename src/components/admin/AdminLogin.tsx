import { useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { useSite } from "../../context/SiteContent";

export default function AdminLogin({ onClose }: { onClose: () => void }) {
  const { login } = useSite();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const err = await login(password);
    setBusy(false);
    if (err) setError(err);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <form onSubmit={submit} className="glass-panel-strong relative w-full max-w-sm rounded-3xl p-8">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 text-silver-500 hover:text-silver-200">
          <X className="h-5 w-5" />
        </button>
        <h2 className="font-display text-lg font-semibold text-silver-200">Admin access</h2>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-silver-200 outline-none focus:border-royal-400/50"
        />
        {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={busy || !password}
          className="mt-5 w-full rounded-xl bg-gradient-to-r from-royal-500 to-royal-600 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {busy ? "Checking..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
