import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxLayers() {
  const { scrollY } = useScroll()
  const layer1 = useTransform(scrollY, [0, 600], [0, -60])
  const layer2 = useTransform(scrollY, [0, 600], [0, -30])
  const layer3 = useTransform(scrollY, [0, 600], [0, -12])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: layer1 }} className="absolute -right-40 -top-40 w-[800px] h-[800px] rounded-full blur-3xl" 
        style={{ y: layer1, background: 'radial-gradient(circle at 30% 30%, rgba(216,167,155,0.20), transparent 60%)' }} />
      <motion.div style={{ y: layer2, background: 'radial-gradient(circle at 70% 70%, rgba(199,154,99,0.18), transparent 60%)' }} className="absolute -left-40 -bottom-40 w-[700px] h-[700px] rounded-full blur-3xl" />
      <motion.div style={{ y: layer3, background: 'radial-gradient(circle at 50% 50%, rgba(58,42,30,0.10), transparent 70%)' }} className="absolute left-1/3 top-1/2 w-[600px] h-[600px] rounded-full blur-2xl" />
    </div>
  )
}
