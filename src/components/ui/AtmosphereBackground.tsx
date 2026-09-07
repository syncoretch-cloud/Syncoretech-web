import bgTexture from "../../assets/bg-texture.jpg";

export default function AtmosphereBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${bgTexture})` }}
      />
      <div className="absolute inset-0 bg-navy-950/35" />

      <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-royal-600/25 blur-[100px] animate-drift will-change-transform" />
      <div className="absolute right-[-10%] top-[30%] h-[420px] w-[420px] rounded-full bg-royal-500/15 blur-[95px] animate-drift [animation-delay:-8s] will-change-transform" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[480px] w-[480px] rounded-full bg-navy-600/40 blur-[100px] animate-drift [animation-delay:-14s] will-change-transform" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950" />
    </div>
  );
}
