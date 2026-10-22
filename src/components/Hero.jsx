import { useState } from 'react'
import { ArrowRight, Search, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const searchMarketplace = (event) => {
    event.preventDefault()
    const search = new URLSearchParams()
    if (query.trim()) search.set('search', query.trim())
    navigate(`/marketplace${search.size ? `?${search}` : ''}`)
  }

  return (
    <section className="overflow-hidden bg-white pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.8rem)] font-extrabold leading-[1.04] tracking-[-0.075em] text-ink">
            Good finds.<br /><span className="text-emerald-500">Better campus life.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Find what you need, pass along what you don’t, and make campus life a little more you.
          </p>

          <form onSubmit={searchMarketplace} className="mx-auto mt-8 flex max-w-2xl items-center rounded-full border border-slate-200 bg-white p-1.5 shadow-[0_12px_40px_rgba(15,23,42,0.07)]">
            <Search size={19} className="ml-4 shrink-0 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What are you looking for?"
              aria-label="Search marketplace"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-ink outline-none placeholder:text-slate-400 sm:px-4"
            />
            <button type="submit" className="shrink-0 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 sm:px-7">Search</button>
          </form>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => navigate('/marketplace')} className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
              Explore marketplace <ArrowRight size={16} />
            </button>
            <button type="button" onClick={() => navigate('/marketplace')} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-ink transition hover:border-emerald-300 hover:bg-mint">Start selling</button>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="relative h-[280px] overflow-hidden rounded-[28px] border-[6px] border-white bg-slate-200 shadow-soft sm:h-[390px] lg:h-[470px]">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=90"
              alt="Students spending time together on campus"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/5 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-10 sm:left-10">
              <p className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-4xl">Good stuff travels<br />fast around campus.</p>
            </div>
          </div>
          <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3.5 py-2 text-xs font-bold text-emerald-700 shadow-sm sm:right-8 sm:top-8">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live campus
          </div>
        </div>
      </div>
    </section>
  )
}
