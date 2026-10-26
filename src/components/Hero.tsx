import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroScene = lazy(() => import('@/components/HeroScene'));

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-plum grain">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-chartreuse/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-coral/10 rounded-full blur-[100px]" />
      </div>

      {/* 3D scene */}
      <div className="absolute inset-0 z-10">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Text overlay */}
     
{/* Text overlay */}
<div className="relative z-20 min-h-screen flex flex-col justify-between max-w-[1600px] mx-auto px-6 md:px-10 pt-32 pb-12 pointer-events-none">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex items-center gap-3 mt-4"
  >
    <span className="w-12 h-px bg-chartreuse" />
    <span className="text-xs tracking-[0.3em] text-chartreuse uppercase font-medium">
      Engineered to Secure
    </span>
  </motion.div>

  <div className="flex-1" />

  <div className="grid md:grid-cols-12 gap-6 items-end">
    <div className="md:col-span-8">
      <h1 className="font-display font-black text-ivory leading-[0.9] tracking-tightest text-balance">
        <motion.span
          className="block text-[10vw] md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          STRAP.
        </motion.span>

        <motion.span
          className="block text-[10vw] md:text-7xl lg:text-8xl text-chartreuse"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          SEAL.
        </motion.span>

        <motion.span
          className="block text-[10vw] md:text-7xl lg:text-8xl text-silver-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          SECURE.
        </motion.span>
      </h1>
    </div>
 
        
          
<motion.div
  className="md:col-span-4 md:pb-4"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.9 }}
>
  {/* Description */}
  <div className="relative max-w-sm border-l-2 border-chartreuse/70 pl-5">
    <span className="mb-3 block font-body text-[10px] font-bold uppercase tracking-[0.25em] text-chartreuse">
      Packaging. Perfected.
    </span>

    <p className="font-body text-sm leading-7 text-ivory/75 md:text-base">
      Industrial packaging straps and security seals, designed to keep
      products protected and supply chains moving.
    </p>
  </div>

  {/* Company signature */}
  <div className="mt-6 flex flex-wrap items-center gap-3 pl-5">
    <span className="font-display text-sm font-semibold tracking-wide text-ivory">
      VIKASH PACK
    </span>

    <span className="h-1 w-1 rounded-full bg-coral" />

    <span className="font-body text-[10px] uppercase tracking-[0.18em] text-silver-400">
      Since 1998
    </span>
  </div>
</motion.div>
</div>

{/* Bottom navigation strip */}
<motion.div
  className="pointer-events-auto mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.1 }}
>
  {/* Scroll cue */}
  <a
    href="#worlds"
    className="group flex w-fit items-center gap-4"
  >
    <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/20 transition-all duration-300 group-hover:border-chartreuse group-hover:bg-chartreuse group-hover:text-plum">
      <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
    </span>

    <span className="flex flex-col gap-1">
      <span className="font-body text-[9px] font-semibold uppercase tracking-[0.24em] text-silver-400">
        Discover more
      </span>
      <span className="font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors group-hover:text-chartreuse">
        Explore our world
      </span>
    </span>
  </a>

  {/* Technical details */}
  <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-chartreuse" />
      <span className="font-body text-[10px] font-medium tracking-[0.12em] text-silver-300">
        PET / PP / STEEL
      </span>
    </div>

    <span className="hidden h-4 w-px bg-white/15 sm:block" />

    <div className="flex items-center gap-2">
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-chartreuse/40 text-[9px] font-bold text-chartreuse">
        Q
      </span>
      <span className="font-body text-[10px] font-medium tracking-[0.12em] text-silver-300">
        ISO 9001 PROCESS
      </span>
    </div>
  </div>
</motion.div>
</div>
</section>

  );
}
