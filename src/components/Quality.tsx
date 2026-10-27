
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Layers,
  Gauge,
  Recycle,
  Factory,
  Truck,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';


const PILLARS = [
  {
    icon: Gauge,
    title: 'Tensile Testing',
    desc: 'Every strap batch tested for break load and elongation before dispatch.',
    number: '01',
    accent: '#FFE66D',
    card: 'from-[#443514] via-[#28251B] to-[#171713]',
    border: 'hover:border-[#FFE66D]/60',
    iconBg: 'bg-[#FFE66D]/15',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 9001 Process',
    desc: 'Documented quality management across the production cycle.',
    number: '02',
    accent: '#65E6B5',
    card: 'from-[#104C40] via-[#173A34] to-[#17251F]',
    border: 'hover:border-[#65E6B5]/60',
    iconBg: 'bg-[#65E6B5]/15',
  },
  {
    icon: Layers,
    title: 'Consistent Dimensions',
    desc: 'Controlled width and thickness tolerances for reliable tool feeding.',
    number: '03',
    accent: '#83B7FF',
    card: 'from-[#183F70] via-[#1B304B] to-[#171F2C]',
    border: 'hover:border-[#83B7FF]/60',
    iconBg: 'bg-[#83B7FF]/15',
  },
  {
    icon: Recycle,
    title: 'Recyclable Materials',
    desc: 'PET and PP straps can be recycled where suitable facilities are available.',
    number: '04',
    accent: '#FFA5D5',
    card: 'from-[#632C51] via-[#39243B] to-[#211923]',
    border: 'hover:border-[#FFA5D5]/60',
    iconBg: 'bg-[#FFA5D5]/15',
  },
];

  

const FLOW = [
  { icon: Factory, label: 'Production' },
  { icon: Gauge, label: 'Testing' },
  { icon: ShieldCheck, label: 'QC Sign-off' },
  { icon: Truck, label: 'Dispatch' },
];

const SPECS = [
  { k: 'Width tolerance', v: '±0.2 mm' },
  { k: 'Thickness tolerance', v: '±0.03 mm' },
  { k: 'Break load', v: 'Up to 1100 N/mm²' },
  { k: 'Core options', v: '406 / 280 mm' },
];

