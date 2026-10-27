import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, ArrowRight, CalendarDays, Check, ChevronRight, Compass,
  ShieldCheck, Lightbulb, HeartHandshake, Zap, Target, Award, Building2,
  Factory, Landmark, Truck, Stethoscope, BriefcaseBusiness, Users, Globe2,
  Sparkles, Layers3, Workflow, ChartNoAxesCombined
} from "lucide-react";

const teamImage = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=85&fit=crop&auto=format";
const strategyImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=85&fit=crop&auto=format";
const dataImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85&fit=crop&auto=format";
const automationImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=85&fit=crop&auto=format";

const metrics = [
  { value: "100+", label: "Years of combined leadership", icon: Award },
  { value: "360°", label: "Data and technology perspective", icon: Compass },
  { value: "2022", label: "Established in India", icon: CalendarDays },
  { value: "100%", label: "Vendor-neutral advisory", icon: ShieldCheck },
];

const values = [
  { number: "01", title: "Value before technology", desc: "Every recommendation starts with your business priorities, practical outcomes, and measurable value.", icon: HeartHandshake },
  { number: "02", title: "Advice with integrity", desc: "Independent, considered guidance that puts the right solution ahead of vendor preference.", icon: ShieldCheck },
  { number: "03", title: "Make progress practical", desc: "We turn complex technology decisions into clear actions teams can put to work.", icon: Zap },
  { number: "04", title: "Keep looking forward", desc: "We explore AI, automation, and emerging capabilities with enterprise needs in mind.", icon: Lightbulb },
];

const capabilities = [
  { n: "01", label: "CLARITY", title: "Make complexity useful", desc: "We translate AI, machine learning, and data concepts into clear business language that leaders can act on.", image: strategyImage, icon: Compass },
  { n: "02", label: "DELIVERY", title: "Turn insight into action", desc: "We help organisations connect their data and technology investments to practical workflows and business priorities.", image: dataImage, icon: ChartNoAxesCombined },
  { n: "03", label: "DIRECTION", title: "Build a roadmap that fits", desc: "We bring together infrastructure, automation, and collaborative platforms to shape a technology path around your needs.", image: automationImage, icon: Workflow },
];

const industries = [
  { name: "Enterprise & IT Services", icon: Building2 },
  { name: "Industrial Manufacturing", icon: Factory },
  { name: "Financial Services & BFSI", icon: Landmark },
  { name: "Supply Chain & Logistics", icon: Truck },
  { name: "Healthcare & Life Sciences", icon: Stethoscope },
  { name: "Global Capability Centres", icon: BriefcaseBusiness },
];

const leaders = [
  {
    name: "Gurbir Singh Bhatia",
    role: "Senior Management Professional",
    focus: "Data & IT Strategy",
    experience: "30+ years",
    credentials: ["IIM Calcutta (SMP)", "B.E. Industrial Electronics", "UC Berkeley (HAAS) Data Science"],
    desc: "A senior management professional with extensive expertise in enterprise product development and data and IT strategies aligned with organisational goals.",
  },
  {
    name: "Harish Kumar Gandhi",
    role: "Business-Critical HR Leader",
    focus: "Planning & Operations",
    experience: "35+ years",
    credentials: ["Strategic HR Leadership", "Business Scaling", "Foundational Operations"],
    desc: "A business-focused HR leader who has partnered with promoters of successful Indian enterprises, shaping organisation building from early planning onwards.",
  },
  {
    name: "Tarun Thareja & Pankaj Dua",
    role: "Industrial Automation Experts",
    focus: "Automation Architecture",
    experience: "25+ years",
    credentials: ["Engineering Graduates", "Automation Systems", "Enterprise Solutions"],
    desc: "Industrial automation specialists with experience building robust businesses and engineering solutions for distinct industry requirements.",
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <div className={`mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] ${light ? "text-sky-200" : "text-sky-800"}`}>
      <span className={`h-px w-7 ${light ? "bg-sky-200" : "bg-sky-700"}`} />
      {children}
    </div>
  );
}

