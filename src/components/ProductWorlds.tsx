import { motion } from 'framer-motion';
import { ArrowUpRight, MoveHorizontal } from 'lucide-react';
import { useReveal } from '@/lib/hooks';
import { IMAGES, PRODUCTS } from '@/lib/images';

export default function ProductWorlds() {
  const { ref: leftRef, visible: leftVis } = useReveal<HTMLDivElement>();
  const { ref: rightRef, visible: rightVis } = useReveal<HTMLDivElement>();

  return (
    <section id="worlds" className="relative bg-plum grain">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-24 pb-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] text-chartreuse uppercase"
        >
          Two Worlds / One Standard
        </motion.span>
        <h2 className="font-display font-800 text-ivory text-5xl md:text-7xl mt-3 tracking-tighter">
          Product Worlds
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Straps world - dark, horizontal motion */}
        <div ref={leftRef} className="relative overflow-hidden group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[3s] group-hover:scale-100"
            style={{ backgroundImage: `url(${IMAGES.steelCoils})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-plum/95 via-plum/60 to-plum/30" />
          {/* horizontal motion line */}
          <div className="absolute top-1/2 left-0 right-0 h-px edge-line overflow-hidden">
            <motion.div
              className="h-full bg-chartreuse w-1/3"
              animate={leftVis ? { x: ['0%', '300%'] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <a href="#straps" className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 min-h-[70vh]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.3em] text-silver-300 uppercase">01 / Straps</span>
              <MoveHorizontal className="w-5 h-5 text-silver-300" />
            </div>

            <motion.div
              animate={leftVis ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display font-900 text-ivory text-6xl md:text-8xl tracking-tightest leading-none">
                Packaging
                <br />
                <span className="text-chartreuse">Straps</span>
              </h3>
              <p className="mt-6 text-silver-300 max-w-sm leading-relaxed">
                PET, PP, and steel strapping coils engineered for tensile strength and load stability across every transit condition.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-chartreuse text-sm font-medium group-hover:gap-4 transition-all">
                Enter Strap Showcase
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          </a>
        </div>

        {/* Seals world - light, showroom */}
        <div ref={rightRef} className="relative overflow-hidden group cursor-pointer bg-ivory">
          <div className="absolute inset-0 grain opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ivory via-ivory/80 to-ivory-200" />

          {/* showroom grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'linear-gradient(#17121F 1px, transparent 1px), linear-gradient(90deg, #17121F 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* real product showcase strip */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex gap-4 z-0">
            <img src={PRODUCTS.gpClips} alt="GP-Clips" className="w-28 lg:w-36 h-auto object-contain opacity-90 rotate-[-6deg] hover:rotate-0 transition-transform duration-500" />
            <img src={PRODUCTS.silverClip} alt="Silver-Clip" className="w-28 lg:w-36 h-auto object-contain opacity-90 rotate-[6deg] hover:rotate-0 transition-transform duration-500 mt-8" />
          </div>

          <a href="#seals" className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 min-h-[70vh]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.3em] text-plum/60 uppercase">02 / Seals</span>
              <div className="w-5 h-5 rounded-full border-2 border-plum/40" />
            </div>

            <motion.div
              animate={rightVis ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display font-900 text-plum text-6xl md:text-8xl tracking-tightest leading-none">
                Packaging
                <br />
                <span className="text-coral">Seals</span>
              </h3>
              <p className="mt-6 text-plum/70 max-w-sm leading-relaxed">
                GP-Clips, Silver-Clips, drum, resin, and GI seals — the final lock that holds the load, displayed in a premium industrial showroom with real Vikash Pack products.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-coral text-sm font-medium group-hover:gap-4 transition-all">
                Enter Seal Explorer
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
