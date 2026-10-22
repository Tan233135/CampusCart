import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navClass = ({ isActive }) =>
  `text-sm font-semibold transition-colors ${isActive ? 'text-emerald-700' : 'text-slate-600 hover:text-ink'}`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/90 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Main navigation">
        <Link
          to="/"
          onClick={() => {
            closeMenu()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2.5"
          aria-label="CampusCart home"
        >
          <img src="/campuscart_logo.svg" alt="" className="h-12 w-12 rounded-xl object-cover" />
          <span className="font-display text-[19px] font-extrabold tracking-[-0.06em] text-ink">Campus<span className="text-emerald-500">Cart</span></span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/marketplace" className={navClass}>Marketplace</NavLink>
          <NavLink to="/how-it-works" className={navClass}>How it works</NavLink>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <Link to="/login" className="text-sm font-semibold text-slate-600 transition-colors hover:text-ink">Log in</Link>
          <Link to="/marketplace" className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700">Join CampusCart</Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl text-ink hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => `rounded-xl px-3 py-3 text-sm font-semibold ${isActive ? 'bg-mint text-emerald-700' : 'text-slate-600'}`}>Home</NavLink>
            <NavLink to="/marketplace" onClick={closeMenu} className={({ isActive }) => `rounded-xl px-3 py-3 text-sm font-semibold ${isActive ? 'bg-mint text-emerald-700' : 'text-slate-600'}`}>Marketplace</NavLink>
            <NavLink to="/how-it-works" onClick={closeMenu} className={({ isActive }) => `rounded-xl px-3 py-3 text-sm font-semibold ${isActive ? 'bg-mint text-emerald-700' : 'text-slate-600'}`}>How it works</NavLink>
            <Link to="/login" onClick={closeMenu} className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-600">Log in</Link>
            <Link to="/marketplace" onClick={closeMenu} className="mt-2 rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-white">Join CampusCart</Link>
          </div>
        </div>
      )}
    </header>
  )
}
