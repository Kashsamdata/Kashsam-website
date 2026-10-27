import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  CheckCircle2,
  Sparkles,
  Cpu,
  ShieldCheck,
  BarChart3,
  BrainCircuit,
  Workflow,
  CloudCog,
  Eye,
  Target,
  Compass,
  Globe2,
  ReceiptText,
  GraduationCap,
  Languages,
  Zap,
  MessageSquare,
  Award,
  Layers,
} from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'Artificial Intelligence',
    description: 'Deploy custom AI models and intelligent automation to solve complex business challenges and drive operational efficiency.',
    icon: BrainCircuit,
    tag: 'AI & ML Solutions',
    link: '/ai-enabled-process-automation',
  },
  {
    id: '02',
    title: 'Advanced Analytics',
    description: 'Transform raw data into predictive insights, custom dashboards, and real-time business intelligence to power confident decisions.',
    icon: BarChart3,
    tag: 'Business Intelligence',
    link: '/data-platform-analytics',
  },
  {
    id: '03',
    title: 'Process Automation',
    description: 'Streamline workflows and eliminate repetitive manual tasks with scalable robotic process automation (RPA) tailored to your needs.',
    icon: Workflow,
    tag: 'RPA & Workflows',
    link: '/ai-enabled-process-automation',
  },
  {
    id: '04',
    title: 'Data Engineering',
    description: 'Build reliable, high-performance data pipelines and architecture to ensure seamless data flow and enterprise-grade integrity.',
    icon: Database,
    tag: 'Pipelines & ETL',
    link: '/data-platform-analytics',
  },
  {
    id: '05',
    title: 'Cloud & Infrastructure',
    description: 'Implement scalable cloud data warehouses and optimized modern data stacks that grow effortlessly with your business.',
    icon: CloudCog,
    tag: 'Cloud Strategy',
    link: '/data-platform-analytics',
  },
  {
    id: '06',
    title: 'Data Governance & Security',
    description: 'Ensure total compliance, data quality, and secure access management across all your organizational data assets.',
    icon: ShieldCheck,
    tag: 'Security & Quality',
    link: '/security-services',
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

const coreValues = [
  {
    id: '01',
    title: 'Data Transformation',
    subtitle: 'TURNING DATA INTO OPPORTUNITY',
    description: 'Helping businesses operate smarter, make informed decisions, and achieve measurable impact.',
    icon: BrainCircuit,
    isHighlight: false,
  },
  {
    id: '02',
    title: 'Artificial Intelligence',
    subtitle: 'AI & MACHINE LEARNING',
    description: 'Deploying practical AI models and intelligent capabilities to automate complex processes.',
    icon: BrainCircuit,
    isHighlight: false,
  },
  {
    id: '03',
    title: 'Analytics & Automation',
    subtitle: 'SMARTER OPERATIONS',
    description: 'Transforming complex datasets into clear, actionable business metrics and streamlined workflows.',
    icon: Layers,
    isHighlight: false,
  },
  {
    id: '04',
    title: 'Data Engineering',
    subtitle: 'SCALABLE INFRASTRUCTURE',
    description: 'Building high-integrity data pipelines and storage foundations that scale seamlessly.',
    icon: Database,
    isHighlight: false,
  },
  {
    id: '05',
    title: 'Proven Growth',
    subtitle: '4+ YEARS EXPERTISE',
    description: 'Proven track record driving data-led innovation and measurable growth for leading brands.',
    icon: Award,
    isHighlight: true,
  },
]

const bgImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop',
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const homeRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const sections = homeRef.current?.querySelectorAll(':scope > section')
    if (!sections?.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('home-section-visible')
            entry.target.querySelectorAll('.home-content-item').forEach((item) => {
              item.classList.add('home-content-visible')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' },
    )

    sections.forEach((section) => {
      section.querySelectorAll('h1, h2, h3, p, article, blockquote, .ks-about-visual, .mv-home-image, .ks-tech-card, .ks-mini-preview, .ks-visual-center, a').forEach((item, index) => {
        item.classList.add('home-content-item')
        item.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 90}ms`)
      })
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={homeRef} className="home-page overflow-hidden bg-[#FAFAF8] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Google Font & Animation Keyframes */}
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

        @keyframes home-section-pop {
          from { opacity: 0.7; transform: translateY(24px) scale(0.99); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes home-content-pop {
          from { opacity: 0; transform: translateY(22px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .home-page > .home-section-visible {
          animation: home-section-pop 650ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .home-page .home-content-visible {
          animation: home-content-pop 600ms cubic-bezier(0.2, 0.7, 0.2, 1) var(--reveal-delay, 0ms) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .home-page > .home-section-visible,
          .home-page .home-content-visible {
            animation: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-gray-100 text-white">
        <div className="absolute inset-0 z-0">
          {bgImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-slate-900/35" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.35),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.2),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-100 shadow-lg backdrop-blur-sm">
              <Sparkles size={14} className="text-blue-300 animate-pulse" />
              <span>Next-Gen Enterprise Data &amp; AI Solutions</span>
            </div>

            <div className="space-y-2">
              <span className="block text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-blue-200">
                WE PROVIDE
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-white leading-[1.08]">
                DATA <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">SOLUTIONS</span>
              </h1>
            </div>

            <p className="max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-white/95 mx-auto lg:mx-0">
              Our main focus is on providing Organizations data-driven decision-making eco-system and digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg shadow-sky-600/30 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>OUR SERVICES</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5 active:scale-95 shadow-md backdrop-blur-sm"
              >
                <span>GET IN TOUCH</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/90 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-blue-300" /> Enterprise Grade
              </span>
              <span className="flex items-center gap-1.5">
                <Database size={16} className="text-blue-300" /> Unified Analytics
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu size={16} className="text-blue-300" /> AI-Driven
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-xs">
          {bgImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-[#0284C7] w-6' : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative isolate overflow-hidden bg-[#f5f8fd] text-slate-900 py-16 sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-36 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-900 shadow-sm">
                <Sparkles size={14} className="text-blue-600" />
                Who We Are
              </div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0284C7]">
                Data Platform &amp; Analytics
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                Turning data into opportunity. <span className="mt-1 block font-extrabold text-[#0284C7]">Technology into progress.</span>
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                <strong className="font-bold text-slate-950">Kashsam Data Solution</strong> is a global organization of experts in digital consulting, AI, data engineering, and automation.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                With operations across India, South East Asia, UK, UAE, and US, we design and deliver data-driven transformation that helps organizations operate smarter and faster. Our purpose is simple – to turn data into opportunity and technology into progress.
              </p>

              {/* Location Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['India', 'South East Asia', 'UK', 'UAE', 'US'].map((region) => (
                  <span key={region} className="inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-sky-900 shadow-xs">
                    <Globe2 size={13} className="text-[#0284C7]" /> {region}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#0284C7] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-[#0369A1]"
                >
                  Discover our story
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            {/* Visual Image Block */}
            <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-sky-200/50 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2.5 shadow-2xl shadow-sky-950/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&fit=crop&auto=format"
                  alt="Kashsam Data Solution global experts working together"
                  className="h-[340px] w-full rounded-[1.5rem] object-cover sm:h-[420px] lg:h-[480px]"
                />
              </div>
            </div>
          </div>

          {/* Cards Block */}
          <div className="mx-auto mt-14 grid max-w-6xl overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white/90 shadow-[0_14px_40px_rgba(15,35,70,0.06)] md:grid-cols-3 md:divide-x md:divide-slate-200">
            <article className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7]">01 <span className="ml-2 text-slate-500 font-semibold">Impact</span></p>
              <h3 className="mt-3 text-lg font-bold text-slate-950 sm:text-xl">Purpose-Driven Impact</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                Helping businesses enhance efficiency, accelerate growth, and achieve measurable success through technology.
              </p>
            </article>

            <article className="border-t border-slate-200 p-6 sm:p-8 md:border-t-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">02 <span className="ml-2 text-slate-500 font-semibold">Methodology</span></p>
              <h3 className="mt-3 text-lg font-bold text-slate-950 sm:text-xl">Data-Driven Transformation</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                We design and deliver innovative, data-led solutions that empower organizations to operate smarter and faster.
              </p>
            </article>

            <article className="border-t border-slate-200 p-6 sm:p-8 md:border-t-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">03 <span className="ml-2 text-slate-500 font-semibold">Reach</span></p>
              <h3 className="mt-3 text-lg font-bold text-slate-950 sm:text-xl">Global Expertise</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                A worldwide team of specialists in digital consulting, AI, data engineering, and automation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* NEW: OUR CORE VALUES SECTION (Matched to Infographic Screenshot) */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-t border-slate-200/80">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#0284C7]">
              OUR CORE VALUES
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
              Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              Driving Transformation Through Data and Innovation. At <strong className="font-bold text-slate-900">Kashsam Data Solutions</strong>, we turn data into opportunity through AI, analytics, process automation, and data engineering.
            </p>
          </div>

          {/* 5 Pillars Timeline Layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 items-start">
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.id} className="flex flex-col items-center text-center group">

                  {/* Top Soft Icon Square Box */}
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-3xl transition duration-300 shadow-sm ${
                      value.isHighlight
                        ? 'bg-[#0284C7] text-white shadow-sky-600/30 shadow-lg'
                        : 'bg-sky-50/80 text-[#0284C7] group-hover:bg-sky-100'
                    }`}
                  >
                    <Icon size={38} strokeWidth={1.75} />
                  </div>

                  {/* Dotted Vertical Connector Line */}
                  <div className="h-6 w-0 border-l-2 border-dotted border-slate-300 my-1" />

                  {/* Number Circle Badge */}
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm ${
                      value.isHighlight ? 'bg-[#0284C7]' : 'bg-[#0284C7]'
                    }`}
                  >
                    {value.id}
                  </div>

                  {/* Text Content */}
                  <div className="mt-4 space-y-1.5">
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {value.title}
                    </h3>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7]">
                      {value.subtitle}
                    </p>
                    <p className="pt-1 text-xs font-medium leading-relaxed text-slate-600 max-w-[210px] mx-auto">
                      {value.description}
                    </p>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* KashAssist Showcase */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/50 to-white py-20 sm:py-24 border-t border-slate-200/80">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284C7] shadow-sm">
                <Sparkles size={14} className="text-sky-600 animate-pulse" />
                New — From Kashsam
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="/images/kashassist-logo.png"
                  alt="KashAssist logo"
                  className="h-20 w-24 object-contain sm:h-24 sm:w-28"
                />
                <h2 className="text-3xl font-bold leading-[1.12] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                  Meet <span className="font-extrabold text-[#0284C7]">KashAssist</span>
                </h2>
              </div>
              <p className="mt-2 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
                AI assistants for Bharat
              </p>

              <p className="mt-5 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                GST billing for kirana shops &amp; AI study help for students — delivered seamlessly on <strong className="font-bold text-slate-900">WhatsApp</strong>, in <strong className="font-bold text-slate-900">10 Indian languages</strong>.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-sky-300 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                    <ReceiptText size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    GST Billing for Kirana Shops
                  </h3>
                  <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-600">
                    Create instant GST invoices right on WhatsApp without requiring computer software.
                  </p>
                </div>

                <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-sky-300 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    AI Study Help for Students
                  </h3>
                  <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-600">
                    Instant homework help, concept breakdowns, and test prep in your local language.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-bold text-slate-700">
                <span className="inline-flex items-center gap-2">
                  <Languages size={17} className="text-[#0284C7]" /> 10 Indian Languages
                </span>
                <span className="inline-flex items-center gap-2">
                  <Zap size={17} className="text-[#0284C7]" /> 3 Free Uses Included
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0284C7]" /> No Signup Required
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/our-products"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-sky-200 bg-white px-7 py-4 text-sm font-bold text-sky-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50"
                >
                  Learn more
                  <ArrowUpRight size={17} />
                </Link>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0284C7] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-[#0369A1]"
                >
                  <MessageSquare size={18} />
                  Try on WhatsApp Free
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Smartphone Graphic */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-sky-300/40 via-emerald-300/30 to-sky-200/40 blur-2xl" />

              <div className="relative mx-auto w-[290px] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 p-2 shadow-2xl sm:w-[320px]">
                <div className="absolute left-1/2 top-3 h-4 w-28 -translate-x-1/2 rounded-full bg-slate-900 z-20" />

                <div className="relative flex h-[520px] flex-col overflow-hidden rounded-[2rem] bg-[#efeae2]">
                  <div className="flex items-center gap-3 bg-[#075e54] px-4 pt-7 pb-3 text-white shadow-md">
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0284C7] font-bold text-sm shadow-xs">
                      KA
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold leading-tight">KashAssist AI</h4>
                      <p className="text-[10px] text-emerald-100 font-medium">Online · Official Assistant</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 p-3 text-xs overflow-y-auto font-sans">
                    <div className="my-1 text-center">
                      <span className="rounded-md bg-white/80 px-2 py-0.5 text-[9px] font-semibold text-slate-500 shadow-xs">
                        Today
                      </span>
                    </div>

                    <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white p-3 shadow-xs text-slate-800">
                      <p className="font-bold text-[#075e54] text-[11px] mb-1">KashAssist AI</p>
                      Namaste! 🙏 Welcome to KashAssist.
                      <br />How can I help you today?
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="rounded-md bg-sky-50 px-2 py-1 text-[10px] font-bold text-sky-800">1. GST Bill</span>
                        <span className="rounded-md bg-sky-50 px-2 py-1 text-[10px] font-bold text-sky-800">2. Study Help</span>
                      </div>
                    </div>

                    <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-[#dcf8c6] p-3 shadow-xs text-slate-900">
                      Create GST bill for 10kg Rice and 5L Oil.
                    </div>

                    <div className="max-w-[88%] rounded-2xl rounded-tl-none bg-white p-3 shadow-xs text-slate-800 space-y-2">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-[11px]">
                        <ReceiptText size={14} /> GST Invoice Ready!
                      </div>
                      <div className="rounded-lg bg-slate-50 p-2 text-[10px] space-y-1 font-mono border border-slate-200/60">
                        <div className="flex justify-between"><span>Rice (10kg):</span><span>₹600</span></div>
                        <div className="flex justify-between"><span>Oil (5L):</span><span>₹750</span></div>
                        <div className="flex justify-between text-slate-500"><span>GST (5%):</span><span>₹67.50</span></div>
                        <div className="border-t border-slate-300 pt-1 flex justify-between font-bold text-slate-900">
                          <span>Total:</span><span>₹1,417.50</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500">PDF sent. Reply in Hindi, Tamil, Telugu or any of 10 languages!</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-[#f0f0f0] p-2 border-t border-slate-200">
                    <div className="flex-1 rounded-full bg-white px-3 py-1.5 text-[11px] text-slate-400 font-medium">
                      Type a message...
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#128c7e] text-white shadow-xs">
                      <MessageSquare size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFOGRAPHIC VISION & MISSION SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white py-20 sm:py-28 border-t border-slate-200/80">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              <Compass size={14} className="text-[#0284C7]" /> Strategic Foundation
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
              Guiding Principles
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base font-medium text-slate-600 sm:text-lg leading-relaxed">
              The purpose and commitment behind the data and technology solutions we deliver.
            </p>
          </div>

          <div className="relative my-12 max-w-4xl mx-auto">

            <div className="hidden sm:block absolute top-[110px] left-[25%] right-[25%] h-[2px] bg-slate-200/80 z-0" />

            <div className="grid gap-12 sm:grid-cols-2 sm:gap-12 items-start relative z-10">

              {/* CIRCLE 1: OUR VISION */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative flex items-center justify-center">
                  <div className="w-44 h-30 rounded-t-full border-[14px] border-b-0 border-[#0284C7] bg-transparent flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-xs">
                    <div className="w-26 h-26 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100 transform translate-y-3">
                      <Eye size={38} className="text-[#0284C7]" />
                    </div>
                  </div>
                </div>

                <div className="w-1 h-12 bg-[#0284C7] my-2 relative">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0284C7] absolute bottom-0 left-1/2 -translate-x-1/2 ring-4 ring-white" />
                </div>

                <div className="mt-4 max-w-sm space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0284C7]">01 / Vision</span>
                  <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                  <p className="text-sm font-bold text-[#0284C7]">Empowering Data-Driven Success</p>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 pt-1">
                    To enable businesses through our products and services to produce, utilize, and monetize data, strengthening both their operations and data ecosystems – creating powerful network effects that drive sustainable growth.
                  </p>
                </div>
              </div>

              {/* CIRCLE 2: OUR MISSION */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative flex items-center justify-center">
                  <div className="w-44 h-30 rounded-b-full border-[14px] border-t-0 border-slate-900 bg-transparent flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-xs">
                    <div className="w-26 h-26 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100 transform -translate-y-3">
                      <Target size={38} className="text-slate-900" />
                    </div>
                  </div>
                </div>

                <div className="w-1 h-12 bg-slate-900 my-2 relative">
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-900 absolute top-0 left-1/2 -translate-x-1/2 ring-4 ring-white" />
                </div>

                <div className="mt-4 max-w-sm space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">02 / Mission</span>
                  <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                  <p className="text-sm font-bold text-slate-900">Innovation. Insight. Impact.</p>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 pt-1">
                    To drive digital transformation by merging data and knowledge – empowering organizations to achieve operational excellence, process improvement, and enhanced customer experiences through intelligent and secure systems.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Preview Section */}
      <section className="relative bg-[#F8FAFC] py-20 sm:py-24 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-800">
              <Sparkles size={14} className="text-sky-600" /> What we offer
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">Explore Our Capabilities</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              Comprehensive data engineering, artificial intelligence, and analytics solutions designed for enterprise scalability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.id} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-950/5">
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-sky-50/70 transition group-hover:bg-sky-100/70" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[#0284C7] ring-1 ring-sky-200/60"><Icon size={26} /></div>
                    <span className="text-sm font-extrabold tracking-widest text-sky-700/50">{service.id}</span>
                  </div>
                  <h3 className="relative mt-7 text-xl font-bold tracking-tight text-slate-900">{service.title}</h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">{service.description}</p>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="rounded-full border border-sky-100 bg-sky-50 px-3.5 py-1.5 text-xs font-semibold text-sky-800">{service.tag}</span>
                    <Link to={service.link} className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:underline">
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clients & Technology Partners Infinite Scroll Marquee Section */}
      <section className="bg-white py-20 overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-800">
            <CheckCircle2 size={14} className="text-sky-600" /> Trusted ecosystem
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#122b50] tracking-tight">
            Empowering the World’s Most Agile Brands and Agencies
          </h2>
        </div>

        <div className="space-y-8">
          {/* Row 1: Trusted Clients Infinite Marquee */}
          <div className="relative w-full overflow-hidden flex">
            <div className="flex animate-marquee gap-8 whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={`client-${index}`}
                  className="bg-[#fafbfc] border border-gray-200/60 rounded-2xl p-4 h-24 w-44 shrink-0 flex items-center justify-center shadow-xs hover:shadow-md hover:border-sky-300 transition"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 w-auto object-contain transition duration-300 mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Technology Partners Infinite Marquee */}
          <div className="relative w-full overflow-hidden flex">
            <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={`partner-${index}`}
                  className="bg-[#fafbfc] border border-gray-200/60 rounded-2xl p-4 h-24 w-44 shrink-0 flex items-center justify-center shadow-xs hover:shadow-md hover:border-sky-300 transition"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 w-auto object-contain transition duration-300 mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business objective and data challenges */}
      <section className="relative isolate overflow-hidden border-t border-sky-100 bg-sky-50/70 py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-36 -top-32 -z-10 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-800">
              <Target size={14} className="text-sky-600" /> Built for real business needs
            </span>
            <h2 className="mt-6 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Our Business Objective Is To Solve{' '}
              <span className="text-sky-700">Data Challenges</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Every business generates valuable data, yet many organisations—especially MSMEs, SMEs, and SOHOs—use it in only a handful of business intelligence reports. Some do not capture their business data effectively at all.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              The tools and expertise needed to turn that data into action can be out of reach. We believe analytics should be practical, scalable, and accessible to every business.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-900/10 transition hover:-translate-y-0.5 hover:bg-sky-800"
            >
              Let’s solve your data challenges <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div>
            <div className="mb-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-800">What gets in the way</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Organisations often struggle to adopt data and analytics because of:</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: '01',
                  title: 'The right data foundations',
                  description: 'Investing in appropriate systems to capture business data accurately.',
                  icon: Database,
                },
                {
                  number: '02',
                  title: 'Too many disconnected tools',
                  description: 'Needing separate tools for business intelligence, data engineering, and machine learning.',
                  icon: Layers,
                },
                {
                  number: '03',
                  title: 'Platforms that cost too much',
                  description: 'Available platforms can be pricey while still lacking the business intelligence capabilities firms need.',
                  icon: ReceiptText,
                },
                {
                  number: '04',
                  title: 'Always-on infrastructure',
                  description: 'BI tools running on always-on servers add cost, with no easy scaling on demand.',
                  icon: CloudCog,
                },
                {
                  number: '05',
                  title: 'Expert advice out of reach',
                  description: 'Exorbitant consulting rates prevent many firms from getting the right data strategy, governance, and adoption advice.',
                  icon: GraduationCap,
                },
              ].map(({ number, title, description, icon: Icon }) => (
                <article
                  key={number}
                  className={`group rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-900/5 sm:p-6 ${number === '05' ? 'sm:col-span-2' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition group-hover:bg-sky-700 group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-extrabold tracking-[0.16em] text-sky-700/50">{number}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}