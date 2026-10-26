import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Gauge, Recycle, Factory, Truck } from 'lucide-react';

const PILLARS = [
  { icon: Gauge, title: 'Tensile testing', desc: 'Every strap batch tested for break load and elongation before dispatch.' },
  { icon: ShieldCheck, title: 'ISO 9001 process', desc: 'Documented quality management across the full production cycle.' },
  { icon: Layers, title: 'Consistent dimensions', desc: 'Tight width and thickness tolerances for reliable tool feeding.' },
  { icon: Recycle, title: 'Recyclable materials', desc: 'PET and PP straps are recyclable after end-of-life.' },
];

const FLOW = [
  { icon: Factory, label: 'Production' },
  { icon: Gauge, label: 'Testing' },
  { icon: ShieldCheck, label: 'QC sign-off' },
  { icon: Truck, label: 'Dispatch' },
];

export default function Quality() {
  return (
    <section id="quality" className="relative bg-ivory-50 py-20 md:py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-ivory-50" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs tracking-[0.3em] text-coral uppercase">Quality & Trust</span>
            <h2 className="font-display font-900 text-plum text-5xl md:text-6xl lg:text-7xl mt-3 tracking-tighter leading-[0.9]">
              Verified by <br /> <span className="text-coral">process.</span>
            </h2>
            <p className="text-plum/70 leading-relaxed mt-6 max-w-md">
              Credentials earned through documented process, not claims. Every coil and every seal passes through the same controlled cycle before it reaches your line.
            </p>

            {/* Production flow */}
            <div className="mt-10">
              <span className="text-[10px] tracking-[0.25em] text-plum/50 uppercase">Production cycle</span>
              <div className="flex items-center gap-3 mt-4 flex-wrap">
                {FLOW.map((f, i) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border border-plum/15 flex items-center justify-center bg-ivory">
                        <f.icon className="w-5 h-5 text-plum" />
                      </div>
                      <span className="text-[10px] tracking-wide text-plum/60 mt-2">{f.label}</span>
                    </div>
                    {i < FLOW.length - 1 && <div className="w-6 h-px bg-plum/15 mt-[-18px] hidden md:block" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-7 md:p-8 bg-white border border-plum/8 rounded-sm hover:border-coral/30 transition-colors overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-coral/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-coral/10 transition-colors" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-md bg-plum flex items-center justify-center group-hover:bg-coral transition-colors duration-300">
                      <p.icon className="w-5 h-5 text-ivory" />
                    </div>
                    <h3 className="font-display font-700 text-plum text-xl mt-5">{p.title}</h3>
                    <p className="text-plum/60 text-sm mt-2 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* spec strip */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-px bg-plum/8 rounded-sm overflow-hidden">
              {[
                { k: 'Width tol.', v: '±0.2 mm' },
                { k: 'Thickness tol.', v: '±0.03 mm' },
                { k: 'Break load', v: 'Up to 1100 N/mm²' },
                { k: 'Core options', v: '406 / 280 mm' },
              ].map((s) => (
                <div key={s.k} className="bg-ivory-50 p-5">
                  <span className="text-[10px] tracking-[0.2em] text-plum/50 uppercase">{s.k}</span>
                  <div className="font-display font-700 text-plum text-lg mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
