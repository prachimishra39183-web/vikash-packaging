import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown ,ArrowRight} from 'lucide-react';

const HeroScene = lazy(() => import('@/components/HeroScene'));

export default function Hero() {
  return (
    <section
  id="top"
  className="relative min-h-[400px] w-full overflow-hidden bg-plum grain lg:min-h-[700px]"
>
      {/* Background gradient */}
    
{/* Decorative hero background */}
<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-plum via-plum/90 to-ivory-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-chartreuse/8 rounded-full blur-[120px]" />
  {/* Ambient corner glows */}
  <div className="absolute -left-32 -top-24 h-80 w-80 rounded-full bg-chartreuse/10 blur-[100px]" />
  <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-coral/15 blur-[110px]" />
  <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-chartreuse/5 blur-[100px]" />

  {/* Fine grid texture */}
  <div
    className="absolute inset-0 opacity-[0.08]"
    style={{
      backgroundImage:
        'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
      backgroundSize: '64px 64px',
      maskImage:
        'linear-gradient(to bottom, black, transparent 90%)',
    }}
  />

  {/* Corner decoration — top left */}
  <div className="absolute left-6 top-24 h-12 w-12 border-l border-t border-chartreuse/50 sm:left-10 sm:top-28" />

  {/* Corner decoration — top right */}
  <div className="absolute right-6 top-24 h-12 w-12 border-r border-t border-white/20 sm:right-10 sm:top-28" />

  {/* Corner decoration — bottom left */}
  <div className="absolute bottom-8 left-6 h-12 w-12 border-b border-l border-white/20 sm:left-10" />

  {/* Corner decoration — bottom right */}
  <div className="absolute bottom-8 right-6 h-12 w-12 border-b border-r border-chartreuse/50 sm:right-10" />
</div>

{/* Inset video frame */}
<div className="pointer-events-none absolute inset-x-4 top-24 bottom-24 z-[1] sm:inset-x-8 sm:top-28 sm:bottom-28 lg:inset-x-12 lg:top-32 lg:bottom-32">
  <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/15 shadow-[0_25px_100px_rgba(0,0,0,0.3)] sm:rounded-[36px]">
    <Suspense fallback={null}>
      <HeroScene />
    </Suspense>

    {/* Subtle tint to blend with the page */}
    <div className="absolute inset-0 bg-gradient-to-br from-plum/20 via-transparent to-plum/40" />
  </div>

  {/* Floating lime corner marks */}
  <span className="absolute -left-1 -top-1 z-10 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-chartreuse" />
  <span className="absolute -right-1 -top-1 z-10 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-chartreuse" />
  <span className="absolute -bottom-1 -left-1 z-10 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-chartreuse" />
  <span className="absolute -bottom-1 -right-1 z-10 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-chartreuse" />
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
          className="block text-[10vw] md:text-4xl lg:text-8xl"
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
  className="pointer-events-auto md:col-span-4 md:pb-4"
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
    Discover high-quality packaging materials for all your business needs.
    Fast delivery, competitive prices, and exceptional quality.
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
      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-chartreuse hover:text-chartreuse"
    >
      Browse Categories
    </a>
  </div>
</motion.div>

  {/* Company signature */}
 

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
 
{/* Technical details — visible glass panel */}
<div className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl border border-white/20 bg-[#17121F]/80 px-5 py-4 shadow-xl backdrop-blur-xl">

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
