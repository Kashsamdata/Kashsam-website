import React from 'react'
import { Link } from 'react-router-dom'
import heroBgImage from '../assets/img1-scaled.jpg'; // Adjust path to match your background image asset
import {
  ArrowRight,
  Database,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Cpu,
  Wifi,
  Briefcase,
  Code,
  ShieldCheck,
  Target,
  Eye,
  TrendingUp,
} from 'lucide-react'
import analyticsImage from '../assets/img1-scaled.jpg'

const solutions = [
  {
    icon: Database,
    title: 'Data Platform & Analytics',
    description:
      'We build unified, cloud-native ecosystems for analytics, governance, and automation — transforming raw data into actionable insights.',
    bullets: [
      'BI and analytics using SQL, Python, and Spark.',
      'Data Quality (DQ) and Master Data Management (MDM)',
      'KPI catalogues and unified dashboards',
      'Zero per-user licence restrictions',
    ],
    link: '/services#platforms',
  },
  {
    icon: Wifi,
    title: 'IoT & Connectivity Solutions',
    description:
      'We design digital products and enterprise interfaces that are human-centred, data-informed, and conversion-optimised.',
    bullets: [
      'Behavioural UX research and mapping',
      'Responsive, modular interface design',
      'Accessibility and usability testing',
      'Continuous improvement with analytics',
    ],
    link: '/services#iot',
  },
  {
    icon: Briefcase,
    title: 'ERP and CRM Consultancy',
    description:
      'Strategic and technical advisory for organizations seeking end-to-end ERP and CRM implementation and support across SAP, MS Business Central, and Epicor.',
    bullets: [
      'Gap analysis and technology roadmap',
      'Cloud, data, and security architecture design',
      'Process mapping and implementation',
    ],
    link: '/services#erp-crm',
  },
  {
    icon: Code,
    title: 'Web Delivery & Implementation',
    description:
      'Complete onshore and offshore development for end-to-end digital rollouts — from architecture to deployment and optimisation.',
    bullets: [
      'Agile delivery and continuous integration',
      'Cloud setup and infrastructure management',
      'Performance, SEO, and security optimisation',
    ],
    link: '/services#web-delivery',
  },
  {
    icon: Cpu,
    title: 'AI-Enabled Process Automation',
    description:
      'We eliminate manual effort through intelligent automation — empowering teams to focus on innovation and strategy.',
    bullets: [
      'Process and workflow automation',
      'Predictive analytics and AI insights',
      'Smart chatbots and virtual assistants',
      'Seamless ERP and CRM integration',
    ],
    link: '/services#automation',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Security Services',
    description:
      'Strengthening your business posture with comprehensive cybersecurity, threat monitoring, and data compliance.',
    bullets: [
      'Cybersecurity Assessment & Risk Management',
      'Data Protection & Compliance',
      'Network & Infrastructure Security',
      'Identity & Access Management',
    ],
    link: '/services#security',
  },
]

const clientLogos = [
  { name: 'ILJIN', src: 'https://kashsam.ai/wp-content/uploads/2025/11/ILJIN.gif' },
  { name: 'Daimler India', src: 'https://kashsam.ai/wp-content/uploads/2025/11/Daimler-India-Commercial-Vehicle.jpg' },
  { name: 'Coronet', src: 'https://kashsam.ai/wp-content/uploads/2025/11/Coronet.jpg' },
  { name: 'Bajaj Capital', src: 'https://kashsam.ai/wp-content/uploads/2025/11/Bajaj-Capital.gif' },
  { name: 'Yogiji', src: 'https://kashsam.ai/wp-content/uploads/2025/11/yogiji2.png' },
  { name: 'Lucas India', src: 'https://kashsam.ai/wp-content/uploads/2025/11/Lucas-India.png' },
  { name: 'Interglobe', src: 'https://kashsam.ai/wp-content/uploads/2025/11/Interglobe.png' },
  { name: 'Inches', src: 'https://kashsam.ai/wp-content/uploads/2025/11/inches-2048x836-1.png' },
  { name: 'Consolidated', src: 'https://kashsam.ai/wp-content/uploads/2026/06/consolidated.jpg' },
  { name: 'FOS Desk', src: 'https://kashsam.ai/wp-content/uploads/2026/06/FOS-Desk.jpg' },
  { name: 'Green Power', src: 'https://kashsam.ai/wp-content/uploads/2026/06/Green-Power.png' },
  { name: 'Jubliant', src: 'https://kashsam.ai/wp-content/uploads/2026/06/Jubliant.png' },
  { name: 'Printer House', src: 'https://kashsam.ai/wp-content/uploads/2026/06/Printer-House.jpg' },
  { name: 'Proconnect', src: 'https://kashsam.ai/wp-content/uploads/2026/06/Proconnect.png' },
]

