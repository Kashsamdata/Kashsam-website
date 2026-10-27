import React from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  Cpu,
  Layers,
  Code2,
  Bot,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const servicesData = [
  {
    id: 'data-platform',
    icon: BarChart3,
    title: 'Data Platform & Analytics',
    path: '/data-platform-analytics',
    badge: 'Analytics & Cloud',
    description:
      'We build unified, cloud-native ecosystems for analytics, governance, and automation - transforming raw data into actionable insights.',
    features: [
      'BI and analytics using SQL, Python, and Spark',
      'Data Quality (DQ) and Master Data Management (MDM)',
      'KPI catalogues and unified dashboards',
      'Zero per-user licence restrictions',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'iot-connectivity',
    icon: Cpu,
    title: 'IoT & Connectivity Solutions',
    path: '/iot-connectivity-solutions',
    badge: 'Connected Operations',
    description:
      'We connect devices, sensors, machines, and business systems to enable real-time monitoring, automation, and more informed operational decisions.',
    features: [
      'Smart device integration and secure connectivity',
      'Real-time monitoring and workflow automation',
      'User-centric IoT dashboards and interfaces',
      'Continuous improvement with performance analytics',
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'erp-crm',
    icon: Layers,
    title: 'ERP and CRM Consultancy',
    path: '/seamless-erp-and-crm-integration',
    badge: 'Enterprise Advisory',
    description:
      'We provide strategic and technical advisory for organizations seeking end-to-end Implementation and Support for ERP and CRM. Our years of experience helps organizations roll out industry standard processes and systems whether SAP, MS Business Central, EPICOR to name a few.',
    features: [
      'Gap analysis and technology roadmap',
      'Cloud, data, and security architecture design',
      'Process Mapping and Implementation',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'web-delivery',
    icon: Code2,
    title: 'Web Delivery & Implementation',
    path: '/web-delivery-implementation',
    badge: 'Full-Cycle Engineering',
    description:
      'We provide complete onshore and offshore development for end-to-end digital rollouts - from architecture to deployment and optimisation.',
    features: [
      'Agile delivery and continuous integration',
      'Cloud setup and infrastructure management',
      'Performance, SEO, and security optimisation',
    ],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI-Enabled Process Automation',
    path: '/ai-enabled-process-automation',
    badge: 'Intelligent Workflows',
    description:
      'We eliminate manual effort through intelligent automation - empowering teams to focus on innovation and strategy.',
    features: [
      'Process and workflow automation',
      'Predictive analytics and AI insights',
      'Smart chatbots and virtual assistants',
      'Seamless ERP and CRM integration',
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'security-services',
    icon: ShieldCheck,
    title: 'Security Services',
    path: '/security-services',
    badge: 'Enterprise Protection',
    description:
      'Strengthening Your Business with Advanced Security Services to safeguard assets, maintain compliance, and mitigate risks.',
    features: [
      'Cybersecurity Assessment & Risk Management',
      'Data Protection & Compliance',
      'Network & Infrastructure Security',
      'Threat Monitoring & Incident Response',
      'Identity & Access Management',
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
  },
]

function Services() {
  return (
    <main className="overflow-hidden bg-[#FAFAF8] text-slate-900 selection:bg-sky-200 selection:text-slate-950">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#FAFAF8]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(186,230,253,0.72),transparent_30%),linear-gradient(115deg,#FAFAF8_0%,#f8fafc_58%,#eff8ff_100%)]" />
        <div className="pointer-events-none absolute -right-36 -top-32 -z-10 h-96 w-96 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-800 shadow-sm">
              <Sparkles size={14} className="text-sky-600" /> What we do
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-sky-700">
              Data · Intelligence · Delivery
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Technology that moves your business
              <span className="mt-2 block text-sky-700">forward.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From connected data and intelligent automation to secure digital delivery, explore practical capabilities built around your business goals.
            </p>
            <a href="#service-list" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0284c7] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-900/15 transition hover:-translate-y-0.5 hover:bg-[#0369a1]">
              Explore our services <ArrowRight size={17} />
            </a>
          </div>

          <div className="relative rounded-[1.75rem] border border-white bg-white/80 p-5 shadow-xl shadow-sky-950/5 backdrop-blur sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">One connected approach</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">Six ways to make progress.</h2>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <Layers size={23} />
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ['01', 'Data & analytics'],
                ['02', 'Connected operations'],
                ['03', 'Business systems'],
                ['04', 'Digital delivery'],
                ['05', 'AI & automation'],
                ['06', 'Security'],
              ].map(([number, label]) => (
                <div key={number} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-3">
                  <span className="text-[10px] font-extrabold tracking-widest text-sky-700">{number}</span>
                  <span className="text-xs font-semibold leading-4 text-slate-700">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">
              Find a specialist capability—or combine services into a solution that fits your needs.
            </p>
          </div>
        </div>
      </section>

      <section id="service-list" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-700">Our capabilities</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl">Explore our services</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Experienced guidance and hands-on delivery, shaped around the challenges you need to solve.
            </p>
          </div>
          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon

              return (
                <article
                  key={service.id}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-950/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-transparent" />
                    <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-3">
                      <span className="rounded-full border border-white/30 bg-slate-950/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                        {service.badge}
                      </span>
                      <span className="text-sm font-extrabold tracking-[0.16em] text-white/80">0{index + 1}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition-colors group-hover:bg-sky-700 group-hover:text-white">
                        <IconComponent size={21} />
                      </div>
                      <h3 className="pt-1 text-xl font-extrabold leading-snug tracking-tight text-slate-950">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <h4 className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-sky-800">
                        Key capabilities
                      </h4>
                      <ul className="space-y-2.5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-xs leading-5 text-slate-700">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-sky-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto border-t border-slate-100 pt-5">
                      <Link
                        to={service.path}
                        className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition-colors hover:text-sky-900"
                      >
                        Explore this service
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-sky-100 bg-gradient-to-br from-sky-50 via-[#FAFAF8] to-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[1.75rem] border border-sky-100 bg-white/80 p-7 shadow-lg shadow-sky-950/5 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-700">Let’s solve it together</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Talk to our team about your goals and challenges. We’ll help you explore a practical way forward.
            </p>
          </div>
          <Link
            to="/book-appointment"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 self-start rounded-2xl bg-[#0284c7] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-900/15 transition hover:-translate-y-0.5 hover:bg-[#0369a1] md:self-center"
          >
            Book a consultation <Calendar size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Services