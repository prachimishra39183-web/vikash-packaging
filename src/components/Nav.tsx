
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollProgress } from '@/lib/hooks';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Straps & Seals', href: '/products' },
  { label: 'Applications', href: '/applications' },
  { label: 'Quality', href: '/quality' },
  { label: 'Enquiry', href: '/contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const linkClass = (href: string) =>
    `relative group px-3 xl:px-4 py-2 text-sm transition-colors duration-300 ${
      location.pathname === href
        ? 'text-chartreuse'
        : 'text-silver-300 hover:text-chartreuse'
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-plum/90 shadow-lg shadow-black/10 backdrop-blur-xl'
            : 'bg-plum/30 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
          {/* Brand */}
          <Link
            to="/"
            className="group relative flex flex-col leading-none"
            aria-label="Vikash Pack home"
          >
            <span className="font-display text-lg font-extrabold tracking-tight text-ivory">
              VIKASH PACK
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-silver-400">
              Industrial Packaging
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={linkClass(item.href)}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-px origin-left bg-chartreuse transition-transform duration-300 xl:left-4 xl:right-4 ${
                    location.pathname === item.href
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Quote button */}
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-chartreuse px-5 py-3 text-sm font-bold text-plum transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(214,255,69,0.2)] lg:flex"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl border border-white/10 p-2.5 text-ivory transition hover:border-chartreuse/50 hover:text-chartreuse lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        {/* Scroll progress */}
        <div className="relative h-px overflow-hidden bg-white/5">
          <div
            className="absolute left-0 top-0 h-full bg-chartreuse transition-[width] duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-plum/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex flex-col leading-none"
              >
                <span className="font-display text-lg font-extrabold text-ivory">
                  VIKASH PACK
                </span>
                <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-silver-400">
                  Industrial Packaging
                </span>
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 p-2.5 text-ivory"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col gap-1 px-6 pb-10 pt-8">
              {LINKS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-bold transition-colors ${
                      location.pathname === item.href
                        ? 'text-chartreuse'
                        : 'text-ivory hover:text-chartreuse'
                    }`}
                  >
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 opacity-50" />
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-chartreuse px-6 py-4 font-bold text-plum"
              >
                Request a Quote
                <ArrowUpRight className="h-5 w-5" />
              </Link>

              <p className="mt-8 text-center text-[10px] uppercase tracking-[0.25em] text-silver-400">
                Packaging. Perfected.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
