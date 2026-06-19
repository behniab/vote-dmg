'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import {
  ChevronDown, Heart, Home, Shield, DollarSign, Trash2,
  Users, Star, Mail, Phone, MapPin, ArrowRight, CheckCircle,
  Zap, Scale, Baby, Building2, TreePine, Landmark
} from 'lucide-react'

const ISSUES = [
  {
    icon: DollarSign,
    title: 'Lower Taxes & Economic Freedom',
    body: 'Cut the tax burden on working families and small businesses. Shift to supply-side economics that rewards work, investment, and entrepreneurship — keeping more money in your pocket where it belongs.',
    color: 'text-[#f5b731]',
    bg: 'bg-[#f5b731]/10',
    border: 'border-[#f5b731]/20',
  },
  {
    icon: Trash2,
    title: 'Clean, Safe Streets',
    body: 'District 46 deserves to be clean and beautiful. Daniel is committed to eliminating graffiti, clearing illegal dumping, and restoring pride in our neighborhoods — starting with Wahiawa.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  {
    icon: Home,
    title: 'Road & Infrastructure Repair',
    body: 'Crumbling roads and neglected infrastructure hurt every resident. Repairing roads, maintaining Wahiawa Lake, and investing in local infrastructure is a core priority — not a promise, a plan.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    icon: Baby,
    title: 'Parental & Family Rights',
    body: 'Parents — not the government — know what is best for their children. Daniel will fight to protect parental rights in education, healthcare decisions, and family life. Government should liberate families, not control them.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
  },
  {
    icon: Scale,
    title: 'Eliminate Corruption & Restore Accountability',
    body: 'Dark money, union influence, and Citizens United have poisoned our politics. Daniel refuses corporate PAC money and will champion real campaign finance reform — returning government to the people.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    icon: Landmark,
    title: 'Term Limits & Limited Government',
    body: 'Career politicians get comfortable while communities stagnate. Daniel supports hard term limits, a leaner government that stays in its lane, and protecting individual liberty from government overreach.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
  {
    icon: Shield,
    title: 'State & Individual Rights',
    body: 'Hawaii\'s communities are unique. Decisions affecting our families, our land, and our schools should be made here — not in Washington D.C. Daniel believes in Hawaii\'s right to govern itself.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Zap,
    title: 'Smart Energy for Hawaii',
    body: 'Hawaii must transition away from imported fossil fuels with practical, affordable energy solutions. Daniel supports waste-to-energy technology, local energy independence, and policies that lower utility bills for residents.',
    color: 'text-yellow-300',
    bg: 'bg-yellow-300/10',
    border: 'border-yellow-300/20',
  },
]

const VOLUNTEER_INTERESTS = [
  'Door knocking',
  'Phone banking',
  'Event volunteering',
  'Yard signs',
  'Social media',
  'Fundraising',
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#f5b731]/10 border border-[#f5b731]/30 text-[#f5b731] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
      {children}
    </div>
  )
}

