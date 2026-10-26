import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/lib/images';

const SPECS = [
  { label: 'Tensile', value: '600–1100', unit: 'N/mm²' },
  { label: 'Width', value: '12–32', unit: 'mm' },
  { label: 'Core', value: '406 / 280', unit: 'mm' },
  { label: 'Material', value: 'PET / PP / Steel', unit: '' },
];

const STRAP_TYPES = [
  { name: 'PET Strap', desc: 'High tensile, non-rusting', color: 'text-chartreuse' },
  { name: 'PP Strap', desc: 'Flexible, economical', color: 'text-coral' },
  { name: 'Steel Strap', desc: 'Maximum load security', color: 'text-silver-100' },
];

export default function StrapShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const xMove = useTransform(scrollYProgress, [0, 1], ['-5%', '-60%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section id="straps" ref={sectionRef} className="relative bg-plum-500 grain overflow-hidden py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.3em] text-chartreuse uppercase">Strap Showcase</span>
            <h2 className="font-display font-900 text-ivory text-5xl md:text-7xl mt-3 tracking-tighter leading-[0.9]">
              Coils that <span className="text-chartreuse">don't break</span>
            </h2>
          </div>
          <p className="text-silver-300 max-w-sm leading-relaxed">
            Precision-wound strapping engineered for continuous high-speed application. Macro material, micro tolerances.
          </p>
        </div>
      </div>

      {/* Horizontal scrolling oversized imagery */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div style={{ x: xMove }} className="flex gap-4 h-full pl-6 md:pl-10 will-change-transform">
          {[
            { src: IMAGES.steelCoilStack, label: 'Wound to spec' },
            { src: IMAGES.wireCoilMacro, label: 'Macro weave' },
            { src: IMAGES.steelCoilInspect, label: 'Quality checked' },
            { src: IMAGES.steelWireBW, label: 'Material integrity' },
            { src: IMAGES.steelRings, label: 'Stack ready' },
            { src: IMAGES.twistedCable, label: 'Tensile core' },
          ].map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[80vw] md:w-[42vw] lg:w-[34vw] h-full overflow-hidden rounded-sm group"
            >
              <motion.div style={{ scale }} className="absolute inset-0">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] tracking-[0.25em] text-silver-300 uppercase">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-display font-700 text-ivory text-2xl mt-1">{img.label}</p>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-silver-400/30 flex items-center justify-center backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-chartreuse animate-pulse" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Strap type chips + specs */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mt-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-3">
          {STRAP_TYPES.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-chartreuse/40 transition-colors cursor-default"
            >
              <div>
                <h4 className={`font-display font-700 text-2xl md:text-3xl ${t.color}`}>{t.name}</h4>
                <p className="text-silver-400 text-sm mt-1">{t.desc}</p>
              </div>
              <span className="text-5xl md:text-6xl font-display font-900 text-white/5 group-hover:text-chartreuse/20 transition-colors">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {SPECS.map((s) => (
            <div key={s.label} className="bg-plum p-6 md:p-8">
              <span className="text-[10px] tracking-[0.25em] text-silver-400 uppercase">{s.label}</span>
              <div className="mt-4 font-display font-800 text-ivory text-3xl md:text-4xl leading-none">
                {s.value}
              </div>
              <span className="text-silver-400 text-xs mt-2 block">{s.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
