import { useEffect, useState } from 'react'

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const onLeave = () => setVisible(false)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [visible])

  const gradient = `radial-gradient(240px 240px at ${pos.x}px ${pos.y}px, rgba(199,154,99,0.16), rgba(216,167,155,0.10) 40%, transparent 70%)`

  return (
    <div
      aria-hidden
      style={{ backgroundImage: visible ? gradient : 'none' }}
      className="pointer-events-none fixed inset-0 z-[5] transition-opacity duration-300 opacity-100"
    />
  )
}
