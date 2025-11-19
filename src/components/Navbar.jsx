import { Menu, Phone, ShieldCheck } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 shadow-lg shadow-blue-500/20" />
          <div className="leading-tight">
            <p className="text-white font-semibold text-lg tracking-tight">Tweezers</p>
            <p className="text-xs text-blue-200/70 flex items-center gap-1"><ShieldCheck size={14} /> SEBI-Style Disciplined Approach</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-blue-100/80 hover:text-white transition">Services</a>
          <a href="#approach" className="text-blue-100/80 hover:text-white transition">Our Approach</a>
          <a href="#trust" className="text-blue-100/80 hover:text-white transition">Trust</a>
          <a href="#cta" className="text-blue-100/80 hover:text-white transition">Get Started</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-white px-4 py-2 rounded-lg hover:bg-blue-50 transition shadow-sm">
            <Phone size={16} /> Book Consultation
          </a>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white/90"><Menu size={20} /></button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
