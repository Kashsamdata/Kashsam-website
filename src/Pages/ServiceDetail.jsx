import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  Cpu,
  Code2,
  Layers3,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

const servicePages = {
  'iot-connectivity-solutions': {
    eyebrow: 'IoT & Connectivity Solutions',
    title: 'Connect your devices. Unlock better decisions.',
    intro:
      'Bring equipment, products and business systems together with connected experiences that turn live operational data into useful action.',
    icon: Cpu,
    capabilities: [
      ['Connected device strategy', 'Plan secure, reliable connectivity around your operational needs and the environments your devices work in.'],
      ['IoT data integration', 'Connect device signals with business platforms and analytics for a more complete view of performance.'],
      ['Real-time monitoring', 'Surface equipment health, usage and exceptions so teams can respond with better context.'],
      ['Connected experiences', 'Design clear dashboards and interfaces that make connected data accessible to the people who need it.'],
    ],
    outcomes: ['Improve operational visibility', 'Respond faster to issues', 'Build a foundation for connected growth'],
    steps: ['Discover', 'Connect', 'Understand', 'Optimise'],
  },
  'seamless-erp-and-crm-integration': {
    eyebrow: 'Seamless ERP and CRM Consultancy',
    title: 'Make your business systems work as one.',
    intro:
      'Get practical guidance to plan, implement and connect ERP and CRM platforms around the way your organisation works.',
    icon: Layers3,
    capabilities: [
      ['ERP & CRM advisory', 'Shape a technology roadmap that reflects your business priorities, teams and existing systems.'],
      ['Platform implementation', 'Plan and deliver implementations across platforms such as SAP, Microsoft Business Central and Epicor.'],
      ['Process design', 'Map business processes and align system workflows to support consistent, efficient operations.'],
      ['Integration & support', 'Connect business applications and provide a considered path for adoption, optimisation and ongoing support.'],
    ],
    outcomes: ['Create consistent business processes', 'Improve visibility across teams', 'Get more value from core platforms'],
    steps: ['Assess', 'Plan', 'Implement', 'Enable'],
  },
  'web-delivery-implementation': {
    eyebrow: 'Web Delivery & Implementation',
    title: 'From digital roadmap to reliable delivery.',
    intro:
      'Turn product and platform ideas into high-quality digital experiences with end-to-end engineering, implementation and optimisation.',
    icon: Code2,
    capabilities: [
      ['Product engineering', 'Build responsive digital products and enterprise applications around real user and business needs.'],
      ['End-to-end delivery', 'Coordinate architecture, development, testing and release through a clear delivery approach.'],
      ['Cloud implementation', 'Set up and manage cloud infrastructure that supports dependable deployment and growth.'],
      ['Performance & optimisation', 'Improve performance, accessibility, SEO and security as your digital products evolve.'],
    ],
    outcomes: ['Deliver with greater confidence', 'Create better digital experiences', 'Scale products with less friction'],
    steps: ['Define', 'Design', 'Deliver', 'Improve'],
  },
  'ai-enabled-process-automation': {
    eyebrow: 'AI-Enabled Process Automation',
    title: 'Give your teams time back to do their best work.',
    intro:
      'Reduce repetitive effort with intelligent workflows that connect people, data and systems—while keeping decisions clear and accountable.',
    icon: Workflow,
    capabilities: [
      ['Workflow automation', 'Identify repeatable processes and streamline handoffs across teams and business applications.'],
      ['Applied AI', 'Use practical AI capabilities to classify information, surface insights and support everyday decisions.'],
      ['RPA & integration', 'Automate structured tasks and connect workflows with the ERP, CRM and tools your teams already use.'],
      ['Assistants & chatbots', 'Create helpful digital assistants that make information and routine support easier to access.'],
    ],
    outcomes: ['Reduce manual work', 'Improve process consistency', 'Help teams focus on higher-value work'],
    steps: ['Identify', 'Design', 'Automate', 'Measure'],
  },
  'security-services': {
    eyebrow: 'Security Services',
    title: 'Build trust into every layer of your digital business.',
    intro:
      'Strengthen your security posture with practical risk, data protection and access controls designed around your organisation.',
    icon: ShieldCheck,
    capabilities: [
      ['Security assessment', 'Understand risks across your infrastructure, applications and operating practices.'],
      ['Data protection & compliance', 'Establish safeguards and governance that support responsible handling of business data.'],
      ['Identity & access management', 'Help ensure the right people have the right access to the systems and information they need.'],
      ['Monitoring & response', 'Improve readiness to detect, investigate and respond to security events.'],
    ],
    outcomes: ['Reduce exposure to risk', 'Protect important business data', 'Build confidence with customers and partners'],
    steps: ['Assess', 'Protect', 'Monitor', 'Improve'],
  },
}

export default function ServiceDetail({ serviceKey }) {
  const service = servicePages[serviceKey]

  if (!service) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Service not found</h1>
          <p className="mt-3 text-slate-600">Choose a service to explore our capabilities.</p>
          <Link to="/services" className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700">
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    )
  }

  const Icon = service.icon

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-blue-100 bg-[#f4f8ff]">
        <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-200/50 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <Link to="/services" className="text-sm font-semibold text-blue-700 hover:text-blue-900">
              Services <span className="px-1 text-slate-400">/</span> {service.eyebrow}
            </Link>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-800 shadow-sm">
              <Icon size={15} />
              {service.eyebrow}
            </div>
            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.65rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-800 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-900"
              >
                Talk to our team <ArrowRight size={17} />
              </Link>
              <Link
                to="/book-appointment"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
              >
                Book a consultation
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-200/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_25px_80px_-30px_rgba(15,45,90,0.28)] sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Kashsam approach</p>
                  <p className="mt-1 text-xl font-bold tracking-tight text-slate-950">Designed for business impact</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-800">
                  <Icon size={25} />
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {service.outcomes.map((outcome, index) => (
                  <div key={outcome} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-100 text-xs font-extrabold text-blue-800">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{outcome}</span>
                    <Check size={16} className="ml-auto shrink-0 text-blue-700" />
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {service.steps.map((step, index) => (
                  <div key={step} className="rounded-xl border border-blue-100 bg-white p-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Step 0{index + 1}</span>
                    <p className="mt-1 text-sm font-bold text-slate-800">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">What we deliver</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Capabilities that move you forward
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.capabilities.map(([title, description], index) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <span className="text-xs font-extrabold tracking-widest text-blue-700">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-blue-100 bg-[#f4f8ff] px-5 py-14 text-center sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Let’s build what’s next</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Make your next move with confidence.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Talk with our team about your goals, your challenges and the right path forward.
          </p>
          <Link
            to="/book-appointment"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-800 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-900"
          >
            Book a consultation <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}
