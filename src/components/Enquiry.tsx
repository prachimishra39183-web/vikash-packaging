import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const PRODUCTS = ['PET Strap', 'PP Strap', 'Steel Strap', 'Silver Seal', 'White-Coated Seal', 'Drum Seal', 'Resin Seal', 'GI Seal'];

export default function Enquiry() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', product: '', quantity: '', message: '' });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="enquiry" className="relative overflow-hidden">
      {/* dark-to-light transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-plum via-plum/90 to-ivory-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-chartreuse/8 rounded-full blur-[120px]" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left — headline */}
          <div className="lg:col-span-6">
            <span className="text-xs tracking-[0.3em] text-chartreuse uppercase">Request a Quote</span>
            <h2 className="font-display font-900 text-ivory text-5xl md:text-7xl lg:text-8xl mt-3 tracking-tighter leading-[0.88]">
              Let's build <br /> your <span className="text-chartreuse">load</span> plan.
            </h2>
            <p className="text-silver-300 leading-relaxed mt-8 max-w-md">
              Tell us what you're securing and how far it's travelling. We'll specify the right strap, the right seal, and the right quantities.
            </p>

            <div className="mt-12 space-y-4">
              {['Direct technical consultation', 'Volume pricing on request', 'Nationwide dispatch'].map((p) => (
                <div key={p} className="flex items-center gap-3 text-silver-200">
                  <div className="w-5 h-5 rounded-full bg-chartreuse/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-chartreuse" />
                  </div>
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-6">
            <div className="bg-ivory-50/95 backdrop-blur-xl rounded-sm p-8 md:p-10 border border-plum/8 shadow-[0_30px_80px_-20px_rgba(23,18,31,0.4)]">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-chartreuse flex items-center justify-center">
                    <Check className="w-8 h-8 text-plum" />
                  </div>
                  <h3 className="font-display font-800 text-plum text-3xl mt-6 tracking-tighter">Enquiry received</h3>
                  <p className="text-plum/60 mt-3 max-w-sm mx-auto">
                    Our team will respond with specifications and pricing within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" value={form.name} onChange={(v) => update('name', v)} required />
                    <Field label="Company" value={form.company} onChange={(v) => update('company', v)} />
                  </div>
                  <Field label="Email" type="email" value={form.email} onChange={(v) => update('email', v)} required />

                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-plum/50 uppercase">Product</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {PRODUCTS.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => update('product', p)}
                          className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                            form.product === p
                              ? 'bg-plum text-ivory border-plum'
                              : 'bg-transparent text-plum/60 border-plum/15 hover:border-plum/40'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Field label="Quantity (approx.)" value={form.quantity} onChange={(v) => update('quantity', v)} />

                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-plum/50 uppercase">Requirements</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={3}
                      className="w-full mt-2 bg-transparent border-b border-plum/15 focus:border-coral outline-none py-2 text-plum placeholder:text-plum/30 transition-colors"
                      placeholder="Load type, dimensions, destination..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full mt-4 bg-plum text-ivory py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-coral transition-colors duration-300"
                  >
                    Send enquiry
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = 'text', required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.2em] text-plum/50 uppercase">
        {label}{required && <span className="text-coral">*</span>}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-2 bg-transparent border-b border-plum/15 focus:border-coral outline-none py-2 text-plum placeholder:text-plum/30 transition-colors"
      />
    </div>
  );
}
