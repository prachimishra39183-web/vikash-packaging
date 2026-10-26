
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { IMAGES } from '@/lib/images';

const TIMELINE = [
  {
    year: '1998',
    event: 'Foundation',
    desc: 'Vikash Pack begins as a strapping supplier to regional steel mills.',
  },
  {
    year: '2005',
    event: 'Steel Straps',
    desc: 'Steel strapping line commissioned for heavy-industrial loads.',
  },
  {
    year: '2012',
    event: 'PET / PP',
    desc: 'Polyester and polypropylene strap production added for export packaging.',
  },
  {
    year: '2018',
    event: 'Seals Range',
    desc: 'Full seal range launched — silver, white-coated, drum, resin, and GI.',
  },
  {
    year: 'Today',
    event: 'National Reach',
    desc: 'Serving logistics, manufacturing, and shipping across India.',
  },
];

const NUMBERS = [
  { value: '25+', label: 'Years in packaging' },
  { value: '5', label: 'Seal variants' },
  { value: '3', label: 'Strap materials' },
];

const THEMES = [
  {
    bg: 'bg-[#123D35]',
    year: 'text-[#D6FF45]',
    badge: 'bg-[#D6FF45] text-[#123D35]',
    line: 'bg-[#D6FF45]',
    title: 'text-white',
    body: 'text-white/75',
    border: 'border-[#123D35]',
  },
  {
    bg: 'bg-white',
    year: 'text-[#18A999]',
    badge: 'bg-[#DDF5EF] text-[#08796D]',
    line: 'bg-[#18A999]',
    title: 'text-[#123D35]',
    body: 'text-[#52665A]',
    border: 'border-[#D7E4DC]',
  },
  {
    bg: 'bg-[#E0F0E8]',
    year: 'text-[#08796D]',
    badge: 'bg-[#BCE7D9] text-[#123D35]',
    line: 'bg-[#18A999]',
    title: 'text-[#123D35]',
    body: 'text-[#52665A]',
    border: 'border-[#C6E1D5]',
  },
  {
    bg: 'bg-[#FFF0E3]',
    year: 'text-[#B65A24]',
    badge: 'bg-[#FF9F43] text-white',
    line: 'bg-[#FF9F43]',
    title: 'text-[#493022]',
    body: 'text-[#73594A]',
    border: 'border-[#F3D4BA]',
  },
  {
    bg: 'bg-[#F8FAF7]',
    year: 'text-[#123D35]',
    badge: 'bg-[#DDE6D9] text-[#123D35]',
    line: 'bg-[#668B55]',
    title: 'text-[#123D35]',
    body: 'text-[#52665A]',
    border: 'border-[#D7E4DC]',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#F5F7F2] py-14 md:py-20"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#18A999]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-40 h-72 w-72 rounded-full bg-[#FF9F43]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        {/* About introduction */}
        <div className="mb-14 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1 w-7 rounded-full bg-[#18A999]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#08796D] sm:text-xs">
                About Vikash Pack
              </span>
            </div>

            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-[#123D35] sm:text-5xl lg:text-6xl">
              Built to hold
              <br />
              what industry
              <br />
              <span className="text-[#18A999]">moves.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#52665A] sm:text-base">
              A specialist industrial packaging house, not a general
              distributor. Vikash Pack engineers the straps and seals that
              secure cargo from the production line to the export dock.
            </p>

            {/* Company statistics */}
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
              {NUMBERS.map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-[#18A999]/40 pl-3"
                >
                  <div className="font-display text-3xl font-extrabold leading-none tracking-tight text-[#123D35] sm:text-4xl">
                    {n.value}
                  </div>
                  <p className="mt-2 text-[10px] leading-4 text-[#607167] sm:text-xs">
                    {n.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Factory image */}
          <motion.div
            className="relative mx-auto w-full max-w-[380px] lg:col-span-5 lg:max-w-none"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-2 -rotate-2 rounded-2xl bg-[#18A999]/15" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={IMAGES.workerFactory}
                alt="Industrial worker at a manufacturing facility"
                className="h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#09251F]/45 via-transparent to-transparent" />

              <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#123D35]/70 px-3 py-2 backdrop-blur-md">
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                  Industrial expertise
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-2 rounded-xl bg-[#123D35] px-4 py-3 text-white shadow-lg sm:-left-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D6FF45]">
                On the floor
              </span>
              <p className="mt-1 text-sm font-semibold">
                Quality, every coil
              </p>
            </div>
          </motion.div>
        </div>

        {/* Company timeline */}
        <section className="relative border-t border-[#123D35]/10 py-12 md:py-16">
          <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-[#18A999]/10 blur-3xl" />

          {/* Timeline heading */}
          <div className="relative mb-8 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-1 w-8 rounded-full bg-[#18A999]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#08796D] sm:text-xs">
                  Our journey · Since day one
                </span>
              </div>

              <h3 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-[#123D35] sm:text-4xl md:text-5xl">
                BUILT THROUGH
                <br />
                <span className="text-[#18A999]">EXPERIENCE.</span>
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#52665A]">
                From our first steps to stronger packaging solutions, every
                chapter has shaped who we are today.
              </p>
            </div>

            <div className="flex w-fit items-center gap-3 rounded-xl border border-[#123D35]/10 bg-white px-4 py-3 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D6FF45] text-[#123D35]">
                <CalendarDays size={17} />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-[#123D35]">
                  ALWAYS MOVING
                </p>
                <p className="mt-0.5 text-[11px] text-[#607167]">
                  One milestone at a time
                </p>
              </div>
            </div>
          </div>

          {/* Aligned timeline cards */}
          <div className="relative grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {TIMELINE.map((t, i) => {
              const theme = THEMES[i];

              return (
                <motion.article
                  key={t.year}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={`group relative flex min-w-0 min-h-[230px] flex-col overflow-hidden rounded-2xl border ${theme.border} ${theme.bg} p-4 shadow-sm transition-shadow duration-300 hover:shadow-xl md:p-4`}
                >
                  {/* Decorative number */}
                  <span
                    className="pointer-events-none absolute -right-1 -top-2 font-display text-7xl font-black leading-none opacity-[0.06]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Card header */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${theme.badge}`}
                    >
                      Chapter {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/15">
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </span>
                  </div>

                  {/* Year */}
                  <div className="relative z-10 mt-7">
                    <p
                      className={`font-display text-4xl font-extrabold leading-none tracking-tight ${theme.year}`}
                    >
                      {t.year}
                    </p>
                    <div
                      className={`mt-3 h-1 w-9 rounded-full ${theme.line} transition-all duration-300 group-hover:w-14`}
                    />
                  </div>

                  {/* Milestone details */}
                  <div className="relative z-10 mt-4">
                    <h4
                      className={`font-display text-lg font-bold leading-tight ${theme.title}`}
                    >
                      {t.event}
                    </h4>
                    <p className={`mt-2 text-xs leading-5 ${theme.body}`}>
                      {t.desc}
                    </p>
                  </div>

                  {/* Card footer */}
                  <div className="relative z-10 mt-auto flex items-center gap-2 pt-5">
                    <span className={`h-1.5 w-1.5 rounded-full ${theme.line}`} />
                    <span
                      className={`text-[8px] font-bold uppercase tracking-[0.12em] ${theme.body}`}
                    >
                      Vikash Pack · Milestone
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Timeline signature */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#123D35]/10 pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#607167] sm:text-xs">
              Experience builds trust. Quality builds the future.
            </p>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#18A999]" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#123D35]">
                The journey continues
              </span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
