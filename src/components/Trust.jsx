import { CheckCircle2, Award, Users } from 'lucide-react'

function Trust() {
  return (
    <section id="trust" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs text-blue-200/70 bg-white/10 border border-white/10 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Built on discipline and data
            </div>
            <h3 className="text-3xl sm:text-4xl text-white font-semibold tracking-tight">Reliable. Experienced. Accountable.</h3>
            <p className="mt-4 text-blue-200/80">With 50+ active clients, Tweezers is trusted for prudent risk practices and clear decision-making. We emphasise process over prediction and accountability over hype.</p>
            <ul className="mt-6 space-y-3 text-blue-100/90">
              <li className="flex gap-3 items-start"><CheckCircle2 className="text-emerald-400" size={20} /> Documented playbooks for entries, exits, and risk controls</li>
              <li className="flex gap-3 items-start"><CheckCircle2 className="text-emerald-400" size={20} /> Performance reviews and transparent reporting</li>
              <li className="flex gap-3 items-start"><CheckCircle2 className="text-emerald-400" size={20} /> Client-first alignment with clear, timely communication</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="#cta" className="inline-flex px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition">Start with a consultation</a>
              <a href="#approach" className="inline-flex px-5 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white/90 font-semibold hover:bg-slate-800 transition">See our approach</a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-800/40 border border-white/10 text-center">
                <Users className="mx-auto text-emerald-400" />
                <p className="mt-2 text-2xl font-semibold text-white">50+</p>
                <p className="text-xs text-blue-200/70">Active clients</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/40 border border-white/10 text-center">
                <Award className="mx-auto text-emerald-400" />
                <p className="mt-2 text-2xl font-semibold text-white">Experienced</p>
                <p className="text-xs text-blue-200/70">Pro, client‑centric</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/40 border border-white/10 text-center">
                <CheckCircle2 className="mx-auto text-emerald-400" />
                <p className="mt-2 text-2xl font-semibold text-white">Transparent</p>
                <p className="text-xs text-blue-200/70">Clear rationale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
