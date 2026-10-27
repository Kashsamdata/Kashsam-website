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
      'We design and develop intelligent IoT and connectivity solutions that help businesses create smarter, faster, and more connected operations. Our solutions bridge physical devices and digital systems, enabling real-time monitoring, automation, and data-driven decisions.',
    context:
      'From connected devices and smart sensors to enterprise dashboards and communication platforms, we build scalable IoT ecosystems that improve efficiency, reduce operating costs, and enhance user experiences. We focus on usability, performance, and long-term business value.',
    icon: Cpu,
    capabilities: [
      ['Smart device integration & connectivity', 'Enable secure, scalable communication between devices, sensors, machines, and enterprise systems for reliable data exchange.'],
      ['Real-time monitoring & automation', 'Give teams live visibility into assets and performance, automate workflows, and respond faster to operational events.'],
      ['User-centric interface design', 'Create responsive, modular interfaces that make complex IoT systems easier to use and encourage adoption.'],
      ['Behavioural UX research & mapping', 'Use user research, journey mapping, and interaction analysis to align connected experiences with real user needs and business goals.'],
      ['Accessibility & usability testing', 'Test digital products for accessibility, performance, and ease of use across devices and user groups.'],
      ['Continuous improvement with analytics', 'Use performance data and user feedback to evolve connected systems as business needs and expectations change.'],
    ],
    outcomes: ['Improve operational visibility', 'Respond faster to issues', 'Build a foundation for connected growth'],
    steps: ['Discover', 'Connect', 'Understand', 'Optimise'],
  },
  'seamless-erp-and-crm-integration': {
    eyebrow: 'Seamless ERP and CRM Consultancy',
    title: 'Make your business systems work as one.',
    intro:
      'We connect ERP and CRM systems to help businesses unify operations, improve customer engagement, and streamline workflows across departments. Our strategic and technical advisory keeps each rollout aligned with business goals, security, and scalability.',
    context:
      'By reducing data silos, teams can collaborate more effectively and gain clearer visibility across sales, operations, finance, and customer service. We support platforms such as SAP, Microsoft Business Central, and Epicor, with governance and service practices designed for long-term operational stability.',
    icon: Layers3,
    capabilities: [
      ['Gap analysis & technology roadmap', 'Assess existing systems, processes, and operational challenges, then define a roadmap for integration, optimisation, and future growth.'],
      ['ERP & CRM system integration', 'Connect sales, finance, inventory, customer support, and operations with accurate information flowing between teams.'],
      ['Cloud, data & security architecture', 'Design secure, scalable infrastructure that supports integrated systems, protects data, and enables business continuity.'],
      ['Managed infrastructure & service delivery', 'Support system stability through monitoring, maintenance, issue resolution, and ongoing optimisation.'],
      ['Governance, compliance & best practices', 'Apply recognised practices, including ISO and ITIL-aligned approaches, to strengthen governance and service management.'],
    ],
    outcomes: ['Create consistent business processes', 'Improve visibility across teams', 'Get more value from core platforms'],
    steps: ['Assess', 'Plan', 'Implement', 'Enable'],
  },
  'web-delivery-implementation': {
    eyebrow: 'Web Delivery & Implementation',
    title: 'From digital roadmap to reliable delivery.',
    intro:
      'We provide end-to-end web development for digital rollouts—from planning and architecture to deployment, optimisation, and long-term support. Our delivery approach helps businesses launch high-performing, scalable, and secure digital platforms.',
    context:
      'Whether you need a corporate website, eCommerce platform, enterprise portal, or custom web application, we combine agile methods, strong technical architecture, and continuous performance improvement to deliver solutions aligned with your business goals.',
    icon: Code2,
    capabilities: [
      ['End-to-end web development', 'Manage requirements, solution architecture, UI implementation, coding, testing, and deployment with scalability in mind.'],
      ['Agile delivery & continuous integration', 'Use iterative delivery and CI practices to improve collaboration, maintain code quality, and reduce release risk.'],
      ['Cloud setup & infrastructure management', 'Build and manage cloud environments, hosting, databases, and deployment pipelines for reliable operations.'],
      ['Performance optimisation', 'Improve loading speed and application efficiency to support a smoother user experience and scale.'],
      ['SEO & search visibility', 'Apply technical SEO practices across site structure, page speed, metadata, and mobile responsiveness.'],
      ['Security & compliance optimisation', 'Use secure coding, vulnerability testing, access controls, and compliance practices to protect digital operations.'],
    ],
    outcomes: ['Deliver with greater confidence', 'Create better digital experiences', 'Scale products with less friction'],
    steps: ['Define', 'Design', 'Deliver', 'Improve'],
  },
  'ai-enabled-process-automation': {
    eyebrow: 'AI-Enabled Process Automation',
    title: 'Give your teams time back to do their best work.',
    intro:
      'We help businesses reduce repetitive manual work through intelligent automation powered by artificial intelligence. Our solutions improve efficiency and help teams focus on higher-value work such as innovation, strategy, and customer experience.',
    context:
      'By combining workflow automation, machine learning, predictive analytics, and system integration, we help teams work faster and more accurately—from customer support to internal operations. Solutions can scale from a single department to enterprise-wide processes.',
    icon: Workflow,
    capabilities: [
      ['Process & workflow automation', 'Automate approvals, data entry, reporting, notifications, and task management to reduce manual effort and errors.'],
      ['Predictive analytics & AI insights', 'Analyse historical and real-time data to support forecasting, risk management, customer insight, and planning.'],
      ['Smart chatbots & virtual assistants', 'Build assistants that answer inquiries, automate responses, and provide timely support across digital channels.'],
      ['ERP & CRM integration', 'Connect automation with core business platforms to improve data flow and visibility across departments.'],
      ['Intelligent decision support', 'Provide dashboards, recommendations, and alerts that help teams make informed decisions sooner.'],
      ['Scalable automation frameworks', 'Design flexible, secure automation that can grow from an individual workflow to broader operations.'],
    ],
    outcomes: ['Reduce manual work', 'Improve process consistency', 'Help teams focus on higher-value work'],
    steps: ['Identify', 'Design', 'Automate', 'Measure'],
  },
  'security-services': {
    eyebrow: 'Security Services',
    title: 'Build trust into every layer of your digital business.',
    intro:
      'We help protect organisational data, systems, applications, and infrastructure from evolving security risks while supporting compliance, business continuity, and customer trust.',
    context:
      'Our proactive security services help identify vulnerabilities, reduce risk, and improve incident readiness. From assessments to threat monitoring, we help establish a security foundation that supports operational resilience and long-term growth.',
    icon: ShieldCheck,
    capabilities: [
      ['Cybersecurity assessment & risk management', 'Identify vulnerabilities and risk areas across your digital environment, then develop practical plans to reduce exposure.'],
      ['Data protection & compliance', 'Strengthen safeguards and governance to support responsible data handling and compliance requirements.'],
      ['Network & infrastructure security', 'Protect networks and infrastructure with security measures designed around your environment and operational needs.'],
      ['Threat monitoring & incident response', 'Improve detection and response readiness so teams can investigate and address security events effectively.'],
      ['Identity & access management', 'Apply authentication, role-based access, multi-factor authentication, and privileged access controls.'],
      ['Security strategy & ongoing support', 'Build a long-term security programme through audits, policies, employee awareness, and continuous improvement.'],
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
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {service.context}
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
