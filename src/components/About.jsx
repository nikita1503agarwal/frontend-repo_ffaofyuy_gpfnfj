import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-28" style={{ background: '#FAF8F2' }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#EAD8C4] to-[#F5EDE2] shadow-[0_30px_80px_rgba(18,18,18,0.08)]">
          {/* Miniature cafe diorama suggestion using layered cards */}
          <div className="absolute inset-6 grid grid-rows-6 grid-cols-6 gap-3">
            <div className="col-span-6 row-span-2 rounded-xl bg-[#3A2A1E]" />
            <div className="col-span-4 row-span-4 rounded-xl bg-white/70 backdrop-blur-md" />
            <div className="col-span-2 row-span-2 rounded-xl bg-[#C79A63]/80" />
            <div className="col-span-2 row-span-2 rounded-xl bg-[#D8A79B]/80" />
          </div>
          <motion.div animate={{ opacity: [0.2, 0.4, 0.25] }} transition={{ duration: 7, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(800px_200px_at_40%_0%,rgba(255,255,255,0.6),transparent)] blur-2xl" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-serif" style={{ color: '#3A2A1E', fontFamily: 'Playfair Display, ui-serif' }}>Our Story</h2>
          <p className="mt-5 text-[#3A2A1E]/80 leading-relaxed text-lg">
            We blend natural materials, metallic accents, and crafted 3D touches to create an ambiance that is both premium and comforting. Slow-roasted beans, seasonal pastries, and an atmosphere designed for slow living.
          </p>
          <div className="mt-8 flex gap-4">
            <span className="inline-flex items-center gap-2 text-[#3A2A1E]/70"><span className="h-2 w-2 bg-[#C79A63] rounded-full" /> ethically sourced</span>
            <span className="inline-flex items-center gap-2 text-[#3A2A1E]/70"><span className="h-2 w-2 bg-[#D8A79B] rounded-full" /> house-made syrups</span>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_200px_at_50%_110%,rgba(18,18,18,0.18),transparent)]" />
    </section>
  )
}
