import { ArrowUpRight, BookOpen, Camera, Shirt, Utensils, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  { title: 'Books', description: 'Pass on a good read.', icon: BookOpen, image: 'photo-1507842217343-583bb7270b66', size: 'md:col-span-2 md:row-span-2' },
  { title: 'Electronics', description: 'Tech worth sharing.', icon: Zap, image: 'photo-1498049794561-7780e7231661', size: '' },
  { title: 'Stationery', description: 'Make study time yours.', icon: Camera, image: 'photo-1455390582262-044cdead277a', size: '' },
  { title: 'Food', description: 'A little treat, nearby.', icon: Utensils, image: 'photo-1565299624946-b28f40a0ae38', size: '' },
  { title: 'Fashion', description: 'Find your next favorite.', icon: Shirt, image: 'photo-1483985988355-763728e1935b', size: '' },
  { title: 'Other', description: 'The unexpected finds.', icon: ArrowUpRight, image: 'photo-1490312278390-ab64016e0aa9', size: '' },
]

export default function CategorySection() {
  return (
    <section className="bg-canvas py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Browse around</p>
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.055em] text-ink sm:text-4xl">A little bit of everything.</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-muted sm:text-base">From last-minute lecture notes to the perfect room refresh. Find useful things from students who get it.</p>
        </div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4">
          {categories.map(({ title, description, icon: Icon, image, size }) => (
            <Link key={title} to="/marketplace" className={`group relative overflow-hidden rounded-2xl bg-slate-300 sm:rounded-3xl ${size}`}>
              <img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=1000&q=85`} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-4 text-white sm:p-5">
                <div>
                  <span className="mb-2 inline-grid h-8 w-8 place-items-center rounded-xl bg-white/20 backdrop-blur"><Icon size={16} /></span>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-xs text-white/80">{description}</p>
                </div>
                <ArrowUpRight size={18} className="mb-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
