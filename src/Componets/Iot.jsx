import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Radio,
  Sparkles,
  Layers3,
  CheckCircle2,
  Workflow,
  Layout,
  UserCheck,
  LineChart,
  ShieldCheck,
  Compass,
} from 'lucide-react'

const offerings = [
  {
    number: '01',
    icon: Radio,
    title: 'Smart Device Integration & Connectivity',
    description:
      'We enable seamless communication between devices, sensors, machines, and enterprise systems through secure and scalable connectivity solutions. Whether it’s industrial equipment, smart devices, or remote monitoring systems, we ensure smooth data exchange across platforms and environments.',
    tags: ['Device Connectivity', 'Sensor Networks', 'Edge Protocols'],
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Real-Time Monitoring & Automation',
    description:
      'Our IoT solutions provide real-time visibility into operations, allowing businesses to monitor assets, track performance, and automate workflows instantly. This helps reduce manual intervention, improve operational accuracy, and support faster response to critical events.',
    tags: ['Asset Tracking', 'Process Automation', 'Alert Systems'],
  },
  {
    number: '03',
    icon: Layout,
    title: 'User-Centric Interface Design',
    description:
      'We create responsive, modular, and intuitive enterprise interfaces that make complex IoT systems easy to manage. Our human-centered design approach ensures better usability, faster adoption, and improved engagement for both internal teams and end users.',
    tags: ['Modular Dashboards', 'Enterprise UI', 'Responsive Control'],
  },
  {
    number: '04',
    icon: Compass,
    title: 'Behavioural UX Research & Mapping',
    description:
      'Understanding user behavior is essential for building effective digital experiences. We conduct detailed UX research, journey mapping, and interaction analysis to design systems that align with real user needs and business goals, improving both efficiency and satisfaction.',
    tags: ['Journey Mapping', 'User Research', 'Interaction Design'],
  },
  {
    number: '05',
    icon: UserCheck,
    title: 'Accessibility & Usability Testing',
    description:
      'Our solutions are tested for accessibility, performance, and ease of use to ensure smooth experiences across devices and user groups. We focus on creating inclusive platforms that deliver consistent performance and reduce friction in daily operations.',
    tags: ['Accessibility', 'Usability Audits', 'Multi-Device Test'],
  },
  {
    number: '06',
    icon: LineChart,
    title: 'Continuous Improvement with Analytics',
    description:
      'We use performance analytics and user feedback to continuously optimize digital products and connected systems. This ensures your IoT infrastructure evolves with business needs, user expectations, and changing market demands.',
    tags: ['System Optimization', 'Product Analytics', 'Feedback Loops'],
  },
]

const outcomes = [
  {
    icon: Cpu,
    title: 'Connected Operations',
    text: 'Bridge physical hardware and digital platforms into one cohesive network.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    text: 'Protect telemetry data and connected assets with secure communication protocols.',
  },
  {
    icon: LineChart,
    title: 'Smarter Decision-Making',
    text: 'Leverage live data streams for proactive monitoring and business efficiency.',
  },
]

export default function IoTConnectivitySolutions() {
  return (
    <main className="overflow-hidden bg-[#FAFAF8] text-slate-900 font-sans antialiased">
      {/* Import Google Font: Plus Jakarta Sans */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        main, main * {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      {/* Hero section */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(186,230,253,0.55),transparent_48%),linear-gradient(135deg,#fcfdfd_0%,#f1f8fe_55%,#ffffff_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            {/* Tagline pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-900 shadow-sm">
              <Sparkles size={14} className="text-sky-600" />
              Secure IoT Network &amp; Connectivity Services
            </div>

            {/* Hero Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-[-0.035em] text-[#0F172A] sm:text-5xl lg:text-[3.75rem]">
              Transform Your Business with <span className="font-extrabold text-[#0284C7]">Intelligent Connectivity</span>
            </h1>

            {/* Hero Descriptions */}
            <p className="mt-7 max-w-2xl text-base font-medium leading-[1.75] text-slate-600 sm:text-lg">
              We design and develop intelligent IoT (Internet of Things) and connectivity solutions that help businesses create smarter, faster, and more connected operations. Our solutions bridge the gap between physical devices and digital systems, enabling real-time monitoring, automation, and data-driven decision-making across industries.
            </p>
            <p className="mt-4 max-w-2xl text-base font-medium leading-[1.75] text-slate-600 sm:text-lg">
              From connected devices and smart sensors to enterprise dashboards and communication platforms, we build scalable IoT ecosystems that improve efficiency, reduce operational costs, and enhance customer experiences. Our approach focuses on usability, performance, and long-term business value.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact-us/"
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

            {/* Checklist */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0284C7]" /> Real-time telemetry</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0284C7]" /> Human-centered UX</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0284C7]" /> Scalable ecosystems</span>
            </div>
          </div>

          {/* Hero Image Block */}
          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-sky-200/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2.5 shadow-2xl shadow-sky-950/10">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85&fit=crop&auto=format"
                alt="Intelligent IoT connectivity network and smart technology"
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

      {/* Key Offerings */}
      <section id="key-offerings" className="relative bg-[#F8FAFC] py-20 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-100/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-800">
              <Layers3 size={14} /> Our capabilities
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">Our Key Offerings</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              Gain smarter operations, stronger digital control, and future-ready systems that support innovation, scalability, and long-term growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.number} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-950/5">
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-sky-50/70 transition group-hover:bg-sky-100/70" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[#0284C7] ring-1 ring-sky-200/60"><Icon size={26} /></div>
                    <span className="text-sm font-extrabold tracking-widest text-sky-700/50">{item.number}</span>
                  </div>
                  <h3 className="relative mt-7 max-w-xl text-xl font-bold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">{item.description}</p>
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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#0F172A] px-7 py-12 sm:px-12 sm:py-14 lg:px-16 shadow-xl shadow-slate-950/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),transparent_40%)]" />
          <div className="absolute right-12 top-0 hidden h-full w-px bg-white/10 lg:block" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">We are here to answer your questions 24/7</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Need A Consultation?</h2>
              <p className="mt-4 max-w-2xl font-medium leading-relaxed text-slate-300">Let’s discuss how connected devices, real-time monitoring, and intuitive interfaces can transform your operations.</p>
            </div>
            <Link to="/contact-us/" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-sky-300">
              Contact us <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}