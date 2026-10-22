import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function MarketplacePreview() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const visibleProducts = useMemo(() => {
    const filtered = selectedCategory === 'All' ? products : products.filter((product) => product.category === selectedCategory)
    return filtered.slice(0, 4)
  }, [selectedCategory])

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Fresh on campus</p>
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.055em] text-ink sm:text-4xl">Worth a closer look.</h2>
          </div>
          <Link to="/marketplace" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:gap-3">See everything <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setSelectedCategory(category)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${selectedCategory === category ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-mint hover:text-emerald-700'}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  )
}
