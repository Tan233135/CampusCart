import { Link } from 'react-router-dom'

const columns = [
  { title: 'Explore', links: [['Marketplace', '/marketplace'], ['How it works', '/how-it-works'], ['Sell on CampusCart', '/marketplace']] },
  { title: 'Company', links: [['About us', '/'], ['Contact', '/'], ['Careers', '/']] },
  { title: 'Good to know', links: [['Safety first', '/how-it-works'], ['Privacy', '/'], ['Terms', '/']] },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <img src="/campuscart_logo.svg" alt="" className="h-12 w-12 rounded-xl object-cover" />
            <span className="font-display text-lg font-extrabold tracking-[-0.06em]">Campus<span className="text-emerald-500">Cart</span></span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">A little marketplace with a lot of campus spirit. Good finds, passed around.</p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-ink">{column.title}</h3>
            <ul className="space-y-3">
              {column.links.map(([label, to]) => <li key={label}><Link to={to} className="text-sm text-muted transition hover:text-emerald-700">{label}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-slate-400 sm:px-8 lg:px-10">© {new Date().getFullYear()} CampusCart. Made for campus life.</div>
      </div>
    </footer>
  )
}
