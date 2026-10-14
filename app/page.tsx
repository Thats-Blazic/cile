'use client'

import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Bath,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  House,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessagesSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

const phoneNumber = '063 699 225'
const phoneHref = 'tel:063699225'

const services = [
  ['Popravka kvarova', 'Otklanjanje kvarova na vodovodnim instalacijama, slavinama, ventilima i cevima.', Wrench],
  ['Otpušavanje odvoda', 'Rešavanje problema sa zapušenim sudoperama, lavaboom i drugim odvodima.', Droplets],
  ['Montaža slavina i sanitarija', 'Ugradnja i zamena slavina, lavaboa, WC šolja i ostale sanitarne opreme.', Bath],
  ['Vodovodne instalacije', 'Postavljanje, zamena i adaptacija vodovodnih cevi i priključaka.', ZapierIcon],
  ['Montaža bojlera', 'Montaža i zamena bojlera i pripadajućih vodovodnih priključaka.', Sparkles],
  ['Renoviranje kupatila', 'Vodoinstalaterski radovi prilikom renoviranja i modernizacije kupatila.', House],
] as const

function ZapierIcon(props: React.ComponentProps<typeof Wrench>) { return <Wrench {...props} /> }

const faqs = [
  ['Koje vodoinstalaterske usluge pružate?', 'Pružamo pomoć pri popravkama kvarova, otpušavanju odvoda, montaži sanitarija i bojlera, vodovodnim instalacijama i radovima tokom renoviranja kupatila.'],
  ['Da li je moguće zakazati dolazak majstora?', 'Termin i mogućnost dolaska dogovaraju se direktno, u zavisnosti od vrste posla, lokacije i trenutne dostupnosti.'],
  ['Koliko košta vodoinstalaterska intervencija?', 'Cena zavisi od vrste i obima radova, potrebnog materijala i uslova na licu mesta. Detalje je najbolje dogovoriti pre početka radova.'],
  ['Da li obavljate montažu bojlera i sanitarija?', 'Da, montaža i zamena bojlera i sanitarne opreme spadaju u usluge koje možete dogovoriti sa nama.'],
  ['Da li radite renoviranje kupatila?', 'Vodoinstalaterske radove u okviru renoviranja kupatila moguće je dogovoriti prema konkretnom obimu posla.'],
  ['Na kojim lokacijama pružate usluge?', 'Radimo u Obrenovcu. Tačno područje dolaska potvrđujemo prilikom razgovora.'],
  ['Kako mogu da kontaktiram Vodoinstalatera Cile?', 'Pozovite nas na broj naveden na sajtu i opišite nam šta vam je potrebno.'],
]

function Logo() {
  return <a href="#pocetna" className="flex items-center gap-3" aria-label="Vodoinstalater Cile - početna">
    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#0878D1] text-white shadow-lg shadow-[#0878D1]/20"><Droplets className="size-6" fill="currentColor" /></span>
    <span className="leading-tight"><strong className="block text-[15px] font-extrabold tracking-tight text-[#153653]">Vodoinstalater Cile</strong><small className="block text-[10px] font-medium tracking-wide text-[#64748B]">POUZDANE USLUGE</small></span>
  </a>
}

const flowSteps = [
  { n: '01', title: 'Pozovite nas', copy: 'Objasnite nam kakav problem imate ili koji posao želite da obavite.', icon: Phone },
  { n: '02', title: 'Dogovorimo detalje', copy: 'Razgovaramo o potrebnim radovima, lokaciji i mogućnostima realizacije.', icon: MessagesSquare },
  { n: '03', title: 'Rešavamo problem', copy: 'Nakon dogovora, pristupamo poslu u skladu sa dogovorenim uslovima.', icon: Wrench },
] as const

