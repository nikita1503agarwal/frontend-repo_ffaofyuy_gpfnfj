export default function Footer() {
  return (
    <footer className="relative" style={{ background: '#121212' }}>
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif tracking-wide" style={{ color: '#FAF8F2', textShadow: '0 0 24px rgba(199,154,99,0.45)'}}>Café Aurelia</div>
          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-lg" style={{ background: 'linear-gradient(145deg, #C79A63, #D8A79B)', boxShadow: '0 8px 24px rgba(199,154,99,0.4)'}} />
            <div className="w-9 h-9 rounded-lg" style={{ background: 'linear-gradient(145deg, #C79A63, #D8A79B)', boxShadow: '0 8px 24px rgba(199,154,99,0.4)'}} />
            <div className="w-9 h-9 rounded-lg" style={{ background: 'linear-gradient(145deg, #C79A63, #D8A79B)', boxShadow: '0 8px 24px rgba(199,154,99,0.4)'}} />
          </div>
        </div>
        <div className="mt-6 text-sm text-[#FAF8F2]/70">© {new Date().getFullYear()} Café Aurelia. All rights reserved.</div>
      </div>
    </footer>
  )
}
