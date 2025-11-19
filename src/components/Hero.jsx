import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_70%_-10%,rgba(59,130,246,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_10%_10%,rgba(16,185,129,0.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-blue-100/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live portfolio guidance with risk controls
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Confident markets, managed risk.
          </h1>
          <p className="mt-5 text-blue-100/80 text-base sm:text-lg leading-relaxed max-w-xl">
            Tweezers provides expert portfolio guidance and disciplined, risk-managed trading for busy professionals. We tailor strategies to your goals and communicate with transparency—so you always know why we act.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-sm hover:bg-blue-50 transition">
              Book a free consultation
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white/90 font-semibold hover:bg-slate-800 transition">
              Explore services
            </a>
          </div>
          <div className="mt-6 text-xs text-blue-200/70">
            Serving 50+ active clients with a long-term, client-first mindset
          </div>
        </div>
        <div className="lg:col-span-7 h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl relative">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/30 backdrop-blur-xl">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
