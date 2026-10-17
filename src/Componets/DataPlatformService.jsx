import React from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  ShieldCheck,
  Database,
  Layers,
  LineChart,
  Cpu,
  Workflow,
  TrendingUp,
  Server,
  Zap,
  Lock,
  Globe2,
  Check
} from 'lucide-react'

function DataPlatformService() {
  const offerings = [
    {
      title: 'Business Intelligence & Advanced Analytics',
      description:
        'Develop powerful BI and analytics solutions using SQL, Python, and Spark to analyze large volumes of data efficiently. Unlock deep business insights, predictive forecasting, and reporting systems that support agile strategic planning.',
      icon: LineChart,
      badge: 'Predictive & Real-Time'
    },
    {
      title: 'Data Quality (DQ) & Master Data Management (MDM)',
      description:
        'Establish pristine data consistency, remove duplication, and implement enterprise-grade governance frameworks. Ensure every department operates with trusted, standardized, and audit-ready data.',
      icon: ShieldCheck,
      badge: 'Zero-Error Governance'
    },
    {
      title: 'KPI Catalogues & Unified Dashboards',
      description:
        'Deploy centralized KPI repositories and dynamic interactive dashboards acting as your enterprise single source of truth. Empower leadership to monitor growth targets and react instantly.',
      icon: BarChart3,
      badge: 'Single Source of Truth'
    },
    {
      title: 'Zero Per-User License Restrictions',
      description:
        'Scale your analytics freely across all teams, departments, and external partners without crippling per-user subscription fees. Democratize data access with complete cost predictability.',
      icon: Database,
      badge: 'Unlimited Scalability'
    }
  ]

  const metrics = [
    { value: '100%', label: 'Cloud-Native Architecture' },
    { value: '0', label: 'Per-User License Fees' },
    { value: '24/7', label: 'Expert Support & Monitoring' },
    { value: 'Real-Time', label: 'Enterprise Reporting Sync' }
  ]

  const workflowSteps = [
    { step: '01', title: 'Collection & Integration', desc: 'Ingest raw data seamlessly from multi-cloud sources into unified pipelines.' },
    { step: '02', title: 'Governance & Quality', desc: 'Automate data cleansing, deduplication, and master data structuring.' },
    { step: '03', title: 'Intelligence & Action', desc: 'Deploy interactive dashboards and predictive machine learning models.' }
  ]

  return (
    <div className="overflow-hidden bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] bg-indigo-600/15 blur-[130px] rounded-full" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 text-xs font-semibold text-blue-400 shadow-sm mb-6 backdrop-blur-md">
            <Sparkles size={14} className="text-blue-400 animate-pulse" /> Enterprise Data Ecosystems & Intelligence
          </div>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">
            Real-Time Data Analytics & Reporting Solutions
          </p>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
            Data Platform & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300">Analytics</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            We build unified, cloud-native data ecosystems that turn raw information into meaningful, actionable insights. Empower your entire organization with faster, smarter, and completely unrestricted decision-making capabilities.
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:bg-blue-500 active:scale-[0.98]"
            >
              Schedule a Consultation
              <Calendar size={17} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 border border-slate-800 px-8 py-4 text-sm font-bold text-slate-200 transition-all hover:bg-slate-800 hover:text-white"
            >
              Explore All Solutions
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= METRICS TRUST STRIP ================= */}
      <section className="border-b border-slate-800/60 bg-slate-900/50 backdrop-blur-sm py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW WITH PREMIUM VISUAL ================= */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              <Layers size={14} /> Strategic Growth Asset
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transforming Complex Data into Competitive Advantage
            </h2>
            
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              From data engineering to advanced machine learning intelligence, we create scalable platforms that support real-time automation and enterprise-wide visibility. Whether you need centralized dashboards or rigorous data hygiene, we ensure your data operates at peak strategic value.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Streamlined data collection, integration, and cloud-native architecture',
                'Zero per-user license barriers for maximum corporate adoption',
                'Unified performance metrics acting as your enterprise single source of truth'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="h-5 w-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                alt="Enterprise Analytics Interface"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Real-Time Processing Engine</h4>
                    <p className="text-xs text-slate-400">High-speed synchronization across multiple databases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= KEY OFFERINGS GRID ================= */}
      <section className="py-24 lg:py-32 bg-slate-900/40 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-400">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl mt-3">
              Our Key Offerings
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Engineered for enterprises requiring absolute precision, scalability, and performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {offerings.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-14 w-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent size={26} />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 text-blue-400 border border-slate-700/60">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <CheckCircle2 size={16} /> Production Ready
                    </span>
                    <Link to="/contact" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= WORKFLOW STEPS ================= */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-400">
            End-to-End Execution
          </span>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl mt-3">
            How We Transform Your Data Pipeline
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workflowSteps.map((s, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
              <span className="text-6xl font-black text-slate-800/60 absolute top-4 right-6 pointer-events-none">
                {s.step}
              </span>
              <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-6 shadow-md relative z-10">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed relative z-10">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONCLUSION PARAGRAPH ================= */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-500/20 shadow-xl">
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
            With our Data Platform & Analytics services, businesses gain absolute control over their information assets, stronger decision-making capabilities, and a future-ready digital foundation for sustainable global growth.
          </p>
        </div>
      </section>

      {/* ================= CONSULTATION CTA SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 py-24 text-white text-center border-t border-slate-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="inline-block rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300">
            Need A Consultation?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            We are here to answer your questions 24/7
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base sm:text-lg">
            Connect with our core data architects today to discover how we can transform your enterprise analytics stack.
          </p>
          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-blue-600 px-9 py-4 text-sm font-bold text-white shadow-2xl shadow-blue-600/40 transition-all hover:bg-blue-500 active:scale-[0.98]"
            >
              Contact Our Team
              <Calendar size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default DataPlatformService