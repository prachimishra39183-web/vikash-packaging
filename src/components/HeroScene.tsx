
export default function HeroScene() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#17121F]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Industrial packaging and strapping products"
      >
        <source src="/vikash.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for a premium look */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#17121F]/65 via-transparent to-[#D6FF45]/10" />

      {/* Optional subtle glow */}
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#D6FF45]/15 blur-3xl" />

      {/* Small label */}
      
    </div>
  );
}