const partnerLogos = [
  { name: 'Download', src: 'https://kashsam.ai/wp-content/uploads/2025/11/download.png' },
  { name: 'SAP', src: 'https://kashsam.ai/wp-content/uploads/2025/11/SAP_2011_logo.svg-2048x1013-1.png' },
  { name: 'Microsoft', src: 'https://kashsam.ai/wp-content/uploads/2025/11/microsft.png' },
  { name: 'SciBi', src: 'https://kashsam.ai/wp-content/uploads/2025/11/SciBi.png' },
  { name: 'IAAP', src: 'https://kashsam.ai/wp-content/uploads/2025/11/IAAP-1.jpg' },
  { name: 'AWS', src: 'https://kashsam.ai/wp-content/uploads/2025/11/AWS2-e1773337682499.png' },
  { name: 'R-M', src: 'https://kashsam.ai/wp-content/uploads/2026/03/R-M.webp' },
  { name: 'HPE', src: 'https://kashsam.ai/wp-content/uploads/2025/11/HPE-e1773337653936.png' },
  { name: 'Force-point', src: 'https://kashsam.ai/wp-content/uploads/2025/11/Force-point.png' },
  { name: 'Diplogo', src: 'https://kashsam.ai/wp-content/uploads/2026/06/diplogo.png' },
  { name: 'Zoho IoT', src: 'https://kashsam.ai/wp-content/uploads/2026/06/Zoho-IoT.png' },
  { name: 'Tech Bridge', src: 'https://kashsam.ai/wp-content/uploads/2026/06/Tech-Bridge.png' },
]