export default function Quality() {
  return (
    
<section
  id="quality"
  className="relative isolate overflow-hidden bg-gradient-to-b from-[#17121F] via-[#29232F] to-[#F5F0E7] py-16 text-white sm:py-20 lg:py-24"
  style={{ perspective: '1400px' }}
>

      {/* Ambient lighting */}
      
{/* Soft ambient lighting */}
<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#D6FF45]/[0.07] blur-[110px]" />
<div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/[0.05] blur-[120px]" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(214,255,69,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(214,255,69,0.25) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, black, transparent 90%)',
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-7 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-8 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6FF45]/20 bg-[#D6FF45]/5 px-3 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D6FF45] shadow-[0_0_12px_#D6FF45]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D6FF45]">
                Quality assurance system
              </span>
            </div>

            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Precision in
              <br />
              <span className="text-[#D6FF45]">every detail.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60 sm:text-base">
            Reliable industrial packaging starts with controlled processes.
            From production to dispatch, every stage has a defined role in
            maintaining product consistency.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column */}
          <div className="lg:col-span-5">
            {/* Quality status panel */}
            <motion.div
              initial={{ opacity: 0, rotateX: 8, y: 20 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -4 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#17251E] via-[#101A15] to-[#0A100D] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#18A999]/15 blur-3xl" />

              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                    Quality framework
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                    Built on control.
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D6FF45]/25 bg-[#D6FF45]/10 text-[#D6FF45]">
                  <ShieldCheck size={25} />
                </div>
              </div>

              <div className="relative mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: 'Process', value: 'Documented' },
                  { label: 'Inspection', value: 'Quality checks' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-3"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-white/40">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                <CheckCircle2 size={15} className="text-[#D6FF45]" />
                <p className="text-xs text-white/60">
                  A structured approach to product quality
                </p>
              </div>
            </motion.div>

            {/* Production flow */}
            <div className="mt-8">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white">
                  Production cycle
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#18A999]">
                  4 stages
                </span>
              </div>

              <div className="relative grid grid-cols-4 gap-2">
                {/* Connecting line */}
                <div className="absolute left-[12%] right-[12%] top-5 h-px bg-gradient-to-r from-[#18A999]/20 via-[#18A999] to-[#D6FF45]/50" />

                {FLOW.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="relative z-10 flex min-w-0 flex-col items-center text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                        i === 3
                          ? 'border-[#D6FF45]/50 bg-[#D6FF45]/10 text-[#D6FF45]'
                          : 'border-[#18A999]/35 bg-[#10231D] text-[#56D9C5]'
                      } shadow-[0_6px_22px_rgba(0,0,0,0.25)]`}
                    >
                      <item.icon size={17} />
                    </motion.div>

                    <span className="mt-3 text-[10px] font-semibold leading-4 text-white/65 sm:text-xs">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: feature cards */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                Quality checkpoints
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-white/35">
                01 — 04
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
                
<motion.article
  key={pillar.title}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.55, delay: i * 0.1 }}
  whileHover={{ y: -7, scale: 1.015 }}
  className={`group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${pillar.card} p-5 shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-300 ${pillar.border} sm:p-6`}
>
  {/* Colorful ambient glow */}
  <div
    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 blur-[55px] transition-all duration-500 group-hover:opacity-45"
    style={{ backgroundColor: pillar.accent }}
  />

  {/* Decorative print */}
  <div
    className="pointer-events-none absolute right-0 top-0 h-32 w-32 opacity-[0.09]"
    style={{
      backgroundImage: `radial-gradient(${pillar.accent} 1.2px, transparent 1.2px)`,
      backgroundSize: '11px 11px',
      maskImage: 'linear-gradient(135deg, black, transparent 75%)',
    }}
  />

  <div className="relative flex items-start justify-between">
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 ${pillar.iconBg} transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110`}
      style={{ color: pillar.accent }}
    >
      <pillar.icon size={23} strokeWidth={1.8} />
    </div>

    <span
      className="font-display text-3xl font-black tracking-tight opacity-40"
      style={{ color: pillar.accent }}
    >
      {pillar.number}
    </span>
  </div>

  <h4 className="relative mt-7 font-display text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl">
    {pillar.title}
  </h4>

  <p className="relative mt-3 max-w-sm text-sm leading-7 text-white/75">
    {pillar.desc}
  </p>

  <div className="relative mt-6 flex items-center justify-between">
    <div
      className="h-[3px] w-10 rounded-full transition-all duration-300 group-hover:w-20"
      style={{
        backgroundColor: pillar.accent,
        boxShadow: `0 0 14px ${pillar.accent}55`,
      }}
    />

    <ArrowUpRight
      size={19}
      className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      style={{ color: pillar.accent }}
    />
  </div>
</motion.article>

              ))}
            </div>

            {/* Specifications */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-[#171717] shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                <h3 className="font-display text-sm font-bold text-white">
                  Technical specifications
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#18A999]">
                  Reference data
                </span>
              </div>

              <div className="grid grid-cols-2 gap-px bg-white/[0.06] sm:grid-cols-4">
                {SPECS.map((spec) => (
                  <div
                    key={spec.k}
                    className="min-w-0 bg-[#0E1511] p-3 sm:p-4"
                  >
                    <p className="text-[9px] leading-4 text-white/40 sm:text-[10px]">
                      {spec.k}
                    </p>
                    
<p
  className="mt-2 break-words font-display text-sm font-extrabold leading-snug sm:text-base"
  style={{
    color:
      spec.k === 'Width tolerance'
        ? '#FFE66D'
        : spec.k === 'Thickness tolerance'
          ? '#83B7FF'
          : spec.k === 'Break load'
            ? '#65E6B5'
            : '#FFA5D5',
  }}
>
  {spec.v}
</p>

                  </div>
                ))}
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}
