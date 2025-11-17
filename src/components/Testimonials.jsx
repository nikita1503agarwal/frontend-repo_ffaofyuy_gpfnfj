import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Amelia', quote: 'The most immersive café atmosphere I have ever experienced. Every detail feels crafted.', role: 'Interior Designer' },
  { name: 'Jonah', quote: 'Silky latte art and a warm glow that just slows time. My new ritual.', role: 'Photographer' },
  { name: 'Priya', quote: 'Elegant, modern, and delicious. The caramel flat white is a dream.', role: 'Art Director' },
]

export default function Testimonials() {
  return (
    <section className="relative py-24" style={{ background: '#FAF8F2' }}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif" style={{ color: '#3A2A1E', fontFamily: 'Playfair Display, ui-serif' }}>Kind Words</h2>
          <p className="mt-3 text-[#3A2A1E]/70">Floating glass with subtle reflections and bokeh.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl p-6 bg-white/30 backdrop-blur-2xl border border-white/40 shadow-[0_25px_80px_rgba(18,18,18,0.08)]">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/60 to-white/10" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D8A79B] to-[#C79A63] shadow-[0_10px_30px_rgba(199,154,99,0.35)]" />
                  <div>
                    <p className="font-medium" style={{ color: '#3A2A1E' }}>{t.name}</p>
                    <p className="text-sm text-[#3A2A1E]/70">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-[#3A2A1E]/80 leading-relaxed">“{t.quote}”</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
