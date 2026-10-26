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
      <div className="relative z-20 min-h-screen flex flex-col justify-between max-w-[1600px] mx-auto px-6 md:px-10 pt-32 pb-12 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mt-4"
        >
          <span className="w-12 h-px bg-chartreuse" />
          <span className="text-xs tracking-[0.3em] text-chartreuse uppercase font-medium">Engineered to Secure</span>
        </motion.div>

        <div className="flex-1" />

        <div className="grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <h1 className="font-display font-900 text-ivory leading-[0.85] tracking-tightest text-balance">
              <motion.span
  className="block text-[13vw] md:text-[8rem] lg:text-[10rem]"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.3 }}
>
  STRAP.
</motion.span>
              <motion.span
  className="block text-[13vw] md:text-[8rem] lg:text-[10rem] text-chartreuse"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.45 }}
>
  SEAL.
</motion.span>
              <motion.span
  className="block text-[13vw] md:text-[8rem] lg:text-[10rem] text-silver-300"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="text-silver-300 text-base md:text-lg max-w-xs leading-relaxed">
              Industrial packaging straps and seals engineered for the world's toughest supply chains.
            </p>
            <p className="mt-4 text-xs tracking-[0.2em] text-silver-400 uppercase">
              Vikash Pack — Since 1998
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-between mt-10 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a href="#worlds" className="group flex items-center gap-3 text-silver-300 hover:text-chartreuse transition-colors">
            <div className="w-10 h-10 rounded-full border border-silver-500 group-hover:border-chartreuse group-hover:bg-chartreuse/10 flex items-center justify-center transition-all">
              <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
            </div>
            <span className="text-xs tracking-[0.2em] uppercase">Scroll to explore</span>
          </a>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.15em] uppercase text-silver-400">
            <span>PET / PP / Steel</span>
            <span className="w-px h-3 bg-silver-500" />
            <span>ISO 9001 Process</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
