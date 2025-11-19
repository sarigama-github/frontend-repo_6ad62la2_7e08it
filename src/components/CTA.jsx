function CTA() {
  return (
    <section id="cta" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-emerald-400/15 via-blue-500/10 to-cyan-400/10 border border-white/15 backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl text-white font-semibold tracking-tight">Book your free 20‑minute consultation</h3>
              <p className="mt-3 text-blue-200/80">Tell us your goals. We'll outline a clear, risk‑managed plan to help you invest and trade with confidence.</p>
              <ul className="mt-4 text-blue-100/90 text-sm space-y-2 list-disc list-inside">
                <li>Personalised strategy outline</li>
                <li>Risk and position‑sizing review</li>
                <li>Next steps with full transparency</li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <form className="grid sm:grid-cols-2 gap-3">
                <input required placeholder="Full name" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
                <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
                <input placeholder="Phone (optional)" className="sm:col-span-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
                <button type="submit" className="sm:col-span-2 inline-flex justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition">Request consultation</button>
                <p className="sm:col-span-2 text-xs text-blue-200/70 text-center">By submitting, you agree to be contacted by Tweezers. No spam.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
