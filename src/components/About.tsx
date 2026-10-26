import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';

const TIMELINE = [
  { year: '1998', event: 'Foundation', desc: 'Vikash Pack begins as a strapping supplier to regional steel mills.' },
  { year: '2005', event: 'Steel straps', desc: 'Steel strapping line commissioned for heavy-industrial loads.' },
  { year: '2012', event: 'PET / PP', desc: 'Polyester and polypropylene strap production added for export packaging.' },
  { year: '2018', event: 'Seals range', desc: 'Full seal range launched — silver, white-coated, drum, resin, and GI.' },
  { year: 'Today', event: 'National reach', desc: 'Serving logistics, manufacturing, and shipping across India.' },
];

const NUMBERS = [
  { value: '25+', label: 'Years in packaging' },
  { value: '5', label: 'Seal variants' },
  { value: '3', label: 'Strap materials' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-20 md:py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-ivory-200" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Editorial intro with image */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7">
            <span className="text-xs tracking-[0.3em] text-coral uppercase">About Vikash Pack</span>
            <h2 className="font-display font-900 text-plum text-5xl md:text-7xl lg:text-8xl mt-3 tracking-tighter leading-[0.88]">
              Built to hold <br /> what industry <br /> <span className="text-coral">moves.</span>
            </h2>
            <p className="text-plum/70 text-lg leading-relaxed mt-8 max-w-lg">
              A specialist industrial packaging house, not a general distributor. Vikash Pack engineers the straps and seals that secure cargo from the production line to the export dock.
            </p>

            {/* Bold numbers */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md">
              {NUMBERS.map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="font-display font-900 text-plum text-4xl md:text-5xl tracking-tighter leading-none">
                    {n.value}
                  </div>
                  <div className="text-plum/50 text-xs mt-2 leading-tight">{n.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img src={IMAGES.workerFactory} alt="Industrial worker" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-plum text-ivory px-5 py-3 rounded-sm">
              <span className="text-[10px] tracking-[0.2em] text-chartreuse uppercase">On the floor</span>
              <p className="text-sm mt-1">Quality, every coil</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="border-t border-plum/10 pt-16">
          <h3 className="font-display font-700 text-plum text-3xl md:text-4xl tracking-tighter mb-12">
            The timeline
          </h3>
          <div className="relative">
            {/* line */}
            <div className="absolute left-0 right-0 top-[60px] h-px bg-plum/15" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative"
                >
                  <div className="font-display font-900 text-plum text-3xl md:text-4xl tracking-tighter mb-8">
                    {t.year}
                  </div>
                  <div className="relative">
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-coral' : 'bg-plum'} absolute -top-[58px] left-0 ring-4 ring-ivory`} />
                  </div>
                  <h4 className="font-display font-700 text-plum text-lg mt-2">{t.event}</h4>
                  <p className="text-plum/60 text-sm mt-2 leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
