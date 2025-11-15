export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Bring breath-powered computing to your community</h2>
              <p className="mt-3 text-slate-700">Whether you’re an individual, clinician, or school, we’ll help you get started. Reach out for pricing, demos, or partnerships.</p>
            </div>
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
              <label className="grid gap-1">
                <span className="text-sm text-slate-700">Name</span>
                <input className="h-11 rounded-md border border-slate-300 px-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" placeholder="Ada Lovelace" required/>
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-700">Email</span>
                <input type="email" className="h-11 rounded-md border border-slate-300 px-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" placeholder="you@example.com" required/>
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-700">Message</span>
                <textarea rows="3" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" placeholder="Tell us about your needs…"/>
              </label>
              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-slate-600">We’ll reply within 2 business days.</p>
                <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
