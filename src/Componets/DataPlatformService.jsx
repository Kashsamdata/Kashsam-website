import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Database,
  ShieldCheck,
  Gauge,
  Layers3,
  UsersRound,
  CheckCircle2,
  Sparkles,
  ChartNoAxesCombined,
  Workflow,
} from 'lucide-react'

const offerings = [
  {
    number: '01',
    icon: BarChart3,
    title: 'Business Intelligence & Advanced Analytics',
    description:
      'We develop powerful BI and analytics solutions using technologies like SQL, Python, and Spark to help organizations analyze large volumes of data efficiently. Our solutions provide deep business insights, predictive analysis, and reporting systems that support better strategic planning and operational performance.',
    tags: ['SQL', 'Python', 'Spark'],
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Data Quality (DQ) & Master Data Management (MDM)',
    description:
      'Accurate and reliable data is the foundation of every successful business. We help improve data consistency, remove duplication, and establish strong governance frameworks through Data Quality and Master Data Management solutions. This ensures your teams work with trusted, standardized, and business-ready information.',
    tags: ['Data quality', 'Governance', 'MDM'],
  },
  {
    number: '03',
    icon: Gauge,
    title: 'KPI Catalogues & Unified Dashboards',
    description:
      'We create centralized KPI catalogues and interactive dashboards that provide a single source of truth across departments. By unifying performance metrics into easy-to-understand visual reports, leadership teams can monitor progress, track goals, and make informed decisions in real time.',
    tags: ['KPI tracking', 'Dashboards', 'Reporting'],
  },
  {
    number: '04',
    icon: UsersRound,
    title: 'Zero Per-User License Restrictions',
    description:
      'Our solutions are built to maximize accessibility without limiting users through expensive per-user licensing models. This allows organizations to scale analytics across teams and departments freely, ensuring every stakeholder has access to the insights they need without additional cost barriers. With our Data Platform & Analytics services, businesses gain better control over their data, stronger decision-making capabilities, and a future-ready digital foundation for sustainable growth.',
    tags: ['Scalable access', 'Cost control', 'Enterprise-wide insights'],
  },
]

const outcomes = [
  { icon: Database, title: 'Unified data', text: 'Bring information together across systems and teams.' },
  { icon: ChartNoAxesCombined, title: 'Clearer insights', text: 'Turn complex datasets into practical business intelligence.' },
  { icon: Workflow, title: 'Smarter operations', text: 'Support faster reporting and more consistent decisions.' },
]

export default function DataPlatformAnalytics() {
  return (
    <main className="overflow-hidden bg-[#FAFAF8] text-slate-900 font-sans">
      {/* Hero section */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(186,230,253,0.55),transparent_48%),linear-gradient(135deg,#fcfdfd_0%,#f1f8fe_55%,#ffffff_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            {/* Tagline pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-900 shadow-sm">
              <Sparkles size={14} className="text-sky-600" />
              Advanced Data Analytics Solutions
            </div>

            {/* Title matching typography style */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-[-0.035em] text-[#0F172A] sm:text-5xl lg:text-[3.75rem]">
              Real-Time Data Analytics <span className="font-extrabold text-[#0284C7]">&amp; Reporting Solutions</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-[1.75] font-medium text-slate-600 sm:text-lg">
              We build unified, cloud-native data ecosystems that help businesses turn raw data into meaningful, actionable insights. Our Data Platform &amp; Analytics solutions are designed to streamline data collection, integration, governance, and reporting—enabling organizations to make faster, smarter, and more confident decisions.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-[1.75] font-medium text-slate-600 sm:text-lg">
              From data engineering to business intelligence, we create scalable platforms that support real-time analytics, automation, and enterprise-wide visibility. Whether you need advanced reporting, better data quality, or centralized dashboards, we ensure your data works as a strategic asset for growth.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0284C7] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-[#0369A1]"
              >
                Talk to our team <ArrowRight size={17} />
              </Link>
              <a
                href="#key-offerings"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-800"
              >
                Explore our offerings <ArrowRight size={16} />
              </a>
            </div>

            {/* Feature checklist */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0284C7]" /> Real-time visibility</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0284C7]" /> Trusted data foundations</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0284C7]" /> Scalable analytics</span>
            </div>
          </div>

          {/* Hero Image Block */}
          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-sky-200/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2.5 shadow-2xl shadow-sky-950/10">
              <img
                src="/images/data-analytics-hero.png"
                alt="Business professional reviewing data analytics"
                className="h-[340px] w-full rounded-[1.5rem] object-cover sm:h-[440px] lg:h-[510px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-sky-100/80 bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-6 sm:px-8 md:grid-cols-3 lg:px-10">
          {outcomes.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.title} className={`flex gap-4 px-3 py-4 sm:px-6 ${index !== 0 ? 'md:border-l md:border-sky-100' : ''}`}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-[#0284C7]"><Icon size={22} /></div>
                <div>
                  <h2 className="font-bold tracking-tight text-slate-900">{item.title}</h2>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Offerings */}
      <section id="key-offerings" className="relative bg-[#F8FAFC] py-20 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-100/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-800">
              <Layers3 size={14} /> Our capabilities
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">Our Key Offerings</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              Build a dependable data foundation, give teams access to meaningful insights, and make performance easier to understand across your organisation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.number} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-950/5 sm:p-9">
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-sky-50/70 transition group-hover:bg-sky-100/70" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[#0284C7] ring-1 ring-sky-200/60"><Icon size={26} /></div>
                    <span className="text-sm font-extrabold tracking-widest text-sky-700/50">{item.number}</span>
                  </div>
                  <h3 className="relative mt-7 max-w-xl text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => <span key={tag} className="rounded-full border border-sky-100 bg-sky-50/80 px-3.5 py-1.5 text-xs font-semibold text-sky-800">{tag}</span>)}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#0F172A] px-7 py-12 sm:px-12 sm:py-14 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),transparent_40%)]" />
          <div className="absolute right-12 top-0 hidden h-full w-px bg-white/10 lg:block" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">We are here to answer your questions 24/7</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Need A Consultation?</h2>
              <p className="mt-4 max-w-2xl font-medium leading-relaxed text-slate-300">Let’s discuss how a connected data platform and clearer reporting can support your business goals.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-sky-300">
              Contact us <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}