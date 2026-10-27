
import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const HeroScene = lazy(() => import('@/components/HeroScene'));

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate min-h-screen w-full overflow-hidden bg-plum"
    >
      {/* Full-section video background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-plum" />}>
          <HeroScene />
        </Suspense>

        {/* Simple overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-plum/65 via-plum/45 to-plum/90" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 pb-8 pt-28 sm:px-10 md:px-12 md:pb-10 lg:px-16">
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
        <div className="min-h-20 flex-1 md:min-h-28" />

        {/* Heading and description */}
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-6">
          <div className="min-w-0 md:col-span-8">
            <h1 className="font-display font-black leading-[0.88] tracking-tight text-ivory">
              <motion.span
                className="block text-[clamp(2rem,7vw,6rem)]"
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

          {/* Description and buttons */}
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
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-5 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-chartreuse hover:text-chartreuse"
              >
                Browse Categories
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom navigation */}
        <motion.div
          className="pointer-events-auto mt-12 flex flex-col gap-6 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-14"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="#worlds" className="group flex w-fit items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black transition-all duration-300 group-hover:border-chartreuse group-hover:bg-chartreuse">
              <ArrowDown className="h-4 w-4 text-chartreuse transition-transform duration-300 group-hover:translate-y-1 group-hover:text-plum" />
            </span>

            <span className="flex flex-col gap-1">
              <span className="font-body text-[15px] font-bold uppercase tracking-[0.3em] text-red-400">
                Discover more
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors group-hover:text-chartreuse">
                Explore our world
              </span>
            </span>
          </a>

          {/* Technical details */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-chartreuse shadow-[0_0_10px_rgba(214,255,69,0.8)]" />
              <span className="font-body text-xs font-bold tracking-[0.12em] text-white">
                PET / PP / STEEL
              </span>
            </div>

            <span className="hidden h-5 w-px bg-white/30 sm:block" />

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
