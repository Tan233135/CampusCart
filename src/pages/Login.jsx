import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [showNotice, setShowNotice] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowNotice(true)
  }

  return (
    <section className="flex min-h-[70vh] items-center bg-canvas px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-soft md:grid-cols-2">
        <div className="relative hidden flex-col justify-between overflow-hidden bg-emerald-700 p-10 text-white md:flex lg:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[36px] border-white/10" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="relative">
            <img src="/campuscart_logo.svg" alt="" className="h-14 w-14 rounded-2xl object-cover" />
            <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-emerald-100">Good finds. Better campus life.</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-0.05em] lg:text-5xl">
              Your campus community is just around the corner.
            </h1>
          </div>
          <p className="relative mt-12 flex items-center gap-2 text-sm text-emerald-50">
            <ShieldCheck size={18} />
            A marketplace made for student life.
          </p>
        </div>

        <div className="p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Welcome back</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.05em] text-ink">Log in to CampusCart</h2>
          <p className="mt-2 text-sm leading-6 text-muted">Enter your details to pick up where you left off.</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@university.edu"
                className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label htmlFor="password" className="text-sm font-semibold text-ink">Password</label>
                <span className="text-xs font-medium text-muted">Forgot password?</span>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-12 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute inset-y-0 right-0 grid w-12 place-items-center text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {showNotice && (
              <p role="status" className="rounded-xl bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
                Login isn’t connected yet. Your details have not been sent.
              </p>
            )}

            <button type="submit" className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700">
              Log in <ArrowRight size={17} />
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-muted">
            New to CampusCart?{' '}
            <Link to="/marketplace" className="font-bold text-emerald-700 hover:text-emerald-500">Explore the marketplace</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
