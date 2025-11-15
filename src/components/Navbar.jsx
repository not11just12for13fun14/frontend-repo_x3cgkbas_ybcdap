import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" aria-label="Sip & Puff Mouse home">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm"></div>
          <span className="font-semibold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">Sip & Puff Mouse</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#demo" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Interactive Demo</a>
          <a href="#specs" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Specs</a>
          <a href="#stories" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Stories</a>
          <a href="#contact" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Contact</a>
        </nav>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
