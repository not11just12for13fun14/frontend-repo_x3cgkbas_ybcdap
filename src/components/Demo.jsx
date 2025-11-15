import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MousePointer, ClickRight, Wind } from 'lucide-react'

// Keyboard accessible interactive demo simulating sip (inhale) and puff (exhale)
export default function Demo() {
  const [cursor, setCursor] = useState({ x: 160, y: 120 })
  const [action, setAction] = useState(null) // 'sip' | 'puff' | null
  const areaRef = useRef(null)

  // Keyboard controls: Arrow keys move, S = sip (left click), P = puff (right click)
  useEffect(() => {
    const onKey = (e) => {
      if (!areaRef.current) return
      const step = 12
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault(); setCursor((c) => ({ ...c, y: Math.max(0, c.y - step) })); break
        case 'ArrowDown':
          e.preventDefault(); setCursor((c) => ({ ...c, y: Math.min(240, c.y + step) })); break
        case 'ArrowLeft':
          e.preventDefault(); setCursor((c) => ({ ...c, x: Math.max(0, c.x - step) })); break
        case 'ArrowRight':
          e.preventDefault(); setCursor((c) => ({ ...c, x: Math.min(320, c.x + step) })); break
        case 's':
        case 'S':
          trigger('sip'); break
        case 'p':
        case 'P':
          trigger('puff'); break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const trigger = (type) => {
    setAction(type)
    // Action highlight timeout
    setTimeout(() => setAction(null), 450)
  }

  // Clickable buttons for mouse users
  const handleAreaClick = (e) => {
    const rect = areaRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCursor({ x, y })
  }

  return (
    <section id="demo" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Interactive demo</h2>
            <p className="mt-4 text-slate-700">Press S to sip (left click) and P to puff (right click). Use arrow keys to move. Or use the on-screen controls. The cursor reacts with animated feedback to show how breath translates to actions.</p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700" aria-label="Controls">
              <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 bg-slate-50"><Wind size={16}/> Sip = Left Click</span>
              <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 bg-slate-50"><Wind className="-scale-x-100" size={16}/> Puff = Right Click</span>
              <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 bg-slate-50">Arrows = Move</span>
            </div>
          </div>

          <div>
            <div
              ref={areaRef}
              role="application"
              aria-label="Cursor playground"
              tabIndex={0}
              onClick={handleAreaClick}
              className="relative select-none outline-none w-[340px] h-[260px] sm:w-[440px] sm:h-[320px] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-inner mx-auto"
            >
              {/* Targets */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200"/>
                  </div>
                ))}
              </div>

              {/* Cursor */}
              <motion.div
                aria-live="polite"
                className="absolute -translate-x-1/2 -translate-y-1/2"
                animate={{ left: cursor.x, top: cursor.y }}
                transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.3 }}
              >
                <motion.div
                  className={`h-5 w-5 rounded-full ring-2 ${action === 'sip' ? 'ring-blue-500' : action === 'puff' ? 'ring-rose-500' : 'ring-slate-400'} bg-slate-900`}
                  animate={action ? { scale: [1, 0.8, 1.2, 1] } : {}}
                  transition={{ duration: 0.45 }}
                />
              </motion.div>

              {/* Action bubbles */}
              <AnimatePresence>
                {action && (
                  <motion.div
                    className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm border border-slate-200 shadow"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                  >
                    {action === 'sip' ? <MousePointer size={16}/> : <ClickRight size={16}/>} 
                    <span className="font-medium capitalize">{action}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* On-screen buttons */}
              <div className="absolute right-3 bottom-3 flex gap-2">
                <button onClick={() => trigger('sip')} className="rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">Sip</button>
                <button onClick={() => trigger('puff')} className="rounded-md bg-rose-600 text-white px-3 py-1.5 text-sm shadow hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">Puff</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
