import { useRef, useState } from "react";
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
        className="block h-3 w-3 rounded-full bg-silver-300 text-black opacity-70 transition-opacity hover:opacity-100"
      />
      {open && (isAdmin ? <AdminPanel onClose={() => setOpen(false)} /> : <AdminLogin onClose={() => setOpen(false)} />)}
    </>
  );
}
