import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Specs from './components/Specs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <Specs />
        <Testimonials />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Sip & Puff Mouse — Designed for access and independence.
      </footer>
    </div>
  )
}

export default App
