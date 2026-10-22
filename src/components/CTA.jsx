import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="bg-canvas px-5 py-16 text-center sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Your campus, your city</p>
        <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.06em] text-ink sm:text-5xl">Find something good.<br /><span className="text-emerald-500">Sell something useful.</span></h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-muted sm:text-base">Good things are already happening around you. Come be a part of it.</p>
        <Link to="/marketplace" className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-700">Join the marketplace <ArrowRight size={16} /></Link>
      </div>
    </section>
  )
}
