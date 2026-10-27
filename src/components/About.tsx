
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
    {/* Soft light rays */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute -top-40 -left-20 h-[600px] w-[600px]
    rounded-full bg-white/90 blur-[100px]" />

  <div className="absolute top-0 right-[-10%] h-[650px] w-[450px]
    bg-[#393936]/30 blur-[100px]
    [transform:rotate(-35deg)]" />

  <div className="absolute top-[20%] left-[25%] h-[500px] w-[300px]
    bg-[#D8D5CE]/50 blur-[100px]
    [transform:rotate(35deg)]" />

  <div className="absolute bottom-[-15%] right-[-10%] h-[550px] w-[550px]
    rounded-full bg-[#E9E0D0]/80 blur-[110px]" />
</div>

{/* White, charcoal and cream base */}
<div className="absolute inset-0
  bg-[linear-gradient(135deg,#FFFFFF_0%,#F4F3F0_18%,#292927_42%,#55534E_58%,#D6D1C7_76%,#F5F0E6_100%)]" />

{/* Subtle white and cream rays */}
<div className="absolute inset-0
  bg-[conic-gradient(from_225deg_at_50%_0%,transparent_0deg,#FFFFFF_35deg,transparent_65deg,#E9E2D6_100deg,transparent_130deg)] opacity-70" />
      
      {/* Background accents */}
      

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
  className="relative mx-auto w-full max-w-[320px] lg:col-span-5 lg:max-w-[360px]"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    opacity: { duration: 0.7 },
    x: { duration: 0.7 },
  }}
  animate={{
    y: [0, -8, 0],
    rotateY: [0, 2, 0, -2, 0],
  }}
  style={{
    transformStyle: 'preserve-3d',
    perspective: 1000,
  }}
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
        {/* Company timeline — Ivory theme */}
    <section className="relative isolate left-1/2 w-screen -translate-x-1/2 overflow-hidden border-t border-[#D9D2C6] bg-[#F2EEE6] py-12 text-[#292D2A] md:py-16">
  

  {/* Soft ivory glow */}
           <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-[#E5DED1]/50 blur-3xl" />
          
          {/* Timeline heading */}
          {/* Timeline heading */}
<div className="relative z-10 mb-10 flex w-full flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">

  {/* Left: Heading content */}
  <div className="max-w-2xl">
    <div className="mb-5 flex items-center gap-3">
      <span className="h-1 w-8 shrink-0 rounded-full bg-[#8B9182]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65685F] sm:text-xs">
        Our journey · Since day one
      </span>
    </div>

    <h3 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-[#292D2A] sm:text-4xl md:text-5xl lg:text-6xl">
      BUILT THROUGH
      <br />
      <span className="text-[#777D70]">EXPERIENCE.</span>
    </h3>

  </div>

  {/* Right: Timeline badge */}
  <div className="flex w-fit shrink-0 items-center gap-3 rounded-xl border border-[#D9D2C6] bg-[#F8F5EF] px-4 py-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5DED1] text-[#292D2A]">
      <CalendarDays size={18} />
    </span>

    <div>
      <p className="font-display text-sm font-bold text-[#292D2A]">
        ALWAYS MOVING
      </p>
      <p className="mt-1 text-[11px] text-[#77776F]">
        One milestone at a time
      </p>
    </div>
  </div>

</div>

          {/* Aligned timeline cards */}

{/* Industrial journey video */}

{/* Floating industrial journey video */}

{/* Floating industrial journey video */}
<motion.div
  className="relative mx-auto mt-10 w-full max-w-6xl"
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  <motion.div
    className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl"
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{ scale: 1.01 }}
  >
    {/* Video blends directly into the page */}
    <div className="relative h-[400px] sm:h-[400px] md:h-[480px] lg:h-[500px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/time.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={IMAGES.workerFactory}
      />

      {/* Blend video into the website */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#123D35]/55 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#123D35]/65 via-transparent to-transparent" />

      {/* Minimal label */}
      <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-8 sm:top-8">
        <span className="h-2 w-2 rounded-full bg-[#D6FF45]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
          Our journey · Since 1998
        </span>
      </div>

      {/* Text directly over the video */}
      <div className="absolute bottom-7 left-5 max-w-xl sm:bottom-10 sm:left-10 md:bottom-12 md:left-12">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6FF45]">
          Built on experience
        </p>

      

        <p className="mt-3 max-w-md text-xs leading-relaxed text-white/85 sm:text-sm">
          Decades of commitment to quality, reliability and better packaging.
        </p>
      </div>
    </div>
  </motion.div>
</motion.div>

  

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
