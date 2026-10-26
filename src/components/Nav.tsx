import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Box } from 'lucide-react';
import { useScrollProgress } from '@/lib/hooks';

const LINKS = [
  { label: 'Straps', href: '#straps' },
  { label: 'Seals', href: '#seals' },
  { label: 'Applications', href: '#applications' },
  { label: 'About', href: '#about' },
  { label: 'Quality', href: '#quality' },
  { label: 'Enquiry', href: '#enquiry' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-plum/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
           
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <div className="flex flex-col leading-none">
              <span className="font-display font-800 text-ivory text-lg tracking-tighter">VIKASH PACK</span>
              <span className="text-[9px] tracking-[0.3em] text-silver-400 uppercase">Industrial Packaging</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-silver-300 hover:text-chartreuse transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-chartreuse scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#enquiry"
              className="group relative px-6 py-2.5 bg-chartreuse text-plum text-sm font-semibold rounded-full overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            >
              <span className="relative z-10">Request a Quote</span>
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-ivory p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
        <div className="h-px bg-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-chartreuse" style={{ width: `${progress * 100}%` }} />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-plum/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-between items-center px-6 h-20">
              <span className="font-display font-800 text-ivory text-lg">VIKASH PACK</span>
              <button onClick={() => setOpen(false)} className="text-ivory p-2" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col px-6 gap-2 mt-4">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-4xl font-display font-700 text-ivory py-3 border-b border-white/5"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="mt-6 px-6 py-4 bg-chartreuse text-plum text-center font-semibold rounded-full"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
