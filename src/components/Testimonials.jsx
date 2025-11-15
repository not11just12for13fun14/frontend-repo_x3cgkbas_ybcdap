import { motion } from 'framer-motion'

const items = [
  {
    quote: "For the first time since my injury, I can shop, email, and create without asking for help.",
    name: "Janelle, artist",
  },
  {
    quote: "Our students gained independence in the classroom. It’s fast, reliable, and easy to set up.",
    name: "Diego, assistive tech specialist",
  },
  {
    quote: "It restored parts of my day I thought I lost. Games, video calls, everything just works.",
    name: "Omar, gamer",
  },
]

export default function Testimonials() {
  return (
    <section id="stories" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Impact stories</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">Real people. Real independence. These are a few of the ways Sip & Puff Mouse is opening doors.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm"
            >
              <p className="text-slate-900">“{item.quote}”</p>
              <footer className="mt-4 text-sm text-slate-600">— {item.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