export default function AboutUs() {
  return (
    <main className="bg-[#FAFAF8] text-slate-900 antialiased">

      {/* Intro: editorial split layout */}
      <section className="relative isolate overflow-hidden bg-[#FAFAF8] text-slate-900">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(186,230,253,0.7),transparent_32%),linear-gradient(115deg,#FAFAF8_0%,#f8fafc_58%,#eff8ff_100%)]" />
        <div className="pointer-events-none absolute -right-36 -top-28 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-200/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-7 sm:px-8 sm:pb-20 lg:px-10 lg:pb-20">
          <div className="mb-10 flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-sky-700">Home</Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="font-semibold text-slate-800">About us</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <div className="relative z-10">
              <Eyebrow>Data · Intelligence · Automation</Eyebrow>
              <h1 className="max-w-3xl text-[2.65rem] font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-6xl lg:text-[4.2rem]">
                Better decisions begin with
                <span className="mt-2 block font-extrabold text-sky-700">better-connected thinking.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
                Kashsam Data Solutions brings experienced leadership, data engineering, and intelligent automation together to make technology more accessible, actionable, and valuable for growing enterprises.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0284c7] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-900/15 transition hover:-translate-y-0.5 hover:bg-[#0369a1]">
                  Start a conversation <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a href="#our-approach" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-sky-300 hover:bg-sky-50">
                  Explore our approach <ArrowRight size={16} />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-600">
                {["Executive advisory", "Vendor-neutral thinking", "End-to-end perspective"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2"><Check size={14} className="text-sky-700" />{item}</span>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-5">
              <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[2rem] border-r border-t border-sky-300 sm:-right-5 sm:-top-5 sm:h-36 sm:w-36" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-slate-900/15">
                <img src={teamImage} alt="Professionals collaborating on business strategy" className="h-[340px] w-full rounded-[1.5rem] object-cover sm:h-[470px] lg:h-[540px]" />
                <div className="pointer-events-none absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 p-6 text-white sm:p-8">
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-sky-100"><Sparkles size={14} /> Our perspective</div>
                  <p className="max-w-md text-xl font-bold leading-snug sm:text-2xl">Connect the dots between data, strategy, people, and progress.</p>
                </div>
              </div>
              <div className="relative -mt-6 ml-5 flex max-w-sm items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-xl shadow-slate-950/20 sm:ml-10 sm:p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e0f2fe] text-[#0284c7]"><Globe2 size={22} /></div>
                <div>
                  <p className="text-sm font-bold">Built around your business</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-slate-600">Technology decisions shaped by real operational context.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4">
            {metrics.map(({ value, label, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm backdrop-blur-sm sm:p-5">
                <div className="mb-3 flex items-center gap-2 text-sky-700"><Icon size={17} /><span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Kashsam</span></div>
                <p className="text-3xl font-extrabold tracking-tight text-sky-700 sm:text-4xl">{value}</p>
                <p className="mt-2 max-w-[12rem] text-xs font-medium leading-5 text-slate-600 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose and values */}
      <section id="our-approach" className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-16 lg:px-10">
          <div className="relative flex min-h-[390px] flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-700 via-sky-800 to-slate-900 p-7 text-white shadow-xl shadow-sky-950/15 sm:min-h-[450px] sm:p-10">
            <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[35px] border-white/[.08]" />
            <div className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full border border-white/[.12]" />
            <div className="relative z-10 flex h-full flex-col">
              <Eyebrow light>Why we exist</Eyebrow>
              <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Make technology work harder for people and businesses.</h2>
              <p className="mt-5 max-w-md text-sm font-medium leading-7 text-sky-50/85">
                We aim to bring executive expertise, data strategy, and practical execution together—helping enterprises turn complex systems into a meaningful business advantage.
              </p>
              <div className="mt-auto pt-10">
                <div className="mb-4 h-px w-full bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-sky-100"><Target size={20} /></div>
                  <div><p className="text-sm font-bold">Purpose-led transformation</p><p className="mt-1 text-xs font-medium text-sky-100/75">Clear direction. Thoughtful execution.</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <Eyebrow>The principles behind our work</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Good technology is important. The way it creates value matters more.</h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600">Our approach is grounded in practical business priorities, trusted advice, and a commitment to making progress possible.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map(({ number, title, desc, icon: Icon }) => (
                <article key={number} className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-900/5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-slate-400">{number}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white">
                      <Icon size={18} />
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities: image-led editorial cards */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end sm:mb-14">
            <div><Eyebrow>What we bring</Eyebrow><h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">From complex technology to confident decisions.</h2></div>
            <p className="max-w-lg text-sm font-medium leading-7 text-slate-600">We help close the gap between technical possibility and business priorities through clarity, delivery, and strategic direction.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {capabilities.map(({ n, label, title, desc, image, icon: Icon }) => (
              <article key={n} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/10">
                <div className="relative h-52 shrink-0 overflow-hidden sm:h-60">
                  <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#FAFAF8]/95 px-3 py-1.5 text-[10px] font-bold tracking-[.15em] text-sky-800">
                    {label}
                  </span>
                  <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0284c7]">
                    <Icon size={19} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-4 flex items-center justify-between"><span className="text-xs font-bold tracking-widest text-slate-400">{n}</span><Layers3 size={16} className="text-sky-300" /></div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{desc}</p>
                  <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-sky-700">Business-first thinking <ArrowUpRight size={14} /></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div><Eyebrow>Where we work</Eyebrow><h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Industry context makes a difference.</h2></div>
            <p className="max-w-lg text-sm font-medium leading-7 text-slate-600">Our data and automation perspective adapts to the operating realities, priorities, and challenges of each sector.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map(({ name, icon: Icon }, i) => (
              <div key={name} className="group min-h-36 rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:shadow-md sm:p-5">
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white"><Icon size={20} /></span>
                <p className="text-sm font-bold leading-5 text-slate-800">{name}</p>
                <span className="mt-3 block text-[10px] font-bold tracking-widest text-slate-400">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end sm:mb-14">
            <div><Eyebrow>People behind the perspective</Eyebrow><h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Experience that sees the whole picture.</h2></div>
            <p className="max-w-lg text-sm font-medium leading-7 text-slate-600">Our leadership brings together experience across enterprise strategy, people and operations, and industrial automation.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {leaders.map((leader) => (
              <article key={leader.name} className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-[#FAFAF8] p-6 sm:p-7 shadow-sm">
                <div className="mb-6 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0f2fe] text-[#0284c7]"><Users size={21} /></div>
                  <span className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-[11px] font-bold text-sky-800">{leader.experience}</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#0369a1]">{leader.focus}</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">{leader.name}</h3>
                <p className="mt-1 text-xs font-semibold text-slate-500">{leader.role}</p>
                <p className="mt-5 flex-1 border-t border-slate-200 pt-5 text-sm font-medium leading-7 text-slate-600">{leader.desc}</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Experience & credentials</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.credentials.map((credential) => <span key={credential} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[11px] font-semibold leading-4 text-slate-600">{credential}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey and closing CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            <div>
              <Eyebrow>Our journey</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Established with a clear purpose. Focused on what’s next.</h2>
              <p className="mt-5 text-sm font-medium leading-7 text-slate-600">Kashsam Data Solutions Private Limited was incorporated on June 6, 2022, with a mission to bring executive data strategy, AI capabilities, and process automation to growing enterprises.</p>
              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <CalendarDays size={17} className="text-[#0369a1]" />
                <span className="text-sm font-bold">6 June 2022</span>
                <span className="text-xs font-medium text-slate-500">· Incorporation</span>
              </div>
            </div>
            <div className="grid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm sm:grid-cols-[.9fr_1.1fr]">
              <div className="min-h-56 overflow-hidden sm:min-h-[300px]"><img src={automationImage} alt="Technology and automation at work" className="h-full w-full object-cover" /></div>
              <div className="flex flex-col justify-center p-6 sm:p-9">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0f2fe] text-[#0284c7]"><CalendarDays size={20} /></span>
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#0369a1]">The foundation</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Technology with a business purpose.</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">Our focus remains on helping organisations make better-informed choices about data, technology, and operational processes.</p>
              </div>
            </div>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[2.25rem] bg-[#0284c7] px-6 py-10 sm:mt-24 sm:px-12 sm:py-14 lg:px-16 shadow-xl shadow-sky-950/10">
            <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/20" />
            <div className="pointer-events-none absolute -bottom-24 right-44 h-52 w-52 rounded-full border border-white/20" />
            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl text-white">
                <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-sky-100">
                  <span className="h-px w-7 bg-sky-200" />
                  Let’s move forward
                </div>
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Have a challenge worth solving?</h2>
                <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-sky-50">Let’s discuss your goals and explore how data, strategy, and automation can support your next step.</p>
              </div>
              <Link to="/contact" className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-2xl bg-white px-7 py-4 text-sm font-bold text-[#0284c7] transition hover:-translate-y-0.5 hover:bg-sky-50 shadow-md md:self-center">
                Talk to our team <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}