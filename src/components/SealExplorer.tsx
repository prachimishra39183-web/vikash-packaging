import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { PRODUCTS } from '@/lib/images';

interface Seal {
  id: string;
  name: string;
  full: string;
  desc: string;
  finish: string;
  application: string;
  image?: string;
}

const SEALS: Seal[] = [
  {
    id: 'gp-clips',
    name: 'GP-Clips',
    full: 'Parcel Packing Clips — Galvanized',
    desc: 'Galvanized parcel packing clips for PP and PET strapping. Packed 25 kg, priced per kilogram.',
    finish: 'Galvanized steel',
    application: 'PP / PET strapping — parcel & pallet',
    image:'/gp.png',
  },
  {
    id: 'silver-clip',
    name: 'Silver-Clip',
    full: 'Parcel Packing Clips — Silver Finish',
    desc: 'Silver-finish parcel packing clips for secure strapping closure. Packed 25 pieces, priced per piece.',
    finish: 'Silver-coated steel',
    application: 'PP / PET strapping — parcel closure',
    image: 'tape.png',
  },
  {
    id: 'drum',
    name: 'Drum Seal',
    full: 'Drum Closure Seal',
    desc: 'Tamper-evident drum closure seal for steel drum locking rings. Single-use security for hazardous and chemical transport.',
    finish: 'Steel, bright',
    application: 'Steel drum locking rings',
  },
  {
    id: 'resin',
    name: 'Resin Seal',
    full: 'Resin Compound Seal',
    desc: 'Friction-weld resin buckle seal for PET strapping. No metal, no rust — for sensitive and electronics cargo.',
    finish: 'Polyester resin',
    application: 'PET strapping — export, electronics',
  },
  {
    id: 'gi',
    name: 'GI Seal',
    full: 'Galvanized Iron Seal',
    desc: 'Heavy-gauge galvanized iron seal for the most demanding steel strapping loads — shipping, steel, and timber.',
    finish: 'Hot-dip galvanized',
    application: 'Steel strapping — steel, timber',
  },
];

export default function SealExplorer() {
  const [active, setActive] = useState(0);
  const seal = SEALS[active];

  const go = (dir: number) => setActive((p) => (p + dir + SEALS.length) % SEALS.length);

  return (
    <section id="seals" className="relative bg-ivory py-20 md:py-32 overflow-hidden grain">
       
      {/* showroom floor gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-50 via-ivory to-ivory-200" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#17121F 1px, transparent 1px), linear-gradient(90deg, #17121F 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs tracking-[0.3em] text-coral uppercase">Seal Explorer</span>
            <h2 className="font-display font-900 text-plum text-5xl md:text-7xl mt-3 tracking-tighter leading-[0.9]">
              The final <span className="text-coral">lock</span>
            </h2>
          </div>
          <p className="text-plum/70 max-w-sm leading-relaxed">
            Real Vikash Pack products, displayed in an industrial showroom. Every closure engineered for a specific load, a specific journey.
          </p>
        </div>

        {/* Showroom display */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual pedestal */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-gradient-to-br from-silver-100 via-ivory to-silver-200 rounded-sm overflow-hidden">
              {/* spotlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={seal.id}
                  initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  {seal.image ? (
                    <img
                      src={seal.image}
                      alt={seal.name}
                      className="max-h-full max-w-full object-contain drop-shadow-[0_30px_60px_rgba(23,18,31,0.25)]"
                    />
                  ) : (
                    <div className="relative">
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-silver-300 flex items-center justify-center bg-gradient-to-br from-silver-100 to-silver-300 shadow-[0_40px_80px_-20px_rgba(23,18,31,0.3)]">
                        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border border-plum/10 flex items-center justify-center bg-gradient-to-br from-white to-silver-200">
                          <span className="font-display font-900 text-plum text-5xl md:text-7xl tracking-tighter">
                            {active + 1}
                          </span>
                        </div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-plum/20 blur-xl rounded-full" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* nav arrows */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
                <div className="flex gap-2">
                  {SEALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1.5 transition-all duration-300 ${i === active ? 'w-10 bg-coral' : 'w-4 bg-plum/20 hover:bg-plum/40'}`}
                      aria-label={`Seal ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => go(-1)} className="w-10 h-10 rounded-full border border-plum/20 hover:bg-plum hover:text-ivory text-plum flex items-center justify-center transition-colors" aria-label="Previous seal">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={() => go(1)} className="w-10 h-10 rounded-full border border-plum/20 hover:bg-plum hover:text-ivory text-plum flex items-center justify-center transition-colors" aria-label="Next seal">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Seal detail panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={seal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-[10px] tracking-[0.3em] text-plum/50 uppercase">Variant {String(active + 1).padStart(2, '0')} / {String(SEALS.length).padStart(2, '0')}</span>
                <h3 className="font-display font-800 text-plum text-4xl md:text-5xl mt-3 tracking-tighter leading-none">
                  {seal.name}
                </h3>
                <p className="text-plum/50 text-sm mt-2 font-medium">{seal.full}</p>
                <p className="text-plum/70 leading-relaxed mt-6">{seal.desc}</p>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-plum/10">
                    <span className="text-xs tracking-[0.2em] text-plum/50 uppercase">Finish</span>
                    <span className="text-plum font-medium">{seal.finish}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-plum/10">
                    <span className="text-xs tracking-[0.2em] text-plum/50 uppercase">Application</span>
                    <span className="text-plum font-medium text-right">{seal.application}</span>
                  </div>
                  {seal.image && (
                    <div className="flex items-center gap-2 py-3 text-coral">
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-medium">Real Vikash Pack product</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex gap-2 flex-wrap">
              {SEALS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`px-4 py-2 text-xs tracking-wide rounded-full border transition-all ${
                    i === active
                      ? 'bg-plum text-ivory border-plum'
                      : 'bg-transparent text-plum/60 border-plum/15 hover:border-plum/40'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