function Home() {
  return (
    <div className="overflow-hidden bg-white text-gray-900 selection:bg-blue-600 selection:text-white">

      {/* ================= REDESIGNED LIGHT HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50/60 via-white to-gray-50 text-gray-900 border-b border-gray-100">
        
        {/* Subtle Background Texture & Accent Glow */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & CTA */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs">
                <Sparkles size={14} className="text-blue-600 animate-pulse" /> Next-Gen Enterprise Data & AI Solutions
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <span className="block text-sm sm:text-base font-extrabold tracking-[0.25em] uppercase text-blue-700">
                  WE PROVIDE
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-950 leading-[1.08]">
                  DATA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">SOLUTIONS</span>
                </h1>
              </div>

              {/* Subheading Box */}
              <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 bg-white p-5 rounded-2xl border border-gray-200/80 border-l-4 border-l-blue-600 shadow-sm">
                Our main focus is on providing Organizations data-driven decision-making eco-system and digital transformation.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <span>OUR SERVICES</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <span>GET IN TOUCH</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-600 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-blue-600" /> Enterprise Grade</span>
                <span className="flex items-center gap-1.5"><Database size={16} className="text-blue-600" /> Unified Analytics</span>
                <span className="flex items-center gap-1.5"><Cpu size={16} className="text-blue-600" /> AI-Driven</span>
              </div>

            </div>

            {/* Right Column: Clean Modern Card Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Glow Backdrop */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 to-indigo-300 opacity-20 blur-2xl" />
                
                {/* Card Container */}
                <div className="relative rounded-3xl border border-gray-200/85 bg-white p-6 sm:p-8 shadow-xl shadow-blue-900/5 space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Digital Ecosystem</h4>
                        <p className="text-xs text-gray-500">Transformation & Insights</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">
                      Active
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 transition hover:border-blue-200">
                      <div className="flex justify-between items-center text-xs text-gray-600 mb-1 font-medium">
                        <span>Data Platforms & BI</span>
                        <span className="text-blue-600 font-bold">100% Scalable</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-full w-[92%]" />
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 transition hover:border-blue-200">
                      <div className="flex justify-between items-center text-xs text-gray-600 mb-1 font-medium">
                        <span>AI Process Automation</span>
                        <span className="text-blue-600 font-bold">Optimized</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full w-[88%]" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <p className="text-xs text-gray-500">
                      Empowering MSMEs, SMEs, and global enterprises with real-time analytics.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="relative overflow-hidden bg-gray-50/60 py-24 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gray-200/80 bg-gray-950 shadow-2xl shadow-gray-900/10">
                <img
                  src={analyticsImage}
                  alt="Business professional exploring analytics and connected data"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-blue-900/80 px-3.5 py-1 text-xs font-semibold text-blue-100 backdrop-blur-md">
                    <Sparkles size={13} /> Global Expertise
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    One clearer view of your business.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    Operating across India, UK, UAE, US & South East Asia to turn complex data into competitive advantage.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-3xl bg-blue-200/40 blur-xl" />
            </div>

            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                Who We Are
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                Turning Data into Opportunity
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                <strong className="text-gray-900">Kashsam Data Solution</strong> is a global organization of digital consulting, AI, data engineering, and automation specialists committed to driving operational excellence.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                We bridge the gap between technical data engineering and strategic decision-making, helping enterprises build resilient, future-proof digital architectures.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 text-sm font-medium text-gray-700 italic pt-2">
                "Our purpose is simple — to turn data into opportunity and technology into progress."
              </blockquote>
            </div>

          </div>
        </div>
      </section>


      {/* ================= DETAILED MISSION & VISION SECTION ================= */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
              Guiding Principles
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Our Vision & Mission
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              The foundational pillars that guide our strategy, drive our product innovation, and define our commitment to clients worldwide.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Vision Card */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-gradient-to-b from-blue-50/40 to-white p-8 sm:p-10 shadow-xs hover:border-blue-300 transition-all">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md mb-6">
                  <Eye size={28} />
                </div>
                
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                  Our Long-Term Outlook
                </span>
                
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
                  Empowering Data-Driven Success Globally
                </h3>
                
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  To enable businesses through our products and services to produce, utilize, and monetize data — strengthening both their operations and data ecosystems to create powerful network effects that drive sustainable long-term growth.
                </p>

                <ul className="mt-6 space-y-3 border-t border-gray-200/60 pt-6">
                  {[
                    'Democratizing access to enterprise-grade analytics for MSMEs and SMEs',
                    'Building scalable network effects through connected data loops',
                    'Transforming raw data commodities into monetizable corporate assets',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-gradient-to-b from-gray-50/80 to-white p-8 sm:p-10 shadow-xs hover:border-blue-300 transition-all">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-md mb-6">
                  <Target size={28} />
                </div>
                
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                  Our Daily Commitment
                </span>
                
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
                  Innovation, Insight, and Real-World Impact
                </h2>
                
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  To drive digital transformation by merging data and knowledge — empowering organizations to achieve operational excellence, process improvement, and enhanced customer experiences through intelligent and secure systems.
                </p>

                <ul className="mt-6 space-y-3 border-t border-gray-200/60 pt-6">
                  {[
                    'Eliminating manual bottlenecks with AI-driven process automation',
                    'Delivering secure, robust cloud infrastructure and data governance',
                    'Enhancing client agility through actionable, real-time business insights',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= KASHASSIST BANNER ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-950 to-gray-950 text-white py-16">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-semibold text-blue-200 mb-4">
                <MessageSquare size={13} /> New Product from Kashsam
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet KashAssist — AI Assistants for Bharat
              </h2>
              <p className="mt-3 text-base text-gray-300 leading-relaxed">
                GST billing for kirana shops & AI study help for students — delivered straight on WhatsApp in 10 Indian languages. 3 free uses, no signup required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/our-products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                Know More
              </Link>
              <a
                href="https://www.kashassist.com/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gray-950 shadow-lg transition hover:bg-blue-50 active:scale-[0.98]"
              >
                Try for Free
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ================= WHAT WE OFFER / SOLUTIONS GRID ================= */}
      <section id="solutions" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              How We Empower Your Business
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Explore our comprehensive suite of data, technology, ERP, and security capabilities designed to accelerate your growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon

              return (
                <article
                  key={solution.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-xs mb-6">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-950">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {solution.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-gray-100 pt-6">
                      {solution.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                          <CheckCircle2 size={15} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <Link
                      to={solution.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:text-blue-900"
                    >
                      Learn more
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>


      {/* ================= CONTINUOUS SLIDING LOGOS (MARQUEE) ================= */}
      <section className="bg-white py-20 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700 mb-3 block">
           
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122b50] tracking-tight">
            Empowering the World’s Most Agile Brands and Agencies
          </h2>
        </div>

        <div className="space-y-8">
          {/* Row 1: Sliding Left */}
          <div className="relative w-full overflow-hidden flex">
            <div className="flex animate-marquee gap-8 whitespace-nowrap min-w-full">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="bg-[#fafbfc] border border-gray-200/60 rounded-2xl p-4 w-44 h-24 shrink-0 flex items-center justify-center shadow-xs hover:shadow-md hover:border-blue-300 transition"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 w-auto object-contain transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Sliding Right */}
          <div className="relative w-full overflow-hidden flex">
            <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap min-w-full">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="bg-[#fafbfc] border border-gray-200/60 rounded-2xl p-4 w-44 h-24 shrink-0 flex items-center justify-center shadow-xs hover:shadow-md hover:border-blue-300 transition"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 w-auto object-contain transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Keyframes for smooth continuous marquee animation */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .animate-marquee-reverse {
            display: flex;
            width: max-content;
            animation: marquee-reverse 35s linear infinite;
          }
          .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>


      {/* ================= BUSINESS OBJECTIVE & DATA CHALLENGES ================= */}
      <section className="relative overflow-hidden bg-gray-50/80 py-24 border-t border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                Our Business Objective Is To Solve
              </span>
              
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl leading-tight">
                Data Challenges
              </h2>

              <p className="text-base leading-relaxed text-gray-600">
                Within every business, data can be harvested. But most of the organizations, especially MSME, SME, and SOHO, have only used its data in a few Business Intelligence reports. Some do not even capture the business data appropriately. Most MSME/SME firms can’t afford consulting, deploying, and employing analytics technologies. Organizations can’t adopt it because of:
              </p>

              <ul className="space-y-3.5 pt-2">
                {[
                  'Invest in appropriate systems for capturing Business Data',
                  'Need for a separate tools for BI, Data engineering, ML',
                  'Current Platform available are Pricy and lack BI capabilities.',
                  'BI Tools always-on server adds cost. No scaling-on-demand.',
                  'Exorbitant rates for consulting prevent most firms from acquiring correct data strategy, governance, and adoption advice.',
                ].map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-gray-800">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 mt-0.5 shadow-xs">
                      ✓
                    </span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gray-200/80 bg-gray-950 shadow-2xl shadow-gray-900/10">
                <img
                  src="https://kashsam.ai/wp-content/uploads/2026/03/IMG5-scaled.jpg"
                  alt="Data Challenges Illustration"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-blue-600/80 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    Overcoming Barriers
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    Accessible, affordable business intelligence for everyone.
                  </h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-3xl bg-blue-200/40 blur-xl" />
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home