import { Heart, MapPin } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
        <button type="button" aria-label={`Save ${product.title}`} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-slate-500 shadow-sm transition hover:text-rose-500">
          <Heart size={17} />
        </button>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700">{product.condition}</span>
      </div>
      <div className="p-4">
        <div className="mb-1.5 flex items-start justify-between gap-3">
          <h3 className="font-display text-[15px] font-bold leading-snug text-ink">{product.title}</h3>
          <span className="shrink-0 font-display text-base font-extrabold text-emerald-700">${product.price}</span>
        </div>
        <span className="inline-flex rounded-full bg-mint px-2.5 py-1 text-[11px] font-semibold text-emerald-700">{product.category}</span>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-muted">
          <span>{product.seller}</span>
          <span className="inline-flex items-center gap-1"><MapPin size={13} />{product.location}</span>
        </div>
      </div>
    </article>
  )
}
