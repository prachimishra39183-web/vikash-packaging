import { Suspense, lazy } from 'react';
import { Box, Mail, Phone, MapPin } from 'lucide-react';

const FooterScene = lazy(() => import('@/components/FooterScene'));

const COLS = [
  {
    title: 'Straps',
    links: ['PET Strap', 'PP Strap', 'Steel Strap', 'Coil dimensions'],
  },
  {
    title: 'Seals',
    links: ['Metallic Silver', 'White-Coated', 'Drum Seal', 'Resin Seal', 'GI Seal'],
  },
  {
    title: 'Company',
    links: ['About', 'Quality & Trust', 'Applications', 'Enquiry'],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-plum overflow-hidden grain">
      {/* 3D sculpture */}
      <div className="absolute inset-0 opacity-50">
        <Suspense fallback={null}>
          <FooterScene />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-plum/80 via-plum/70 to-plum" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-20 pb-8">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-chartreuse flex items-center justify-center">
                <Box className="w-6 h-6 text-plum" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display font-800 text-ivory text-2xl tracking-tighter">VIKASH PACK</div>
                <div className="text-[10px] tracking-[0.3em] text-silver-400 uppercase">Industrial Packaging</div>
              </div>
            </div>
            <p className="text-silver-300 max-w-sm leading-relaxed mt-6">
              Engineered strapping and sealing solutions for logistics, manufacturing, and shipping.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 text-sm">
            <a href="mailto:enquiry@vikashpack.com" className="flex items-center gap-3 text-silver-300 hover:text-chartreuse transition-colors">
              <Mail className="w-4 h-4" /> enquiry@vikashpack.com
            </a>
            <span className="flex items-center gap-3 text-silver-300">
              <Phone className="w-4 h-4" /> +91 00000 00000
            </span>
            <span className="flex items-center gap-3 text-silver-300">
              <MapPin className="w-4 h-4" /> India
            </span>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-[10px] tracking-[0.25em] text-chartreuse uppercase">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-silver-300 text-sm hover:text-ivory transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] text-chartreuse uppercase">Get a quote</h4>
            <p className="text-silver-300 text-sm mt-4">Tell us what you're securing.</p>
            <a href="#enquiry" className="mt-4 inline-flex items-center gap-2 text-ivory text-sm font-medium border-b border-chartreuse pb-1 hover:gap-3 transition-all">
              Start enquiry
            </a>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="pt-12 pb-6 overflow-hidden">
          <div className="font-display font-900 text-ivory/[0.06] text-[18vw] leading-[0.8] tracking-tightest text-center whitespace-nowrap">
            VIKASH PACK
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
          <span className="text-xs text-silver-400">© {new Date().getFullYear()} Vikash Pack. All rights reserved.</span>
          <div className="flex gap-6 text-xs text-silver-400">
            <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms</a>
            <a href="#" className="hover:text-ivory transition-colors">ISO Process</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
