import { ArrowRight, BookOpen, Package, ShoppingBag, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
  { title: 'Study materials', description: 'Books and notes from students in your classes.', icon: BookOpen },
  { title: 'Tech & gadgets', description: 'Useful tech, ready for its next owner.', icon: Package },
  { title: 'Hundreds of listings', description: 'Something new pops up every day.', icon: ShoppingBag },
  { title: 'Food & snacks', description: 'Treats made and shared close by.', icon: Utensils },
]

export default function BuyerSection() {
  return (
    <section className="overflow-hidden bg-mint py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">A better kind of shopping</p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.06em] text-ink sm:text-5xl">Your next buyer<br /><span className="text-emerald-500">is probably on campus.</span></h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted">The best finds are closer than you think. Discover useful things, meet the people behind them, and keep good stuff moving.</p>
          <Link to="/marketplace" className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">Start buying <ArrowRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {highlights.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-white/80 bg-white p-5 shadow-sm sm:min-h-44 sm:p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-emerald-700"><Icon size={19} /></span>
              <h3 className="mt-5 font-display text-base font-extrabold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
