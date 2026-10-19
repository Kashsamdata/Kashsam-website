import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Cpu,
  Wifi,
  ShieldCheck,
  Globe2,
  BarChart3,
  BrainCircuit,
  Workflow,
  CloudCog,
  ReceiptText,
  GraduationCap,
  BatteryFull,
} from 'lucide-react'
import analyticsImage from '../assets/img1-scaled.jpg'
import CoreValuesInfographic from '../Componets/CoreValuesInfographic.jsx'

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

const bgImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop',
]

function Home() {
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
    <div ref={homeRef} className="home-page overflow-hidden bg-white text-gray-900 selection:bg-blue-600 selection:text-white">
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

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/30" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.35),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.2),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-blue-100 shadow-lg backdrop-blur-sm">
              <Sparkles size={14} className="text-blue-300 animate-pulse" />
              <span>Next-Gen Enterprise Data & AI Solutions</span>
            </div>

            <div className="space-y-2">
              <span className="block text-sm sm:text-base font-extrabold tracking-[0.25em] uppercase text-blue-200">
                WE PROVIDE
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                DATA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">SOLUTIONS</span>
              </h1>
            </div>

            <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-white/90 mx-auto lg:mx-0">
              Our main focus is on providing Organizations data-driven decision-making eco-system and digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>OUR SERVICES</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 active:scale-95 shadow-md backdrop-blur-sm"
              >
                <span>GET IN TOUCH</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/85 font-medium">
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
                idx === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="ks-about">
        <div className="ks-about-pattern" />
        <div className="ks-about-container">
          <div className="ks-about-visual">
            <div className="ks-visual-label">
              <span className="ks-live-dot" />
              GLOBAL EXPERTISE
            </div>

            <div className="ks-orbit ks-orbit-one" />
            <div className="ks-orbit ks-orbit-two" />

            <div className="ks-visual-center">
              <div className="ks-center-glow" />
              <div className="ks-center-icon">
                <Database size={42} />
              </div>
              <span>SMART</span>
              <strong>INTELLIGENCE</strong>
            </div>

            <div className="ks-tech-card ks-card-data">
              <div className="ks-tech-icon">
                <BarChart3 size={18} />
              </div>
              <div>
                <span>DATA</span>
                <strong>Decision Engine</strong>
              </div>
            </div>

            <div className="ks-tech-card ks-card-ai">
              <div className="ks-tech-icon">
                <Cpu size={18} />
              </div>
              <div>
                <span>AI</span>
                <strong>Automation Layer</strong>
              </div>
            </div>

            <div className="ks-tech-card ks-card-network">
              <div className="ks-tech-icon">
                <Globe2 size={18} />
              </div>
              <div>
                <span>NETWORK</span>
                <strong>Global Reach</strong>
              </div>
            </div>

            <div className="ks-mini-preview">
              <img src={analyticsImage} alt="Business analytics popup" />
              <div className="ks-mini-label">
                <strong>Insights</strong>
                <span>Data-first strategy for smarter growth.</span>
              </div>
            </div>

            <div className="ks-visual-caption">
              <span className="ks-caption-line" />
              Helping organizations turn complex data into clearer, smarter action.
            </div>
          </div>

          <div className="ks-about-content">
            <div className="ks-about-heading">
              <div className="ks-hexagon">
                <span>WHO</span>
                <strong>WE ARE</strong>
              </div>
              <div className="ks-small-hex" />
            </div>

            <div className="ks-eyebrow">WHO WE ARE</div>
            <h2>Data Platform &amp; Analytics</h2>
            <p className="ks-about-intro">
              <strong>Kashsam Data Solution</strong> is a global organization of experts in digital consulting, AI, data engineering, and automation.
            </p>
            <p className="ks-about-description">
              With operations across India, South East Asia, the UK, UAE, and US, we design and deliver data-driven transformation that helps organizations operate smarter and faster.
            </p>

            <div className="ks-about-divider" />

            <div className="ks-about-bottom">
              <div className="ks-about-value">
                <div className="ks-value-number">01</div>
                <div>
                  <h3>Purpose-Driven Impact</h3>
                  <p>Helping businesses enhance efficiency, accelerate growth, and achieve measurable success through technology.</p>
                </div>
              </div>

              <div className="ks-about-value">
                <div className="ks-value-number">02</div>
                <div>
                  <h3>Data-Driven Transformation</h3>
                  <p>We design and deliver innovative, data-led solutions that empower organizations to operate smarter and faster.</p>
                </div>
              </div>

              <div className="ks-about-value">
                <div className="ks-value-number">03</div>
                <div>
                  <h3>Global Expertise</h3>
                  <p>A worldwide team of specialists in digital consulting, AI, data engineering, and automation.</p>
                </div>
              </div>
            </div>

            <p className="ks-about-purpose">
              Our purpose is simple — to turn data into opportunity and technology into progress.
            </p>

            <a href="/about-us" className="ks-about-button">
              Learn More
            </a>
          </div>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

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

          .ks-about {
            --ks-green: #2563eb;
            --ks-green-dark: #1d4ed8;
            --ks-ink: #111827;
            --ks-muted: #4b5563;
            position: relative;
            isolation: isolate;
            overflow: hidden;
            padding: 86px 6.5% 24px;
            background: #f3f6fb;
            color: var(--ks-ink);
            font-family: 'Plus Jakarta Sans', Arial, Helvetica, sans-serif;
            border-radius: 0 0 22px 22px;
          }

          .ks-about-pattern {
            position: absolute;
            inset: 0;
            z-index: -1;
            pointer-events: none;
            opacity: 0.45;
            background-image: radial-gradient(#ffffff 1.5px, transparent 1.5px);
            background-size: 15px 15px;
            mask-image: linear-gradient(90deg, black, transparent 48%, black);
          }

          .ks-about-container {
            max-width: 1320px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            align-items: center;
            gap: clamp(42px, 7vw, 105px);
          }

          .ks-about-visual {
            position: relative;
            min-height: 550px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .ks-visual-label {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #475569;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2px;
          }

          .ks-live-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #2563eb;
            box-shadow: 0 0 0 5px #2563eb1c;
          }

          .ks-orbit {
            position: absolute;
            width: 390px;
            height: 390px;
            border: 1px solid #2563eb30;
            border-radius: 50%;
          }

          .ks-orbit-one { transform: rotateX(62deg) rotate(-28deg); }
          .ks-orbit-two {
            width: 300px;
            height: 300px;
            transform: rotateX(62deg) rotate(35deg);
          }

          .ks-visual-center {
            position: relative;
            z-index: 2;
            width: 240px;
            height: 240px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border-radius: 50%;
            background: linear-gradient(145deg, #ffffff, #e8efff);
            border: 1px solid #ffffff;
            box-shadow: 0 25px 65px #1e3a8a1c, inset 0 0 30px #2563eb0d;
          }

          .ks-center-glow {
            position: absolute;
            inset: 25px;
            border: 1px dashed #2563eb55;
            border-radius: 50%;
          }

          .ks-center-icon {
            display: grid;
            place-items: center;
            width: 100px;
            height: 100px;
            border-radius: 30px;
            color: white;
            background: linear-gradient(145deg, #3b82f6, #1d4ed8);
            box-shadow: 0 14px 30px #2563eb35;
            transform: rotate(-5deg);
          }

          .ks-center-icon svg { transform: rotate(5deg); }

          .ks-visual-center > span {
            margin-top: 8px;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2px;
            color: #475569;
          }

          .ks-visual-center > strong {
            font-family: inherit;
            font-size: 17px;
            letter-spacing: 1px;
          }

          .ks-tech-card {
            position: absolute;
            z-index: 3;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 13px 17px;
            min-width: 205px;
            border: 1px solid #ffffff;
            border-radius: 13px;
            background: #ffffffed;
            box-shadow: 0 12px 35px #263b3212;
          }

          .ks-tech-card > div:last-child {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .ks-tech-icon {
            display: grid;
            place-items: center;
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: #eff6ff;
            color: var(--ks-green);
          }

          .ks-tech-card span {
            color: #64748b;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 1px;
          }

          .ks-tech-card strong {
            color: #1f2937;
            font-size: 13px;
            font-weight: 700;
          }

          .ks-card-data { top: 19%; left: 0; }
          .ks-card-ai { top: 42%; right: -3%; }
          .ks-card-network { bottom: 16%; left: 5%; }

          .ks-mini-preview {
            position: absolute;
            right: -14px;
            bottom: 52px;
            width: 192px;
            border: 1px solid #ffffff;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 20px 50px rgba(30, 58, 138, 0.14);
            padding: 10px;
            overflow: hidden;
          }

          .ks-mini-preview img {
            display: block;
            width: 100%;
            height: 120px;
            object-fit: cover;
            border-radius: 12px;
          }

          .ks-mini-label {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 10px 4px 2px;
          }

          .ks-mini-label strong {
            color: var(--ks-green);
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }

          .ks-mini-label span {
            color: #475569;
            font-size: 12px;
            line-height: 1.6;
          }

          .ks-visual-caption {
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 310px;
            color: #475569;
            font-size: 12px;
            line-height: 1.7;
          }

          .ks-caption-line {
            width: 30px;
            height: 2px;
            flex-shrink: 0;
            background: var(--ks-green);
          }

          .ks-about-content {
            position: relative;
            padding: 8px 0 20px;
          }

          .ks-about-heading {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 35px;
          }

          .ks-hexagon {
            width: 145px;
            height: 132px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            background: linear-gradient(135deg, #60a5fa, #1d4ed8);
            clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
          }

          .ks-hexagon span { font-size: 17px; letter-spacing: 2px; }
          .ks-hexagon strong {
            font-family: inherit;
            font-size: 19px;
            font-weight: 800;
          }

          .ks-small-hex {
            width: 46px;
            height: 42px;
            background: #2563eb;
            clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
          }

          .ks-eyebrow {
            color: var(--ks-green);
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2.2px;
          }

          .ks-about-content h2 {
            max-width: 560px;
            margin: 15px 0 22px;
            font-family: inherit;
            font-size: clamp(32px, 3.4vw, 48px);
            font-weight: 800;
            letter-spacing: -2px;
            line-height: 1.17;
          }

          .ks-about-content h2 span {
            display: block;
            color: var(--ks-green);
          }

          .ks-about-intro {
            max-width: 520px;
            margin: 0 0 18px;
            color: #374151;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.9;
          }

          .ks-about-description {
            max-width: 560px;
            margin: 0;
            color: var(--ks-muted);
            font-size: 14px;
            line-height: 2;
          }

          .ks-about-divider {
            height: 1px;
            margin: 28px 0;
            background: #d7dfeb;
          }

          .ks-about-bottom {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .ks-about-value {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .ks-value-number {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            border-radius: 9px;
            background: #dbeafe;
            color: var(--ks-green-dark);
            font-size: 11px;
            font-weight: 700;
          }

          .ks-about-value h3 {
            margin: 2px 0 7px;
            font-family: inherit;
            font-size: 14px;
            font-weight: 800;
          }

          .ks-about-value p {
            margin: 0;
            color: #4b5563;
            font-size: 12px;
            line-height: 1.7;
          }

          .ks-about-purpose {
            margin: 24px 0 0;
            padding-left: 14px;
            border-left: 3px solid var(--ks-green);
            color: #1f2937;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.7;
          }

          .ks-about-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 30px;
            padding: 14px 20px;
            border: 1px solid var(--ks-green);
            border-radius: 5px;
            background: var(--ks-green);
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            transition: background 0.25s ease, transform 0.25s ease;
          }

          .ks-about-button:hover {
            background: var(--ks-green-dark);
            transform: translateY(-2px);
          }

          @media (max-width: 1050px) {
            .ks-about { padding: 65px 5% 22px; }
            .ks-about-container { grid-template-columns: 1fr 1fr; gap: 35px; }
            .ks-about-visual { min-height: 480px; }
            .ks-orbit { width: 300px; height: 300px; }
            .ks-orbit-two { width: 235px; height: 235px; }
            .ks-visual-center { width: 195px; height: 195px; }
            .ks-center-icon { width: 78px; height: 78px; }
            .ks-tech-card { min-width: 175px; padding: 10px; }
            .ks-card-ai { right: -5%; }
            .ks-about-content h2 { font-size: 36px; }
          }

          @media (max-width: 760px) {
            .ks-about { padding: 55px 22px 22px; }
            .ks-about-container { grid-template-columns: 1fr; gap: 55px; }
            .ks-about-visual {
              min-height: 450px;
              max-width: 520px;
              width: 100%;
              margin: 0 auto;
            }
            .ks-about-content { padding-top: 0; }
            .ks-about-heading { margin-bottom: 28px; }
            .ks-about-content h2 { font-size: clamp(34px, 8vw, 44px); }
            .ks-about-intro { font-size: 15px; }
            .ks-about-description { font-size: 13px; }
          }

          @media (max-width: 420px) {
            .ks-about-visual { min-height: 395px; }
            .ks-orbit { width: 255px; height: 255px; }
            .ks-orbit-two { width: 205px; height: 205px; }
            .ks-visual-center { width: 165px; height: 165px; }
            .ks-center-icon { width: 66px; height: 66px; }
            .ks-center-icon svg { width: 48px; }
            .ks-tech-card { min-width: 155px; gap: 8px; padding: 9px; }
            .ks-tech-icon { width: 32px; height: 32px; }
            .ks-tech-card strong { font-size: 11px; }
            .ks-tech-card span { font-size: 8px; }
            .ks-card-data { top: 16%; }
            .ks-card-ai { top: 43%; right: -2%; }
            .ks-card-network { bottom: 15%; left: 0; }
            .ks-about-bottom { gap: 16px; }
          }

          @media (prefers-reduced-motion: reduce) {
            .ks-about-button { transition: none; }
          }
        `}</style>
      </section>

      <section className="mv-home-section relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mv-home-heading">
            <p>Guiding Principles</p>
            <span>
              The purpose and commitment behind the data and technology
              solutions we deliver.
            </span>
          </div>

          <div className="mv-home-image">
            <div className="mv-home-image-ring">
              <img
                src={analyticsImage}
                alt="Kashsam team collaborating on data and technology solutions"
                className="h-full w-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mv-home-layout">
            <div className="mv-home-row mv-home-vision">
              <div className="mv-home-description mv-home-vision-description">
                <h3>Vision</h3>
                <h4>Empowering Data-Driven Success</h4>
                <p>
                  To enable businesses through our products and services to
                  produce, utilize, and monetize data, strengthening both their
                  operations and data ecosystems – creating powerful network
                  effects that drive sustainable growth.
                </p>
              </div>
              <div className="mv-home-marker mv-home-vision-marker">
                <div className="mv-home-number mv-home-vision-number">01</div>
                <div className="mv-home-icon mv-home-vision-icon" aria-hidden="true">
                  <span>◎</span>
                </div>
              </div>
            </div>

            <div className="mv-home-row mv-home-mission">
              <div className="mv-home-marker mv-home-mission-marker">
                <div className="mv-home-number mv-home-mission-number">02</div>
                <div className="mv-home-icon mv-home-mission-icon" aria-hidden="true">
                  <span>✳</span>
                </div>
              </div>
              <div className="mv-home-description mv-home-mission-description">
                <h3>Mission</h3>
                <h4>Innovation. Insight. Impact.</h4>
                <p>
                  To drive digital transformation by merging data and knowledge –
                  empowering organizations to achieve operational excellence,
                  process improvement, and enhanced customer experiences through
                  intelligent and secure systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .mv-home-section {
            color: #1f2937;
          }

          .mv-home-heading {
            position: relative;
            z-index: 1;
            max-width: 760px;
            min-height: 150px;
            padding: 4px 280px 0 0;
          }

          .mv-home-heading p {
            margin: 0 0 12px;
            color: #2563eb;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.2em;
            text-transform: uppercase;
          }

          .mv-home-heading h2 {
            margin: 0;
            color: #111827;
            font-size: clamp(30px, 4vw, 46px);
            font-weight: 800;
            letter-spacing: -0.04em;
            line-height: 1.15;
          }

          .mv-home-heading span {
            display: block;
            margin-top: 12px;
            color: #64748b;
            font-size: 14px;
            line-height: 1.7;
          }

          .mv-home-layout {
            max-width: 1250px;
            margin: 0 auto;
            padding-top: 20px;
          }

          .mv-home-image {
            position: absolute;
            top: -8px;
            right: 0;
            z-index: 2;
            width: 230px;
            height: 230px;
          }

          .mv-home-image-ring {
            width: 100%;
            height: 100%;
            padding: 9px;
            border: 1px solid #d7e0eb;
            border-radius: 50%;
            background: white;
            box-shadow: inset 0 0 0 7px white, 0 0 0 6px #2563eb;
          }

          .mv-home-row {
            position: relative;
            display: flex;
            align-items: center;
            min-height: 250px;
          }

          .mv-home-vision { justify-content: flex-start; }
          .mv-home-mission { justify-content: flex-end; margin-top: -2px; }

          .mv-home-description {
            position: relative;
            z-index: 2;
            width: 50%;
            min-height: 144px;
            padding: 24px 38px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: white;
            border: 1px solid #d1d5db;
            box-shadow: 0 15px 40px rgba(15, 23, 42, 0.06);
          }

          .mv-home-description h3 {
            margin: 0 0 8px;
            color: #111827;
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #2563eb;
          }

          .mv-home-description h4 {
            margin: 0 0 10px;
            color: #111827;
            font-size: 23px;
            font-weight: 800;
            letter-spacing: -0.03em;
          }

          .mv-home-description p {
            margin: 0;
            color: #4b5563;
            font-size: 15px;
            line-height: 1.8;
          }

          .mv-home-vision-description {
            text-align: right;
            border-left: 7px solid #2563eb;
          }

          .mv-home-mission-description {
            text-align: left;
            border-right: 7px solid #123552;
          }

          .mv-home-number {
            position: absolute;
            inset: 0;
            width: 145px;
            height: 290px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 23px;
            font-weight: 800;
          }

          .mv-home-vision-number {
            background: #123552;
            border-radius: 0 150px 150px 0;
            justify-content: flex-end;
            padding-right: 40px;
          }

          .mv-home-mission-number {
            background: #2563eb;
            border-radius: 150px 0 0 150px;
            justify-content: flex-start;
            padding-left: 40px;
          }

          .mv-home-marker {
            position: absolute;
            z-index: 3;
            top: 50%;
            width: 145px;
            height: 290px;
            transform: translateY(-50%);
          }

          .mv-home-vision-marker { left: 50%; }
          .mv-home-mission-marker { left: calc(50% - 145px); }

          .mv-home-icon {
            position: absolute;
            z-index: 4;
            top: 50%;
            width: 76px;
            height: 76px;
            display: grid;
            place-items: center;
            border: 1px solid #cbd5e1;
            border-radius: 50%;
            background: white;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.14);
            transform: translateY(-50%);
            font-size: 34px;
            line-height: 1;
          }

          .mv-home-vision-icon {
            left: 0;
            color: #123552;
            transform: translate(-50%, -50%);
          }

          .mv-home-mission-icon {
            right: 0;
            color: #2563eb;
            transform: translate(50%, -50%);
          }

          @media (max-width: 900px) {
            .mv-home-heading {
              min-height: 0;
              max-width: 100%;
              padding: 0;
              margin-bottom: 28px;
            }
            .mv-home-image {
              position: relative;
              inset: auto;
              width: 190px;
              height: 190px;
              margin: 0 auto 34px;
            }
            .mv-home-row {
              display: grid;
              grid-template-columns: 70px minmax(0, 1fr);
              align-items: stretch;
              gap: 14px;
              min-height: 0;
              margin-bottom: 18px;
            }
            .mv-home-marker {
              position: relative;
              inset: auto;
              width: auto;
              height: auto;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 12px;
              transform: none;
            }
            .mv-home-description {
              grid-column: 2;
              grid-row: 1;
              width: auto;
              min-height: 0;
              padding: 22px;
              text-align: left;
            }
            .mv-home-number {
              position: relative;
              inset: auto;
              width: 54px;
              height: 74px;
              border-radius: 27px;
              padding: 0;
              justify-content: center;
              font-size: 15px;
            }
            .mv-home-icon {
              position: static;
              width: 48px;
              height: 48px;
              transform: none;
            }
            .mv-home-icon svg { width: 23px; height: 23px; }
            .mv-home-vision-number,
            .mv-home-mission-number { border-radius: 27px; }
          }

          @media (max-width: 480px) {
            .mv-home-heading h2 { font-size: 30px; }
            .mv-home-image { width: 165px; height: 165px; }
            .mv-home-row { grid-template-columns: 48px minmax(0, 1fr); gap: 10px; }
            .mv-home-description { padding: 18px 16px; }
            .mv-home-marker { gap: 9px; }
            .mv-home-number { width: 42px; height: 58px; border-radius: 21px; font-size: 12px; }
            .mv-home-vision-number,
            .mv-home-mission-number { border-radius: 21px; }
            .mv-home-icon { width: 38px; height: 38px; font-size: 26px; }
            .mv-home-description h4 { font-size: 20px; }
            .mv-home-description p { font-size: 14px; }
          }
        `}</style>
      </section>

      <CoreValuesInfographic />

      <section className="relative isolate overflow-hidden border-y border-blue-100 bg-[#f3f8ff] py-16 text-slate-900 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_48%,rgba(96,165,250,0.19),transparent_42%),linear-gradient(115deg,#f8fbff_10%,#eff6ff_58%,#f4faff)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.22] [background-image:radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -right-28 -top-36 -z-10 h-96 w-96 rounded-full border border-blue-300/30" />
        <div className="absolute -right-12 -top-20 -z-10 h-64 w-64 rounded-full border border-blue-300/30" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.13em] text-blue-800 shadow-sm shadow-blue-900/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Just launched · New from Kashsam
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Meet <span className="text-blue-700">KashAssist</span>
              <span className="mt-2 block text-2xl font-semibold leading-snug text-slate-700 sm:text-3xl">
                AI assistants, made for Bharat.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              GST billing for kirana shops and AI study help for students — right on WhatsApp, in 10 Indian languages.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-blue-100 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                10 Indian languages
              </span>
              <span className="rounded-full border border-blue-100 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                3 free uses
              </span>
              <span className="rounded-full border border-blue-100 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                No signup required
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.kashassist.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800 active:scale-[0.98]"
              >
                Try it for free
                <ArrowUpRight size={17} />
              </a>
              <Link
                to="/our-products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50 active:scale-[0.98]"
              >
                Explore KashAssist
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[350px] px-2 pb-4 pt-2 sm:px-4">
            <div className="absolute inset-x-4 inset-y-8 rounded-[3rem] bg-blue-400/20 blur-2xl" />
            <span className="absolute -left-0.5 top-28 z-20 h-14 w-1.5 rounded-l-full bg-slate-500/80 shadow-sm" />
            <span className="absolute -right-0.5 top-36 z-20 h-20 w-1.5 rounded-r-full bg-slate-500/80 shadow-sm" />
            <div className="relative rounded-[3rem] border-[5px] border-[#26394b] bg-[#0a1420] p-[7px] shadow-[0_35px_90px_rgba(0,0,0,0.45)]">
              <div className="relative overflow-hidden rounded-[2.35rem] bg-white text-slate-900">
                <div className="relative flex h-9 items-center justify-between bg-[#064e46] px-5 text-[10px] font-bold text-white">
                  <span>9:41</span>
                  <span className="absolute left-1/2 top-1/2 h-[18px] w-[76px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#07120f]" />
                  <span className="flex items-center gap-1.5">
                    <Wifi size={12} />
                    <BatteryFull size={14} />
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3.5 text-white">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                    <MessageCircle size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">KashAssist</p>
                    <p className="text-[11px] text-emerald-100">Here to help, on WhatsApp</p>
                  </div>
                  <Sparkles size={18} className="text-emerald-200" />
                </div>

                <div className="space-y-3 bg-[#edf5f2] p-3.5">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-4 py-3 text-xs leading-5 text-slate-700 shadow-sm">
                    What can I do with KashAssist?
                  </div>
                  <div className="max-w-[96%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-3 shadow-sm">
                    <p className="mb-3 text-xs leading-5 text-slate-600">
                      Get everyday tasks done with AI, right in your language.
                    </p>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-100 text-blue-700">
                          <ReceiptText size={18} />
                        </span>
                        <span>
                          <span className="block text-xs font-bold text-slate-800">GST billing</span>
                          <span className="mt-0.5 block text-[10px] text-slate-500">Simple billing for kirana shops</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-100 text-cyan-800">
                          <GraduationCap size={18} />
                        </span>
                        <span>
                          <span className="block text-xs font-bold text-slate-800">AI study help</span>
                          <span className="mt-0.5 block text-[10px] text-slate-500">Learning support for students</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-1 pt-1 text-[10px] font-medium text-slate-500">
                    <span>10 Indian languages</span>
                    <span className="inline-flex items-center gap-1 text-emerald-700">
                      <CheckCircle2 size={12} /> 3 free uses
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] text-slate-400 shadow-sm">
                    <span className="h-4 w-4 rounded-full border border-slate-300" />
                    Message KashAssist
                    <span className="ml-auto grid h-6 w-6 place-items-center rounded-full bg-[#075e54] text-white">
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
                <div className="flex h-6 items-center justify-center bg-[#edf5f2]">
                  <span className="h-1 w-20 rounded-full bg-slate-800/80" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1 -left-2 hidden items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-xs font-bold text-blue-900 shadow-xl sm:flex">
                <Sparkles size={15} className="text-blue-600" />
              Ready on WhatsApp
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="relative isolate overflow-hidden border-y border-slate-100 bg-slate-50 py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-36 -top-44 -z-10 h-[32rem] w-[32rem] rounded-full bg-blue-100/55 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-sky-100/55 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <span className="inline-flex rounded-full bg-blue-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Our Core Services
            </h2>
            <div className="mx-auto mb-5 mt-4 h-1 w-16 rounded-full bg-blue-600" />
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Empowering businesses through cutting-edge data solutions, AI models, automation, and scalable engineering frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.id}
                  className="group relative flex min-h-[340px] flex-col items-center justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 text-center shadow-[0_8px_30px_rgba(15,35,70,0.035)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_22px_50px_rgba(30,64,175,0.11)] sm:p-8"
                >
                  <div className="absolute inset-x-1/2 bottom-0 h-[3px] w-0 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-1/2" />
                  <div className="relative mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100 text-blue-600 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg">
                      <Icon className="h-10 w-10" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -right-2 -top-2 rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-extrabold text-slate-700 transition-colors group-hover:bg-blue-800 group-hover:text-white">
                      {service.id}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col items-center">
                    <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                      {service.title}
                    </h3>
                    <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <span className="mb-6 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                      {service.tag}
                    </span>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center gap-2 pt-2 text-sm font-bold text-blue-700 opacity-85 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <span className="text-xs uppercase tracking-wider">Explore solution</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122b50] tracking-tight">
            Empowering the World’s Most Agile Brands and Agencies
          </h2>
        </div>

        <div className="space-y-8">
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

      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-blue-100 bg-[#f6f9ff] p-5 shadow-[0_28px_80px_rgba(30,64,175,0.09)] sm:gap-12 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:p-12">
            <div className="py-2 sm:py-4">
              <div className="flex flex-col">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.17em] text-blue-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  The challenge
                </span>

                <h2 className="mt-6 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
                  Your data should move your business
                  <span className="text-blue-700"> forward.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  Businesses generate valuable data every day, yet many MSMEs, SMEs and SOHOs struggle to capture it, make it useful, or access the right expertise. Common barriers include:
                </p>

                <ul className="mt-7 max-w-2xl space-y-3">
                  {[
                    'The investment needed to capture business data effectively',
                    'Disconnected tools for BI, data engineering and machine learning',
                    'Expensive platforms with limited business intelligence capabilities',
                    'Always-on BI infrastructure that makes scaling costly',
                    'Consulting costs that put data strategy, governance and adoption out of reach',
                  ].map((challenge, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white px-3.5 py-3 text-sm leading-5 text-slate-700 shadow-sm shadow-blue-900/[0.025] sm:px-4"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-blue-200/80 pt-6 sm:mt-10">
                  <p className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    There’s a smarter way to put your data to work.
                  </p>
                  <Link
                    to="/book-appointment"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-800"
                  >
                    Let’s talk about your data
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white bg-slate-100 shadow-[0_20px_55px_rgba(15,35,70,0.16)] sm:min-h-[420px] lg:min-h-[600px]">
              <img
                src="https://kashsam.ai/wp-content/uploads/2026/03/IMG5-scaled.jpg"
                alt="Business data visualization representing the challenges organizations face"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-slate-950/5" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-slate-950/45 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:left-7 sm:top-7">
                <Sparkles size={14} className="text-cyan-200" />
                From data barriers to business momentum
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-200">
                  The opportunity
                </p>
                <h3 className="mt-2 max-w-md text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
                  Accessible, affordable intelligence for every business.
                </h3>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-100/90">
                  <span className="h-px w-8 bg-cyan-300" />
                  Make better decisions with confidence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
