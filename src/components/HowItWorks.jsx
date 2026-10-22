import { ArrowDownLeft, Handshake, Search, ShoppingBag } from 'lucide-react'

const steps = [
  { number: '01', title: 'Find your thing', description: 'Browse local listings for useful finds and little surprises.', icon: Search },
  { number: '02', title: 'Make it yours', description: 'Connect with the seller and agree on a fair price.', icon: ShoppingBag },
  { number: '03', title: 'Meet & exchange', description: 'Pick a public campus spot and enjoy your new-to-you find.', icon: Handshake },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Easy as one, two, three</p>
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.055em] text-ink sm:text-4xl">Campus commerce, made easy.</h2>
          </div>
          <ArrowDownLeft className="hidden text-emerald-500 sm:block" size={36} />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <article key={number} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-extrabold tracking-widest text-emerald-500">{number}</span>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-emerald-700"><Icon size={20} /></span>
              </div>
              <h3 className="mt-8 font-display text-xl font-extrabold tracking-tight text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
