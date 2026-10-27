
import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const HeroScene = lazy(() => import('@/components/HeroScene'));

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate min-h-[760px] w-full overflow-hidden bg-plum md:min-h-[800px] lg:min-h-[850px]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum via-plum/90 to-ivory-100" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-chartreuse/8 blur-[120px]" />

        <div className="absolute -left-32 -top-24 h-80 w-80 rounded-full bg-chartreuse/10 blur-[100px]" />
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-coral/15 blur-[110px]" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-chartreuse/5 blur-[100px]" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'linear-gradient(to bottom, black, transparent 90%)',
          }}
        />

        {/* Corner decorations */}
        <div className="absolute left-6 top-24 h-12 w-12 border-l border-t border-chartreuse/50 sm:left-10 sm:top-28" />
        <div className="absolute right-6 top-24 h-12 w-12 border-r border-t border-white/20 sm:right-10 sm:top-28" />
        <div className="absolute bottom-8 left-6 h-12 w-12 border-b border-l border-white/20 sm:left-10" />
        <div className="absolute bottom-8 right-6 h-12 w-12 border-b border-r border-chartreuse/50 sm:right-10" />
      </div>

      {/* 3D video frame */}
      {/* Video frame */}
<div
  className="pointer-events-none absolute inset-x-5 top-20 bottom-36 z-[1] sm:inset-x-8 sm:top-24 sm:bottom-40 lg:inset-x-12 lg:top-28 lg:bottom-40"
  style={{ perspective: '1400px' }}
>
  <div
    className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:rounded-[36px]"
    style={{
      transform: 'rotateX(1.5deg) rotateY(-1deg)',
      transformStyle: 'preserve-3d',
    }}
  >
    <Suspense fallback={null}>
      <HeroScene />
    </Suspense>

    {/* Subtle 3D shading */}
    <div className="absolute inset-0 bg-gradient-to-br from-plum/15 via-transparent to-plum/35" />
    <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-30px_50px_rgba(0,0,0,0.2)]" />
  </div>

  {/* Corner accents */}
  <span className="absolute -left-1 -top-1 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-chartreuse" />
  <span className="absolute -right-1 -top-1 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-chartreuse" />
  <span className="absolute -bottom-1 -left-1 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-chartreuse" />
  <span className="absolute -bottom-1 -right-1 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-chartreuse" />
</div>

      {/* Content layout */}
      <div className="relative z-20 mx-auto flex min-h-[760px] w-full max-w-[1600px] flex-col px-6 pb-8 pt-32 sm:px-10 md:min-h-[800px] md:px-12 md:pb-10 lg:min-h-[850px] lg:px-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-chartreuse" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-chartreuse">
            Engineered to Secure
          </span>
        </motion.div>

        {/* Flexible spacing */}
        <div className="min-h-24 flex-1 md:min-h-32" />

        {/* Main heading and description */}
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-6">
          <div className="min-w-0 md:col-span-8">
            <h1 className="font-display font-black leading-[0.88] tracking-tight text-ivory">
              <motion.span
                className="block text-[clamp(3.5rem,9vw,8rem)]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                STRAP.
              </motion.span>

              <motion.span
                className="block text-[clamp(3.5rem,9vw,8rem)] text-chartreuse"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
              >
                SEAL.
              </motion.span>

              <motion.span
                className="block text-[clamp(3.5rem,9vw,8rem)] text-silver-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
              >
                SECURE.
              </motion.span>
            </h1>
          </div>

          {/* Description and actions */}
          <motion.div
            className="pointer-events-auto min-w-0 md:col-span-4 md:pb-2 lg:pb-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.24em] text-chartreuse">
              Premium Packaging
            </p>

            <h2 className="font-display text-2xl font-bold leading-tight text-ivory md:text-3xl">
              Solutions
              <span className="text-chartreuse"> That Deliver.</span>
            </h2>

            <p className="mt-4 max-w-md font-body text-sm leading-7 text-silver-300 md:text-base">
              Discover high-quality packaging materials for all your business
              needs. Fast delivery, competitive prices, and exceptional quality.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-chartreuse px-5 py-3 text-sm font-bold text-plum transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(214,255,69,0.2)]"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-plum/20 px-5 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-chartreuse hover:text-chartreuse"
              >
                Browse Categories
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom navigation strip */}
        <motion.div
          className="pointer-events-auto mt-12 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-14"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {/* Scroll cue */}
          <a href="#worlds" className="group flex w-fit items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-black/25 text-black transition-all duration-300 group-hover:border-chartreuse group-hover:bg-chartreuse group-hover:text-plum">
              <ArrowDown className="h-4 w-4 text-chartreuse transition-transform duration-300 group-hover:translate-y-1 group-hover:text-plum" />
            </span>

            <span className="flex flex-col gap-1">
              <span className="font-body text-[15px] font-bold uppercase tracking-[0.44em] text-red-400">
                Discover more
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors group-hover:text-chartreuse">
                Explore our world
              </span>
            </span>
          </a>

          {/* Technical details */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl border border-white/20 bg-[#17121F]/85 px-5 py-4 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-chartreuse shadow-[0_0_10px_rgba(214,255,69,0.8)]" />
              <span className="font-body text-xs font-bold tracking-[0.12em] text-white">
                PET / PP / STEEL
              </span>
            </div>

            <span className="hidden h-5 w-px bg-white/25 sm:block" />

            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-chartreuse/70 bg-chartreuse/10 text-[10px] font-black text-chartreuse">
                Q
              </span>
              <span className="font-body text-xs font-bold tracking-[0.12em] text-white">
                ISO 9001 PROCESS
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