function HowItWorks() {
  const [active, setActive] = useState(0)
  const paused = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      if (!paused.current) setActive((step) => (step + 1) % flowSteps.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#153653] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="how-orb absolute -left-24 top-6 size-72 rounded-full bg-[#0878D1]/30 blur-3xl" />
        <div className="how-orb how-orb-delay absolute -right-10 bottom-0 size-80 rounded-full bg-[#62D9E5]/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-xs font-extrabold tracking-[0.2em] text-[#62D9E5]">KAKO FUNKCIONIŠE</p>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Jednostavno od poziva do rešenja</h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#B7C9D7]">Tri koraka, bez formulara. Pozovete, dogovorimo posao i krećemo sa radom.</p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#D8F7FB]">
              <span className="relative flex size-2">
                <span className="how-ping absolute inline-flex size-full rounded-full bg-[#62D9E5] opacity-75" />
                <span className="relative size-2 rounded-full bg-[#62D9E5]" />
              </span>
              Obrenovac · svaki dan sem nedelje
            </div>
          </div>
          <ol
            className="relative grid gap-4 sm:grid-cols-3 sm:gap-5"
            onMouseLeave={() => { paused.current = false }}
          >
            {flowSteps.map((step, index) => {
              const Icon = step.icon
              const on = active === index
              return (
                <li
                  key={step.n}
                  onMouseEnter={() => { paused.current = true; setActive(index) }}
                  className={`relative rounded-2xl border p-5 transition duration-500 ${on ? 'border-[#62D9E5]/60 bg-white/10 shadow-[0_24px_50px_-28px_rgba(98,217,229,0.9)]' : 'border-white/10 bg-white/[0.04]'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`grid size-11 place-items-center rounded-full border text-sm font-extrabold transition duration-500 ${on ? 'how-pulse border-[#62D9E5] bg-[#62D9E5] text-[#153653]' : 'border-[#62D9E5]/70 bg-[#153653] text-[#62D9E5]'}`}>{step.n}</span>
                    <Icon className={`size-5 transition duration-500 ${on ? 'text-[#62D9E5]' : 'text-white/35'}`} />
                  </div>
                  <h3 className="mt-5 font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#B7C9D7]">{step.copy}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

const reviews = [
  { name: 'Milan Petrović', job: 'Popravka curenja', text: 'Slavina je curila danima. Cile je došao, objasnio šta je problem i sredio sve uredno. Kuhinja je ostala čista.' },
  { name: 'Jelena Marković', job: 'Montaža bojlera', text: 'Dogovorili smo termin telefonom i bojler je montiran kako treba. Komunikacija je bila jasna od početka do kraja.' },
  { name: 'Nikola Ilić', job: 'Otpušavanje odvoda', text: 'Sudopera se zapušila baš kad nam je trebalo. Problem je rešen brzo, bez nepotrebnog razvlačenja.' },
  { name: 'Ana Stojanović', job: 'Zamena slavine', text: 'Zamena slavine u kupatilu prošla je bez komplikacija. Sve je objašnjeno pre nego što je rad počeo.' },
  { name: 'Stefan Jovanović', job: 'Vodovodna instalacija', text: 'Trebalo je zameniti deo cevi. Posao je urađen pažljivo i ostalo je uredno nakon rada.' },
  { name: 'Marija Nikolić', job: 'Montaža sanitarija', text: 'Ugradnja sanitarija je dogovorena jasno i završena kako smo se dogovorili. Preporučujem za radove u kući.' },
]

function Reviews() {
  const [active, setActive] = useState(0)
  const paused = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      if (!paused.current) setActive((item) => (item + 1) % reviews.length)
    }, 2600)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="utisci" className="relative scroll-mt-24 overflow-hidden bg-[#F2F8FC]">
      <div aria-hidden className="how-orb pointer-events-none absolute -left-16 top-10 size-64 rounded-full bg-[#0878D1]/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="UTISCI" title="Šta kažu klijenti." description="Utisci nakon obavljenih vodoinstalaterskih radova." centered />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" onMouseLeave={() => { paused.current = false }}>
          {reviews.map((review, index) => {
            const on = active === index
            return (
              <figure
                key={review.name}
                onMouseEnter={() => { paused.current = true; setActive(index) }}
                className={`rounded-2xl border bg-white p-6 transition duration-500 ${on ? '-translate-y-1 border-[#9DD6E8] shadow-xl shadow-[#153653]/10' : 'border-[#E1ECF3] shadow-sm'}`}
              >
                <div className="flex gap-1 text-[#0878D1]" aria-hidden="true">{Array.from({ length: 5 }, (_, star) => <Star key={star} className="size-4 fill-current" />)}</div>
                <blockquote className="mt-4 text-sm leading-6 text-[#243447]">„{review.text}“</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-[#EAF7FB] text-sm font-extrabold text-[#0878D1]">{review.name[0]}</span>
                  <span>
                    <strong className="block text-sm text-[#153653]">{review.name}</strong>
                    <small className="text-xs font-medium text-[#64748B]">{review.job} · Obrenovac</small>
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FaqList() {
  const [open, setOpen] = useState(0)

  return (
    <section className="mx-auto max-w-[900px] px-5 py-20 lg:py-28">
      <SectionHeading eyebrow="FAQ" title="Često postavljana pitanja" centered />
      <div className="mt-10 overflow-hidden rounded-2xl border border-[#E1ECF3] bg-white shadow-sm">
        {faqs.map(([question, answer], index) => {
          const on = open === index
          return (
            <div key={question} className={`border-b border-[#E1ECF3] transition-colors duration-300 last:border-b-0 ${on ? 'bg-[#F7FBFE]' : 'hover:bg-[#F8FBFD]'}`}>
              <button className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-[#153653] sm:px-7" onClick={() => setOpen(on ? -1 : index)} aria-expanded={on}>
                <span className="transition-colors duration-300">{question}</span>
                <ChevronDown className={`size-5 shrink-0 text-[#0878D1] transition-transform duration-300 ${on ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className={`px-5 pb-5 text-sm leading-6 text-[#64748B] transition-all duration-300 sm:px-7 ${on ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'}`}>{answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) {
  return <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}><p className="mb-4 text-xs font-extrabold tracking-[0.2em] text-[#0878D1]">{eyebrow}</p><h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#153653] sm:text-4xl lg:text-[46px] lg:leading-[1.08]">{title}</h2>{description && <p className="mt-5 text-base leading-7 text-[#64748B]">{description}</p>}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    document.querySelectorAll('main > section').forEach((section, index) => {
      if (index > 0) section.classList.add('section-reveal')
    })
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const sections = document.querySelectorAll('main > section.section-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('section-in')
      })
    }, { threshold: 0.12 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <main id="pocetna" className="min-h-screen overflow-hidden bg-white text-[#243447]">
    <header className="sticky top-0 z-50 border-b border-[#E7F0F7]/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 lg:px-8"><Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Glavna navigacija">{[['Početna','#pocetna'],['Usluge','#usluge'],['O nama','#o-nama'],['Zašto mi?','#zasto-mi'],['Utisci','#utisci'],['Kontakt','#kontakt']].map(([label,href]) => <a key={href} className="text-[13px] font-semibold text-[#64748B] transition-colors hover:text-[#0878D1]" href={href}>{label}</a>)}</nav>
        <div className="hidden items-center gap-4 sm:flex"><a href={phoneHref} className="flex items-center gap-2 text-sm font-bold text-[#153653]"><Phone className="size-4 text-[#0878D1]" />{phoneNumber}</a><a href={phoneHref} className="rounded-xl bg-[#0878D1] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0878D1]/20 transition-transform hover:-translate-y-0.5">Pozovite nas</a></div>
        <button className="grid size-11 place-items-center rounded-xl border border-[#DCEAF4] text-[#153653] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="flex flex-col gap-1 border-t border-[#E7F0F7] bg-white px-5 py-4 lg:hidden">{[['Početna','#pocetna'],['Usluge','#usluge'],['O nama','#o-nama'],['Zašto mi?','#zasto-mi'],['Utisci','#utisci'],['Kontakt','#kontakt']].map(([label,href]) => <a key={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-[#153653] hover:bg-[#F2F8FC]" href={href}>{label}</a>)}<a href={phoneHref} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#0878D1] py-3 font-bold text-white"><Phone className="size-4" /> Pozovite nas</a></nav>}
    </header>

    <section className="relative bg-[#F2F8FC]" aria-labelledby="hero-title"><div className="how-orb absolute -right-24 top-20 size-72 rounded-full bg-[#22B8CF]/15 blur-3xl" /><div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-28">
      <div className="relative z-10 min-w-0"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B9E4F1] bg-white px-3 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#0878D1]"><span className="size-2 rounded-full bg-[#16A34A]" /> VAŠ POUZDAN VODOINSTALATER</div><h1 id="hero-title" className="max-w-xl [overflow-wrap:anywhere] text-5xl font-extrabold leading-[1.02] tracking-[-0.06em] text-[#153653] sm:text-6xl lg:text-[68px]">Vodovodne usluge na koje <span className="text-[#0878D1]">možete da računate.</span></h1><p className="mt-7 max-w-lg text-lg leading-8 text-[#64748B]">Od hitnih intervencija do kompletne montaže i popravki vodovodnih instalacija. Pružamo pouzdana i kvalitetna rešenja za vaš dom ili poslovni prostor.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0878D1] px-6 py-4 font-bold text-white shadow-xl shadow-[#0878D1]/20 transition-transform hover:-translate-y-1"><Phone className="size-5" /> Pozovite odmah</a><a href="#usluge" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B9D5E8] bg-white px-6 py-4 font-bold text-[#153653] transition-colors hover:border-[#0878D1] hover:text-[#0878D1]">Pogledajte usluge <ArrowRight className="size-4" /></a></div><div className="mt-9 grid gap-3 text-sm font-semibold text-[#153653] sm:grid-cols-3"><span className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#16A34A]" />Pouzdan pristup</span><span className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#16A34A]" />Kvalitetna ugradnja</span><span className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#16A34A]" />Dogovor bez komplikacija</span></div></div>
      <div className="relative"><div className="absolute -inset-3 rounded-[32px] border border-[#B9E4F1]" /><div className="relative overflow-hidden rounded-[28px] bg-[#DCEFF8] shadow-2xl shadow-[#153653]/10"><Image src="/plumber-hero.png" alt="Vodoinstalater radi na kućnoj instalaciji" width={900} height={680} priority className="aspect-[4/3] w-full object-cover" /><div className="float-slow absolute bottom-5 left-5 flex max-w-[230px] items-center gap-3 rounded-2xl bg-white p-4 shadow-xl"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#E4F7FA] text-[#0878D1]"><MessageCircle className="size-5" /></span><span className="text-sm font-bold leading-5 text-[#153653]">Vaš problem sa vodom? Tu smo da pomognemo.</span></div></div></div>
    </div></section>

    <section className="border-b border-[#E7F0F7] bg-white"><div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-5 px-5 py-7 sm:grid-cols-4 lg:px-8">{[['Brza komunikacija',MessageCircle],['Pažljivo izvedeni radovi',Wrench],['Transparentan dogovor',ShieldCheck],['Urednost nakon završetka',CheckCircle2]].map(([label,Icon]) => <div key={label as string} className="motion-card group flex items-center gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#F2F8FC] text-[#0878D1] transition duration-300 group-hover:scale-110"><Icon className="size-5" /></span><span className="text-xs font-bold leading-4 text-[#153653] sm:text-sm">{label as string}</span></div>)}</div></section>

    <section id="usluge" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="NAŠE USLUGE" title="Kompletna vodoinstalaterska rešenja" description="Sve što vam je potrebno za ispravne i pouzdane vodovodne instalacije." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(([title,description,Icon]) => <article key={title} className="motion-card group rounded-2xl border border-[#E1ECF3] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#9DD6E8] hover:shadow-xl hover:shadow-[#153653]/5"><span className="mb-7 grid size-12 place-items-center rounded-2xl bg-[#EAF7FB] text-[#0878D1] transition duration-300 group-hover:scale-110 group-hover:-rotate-6"><Icon className="size-6" /></span><h3 className="text-lg font-extrabold text-[#153653]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#64748B]">{description}</p><a href="#kontakt" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0878D1]">Saznajte više <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a></article>)}</div><div className="mt-10 rounded-2xl bg-[#F2F8FC] p-6 text-center sm:p-8"><p className="font-bold text-[#153653]">Potrebna vam je pomoć?</p><a href="#kontakt" className="mt-2 inline-flex items-center gap-2 font-extrabold text-[#0878D1]">Kontaktirajte nas <ArrowRight className="size-4" /></a></div></section>

    <section id="o-nama" className="scroll-mt-24 bg-[#F2F8FC]"><div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28"><div className="relative"><div className="float-slow absolute -bottom-4 -right-4 size-40 rounded-3xl border-2 border-[#B9E4F1]" /><Image src="/plumbing-bathroom.png" alt="Detalj moderne vodovodne instalacije u kupatilu" width={700} height={800} className="relative aspect-[4/5] w-full rounded-[28px] object-cover shadow-xl" /><div className="float-slow float-slow-delay absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl"><span className="grid size-10 place-items-center rounded-xl bg-[#E4F7FA] text-[#0878D1]"><BadgeCheck className="size-5" /></span><span className="text-sm font-bold text-[#153653]">Pažljivo do detalja</span></div></div><div><SectionHeading eyebrow="UPOZNAJTE NAS" title="Pouzdan majstor za vaš dom." /><p className="mt-7 text-base leading-7 text-[#64748B]">Kada su vodovodne instalacije u pitanju, važno je da posao bude urađen pažljivo i kvalitetno. Vodoinstalater Cile posvećen je praktičnim rešenjima, korektnoj komunikaciji i uredno izvedenim radovima.</p><p className="mt-4 text-base leading-7 text-[#64748B]">Bez obzira na to da li vam je potrebna manja popravka ili zahtevniji vodoinstalaterski posao, cilj je da pronađemo odgovarajuće rešenje u skladu sa vašim potrebama.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{['Pažnja prema detaljima','Dogovor pre početka radova','Fokus na kvalitetno rešenje'].map(item => <div key={item} className="flex gap-2 text-sm font-bold leading-5 text-[#153653]"><Check className="mt-0.5 size-4 shrink-0 text-[#16A34A]" />{item}</div>)}</div><a href="#kontakt" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#0878D1] px-6 py-4 font-bold text-white shadow-lg shadow-[#0878D1]/20">Dogovorite intervenciju <ArrowRight className="size-4" /></a></div></div></section>

    <section id="zasto-mi" className="scroll-mt-24 bg-white"><div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="ZAŠTO MI?" title="Pouzdanost se vidi u svakom detalju." description="Jasan dogovor, pažljiv rad i rešenja prilagođena stvarnoj situaciji." centered /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['Pouzdan pristup','Svaki posao počinje dogovorom i razumevanjem vašeg problema.',ShieldCheck],['Kvalitetna rešenja','Pažljivo biramo odgovarajući pristup za popravku ili instalaciju.',BadgeCheck],['Jasna komunikacija','Objašnjavamo šta je potrebno uraditi i dogovaramo sledeće korake.',MessagesSquare],['Briga o vašem prostoru','Vodimo računa o urednosti i pažljivom radu u vašem domu.',House]].map(([title,description,Icon]) => <div key={title as string} className="motion-card group rounded-2xl border border-[#E1ECF3] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9DD6E8] hover:shadow-xl hover:shadow-[#153653]/5"><span className="grid size-11 place-items-center rounded-xl bg-[#F2F8FC] text-[#0878D1] transition duration-300 group-hover:scale-110"><Icon className="size-5" /></span><h3 className="mt-6 font-extrabold text-[#153653]">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#64748B]">{description as string}</p></div>)}</div></div></section>

    <HowItWorks />

    <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="NAŠI RADOVI" title="Pogledajte detalje koji čine razliku." description="Primeri atmosfere i tipova radova koje možete dogovoriti. Fotografije se lako mogu zameniti autentičnim projektima." /><div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">{[['/plumbing-boiler.png','Montaža bojlera','col-span-2 row-span-2'],['/plumber-hero.png','Popravka instalacije',''],['/plumbing-bathroom.png','Detalji kupatila',''],['/plumber-hero.png','Ugradnja sanitarija','col-span-2']].map(([src,alt,cl]) => <div key={alt} className={`motion-card group relative overflow-hidden rounded-2xl bg-[#F2F8FC] ${cl}`}><Image src={src} alt={alt} width={700} height={500} className="h-full min-h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#153653]/70 to-transparent p-4 pt-12 text-sm font-bold text-white">{alt}</div></div>)}</div></section>

    <Reviews />

    <FaqList />

    <section id="kontakt" className="scroll-mt-24 bg-[#F2F8FC]"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28"><div><SectionHeading eyebrow="KONTAKT" title="Imate problem sa instalacijama?" description="Pozovite Vodoinstalatera Cile i opišite nam šta vam je potrebno. Dogovorićemo naredne korake." /><div className="mt-9 grid gap-3">{[[Phone,phoneNumber,'Telefon',phoneHref],[MapPin,'Obrenovac','Lokacija','https://www.google.com/maps/search/?api=1&query=Obrenovac'],[Clock3,'Svaki dan, sem nedeljom','Radno vreme','#'],[Mail,'[EMAIL, AKO POSTOJI]','Email','#']].map(([Icon,value,label,href]) => <a key={label as string} href={href as string} className="motion-card flex items-center gap-4 rounded-2xl border border-[#DCEAF4] bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#0878D1] hover:shadow-md"><span className="grid size-11 place-items-center rounded-xl bg-[#EAF7FB] text-[#0878D1]"><Icon className="size-5" /></span><span><small className="block text-xs font-semibold text-[#64748B]">{label as string}</small><strong className="text-sm text-[#153653]">{value as string}</strong></span></a>)}</div></div><div className="flex h-full flex-col justify-center rounded-3xl bg-gradient-to-br from-[#0878D1] to-[#0B91C7] p-8 text-white shadow-xl shadow-[#0878D1]/25 sm:p-10"><span className="grid size-14 place-items-center rounded-2xl bg-white/15"><Phone className="size-7" /></span><h3 className="mt-6 text-3xl font-extrabold tracking-[-0.04em]">Pozovite odmah</h3><p className="mt-3 max-w-md text-base leading-7 text-[#D8F7FB]">Opišite nam problem telefonom i dogovorićemo naredne korake odmah.</p><a href={phoneHref} className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-5 text-lg font-extrabold text-[#0878D1] shadow-lg transition hover:-translate-y-0.5 sm:w-auto"><Phone className="size-5" />Pozovite odmah</a><p className="mt-4 text-sm font-semibold text-[#D8F7FB]">{phoneNumber}</p></div></div></section>

    <footer className="bg-[#153653] text-white"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8"><div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-[#B7C9D7]">Vodoinstalaterske usluge, popravke i montaže za vaš dom i poslovni prostor.</p></div><div><h3 className="font-bold">Navigacija</h3><div className="mt-4 grid gap-3 text-sm text-[#B7C9D7]"><a href="#pocetna">Početna</a><a href="#usluge">Usluge</a><a href="#o-nama">O nama</a><a href="#kontakt">Kontakt</a></div></div><div><h3 className="font-bold">Usluge</h3><div className="mt-4 grid gap-3 text-sm text-[#B7C9D7]"><a href="#usluge">Popravke kvarova</a><a href="#usluge">Vodovodne instalacije</a><a href="#usluge">Montaža sanitarija</a><a href="#usluge">Montaža bojlera</a></div></div><div><h3 className="font-bold">Kontakt</h3><div className="mt-4 grid gap-3 text-sm text-[#B7C9D7]"><span>{phoneNumber}</span><span>Obrenovac</span><span>Svaki dan, sem nedeljom</span></div></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-[#B7C9D7] sm:flex-row sm:text-left lg:px-8"><span>© {new Date().getFullYear()} Vodoinstalater Cile. Sva prava zadržana.</span><a href="https://www.instagram.com/ghostforcedesign/?hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-[#62D9E5]">designed by Ghost Force Studio <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></svg></a><a href="#pocetna" className="font-bold text-white hover:text-[#62D9E5]">Nazad na vrh ↑</a></div></div></footer>
    <a href={phoneHref} className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-2xl bg-[#0878D1] px-5 py-4 font-extrabold text-white shadow-2xl shadow-[#153653]/30 sm:hidden"><Phone className="size-5" /> Pozovite majstora</a>
  </main>
}