export default function HomePage() {
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', phone: '', interests: [] as string[] })
  const [volunteerSent, setVolunteerSent] = useState(false)
  const [volunteerLoading, setVolunteerLoading] = useState(false)

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [contactSent, setContactSent] = useState(false)
  const [contactLoading, setContactLoading] = useState(false)

  function toggleInterest(i: string) {
    setVolunteerForm(f => ({
      ...f,
      interests: f.interests.includes(i) ? f.interests.filter(x => x !== i) : [...f.interests, i],
    }))
  }

  async function submitVolunteer(e: React.FormEvent) {
    e.preventDefault()
    setVolunteerLoading(true)
    await fetch('/api/volunteer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(volunteerForm) })
    setVolunteerSent(true)
    setVolunteerLoading(false)
  }

  async function submitContact(e: React.FormEvent) {
    e.preventDefault()
    setContactLoading(true)
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(contactForm) })
    setContactSent(true)
    setContactLoading(false)
  }

  const inputCls = 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#f5b731]/50 focus:bg-white/8 transition text-sm'

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/photos/hero.jpg"
          alt="Daniel Michael Gabriel"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Stars / particles overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/40 via-transparent to-[#0a0f1e]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#c8102e]/80 border border-red-500/30 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6 animate-fade-in">
              ★ Republican · District 46 · Hawaii
            </div>

            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-4 animate-fade-up">
              Daniel
              <br />
              <span className="gold-gradient">Michael</span>
              <br />
              Gabriel
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 font-light mb-3 animate-fade-up delay-100">
              State Representative · District 46
            </p>

            <div className="w-16 h-1 bg-[#f5b731] rounded mb-6 animate-fade-up delay-200" />

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl animate-fade-up delay-300">
              Born and raised in Wahiawa. Husband, father, and community leader fighting to return government to the people — with lower taxes, cleaner streets, and real accountability.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <a href="#donate"
                className="flex items-center gap-2 bg-[#c8102e] hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition shadow-2xl shadow-red-900/40 hover:shadow-red-600/30">
                Donate to the Campaign <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#volunteer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition backdrop-blur-sm">
                Get Involved
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ─── MISSION STRIP ─── */}
      <section className="bg-[#c8102e] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { stat: 'District 46', label: 'Wahiawa & Surrounding Communities' },
              { stat: 'Republican', label: 'Common Sense Conservative Values' },
              { stat: '100%', label: 'Funded by the People — No PAC Money' },
            ].map(({ stat, label }) => (
              <div key={stat} className="py-2">
                <p className="text-3xl font-bold text-white font-serif">{stat}</p>
                <p className="text-red-100 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-28 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#f5b731]/20 to-[#c8102e]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/photos/family.jpg"
                  alt="Daniel Gabriel with his family"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0f1e]/90 to-transparent p-6">
                  <p className="text-white font-semibold">Daniel with his wife and children</p>
                  <p className="text-gray-400 text-sm">Proud Wahiawa family</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <SectionLabel><Heart className="w-3.5 h-3.5" /> About Daniel</SectionLabel>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                A Son of District 46,<br />
                <span className="gold-gradient">Fighting for Its Future</span>
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                <p>
                  Daniel Michael Gabriel is a husband, father of two, and lifelong resident of the Wahiawa community. He grew up understanding the challenges that working families face — and he&apos;s running for State Representative because he believes District 46 deserves leadership that actually listens.
                </p>
                <p>
                  As a community coach and local business advocate, Daniel has spent years investing in the next generation. He coaches youth baseball, mentors young people, and believes that strong families are the foundation of a strong Hawaii.
                </p>
                <p>
                  Daniel is a moderate conservative who believes in individual liberty, parental rights, and a government that works <em>for</em> the people — not special interests. He refuses to take corporate PAC money and is committed to transparency and accountability in every decision he makes.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Wahiawa Resident', sub: 'Born and raised in District 46' },
                  { label: 'Family Man', sub: 'Husband & father of two' },
                  { label: 'Community Coach', sub: 'Youth baseball & mentorship' },
                  { label: 'Pro-Life', sub: 'Defender of every life' },
                ].map(({ label, sub }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── ISSUES ─── */}
      <section id="issues" className="py-28 bg-[#0d1426]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Star className="w-3.5 h-3.5" /> Platform</SectionLabel>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
              What Daniel Stands For
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Common sense policies built around the real needs of District 46 residents — not special interest donors or party bosses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ISSUES.map(({ icon: Icon, title, body, color, bg, border }) => (
              <div key={title} className={`${bg} border ${border} rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200 group`}>
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4 border ${border}`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-white font-bold text-base mb-3 leading-snug">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENERGY / WAHIAWA SPOTLIGHT ─── */}
      <section className="py-24 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel><Zap className="w-3.5 h-3.5" /> Energy Independence</SectionLabel>
              <h2 className="font-serif text-4xl font-bold text-white mb-6 leading-tight">
                A Smarter Energy Future<br />
                <span className="gold-gradient">for Hawaii</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hawaii&apos;s dependence on imported fossil fuels drives up energy costs for every family and business in District 46. Daniel supports practical, community-based energy solutions — including waste-to-energy technology that turns our landfill problem into a power solution.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Rather than ideological mandates from Honolulu, Daniel believes in giving communities the tools and freedom to develop the energy mix that works for them — lowering bills and reducing our environmental footprint at the same time.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Waste-to-Energy', 'Lower Utility Bills', 'Local Control', 'Practical Solutions'].map(tag => (
                  <span key={tag} className="bg-[#f5b731]/10 border border-[#f5b731]/20 text-[#f5b731] text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/photos/energy.jpg"
                alt="Waste to energy system diagram"
                width={700}
                height={450}
                className="object-contain bg-white w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY ─── */}
      <section id="community" className="py-28 bg-[#0d1426]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><TreePine className="w-3.5 h-3.5" /> Community</SectionLabel>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
              Rooted in District 46
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Leadership isn&apos;t just about policy — it&apos;s about showing up every day for the people you serve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Baseball photo */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/photos/community.jpg"
                alt="Daniel coaching youth baseball"
                width={700}
                height={500}
                className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg">Coaching the Next Generation</p>
                <p className="text-gray-300 text-sm">Daniel coaches local youth baseball — because strong communities start with strong kids.</p>
              </div>
            </div>

            {/* House / community investment */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/photos/community2.jpg"
                alt="Hawaii community"
                width={700}
                height={500}
                className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg">Investing in District 46</p>
                <p className="text-gray-300 text-sm">Protecting our community&apos;s character, property values, and quality of life for every resident.</p>
              </div>
            </div>
          </div>

          {/* Community priorities */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Trash2, title: 'Wahiawa Cleanup', desc: 'Eliminate graffiti, illegal dumping, and blight from our streets and parks.' },
              { icon: Home, title: 'Wahiawa Lake', desc: 'Restore and maintain Wahiawa Lake as a community treasure for generations to come.' },
              { icon: Building2, title: 'Road Repair', desc: 'Fix District 46\'s crumbling roads and ensure infrastructure dollars reach our community.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#f5b731]/30 transition">
                <div className="w-12 h-12 bg-[#f5b731]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#f5b731]" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DONATE ─── */}
      <section id="donate" className="py-24 bg-[#c8102e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <SectionLabel><Heart className="w-3.5 h-3.5 text-white" /></SectionLabel>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Help Us Win District 46
          </h2>
          <p className="text-red-100 text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            Daniel refuses corporate PAC money. Every dollar comes from real people who believe in real change. Your contribution — large or small — fuels this campaign.
          </p>
          <p className="text-red-200 text-sm mb-10">
            Contributions are not tax-deductible. Max individual contribution per election: $2,000.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['$25', '$50', '$100', '$250', '$500'].map(amt => (
              <a key={amt} href="#donate"
                className="bg-white text-[#c8102e] font-bold text-lg px-8 py-3 rounded-xl hover:bg-red-50 transition shadow-lg">
                {amt}
              </a>
            ))}
          </div>
          <a href="mailto:daniel@votedmg.com?subject=Donation Inquiry"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition">
            Contact Us About Donating <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-red-200 text-xs mt-6">Paid for by Friends of Daniel Gabriel</p>
        </div>
      </section>

      {/* ─── VOLUNTEER ─── */}
      <section id="volunteer" className="py-28 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel><Users className="w-3.5 h-3.5" /> Join the Team</SectionLabel>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Involved
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Campaigns are won by people power. Whether you can give an hour or a hundred, we need you on the ground.
            </p>
          </div>

          {volunteerSent ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">You&apos;re On the Team!</h3>
              <p className="text-gray-400">We&apos;ll be in touch soon with next steps. Mahalo for your support!</p>
            </div>
          ) : (
            <form onSubmit={submitVolunteer} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                  <input required value={volunteerForm.name} onChange={e => setVolunteerForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="John Doe" className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                  <input required type="email" value={volunteerForm.email} onChange={e => setVolunteerForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="john@email.com" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Phone</label>
                <input type="tel" value={volunteerForm.phone} onChange={e => setVolunteerForm(f => ({ ...f, phone: e.target.value }))}
                  placeholder="(808) 555-0100" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">How would you like to help?</label>
                <div className="flex flex-wrap gap-3">
                  {VOLUNTEER_INTERESTS.map(i => (
                    <button key={i} type="button" onClick={() => toggleInterest(i)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                        volunteerForm.interests.includes(i)
                          ? 'bg-[#f5b731] border-[#f5b731] text-[#0a0f1e]'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:border-[#f5b731]/40'
                      }`}>
                      {i}
                    </button>
                  ))}
                </div>
              </div>
              <button type="submit" disabled={volunteerLoading}
                className="w-full bg-[#f5b731] hover:bg-[#e8a820] text-[#0a0f1e] font-bold py-4 rounded-xl text-lg transition disabled:opacity-60 flex items-center justify-center gap-2">
                {volunteerLoading ? 'Submitting...' : <>Join the Campaign <ArrowRight className="w-5 h-5" /></>}
              </button>
            </form>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-28 bg-[#0d1426]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <SectionLabel><Mail className="w-3.5 h-3.5" /> Contact</SectionLabel>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Talk to<br />
                <span className="gold-gradient">the Campaign</span>
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                Have a question, concern, or idea for District 46? Daniel&apos;s team wants to hear from you. Real people answer every message.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'daniel@votedmg.com' },
                  { icon: Phone, label: 'Phone', value: '(808) 555-0146' },
                  { icon: MapPin, label: 'District', value: 'District 46 · Wahiawa, Hawaii' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 text-gray-300">
                    <div className="w-11 h-11 bg-[#f5b731]/10 border border-[#f5b731]/20 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#f5b731]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
                      <p className="text-white font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {contactSent ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-gray-400">We&apos;ll get back to you within 24 hours. Mahalo!</p>
                </div>
              ) : (
                <form onSubmit={submitContact} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name *</label>
                    <input required value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Full name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                    <input required type="email" value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Message *</label>
                    <textarea required rows={5} value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Share your thoughts, questions, or concerns about District 46..."
                      className={inputCls + ' resize-none'} />
                  </div>
                  <button type="submit" disabled={contactLoading}
                    className="w-full bg-[#c8102e] hover:bg-red-600 text-white font-bold py-4 rounded-xl text-lg transition disabled:opacity-60 flex items-center justify-center gap-2">
                    {contactLoading ? 'Sending...' : <>Send Message <ArrowRight className="w-5 h-5" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#060b18] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif font-bold text-xl text-white">Daniel Michael Gabriel</p>
              <p className="text-gray-500 text-sm">Republican · Hawaii State Representative · District 46</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              {['#about','#issues','#community','#volunteer','#contact'].map(href => (
                <a key={href} href={href} className="hover:text-[#f5b731] transition capitalize">
                  {href.replace('#','')}
                </a>
              ))}
            </div>
          </div>
          <div className="section-divider my-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>Paid for by Friends of Daniel Gabriel. Not authorized by any candidate or candidate&apos;s committee.</p>
            <p>© {new Date().getFullYear()} Vote Daniel Michael Gabriel · All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
