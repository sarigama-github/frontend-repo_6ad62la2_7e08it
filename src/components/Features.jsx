import { ShieldCheck, LineChart, Sparkles, MessageSquare } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group p-6 rounded-2xl bg-slate-800/40 border border-white/10 hover:border-white/20 transition">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/80 to-emerald-400/80 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="services" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Premium, client‑centric services</h2>
          <p className="mt-4 text-blue-200/80">Built for professionals who value discipline, clarity, and consistent communication.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Feature icon={LineChart} title="Expert Portfolio Guidance" desc="Institutional-grade portfolio construction, factor exposure alignment, and disciplined rebalancing to keep you on track." />
          <Feature icon={ShieldCheck} title="Risk‑Managed Trading" desc="Position sizing, stop‑loss frameworks, and volatility‑aware entries to protect downside while capturing opportunity." />
          <Feature icon={Sparkles} title="Personalised Strategies" desc="Tailored to your horizon, cashflow needs, and risk tolerance—no templates, just strategies designed for you." />
          <Feature icon={MessageSquare} title="Transparent Communication" desc="Clear rationales, performance updates, and proactive check‑ins so you always know what’s happening and why." />
        </div>
      </div>
    </section>
  )
}

export default Features
