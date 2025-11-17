import { motion } from 'framer-motion'

const items = [
  { name: 'Espresso', price: '$4' },
  { name: 'Cortado', price: '$4.5' },
  { name: 'Flat White', price: '$5' },
  { name: 'Latte', price: '$5.5' },
  { name: 'Mocha', price: '$6' },
  { name: 'Croissant', price: '$4.5' },
]

export default function MenuPreview() {
  return (
    <section className="relative py-24" style={{ background: '#F5EDE2' }}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif" style={{ color: '#3A2A1E', fontFamily: 'Playfair Display, ui-serif' }}>Menu Preview</h2>
          <p className="mt-3 text-[#3A2A1E]/70">Minimal grid with gold pricing and gentle hover glow.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -4 }} className="rounded-xl p-5 bg-[#FAF8F2] border border-[#C79A63]/20 shadow-[0_10px_40px_rgba(18,18,18,0.06)]">
              <div className="flex items-center justify-between">
                <span className="text-lg" style={{ color: '#3A2A1E' }}>{item.name}</span>
                <span className="font-semibold" style={{ color: '#C79A63' }}>{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_200px_at_50%_110%,rgba(18,18,18,0.12),transparent)]" />
    </section>
  )
}
