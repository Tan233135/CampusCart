import { ArrowRight, Handshake, HeartHandshake, Search, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  { number: '01', title: 'Discover', description: 'Explore a growing collection of student listings, from course essentials to room finds and homemade treats.', icon: Search },
  { number: '02', title: 'Choose', description: 'Found something you love? Check the details and reach out to the student who listed it.', icon: ShoppingBag },
  { number: '03', title: 'Connect', description: 'Talk through the price, ask questions, and agree on a time and public campus meeting spot.', icon: Handshake },
  { number: '04', title: 'Exchange', description: 'Meet up, make the exchange, and help something useful find a new home.', icon: Sparkles },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-mint py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Simple, local, thoughtful</p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.065em] text-ink sm:text-6xl">Good things happen<br />when campus connects.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">From spotting a useful find to meeting its next owner, CampusCart keeps the whole experience close to home.</p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Four easy steps</p>
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.055em] text-ink sm:text-4xl">From scroll to smile.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-extrabold tracking-widest text-emerald-500">{number}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-emerald-700"><Icon size={20} /></span>
                </div>
                <h3 className="mt-7 font-display text-xl font-extrabold text-ink">{title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#ECFDF5] p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm"><ShieldCheck size={22} /></span>
            <div>
              <h2 className="font-display text-xl font-extrabold text-ink">A safer exchange starts with you.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Choose a public, well-lit campus location, let someone know your plans, and confirm the details before meeting. Trust your instincts and take your time.</p>
            </div>
          </div>
          <HeartHandshake className="hidden shrink-0 text-emerald-500 md:block" size={42} />
        </div>
        <div className="mx-auto mt-8 max-w-7xl text-center">
          <Link to="/marketplace" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">Explore the marketplace <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
