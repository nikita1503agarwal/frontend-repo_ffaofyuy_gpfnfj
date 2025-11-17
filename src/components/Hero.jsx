import React, { useEffect, useState, Suspense, lazy } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Lazy-load Spline to avoid StrictMode double-mount issues and heavy initial load
const Spline = lazy(() => import('@splinetool/react-spline'))

const SCENE_URL = 'https://prod.spline.design/7hQF8P8y8x9Lx9bE/scene.splinecode'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    // Silently fall back to static mode on any Spline runtime error
    if (this.props.onError) this.props.onError(error, info)
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function GlossyButton({ children }) {
  return (
    <button className="relative overflow-hidden rounded-full px-7 py-3 font-semibold text-[#121212] bg-gradient-to-b from-[#D8A79B] to-[#C79A63] shadow-[0_10px_30px_rgba(199,154,99,0.35)] hover:shadow-[0_12px_40px_rgba(199,154,99,0.5)] transition-shadow">
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute -top-1 left-0 right-0 h-1/2 bg-white/20 blur-md" />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
    </button>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6])

  // Client-only render guard for Spline (prevents mount-unmount flicker/vanish)
  const [mounted, setMounted] = useState(false)
  const [splineEnabled, setSplineEnabled] = useState(true)
  const [sceneOk, setSceneOk] = useState(true)

  useEffect(() => {
    setMounted(true)

    // Disable Spline on very low-power or narrow screens as a safety fallback
    const mq = window.matchMedia('(max-width: 420px)')
    if (mq.matches) setSplineEnabled(false)

    // Preflight check: if scene URL is not accessible (403/404/CORS), fall back to static
    const controller = new AbortController()
    const checkScene = async () => {
      try {
        const res = await fetch(SCENE_URL, { method: 'GET', mode: 'cors', signal: controller.signal })
        if (!res.ok) {
          setSceneOk(false)
          setSplineEnabled(false)
        }
      } catch (_err) {
        setSceneOk(false)
        setSplineEnabled(false)
      }
    }
    checkScene()

    return () => controller.abort()
  }, [])

  const splineFallback = (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=60"
        alt="Artisan coffee"
        className="w-full h-full object-cover opacity-80"
      />
    </div>
  )

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden" style={{background: 'radial-gradient(1200px 600px at 70% 20%, rgba(216,167,155,0.15), transparent), radial-gradient(900px 500px at 20% 80%, rgba(199,154,99,0.12), transparent)',}}> 
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(245,237,226,1) 0%, rgba(250,248,242,1) 40%, rgba(245,237,226,1) 100%)'
        }} />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute -inset-20 bg-gradient-to-b from-transparent via-transparent to-[#F5EDE2]" />
      </div>

      <motion.div style={{ translateY, opacity }} className="absolute -right-24 -top-24 w-[760px] h-[760px]">
        {/* Subtle volumetric glow */}
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(216,167,155,0.15),rgba(199,154,99,0.08),transparent_70%)] blur-3xl" />
      </motion.div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center w-full max-w-7xl px-6 md:px-10">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-serif leading-[1.05] tracking-tight" style={{ color: '#3A2A1E', fontFamily: 'Playfair Display, ui-serif' }}>
            Modern Artisan Café
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-5 text-lg md:text-xl text-[#3A2A1E]/80">
            Warm, luxurious, and immersive. Crafted textures, soft cinematic lighting, and slow-living ambiance.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <GlossyButton>Reserve a Table</GlossyButton>
            <button className="rounded-full px-6 py-3 font-medium text-[#3A2A1E] border border-[#C79A63]/40 bg-white/60 backdrop-blur-md hover:bg-white/80 transition">View Menu</button>
          </motion.div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-[#3A2A1E]/70">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#C79A63]" />Single-origin beans</div>
            <div className="hidden md:flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#D8A79B]" />House pastries</div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(18,18,18,0.15)] bg-gradient-to-br from-[#F5EDE2] to-[#FAF8F2]">
            {/* 3D hero scene with robust fallbacks */}
            {mounted && splineEnabled && sceneOk ? (
              <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-[#3A2A1E]/60">Loading scene…</div>}>
                <ErrorBoundary fallback={splineFallback} onError={() => { setSplineEnabled(false) }}>
                  <Spline scene={SCENE_URL} />
                </ErrorBoundary>
              </Suspense>
            ) : (
              splineFallback
            )}

            {/* Steam overlay */}
            <div className="pointer-events-none absolute -left-10 -top-10 right-0 bottom-0">
              <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: [0.15, 0.3, 0.18] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_30%_10%,rgba(255,255,255,0.25),transparent)] blur-3xl" />
            </div>
          </div>
          {/* Floating beans/pastry accents */}
          <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute -left-6 -bottom-6 w-28 h-28 rounded-2xl bg-[#3A2A1E] shadow-2xl shadow-[#3A2A1E]/40 rotate-6">
            <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-[#3A2A1E] to-[#2b1e14]" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </motion.div>
        </div>
      </div>

      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_300px_at_50%_120%,rgba(18,18,18,0.25),transparent)]" />
    </section>
  )
}
