
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Package,
  ShieldCheck,
  Truck,
  Sparkles,
} from 'lucide-react';

const PRODUCTS = [
  'PET Strap',
  'PP Strap',
  'Steel Strap',
  'Silver Seal',
  'White-Coated Seal',
  'Drum Seal',
  'Resin Seal',
  'GI Seal',
];

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: 'The right specification',
    description: 'Solutions matched to your load.',
  },
  {
    icon: Package,
    title: 'Volume-based pricing',
    description: 'Options tailored to your quantity.',
  },
  {
    icon: Truck,
    title: 'Reliable dispatch',
    description: 'Support for your delivery needs.',
  },
];

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 hover:border-white/20 focus:border-chartreuse/70 focus:bg-white/[0.07]';

export default function Enquiry() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    product: '',
    quantity: '',
    message: '',
  });

  const update = (key: string, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your enquiry API/email service here before
    // treating this as a real submitted enquiry.
    setSent(true);
  };

  return (
    <section
      id="enquiry"
      className="relative isolate overflow-hidden bg-[#17151D] text-white"
    >
      {/* Background atmosphere */}
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

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            

            <h2 className="max-w-xl font-display text-4xl font-black leading-[0.98] tracking-[-0.055em] text-black sm:text-5xl md:text-6xl xl:text-7xl">
              Your load.
              <br />
              Your needs.
              <br />
              <span className="text-chartreuse">Our solution.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/90 sm:text-base">
              Tell us about your packaging requirements. We’ll help you explore
              the right straps, seals and quantities for your operation.
            </p>

            <div className="mt-9 space-y-4">
              {BENEFITS.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.45 }}
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/900 bg-white/[0.045] transition-colors group-hover:border-chartreuse/40 group-hover:bg-chartreuse/10">
                      <Icon
                        size={20}
                        className="text-chartreuse"
                        strokeWidth={1.6}
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-red">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/90">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="flex -space-x-2">
                {['P', 'S', 'V'].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#17151D] bg-[#302D36] text-xs font-bold text-chartreuse"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-xs leading-5 text-white/45">
                Built around your packaging needs.
                <br />
                <span className="text-white/70">
                  Let's find the right fit.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right enquiry card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="relative rounded-[28px] border border-white/[0.12] bg-[#24212B]/90 p-5 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-8 md:p-10">
              {/* Card accent */}
              <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-chartreuse/70 to-transparent" />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[460px] flex-col items-center justify-center px-4 py-12 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-chartreuse text-[#17151D] shadow-[0_0_50px_rgba(214,255,69,0.15)]">
                    <CheckCircle2 size={38} />
                  </div>

                  <h3 className="mt-7 font-display text-3xl font-bold tracking-tight text-white">
                    Thank you!
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                    Your form has been completed. Connect this form to your
                    enquiry service so your team can receive the details.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-7 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75 transition hover:border-chartreuse/50 hover:text-chartreuse"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Form heading */}
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-chartreuse">
                        Quote request
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Tell us what you need.
                      </h3>
                      <p className="mt-2 text-sm text-white/40">
                        Share a few details to get started.
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-chartreuse/20 bg-chartreuse/[0.08] sm:flex">
                      <Package size={23} className="text-chartreuse" />
                    </div>
                  </div>

                  <form onSubmit={submit} className="space-y-6">
                    {/* Step 01 */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[10px] font-bold tracking-[0.15em] text-chartreuse">
                          01
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                        <span className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                          Your details
                        </span>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="enquiry-name"
                            className="mb-2 block text-xs font-medium text-white/65"
                          >
                            Full name <span className="text-chartreuse">*</span>
                          </label>
                          <input
                            id="enquiry-name"
                            className={inputClass}
                            placeholder="Your name"
                            autoComplete="name"
                            value={form.name}
                            onChange={(e) => update('name', e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="enquiry-company"
                            className="mb-2 block text-xs font-medium text-white/65"
                          >
                            Company
                          </label>
                          <input
                            id="enquiry-company"
                            className={inputClass}
                            placeholder="Company name"
                            autoComplete="organization"
                            value={form.company}
                            onChange={(e) => update('company', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="enquiry-email"
                          className="mb-2 block text-xs font-medium text-white/65"
                        >
                          Work email <span className="text-chartreuse">*</span>
                        </label>
                        <input
                          id="enquiry-email"
                          type="email"
                          className={inputClass}
                          placeholder="you@company.com"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Step 02 */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[10px] font-bold tracking-[0.15em] text-chartreuse">
                          02
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                        <span className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                          Product requirements
                        </span>
                      </div>

                      <p className="mb-3 text-xs font-medium text-white/65">
                        Which product are you interested in?
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {PRODUCTS.map((product) => {
                          const active = form.product === product;

                          return (
                            <button
                              key={product}
                              type="button"
                              aria-pressed={active}
                              onClick={() => update('product', active ? '' : product)}
                              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2.5 text-xs transition-all duration-200 ${
                                active
                                  ? 'border-chartreuse bg-chartreuse text-[#17151D]'
                                  : 'border-white/10 bg-white/[0.035] text-white/60 hover:border-white/30 hover:text-white'
                              }`}
                            >
                              {active && <Check size={13} />}
                              {product}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="enquiry-quantity"
                          className="mb-2 block text-xs font-medium text-white/65"
                        >
                          Estimated quantity
                        </label>
                        <input
                          id="enquiry-quantity"
                          className={inputClass}
                          placeholder="e.g. 500 rolls or 2,000 seals"
                          value={form.quantity}
                          onChange={(e) => update('quantity', e.target.value)}
                        />
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="enquiry-message"
                          className="mb-2 block text-xs font-medium text-white/65"
                        >
                          Tell us more
                        </label>
                        <textarea
                          id="enquiry-message"
                          rows={3}
                          className={`${inputClass} resize-y`}
                          placeholder="Load type, dimensions, delivery location..."
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-chartreuse px-6 py-4 text-sm font-bold text-[#17151D] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5FF83] hover:shadow-[0_12px_35px_-12px_rgba(214,255,69,0.45)]"
                    >
                      Request my quote
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <p className="text-center text-[11px] leading-5 text-white/90">
                      Your details are used to respond to this enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>

            <p className="mt-5 text-center text-[10px] uppercase tracking-[0.18em] text-white/25">
              Packaging solutions · Built for industry
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}