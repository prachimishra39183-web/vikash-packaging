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
    <footer className="relative isolate bg-[#145B59] overflow-hidden">
      {/* Animated 3D scene */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <FooterScene />
        </Suspense>
      </div>

      {/* Transparent overlay: keeps the scene visible */}
      {/* Transparent overlay */}
<div className="absolute inset-0 z-0 bg-gradient-to-b from-[#145B59]/35 via-[#145B59]/50 to-[#0F4847]/65 pointer-events-none" />

{/* Compact footer content */}
<div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-6 py-3">

  {/* Brand and contact */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-white/15">
    <div>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-[#D6FF45] flex items-center justify-center">
          <Box className="w-4 h-4 text-[#20352D]" strokeWidth={2.5} />
        </div>
        <div>
          <div className="font-display font-extrabold text-white text-base tracking-tight">
            VIKASH PACK
          </div>
          <div className="text-[8px] tracking-[0.18em] text-white/65 uppercase">
            Industrial Packaging
          </div>
        </div>
      </div>

      <p className="text-white/75 text-[11px] leading-relaxed mt-1.5 max-w-xs">
        Engineered strapping and sealing solutions for logistics, manufacturing, and shipping.
      </p>
    </div>

    <div className="flex flex-col gap-1.5 text-[11px]">
      <a
        href="mailto:enquiry@vikashpack.com"
        className="flex items-center gap-2 text-white/85 hover:text-[#D6FF45] transition-colors"
      >
        <Mail className="w-3 h-3" />
        enquiry@vikashpack.com
      </a>
      <span className="flex items-center gap-2 text-white/85">
        <Phone className="w-3 h-3" />
        +91 00000 00000
      </span>
      <span className="flex items-center gap-2 text-white/85">
        <MapPin className="w-3 h-3" />
        India
      </span>
    </div>
  </div>

  {/* Compact links */}
  <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-3 py-3">
    {COLS.map((col) => (
      <div key={col.title}>
        <h4 className="text-[9px] tracking-[0.15em] text-[#D6FF45] uppercase font-semibold">
          {col.title}
        </h4>

        <ul className="mt-1.5 space-y-1">
          {col.links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-white/75 text-[11px] hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}

    <div>
      <h4 className="text-[9px] tracking-[0.15em] text-[#D6FF45] uppercase font-semibold">
        Get a quote
      </h4>
      <p className="text-white/75 text-[11px] mt-1.5">
        Tell us what you're securing.
      </p>
      <a
        href="#enquiry"
        className="mt-1.5 inline-flex text-white text-[11px] font-medium border-b border-[#D6FF45] pb-0.5 hover:text-[#D6FF45] transition-colors"
      >
        Start enquiry →
      </a>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-2 border-t border-white/15">
    <span className="text-[9px] text-white/60 text-center">
      © {new Date().getFullYear()} Vikash Pack. All rights reserved.
    </span>

    <div className="flex gap-3 text-[9px] text-white/60">
      <a href="#" className="hover:text-white transition-colors">Privacy</a>
      <a href="#" className="hover:text-white transition-colors">Terms</a>
      <a href="#" className="hover:text-white transition-colors">ISO Process</a>
    </div>
  </div>
</div>
</footer>
  );
}