import { useRef, useState } from "react";
import { Lock } from "lucide-react";
import { useSite } from "../../context/SiteContent";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

// Barely-visible toggle: right-click it twice within 1.5s to open admin access.
export default function AdminTrigger() {
  const { isAdmin } = useSite();
  const [open, setOpen] = useState(false);
  const last = useRef(0);

  const onContext = (e: React.MouseEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - last.current < 1500) {
      setOpen(true);
      last.current = 0;
    } else {
      last.current = now;
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label="Admin"
        onContextMenu={onContext}
        className="fixed bottom-3 left-3 z-40 flex h-7 w-7 items-center justify-center rounded-full text-silver-500 opacity-20 transition-opacity hover:opacity-60"
      >
        <Lock className="h-3.5 w-3.5" />
      </button>
      {open && (isAdmin ? <AdminPanel onClose={() => setOpen(false)} /> : <AdminLogin onClose={() => setOpen(false)} />)}
    </>
  );
}
