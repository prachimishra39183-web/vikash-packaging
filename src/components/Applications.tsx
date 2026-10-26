import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';

const TILES = [
  { src: IMAGES.portContainers, title: 'Export Ports', tag: 'Logistics', size: 'lg', offset: 0 },
  { src: IMAGES.forkliftWarehouse, title: 'Warehousing', tag: 'Storage', size: 'sm', offset: 0 },
  { src: IMAGES.factoryMachinery, title: 'Manufacturing', tag: 'Production', size: 'sm', offset: 8 },
  { src: IMAGES.containersStacked, title: 'Shipping Lines', tag: 'Transit', size: 'lg', offset: 0 },
  { src: IMAGES.forkliftPallets, title: 'Palletizing', tag: 'Loading', size: 'sm', offset: -8 },
  { src: IMAGES.factoryConveyor, title: 'Conveyor Lines', tag: 'Automation', size: 'sm', offset: 8 },
];

export default function Applications() {
  return (
    <section id="applications" className="relative bg-plum grain py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs tracking-[0.3em] text-chartreuse uppercase">Applications</span>
            <h2 className="font-display font-900 text-ivory text-5xl md:text-7xl mt-3 tracking-tighter leading-[0.9]">
              Where the load <span className="text-chartreuse">travels</span>
            </h2>
          </div>
          <p className="text-silver-300 max-w-sm leading-relaxed">
            From warehouse floor to export port — the industrial environments where Vikash Pack strapping and seals keep cargo intact.
          </p>
        </div>

        {/* Asymmetric gallery */}
        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {TILES.map((t, i) => {
            const span = t.size === 'lg'
              ? 'col-span-2 md:col-span-7 row-span-2'
              : 'col-span-1 md:col-span-5 row-span-1';
            return (
              <motion.div
                key={i}
                className={`${span} group relative overflow-hidden rounded-sm cursor-pointer`}
                style={{ marginTop: `${t.offset * 3}px` }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <img
                  src={t.src}
                  alt={t.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/20 to-transparent" />

                {/* tag */}
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] text-ivory/80 uppercase bg-plum/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  {t.tag}
                </span>

                {/* title */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <h3 className="font-display font-700 text-ivory text-xl md:text-2xl tracking-tight leading-none">
                    {t.title}
                  </h3>
                  <span className="text-ivory/30 text-sm font-display font-800">
                    0{i + 1}
                  </span>
                </div>

                {/* hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-chartreuse scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
