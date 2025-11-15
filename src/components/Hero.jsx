import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section aria-label="Sip & Puff Mouse hero" className="relative min-h-[90vh] pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50"></div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Breathe-powered control. Independence at your fingertips.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg text-slate-700 max-w-xl"
          >
            Sip & Puff Mouse translates gentle inhales and exhales into precise cursor movement and clicks, empowering people with limited mobility to navigate any computer with ease.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900">
              Try the interactive demo
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900">
              Talk to our team
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"/>
              <span>Accessible by design</span>
            </div>
            <div>WCAG AA contrast</div>
          </div>
        </div>

        <div className="relative h-[500px] lg:h-[650px]">
          <div className="absolute inset-0 rounded-2xl shadow-2xl bg-white overflow-hidden">
            <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <BreathAnimation />
    </section>
  )
}

function BreathAnimation() {
  return (
    <div aria-hidden className="relative z-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4" role="img" aria-label="Animated breath waves visualization">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0.2, opacity: 0.7 }}
              animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2 + (i % 5) * 0.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="h-16 sm:h-20 md:h-24 origin-bottom rounded-md bg-gradient-to-t from-blue-500/50 to-indigo-500/30"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
