
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import { IMAGES } from '@/lib/images';

const TILES = [
  { src: IMAGES.portContainers, title: 'Export Ports', tag: 'LOGISTICS', size: 'large', number: '01' },
  { src: IMAGES.forkliftWarehouse, title: 'Warehousing', tag: 'STORAGE', size: 'small', number: '02' },
  { src: IMAGES.factoryMachinery, title: 'Manufacturing', tag: 'PRODUCTION', size: 'small', number: '03' },
  { src: IMAGES.containersStacked, title: 'Shipping Lines', tag: 'TRANSIT', size: 'large', number: '04' },
  { src: IMAGES.forkliftPallets, title: 'Palletizing', tag: 'LOADING', size: 'small', number: '05' },
  { src: IMAGES.factoryConveyor, title: 'Conveyor Lines', tag: 'AUTOMATION', size: 'small', number: '06' },
];

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative isolate overflow-hidden bg-[#F5F7F2] py-16 md:py-24"
      style={{ perspective: '1400px' }}
    >
      {/* Decorative background */}
       <div className="absolute inset-0 bg-gradient-to-b from-plum via-plum/90 to-ivory-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-chartreuse/8 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#123D35]/10 bg-white px-3 py-2 shadow-sm">
              <Layers3 size={14} className="text-[#18A999]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#123D35]">
                Industries we serve
              </span>
            </div>

            <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-[#123D35] md:text-6xl">
              Built for the places
              <br />
              <span className="text-[#18A999]">that move the world.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#607167] md:pb-1 md:text-base">
            From factory floors to global shipping ports, our strapping and
            seals help keep industrial cargo secure at every stage.
          </p>
        </div>

        {/* Compact 3D card gallery */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3 md:gap-x-6 md:gap-y-10">
          {TILES.map((tile, i) => (
            <motion.article
              key={tile.number}
              initial={{ opacity: 0, y: 35, rotateX: 7 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                rotateY: i % 2 === 0 ? -3 : 3,
                rotateX: 2,
                scale: 1.015,
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
              className={`group relative ${i % 3 === 1 ? 'md:mt-7' : ''}`}
            >
              {/* Offset backing layer creates the 3D edge */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#123D35]/10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white bg-white p-1.5 shadow-[0_10px_30px_rgba(18,61,53,0.10)] transition-shadow duration-500 group-hover:shadow-[0_22px_45px_rgba(18,61,53,0.20)]">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src={tile.src}
                    alt={tile.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09251F]/85 via-[#09251F]/10 to-transparent" />

                  {/* Floating category label */}
                  <div className="absolute left-3 top-3 rounded-full border border-white/30 bg-[#123D35]/65 px-2.5 py-1.5 backdrop-blur-md md:left-4 md:top-4">
                    <span className="text-[8px] font-bold tracking-[0.16em] text-white md:text-[9px]">
                      {tile.tag}
                    </span>
                  </div>

                  {/* Number badge */}
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md md:right-4 md:top-4">
                    <span className="font-display text-xs font-bold text-white">
                      {tile.number}
                    </span>
                  </div>

                  {/* Bottom title */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                    <div className="mb-2 h-1 w-7 rounded-full bg-[#D6FF45] transition-all duration-300 group-hover:w-14" />

                    <div className="flex items-end justify-between gap-1">
                      <h3 className="font-display text-base font-bold leading-tight text-white md:text-xl">
                        {tile.title}
                      </h3>

                      <span className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D6FF45] text-[#123D35] transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>

                  {/* Moving highlight */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-80" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Small footer accent */}
        <div className="mt-10 flex items-center justify-center gap-3 md:mt-14">
          <span className="h-px w-12 bg-[#123D35]/20" />
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#607167]">
            Across every stage of industry
          </span>
          <span className="h-px w-12 bg-[#123D35]/20" />
        </div>
      </div>
    </section>
  );
}
