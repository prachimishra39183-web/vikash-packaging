
import { motion } from 'framer-motion';
import { ArrowUpRight, MoveHorizontal } from 'lucide-react';
import { useReveal } from '@/lib/hooks';
import { IMAGES, PRODUCTS } from '@/lib/images';

export default function ProductWorlds() {
  const { ref: leftRef, visible: leftVis } =
    useReveal<HTMLDivElement>();
  const { ref: rightRef, visible: rightVis } =
    useReveal<HTMLDivElement>();

  return (
    <section
      id="worlds"
      className="relative overflow-hidden bg-plum px-5 py-14 grain sm:px-8 md:px-10 md:py-20"
    >
     
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end md:mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-semibold uppercase tracking-[0.25em] text-chartreuse sm:text-xs"
            >
              Two Worlds / One Standard
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-3 font-display text-4xl font-black tracking-tight text-ivory sm:text-5xl md:text-6xl"
            >
              Product <span className="text-chartreuse">Worlds.</span>
            </motion.h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-silver-300">
            From strong industrial strapping to dependable sealing
            accessories, discover solutions for securing your shipments.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Straps */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative isolate min-h-[370px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[400px] md:min-h-[430px]"
          >
            <img
              src={IMAGES.steelCoils}
              alt="Industrial steel strapping coils"
              className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-plum/95 via-plum/75 to-plum/20" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-plum/80 via-transparent to-transparent" />

            {/* Decorative line */}
            <div className="absolute right-0 top-1/3 h-px w-1/2 overflow-hidden bg-white/10">
              <motion.div
                className="h-full w-1/3 bg-chartreuse"
                animate={leftVis ? { x: ['-100%', '300%'] } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            <div className="flex min-h-[370px] flex-col justify-between p-6 sm:min-h-[400px] sm:p-8 md:min-h-[430px] md:p-9">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-silver-300">
                  01 / Straps
                </span>
                <MoveHorizontal className="h-5 w-5 text-chartreuse" />
              </div>

              <motion.div
                animate={
                  leftVis
                    ? { x: 0, opacity: 1 }
                    : { x: -15, opacity: 0.6 }
                }
                transition={{ duration: 0.6 }}
                className="max-w-lg"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-chartreuse">
                  Strength in every wrap
                </p>

                <h3 className="font-display text-4xl font-black leading-[0.95] tracking-tight text-ivory sm:text-5xl md:text-6xl">
                  Packaging
                  <br />
                  <span className="text-chartreuse">Straps.</span>
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-silver-300">
                  PET, PP, and steel strapping coils designed to support
                  load stability and reliable industrial packaging.
                </p>

                <a
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-chartreuse px-5 py-3 text-xs font-bold text-plum transition-all hover:gap-4"
                >
                  Explore Straps
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['PET', 'PP', 'STEEL'].map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-[9px] font-semibold tracking-[0.16em] text-silver-300"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Seals */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="group relative isolate min-h-[370px] overflow-hidden rounded-2xl border border-plum/10 bg-[#F0EDE5] sm:min-h-[400px] md:min-h-[430px]"
          >
            {/* Light showroom background */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#FAF8F0] via-[#EEE9DF] to-[#DCD5C9]" />

            <div
              className="absolute inset-0 -z-10 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(#17121F 1px, transparent 1px), linear-gradient(90deg, #17121F 1px, transparent 1px)',
                backgroundSize: '42px 42px',
              }}
            />

            {/* Product images */}
            <div className="pointer-events-none absolute right-3 top-16 flex items-center gap-1 opacity-60 transition-all duration-500 group-hover:opacity-100 sm:right-5 sm:top-20 md:right-5 md:top-1/2 md:-translate-y-1/2">
              <img
                src="/gp.png"
                alt="GP-Clips"
                className="w-20 rotate-[-8deg] object-contain transition-transform duration-500 group-hover:rotate-0 sm:w-24 md:w-28 lg:w-32"
              />
              <img
                src="/tape.png"
                alt="Silver-Clip"
                className="w-20 rotate-[8deg] object-contain transition-transform duration-500 group-hover:rotate-0 sm:w-24 md:w-28 lg:w-32"
              />
            </div>

            <div className="flex min-h-[370px] flex-col justify-between p-6 sm:min-h-[400px] sm:p-8 md:min-h-[430px] md:p-9">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-plum/60">
                  02 / Seals
                </span>
                <span className="h-5 w-5 rounded-full border-2 border-coral/70" />
              </div>

              <motion.div
                animate={
                  rightVis
                    ? { x: 0, opacity: 1 }
                    : { x: 15, opacity: 0.6 }
                }
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-[290px] sm:max-w-sm"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
                  The final secure fit
                </p>

                <h3 className="font-display text-3xl font-black leading-[0.95] tracking-tight text-plum sm:text-5xl md:text-5xl">
                  Packaging
                  <br />
                  <span className="text-coral">Seals.</span>
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-plum/75">
                  GP-Clips, Silver-Clips 
                  
               </p>

                <a
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-xs font-bold text-ivory transition-all hover:gap-4 hover:bg-coral"
                >
                  Explore Seals
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>

              <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                {['GP-CLIPS', 'SILVER-CLIPS', 'GI SEALS'].map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-plum/15 bg-white/40 px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] text-plum/70"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-silver-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Industrial packaging. Thoughtfully selected.</p>
      
        </div>
      </div>
    </section>
  );
}
