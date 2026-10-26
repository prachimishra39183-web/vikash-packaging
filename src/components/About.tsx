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
 
{/* Premium colourful timeline */}
<section className="relative overflow-hidden border-t border-plum/10 py-16 md:py-24">

  {/* Ambient colour */}
  <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />
  <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-chartreuse/15 blur-3xl" />

  {/* Heading */}
  <div className="relative mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
    <div>
      <div className="mb-5 flex items-center gap-3">
        <span className="h-1 w-10 rounded-full bg-coral" />
        <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-coral">
          Our journey · Since day one
        </span>
      </div>

      <h3 className="font-display text-5xl font-black leading-[0.9] tracking-tight text-plum sm:text-6xl md:text-7xl">
        BUILT THROUGH
        <br />
        <span className="text-coral">EXPERIENCE.</span>
      </h3>

      <p className="mt-5 max-w-md font-body text-sm leading-7 text-plum/75 md:text-base">
        From our first steps to stronger packaging solutions, every chapter
        has shaped who we are today.
      </p>
    </div>

    <div className="flex w-fit items-center gap-3 rounded-2xl border border-plum/10 bg-white/80 px-5 py-4 shadow-lg shadow-plum/5 backdrop-blur-sm">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-chartreuse text-xl font-black text-plum">
        ↗
      </span>
      <div>
        <p className="font-display text-xl font-bold text-plum">ALWAYS MOVING</p>
        <p className="font-body text-xs text-plum/60">One milestone at a time</p>
      </div>
    </div>
  </div>

  {/* Timeline cards */}
  <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
    {TIMELINE.map((t, i) => {
      const themes = [
        {
          bg: 'bg-plum',
          year: 'text-chartreuse',
          badge: 'bg-chartreuse text-plum',
          line: 'bg-chartreuse',
          title: 'text-ivory',
          body: 'text-ivory/75',
          border: 'border-chartreuse/30',
          glow: 'group-hover:shadow-chartreuse/10',
        },
        {
          bg: 'bg-[#FFF0E9]',
          year: 'text-[#D94D2B]',
          badge: 'bg-[#FF7043] text-white',
          line: 'bg-[#FF7043]',
          title: 'text-plum',
          body: 'text-plum/75',
          border: 'border-[#FF7043]/30',
          glow: 'group-hover:shadow-coral/15',
        },
        {
          bg: 'bg-[#EAF5D5]',
          year: 'text-[#405C16]',
          badge: 'bg-[#D6FF45] text-plum',
          line: 'bg-[#8BAC25]',
          title: 'text-plum',
          body: 'text-plum/75',
          border: 'border-[#8BAC25]/30',
          glow: 'group-hover:shadow-chartreuse/20',
        },
        {
          bg: 'bg-[#EDE6FA]',
          year: 'text-[#6941A5]',
          badge: 'bg-[#A78BFA] text-[#241A32]',
          line: 'bg-[#8B5CF6]',
          title: 'text-[#241A32]',
          body: 'text-[#241A32]/75',
          border: 'border-[#A78BFA]/40',
          glow: 'group-hover:shadow-violet-300/30',
        },
        {
          bg: 'bg-[#DDF8F0]',
          year: 'text-[#08785B]',
          badge: 'bg-[#A6FFE0] text-[#064E3B]',
          line: 'bg-[#10B981]',
          title: 'text-[#064E3B]',
          body: 'text-[#064E3B]/75',
          border: 'border-[#10B981]/30',
          glow: 'group-hover:shadow-emerald-300/30',
        },
      ];

      const theme = themes[i % themes.length];

      return (
        <motion.article
          key={t.year}
          initial={{ opacity: 0, y: 30, rotateX: 5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: i * 0.09 }}
          className={`group relative flex min-h-[290px] flex-col overflow-hidden rounded-[1.5rem] border ${theme.border} ${theme.bg} p-6 shadow-md shadow-plum/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${theme.glow} md:p-5 xl:p-5`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Large decorative background number */}
          <span className="pointer-events-none absolute -right-2 -top-5 font-display text-[8rem] font-black leading-none opacity-[0.06] transition-transform duration-500 group-hover:scale-110">
            {String(i + 1).padStart(2, '0')}
          </span>

          {/* Card top */}
          <div className="relative z-10 flex items-start justify-between gap-3">
            <span className={`rounded-full px-3 py-1.5 font-body text-[9px] font-extrabold uppercase tracking-[0.15em] ${theme.badge}`}>
              Chapter {String(i + 1).padStart(2, '0')}
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current/15 text-lg transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </div>

          {/* Year */}
          <div className="relative z-10 mt-9">
            <p className={`font-display text-5xl font-black leading-none tracking-tight ${theme.year} sm:text-6xl`}>
              {t.year}
            </p>
            <div className={`mt-4 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20 ${theme.line}`} />
          </div>

          {/* Content */}
          <div className="relative z-10 mt-6">
            <h4 className={`font-display text-2xl font-bold leading-tight tracking-tight ${theme.title}`}>
              {t.event}
            </h4>

            <p className={`mt-3 font-body text-sm leading-6 ${theme.body}`}>
              {t.desc}
            </p>
          </div>

          {/* Bottom marker */}
          <div className="relative z-10 mt-auto flex items-center gap-2 pt-6">
            <span className={`h-2 w-2 rounded-full ${theme.line}`} />
            <span className={`font-body text-[9px] font-bold uppercase tracking-[0.18em] ${theme.body}`}>
              Vikash Pack · Milestone
            </span>
          </div>

          {/* Gloss highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/70" />
        </motion.article>
      );
    })}
  </div>

  {/* Footer signature */}
  <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-plum/15 pt-6">
    <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-plum/65">
      Experience builds trust. Quality builds the future.
    </p>

    <div className="flex items-center gap-2">
      <span className="h-2 w-2 animate-pulse rounded-full bg-chartreuse ring-4 ring-chartreuse/25" />
      <span className="font-body text-[10px] font-bold uppercase tracking-widest text-plum">
        The journey continues
      </span>
    </div>
  </div>
</section>

      </div>
    </section>
  );
}
