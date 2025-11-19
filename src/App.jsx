import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Trust from './components/Trust'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(99,102,241,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_100%_10%,rgba(16,185,129,0.1),transparent)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Trust />
        <CTA />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-blue-200/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Tweezers. All rights reserved.</p>
          <p>Professional share market advisory • Transparent, disciplined, client‑first</p>
        </div>
      </footer>
    </div>
  )
}

export default App
