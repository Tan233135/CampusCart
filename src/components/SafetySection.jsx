import { HeartHandshake, MapPin, MessageCircle, ShieldCheck } from 'lucide-react'

const principles = [
  { title: 'Student-first', description: 'Made for your campus community.', icon: HeartHandshake },
  { title: 'Trade with care', description: 'Trust your instincts and take your time.', icon: ShieldCheck },
  { title: 'Clear exchanges', description: 'Agree on details before you meet.', icon: MessageCircle },
  { title: 'Keep it local', description: 'Meet somewhere public on campus.', icon: MapPin },
]

export default function SafetySection() {
  return (
    <section className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-[#ECFDF5] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">A little peace of mind</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.055em] text-ink sm:text-4xl">Good deals feel<br />better when they feel safe.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted">A few thoughtful habits help make every campus exchange feel comfortable, clear, and community-minded.</p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2">
            {principles.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-emerald-700 shadow-sm"><Icon size={18} /></span>
                <div><h3 className="text-sm font-bold text-ink">{title}</h3><p className="mt-1 text-xs leading-5 text-muted">{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
