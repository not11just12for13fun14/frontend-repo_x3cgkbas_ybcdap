export default function Specs() {
  const specs = [
    { label: 'Pressure sensitivity', value: 'Adaptive 10–200 Pa with auto-calibration' },
    { label: 'Actions', value: 'Sip = left click, Puff = right click, Hold = drag, Double sip = double click' },
    { label: 'Connectivity', value: 'USB-C (wired) and Bluetooth LE' },
    { label: 'Latency', value: '< 10 ms end-to-end' },
    { label: 'Compatibility', value: 'Windows, macOS, Linux, iPadOS, Android (HID compliant)' },
    { label: 'Battery', value: 'Up to 7 days typical use (BLE) • USB-C fast charge' },
    { label: 'Mounting', value: 'Flexible gooseneck with wheelchair and desk mounts' },
    { label: 'Hygiene', value: 'Replaceable medical-grade mouthpieces' },
  ]

  return (
    <section id="specs" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Technical specs</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">Designed with accessibility and reliability at the core. Every detail supports precision, comfort, and long-term durability.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
              <div className="text-sm uppercase tracking-wide text-slate-500">{s.label}</div>
              <div className="mt-1.5 font-medium text-slate-900">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
