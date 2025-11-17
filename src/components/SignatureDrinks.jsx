import { motion } from 'framer-motion'

const drinks = [
  { name: 'Velvet Latte', type: 'Hot', price: '$6', color: '#C79A63' },
  { name: 'Mocha Noir', type: 'Hot', price: '$6.5', color: '#3A2A1E' },
  { name: 'Iced Caramel Silk', type: 'Cold', price: '$6', color: '#D8A79B' },
  { name: 'Rose Gold Flat White', type: 'Hot', price: '$6', color: '#D8A79B' },
]

export default function SignatureDrinks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif" style={{ color: '#3A2A1E', fontFamily: 'Playfair Display, ui-serif' }}>Signature Drinks</h2>
          <p className="mt-3 text-[#3A2A1E]/70">Spot-lit cards with subtle rotation and glassy depth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinks.map((d, i) => (
            <motion.div
              key={d.name}
              whileHover={{ rotateX: 4, rotateY: -4, y: -6 }}
              className="group relative rounded-2xl p-5 bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_25px_80px_rgba(18,18,18,0.08)]"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/60 to-white/10" />
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#F5EDE2] to-[#FAF8F2] flex items-center justify-center shadow-inner">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full" style={{ boxShadow: `0 12px 40px ${d.color}55` }}>
                      <div className="w-24 h-24 rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, ${d.color}, #121212)` }} />
                    </div>
                    <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white/50 blur-2xl" />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium" style={{ color: '#3A2A1E' }}>{d.name}</h3>
                    <span className="text-sm font-semibold" style={{ color: '#C79A63' }}>{d.price}</span>
                  </div>
                  <p className="text-sm mt-1 text-[#3A2A1E]/70">{d.type} • artisan crafted</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
