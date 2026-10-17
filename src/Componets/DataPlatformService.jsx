import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  Database,
  Layers3,
  ShieldCheck,
  Workflow,
  Zap
} from 'lucide-react'

import brandLogo from '../assets/Kashsam.png'

function DataPlatformService() {
  const highlights = [
    { value: '01', label: 'Connect your data', icon: Database },
    { value: '02', label: 'Trust your numbers', icon: ShieldCheck },
    { value: '03', label: 'Act with confidence', icon: Zap }
  ]

  const offerings = [
    {
      title: 'Business intelligence & analytics',
      description:
        'Turn complex information into clear, useful insight with reporting and analytics built around the decisions your teams need to make.',
      icon: BarChart3,
      tag: 'Insight'
    },
    {
      title: 'Data quality & master data',
      description:
        'Improve consistency across systems with practical data standards, deduplication and governance your teams can follow.',
      icon: ShieldCheck,
      tag: 'Trusted data'
    },
    {
      title: 'KPI catalogues & dashboards',
      description:
        'Bring important measures into one shared view, so teams can understand performance and focus on what needs attention.',
      icon: Layers3,
      tag: 'One clear view'
    },
    {
      title: 'Scalable data foundations',
      description:
        'Connect your sources and build flexible data foundations that can grow with your business and evolving reporting needs.',
      icon: Database,
      tag: 'Built to scale'
    }
  ]

  const workflowSteps = [
    {
      step: '01',
      title: 'Connect',
      desc: 'Bring together the systems and sources that hold your business data.'
    },
    {
      step: '02',
      title: 'Organise',
      desc: 'Improve quality, establish shared definitions and shape reliable data.'
    },
    {
      step: '03',
      title: 'Understand',
      desc: 'Make useful insights accessible through reporting and analytics.'
    },
    {
      step: '04',
      title: 'Improve',
      desc: 'Use what you learn to guide decisions and keep refining outcomes.'
    }
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <section className="relative bg-[#f5f8fc]">
        <div className="pointer-events-none absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Data platform &amp; analytics
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.65rem]">
              Make your data work harder.
              <span className="mt-2 block text-blue-700">Make decisions clearer.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Connect your data, build trust in your numbers and give your teams
              the insight to move forward with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Talk to our team
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Explore our services
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-blue-700" />
                Practical, business-led solutions
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-blue-700" />
                Designed around your data
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-200/70 via-sky-100/60 to-indigo-100/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_25px_80px_-30px_rgba(15,45,90,0.35)] sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <img
                  src={brandLogo}
                  alt="Kashsam Data Solutions"
                  className="h-10 w-auto object-contain sm:h-12"
                />
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  Data overview
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Business performance</p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                    One connected view
                  </p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-800">
                  <BarChart3 size={22} />
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Sample activity
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Connected
                  </span>
                </div>
                <div
                  aria-label="Illustrative upward data trend"
                  className="mt-5 flex h-32 items-end gap-2 sm:h-40 sm:gap-3"
                >
                  {[38, 53, 45, 68, 57, 77, 64, 90, 74, 100, 83, 94].map(
                    (height, index) => (
                      <div
                        key={index}
                        className={`min-w-0 flex-1 rounded-t-sm ${
                          index === 9 ? 'bg-blue-800' : 'bg-blue-200'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
                <div className="mt-3 flex justify-between text-[11px] text-slate-400">
                  <span>Source data</span>
                  <span>Shared metrics</span>
                  <span>Business insight</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ['Sources', 'Connected'],
                  ['Quality', 'Checked'],
                  ['Reports', 'Unified']
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-slate-100 p-3">
                    <p className="text-[11px] text-slate-500 sm:text-xs">{label}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:flex">
              <div className="rounded-lg bg-amber-50 p-2 text-amber-700">
                <Zap size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">From data to action</p>
                <p className="text-[11px] text-slate-500">A clearer path forward</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
          {highlights.map(({ value, label, icon: Icon }) => (
            <div key={value} className="flex items-center gap-4 py-5 md:px-7 md:py-6 first:md:pl-0 last:md:pr-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                <Icon size={21} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                  {value}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-800">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            The opportunity
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Better data changes how business moves.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-slate-600">
          <p>
            When information is spread across systems, it takes more effort to
            see what is happening and decide what to do next. A well-designed
            data platform brings those pieces together.
          </p>
          <p>
            Kashsam Data Solutions helps you shape a dependable foundation for
            reporting, analytics and future growth—one that fits your
            organisation, not a one-size-fits-all template.
          </p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {[
              'Bring key sources into a shared view',
              'Create consistent, trusted measures',
              'Make useful insights easier to find',
              'Build foundations that can evolve'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                <Check size={17} className="mt-0.5 shrink-0 text-blue-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                What we do
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                The building blocks for confident decisions
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              From data foundations to the final dashboard, we help make
              information more useful across your organisation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map(({ title, description, icon: Icon, tag }) => (
              <article
                key={title}
                className="group flex min-h-[17rem] flex-col rounded-xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-800 transition group-hover:bg-blue-800 group-hover:text-white">
                    <Icon size={21} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug text-slate-900">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
                <Link
                  to="/contact"
                  aria-label={`Learn more about ${title}`}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-blue-800 hover:text-blue-950"
                >
                  Learn more
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            A considered approach
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            From fragmented data to forward momentum
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map(({ step, title, desc }, index) => (
            <article key={step} className="relative rounded-xl border border-slate-200 bg-white p-6">
              {index < workflowSteps.length - 1 && (
                <div className="absolute right-[-1rem] top-10 z-10 hidden h-px w-4 bg-blue-200 lg:block" />
              )}
              <span className="text-sm font-bold tracking-widest text-blue-700">{step}</span>
              <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                {index === 0 ? <Database size={19} /> : index === 1 ? <ShieldCheck size={19} /> : index === 2 ? <BarChart3 size={19} /> : <Workflow size={19} />}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#102b52] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-40 h-96 w-96 rounded-full border-[48px] border-blue-400/10" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                Build a clearer picture
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Let&apos;s make your data more useful.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
                Tell us where you are today and what you want to understand
                better. We&apos;ll help you explore the right next step.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#102b52] transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <CalendarDays size={17} />
              Schedule a conversation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataPlatformService
