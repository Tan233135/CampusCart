import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { categories, products } from '../data/products.js'

export default function Marketplace() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') ?? '')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesSearch = !normalizedSearch || product.title.toLowerCase().includes(normalizedSearch)
      return matchesCategory && matchesSearch
    })
  }, [search, selectedCategory])

  const updateSearch = (event) => {
    const value = event.target.value
    setSearch(value)
    const nextParams = new URLSearchParams(searchParams)
    if (value.trim()) nextParams.set('search', value)
    else nextParams.delete('search')
    setSearchParams(nextParams, { replace: true })
  }

  return (
    <section className="min-h-[70vh] bg-canvas py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Made for your campus</p>
          <h1 className="font-display text-4xl font-extrabold tracking-[-0.06em] text-ink sm:text-5xl">The marketplace.</h1>
          <p className="mt-4 text-base leading-7 text-muted">Find your next favorite thing, right around the corner.</p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="flex min-h-[52px] flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-5 shadow-sm">
            <Search size={18} className="shrink-0 text-slate-400" />
            <input value={search} onChange={updateSearch} placeholder="Search listings..." aria-label="Search listings" className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" />
          </label>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted"><SlidersHorizontal size={15} /> Filter by</div>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setSelectedCategory(category)} className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-bold transition ${selectedCategory === category ? 'bg-emerald-500 text-white' : 'bg-white text-slate-600 shadow-sm hover:bg-mint hover:text-emerald-700'}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="mb-5 mt-8 flex items-center justify-between">
          <h2 className="font-display text-lg font-extrabold text-ink">Around your campus</h2>
          <span className="text-xs font-medium text-muted">{filteredProducts.length} {filteredProducts.length === 1 ? 'listing' : 'listings'}</span>
        </div>
        {filteredProducts.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h3 className="font-display text-xl font-extrabold text-ink">No finds just yet</h3>
            <p className="mt-2 text-sm text-muted">Try another search or category. Your next great find is out there.</p>
            <button type="button" onClick={() => { setSearch(''); setSelectedCategory('All'); setSearchParams({}, { replace: true }) }} className="mt-5 rounded-full bg-mint px-5 py-2.5 text-sm font-bold text-emerald-700 hover:bg-emerald-100">Clear filters</button>
          </div>
        )}
      </div>
    </section>
  )
}
