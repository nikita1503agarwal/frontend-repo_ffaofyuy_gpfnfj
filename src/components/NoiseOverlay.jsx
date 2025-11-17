export default function NoiseOverlay(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 mix-blend-soft-light opacity-[0.06]" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
  )
}
