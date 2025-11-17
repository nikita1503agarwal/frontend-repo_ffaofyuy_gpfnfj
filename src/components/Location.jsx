import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section className="relative py-24" style={{ background: '#F5EDE2' }}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif" style={{ color: '#3A2A1E', fontFamily: 'Playfair Display, ui-serif' }}>Find Us</h2>
          <p className="mt-3 text-[#3A2A1E]/70">A golden ripple marks our spot.</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-[#FAF8F2] border border-[#C79A63]/20 h-72 flex items-center justify-center">
          <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute w-40 h-40 rounded-full border-2" style={{ borderColor: '#C79A63' }} />
          <motion.div animate={{ scale: [1.2, 1.4, 1.2], opacity: [0.4, 0.2, 0.4] }} transition={{ repeat: Infinity, duration: 4, delay: 0.2 }} className="absolute w-60 h-60 rounded-full border" style={{ borderColor: '#C79A63' }} />
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#D8A79B] to-[#C79A63] shadow-[0_10px_30px_rgba(199,154,99,0.35)]" />
        </div>
      </div>
    </section>
  )
}
