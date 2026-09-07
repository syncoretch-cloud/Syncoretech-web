import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";

type Phase = "logo" | "motto" | "done";

export default function IntroSplash({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<Phase>("logo");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("motto"), 1400);
    const t2 = setTimeout(() => setPhase("done"), 2900);
    const t3 = setTimeout(() => {
      document.body.style.overflow = "";
      onFinish();
    }, 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-navy-950"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-500/25 blur-[120px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 scale-110 rounded-full bg-royal-500/30 blur-3xl" />
            <img
              src={logo}
              alt="Syncore Technologies"
              className="relative h-28 w-auto drop-shadow-[0_0_35px_rgba(93,141,255,0.5)] sm:h-36"
            />
          </motion.div>

          <AnimatePresence>
            {phase === "motto" && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-6 font-display text-sm font-medium uppercase tracking-[0.35em] text-silver-300"
              >
                Technologies <span className="text-gradient-royal">with Purpose.</span>
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
