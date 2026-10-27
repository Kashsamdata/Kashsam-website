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
    <div className="overflow-hidden bg-white text-gray-950 selection:bg-blue-600 selection:text-white">

      {/* ================= HERO SECTION (CENTER ALIGNED) ================= */}
      <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-blue-50/60 via-blue-50/20 to-white border-b border-gray-100">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-400/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs mb-6">
            <Sparkles size={14} className="text-blue-600 animate-pulse" /> What We Offer
          </div>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
            Comprehensive Digital Capabilities
          </p>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.15]">
            How We Empower Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">Business</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Enterprise-grade digital transformation, data ecosystems, automation, and security capabilities designed to scale your operations seamlessly.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {servicesData.map((service) => {
            const IconComponent = service.icon

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Top Image Banner with Badge */}
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-8 border border-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-gray-900/90 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Header & Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-950 tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600 mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="border-t border-gray-100 pt-6 mb-8">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-4">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Explore This Service
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================= 24/7 CONSULTATION CTA SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-gray-950 to-gray-900 py-20 text-white text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="inline-block rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-200">
            Need A Consultation?
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            We are here to answer your questions 24/7
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-base">
            Reach out to our experts today to find out how our customized solutions can transform your business workflows.
          </p>
          <div className="pt-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-700 active:scale-[0.98]"
            >
              Book an Appointment
              <Calendar size={17} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services