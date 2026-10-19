import React from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Award,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
} from 'lucide-react'
import analyticsImage from '../assets/img1-scaled.jpg'

const founders = [
  {
    name: 'Gurbir Singh Bhatia',
    role: 'Senior Management Professional',
    tag: 'Data & IT Strategy',
    description:
      'A senior management professional has more than 30 years of expertise in designing, and developing Products, formulating Data and IT strategies that are aligned with the goals of the organization. An IIM Calcutta Management Professional (SMP), Engineering Graduate in Industrial Electronics and a Berkeley-educated Data Science Graduate (HAAS).',
  },
  {
    name: 'Harish Kumar Gandhi',
    role: 'Business-Critical HR Leader',
    tag: 'Early Planning & Operations',
    description:
      'Is a business-critical HR leader with more than 35 years of expertise. He has worked with the promoters of a few successful businesses in India that when were started, he was a part of right from the early planning stages.',
  },
  {
    name: 'Tarun Thareja & Pankaj Dua',
    role: 'Industrial Automation Experts',
    tag: 'Automation Architecture',
    description:
      'Are in Industrial Automation Business and spent over 25 years building a very strong business house from the scratch. Both are Engineering Graduates and have experience in designing and providing automation solutions to specific Industry needs.',
  },
]

function AboutUs() {
  return (
    <div className="overflow-hidden bg-white text-gray-900 selection:bg-blue-600 selection:text-white">

      {/* ================= 100+ YEARS OF CUMMULATIVE EXPERIENCE ================= */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                About Us
              </span>
              
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl leading-tight">
                100 + YEARS OF CUMMULATIVE EXPERIENCE
              </h1>

              <p className="text-base leading-relaxed text-gray-600">
                Kashsam Data Solutions Private Limited was incorporated on June 6, 2022, as a private limited. With a long and successful career behind them, Professionals join hands to make Data Driven Technologies more accessible to small and medium-sized companies.
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                Data analytics is important because it helps businesses optimize their performances. Implementing it into the business model means companies can help reduce costs by identifying more efficient ways of doing business and by storing large amounts of data. A company can also use data analytics to make better business decisions and help analyze customer trends and satisfaction, which can lead to new-and better-products and services.
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gray-200/80 bg-gray-950 shadow-2xl shadow-gray-900/10">
                <img
                  src={analyticsImage}
                  alt="Data analytics optimization and strategy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-blue-600/80 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    <Award size={13} /> Cumulative Experience
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    Making data driven technologies accessible.
                  </h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-3xl bg-blue-100/50 blur-xl" />
            </div>

          </div>
        </div>
      </section>


      {/* ================= OUR STRENGTH ================= */}
      <section className="relative overflow-hidden bg-gray-50/60 py-24 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
              Our Strength
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Driven by Innovation and Expertise
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              We enable Businesses to adopt a data-driven decision-making culture and help them get digitally transformed.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-14">
            
            <div className="rounded-3xl border border-gray-200/80 bg-white p-8 shadow-xs hover:border-blue-300 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md mb-6">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">Interpreting Jargons</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                AI, ML, Clustering, Neural Networks, and other jargons, we interpret for Businesses in plain functional terms, which they can put in to use for conducting their Business.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200/80 bg-white p-8 shadow-xs hover:border-blue-300 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md mb-6">
                <ArrowRight size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">Guaranteed Adoption</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Our strength is to introduce Data Technologies to an organization and guarantee its effective adoption, as we focus on designing and bringing these Products to market and helping the organization convert its data into cash for their business.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200/80 bg-white p-8 shadow-xs hover:border-blue-300 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">Unbiased Consultancy</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                We have the expertise and capabilities in-house and through our Partners in all verticals – Infrastructure, Core Application Systems, Automation Tools, and Collaborative Platforms – to provide unbiased, digital consultancy and technology strategies to the Business to access and enhance their current technology landscape.
              </p>
            </div>

          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-[0.98]"
            >
              Book an Appointment
              <Calendar size={17} />
            </Link>
          </div>

        </div>
      </section>


      {/* ================= UNIQUE TIMELINE-STYLE HISTORY & LEADERSHIP ================= */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-900 mb-4">
              <Sparkles size={13} /> Our Origins & Evolution
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl leading-tight">
              We Transform Businesses for the Future by Digitalization and Data Driven Decision Culture
            </h2>
          </div>

          {/* Timeline Milestones Container */}
          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-32 space-y-16 pl-6 md:pl-12">
            
            {/* Milestone 1: Incorporation */}
            <div className="relative group">
              <div className="absolute -left-[35px] md:-left-[63px] top-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                <Rocket size={20} />
              </div>
              
              <div className="rounded-3xl border border-gray-200/80 bg-gradient-to-r from-blue-50/50 to-white p-8 shadow-sm">
                <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white mb-3">
                  June 6, 2022
                </span>
                <h3 className="text-xl font-bold text-gray-950 mb-2">Company Incorporation</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Kashsam Data Solutions Private Limited is incorporated on June 6, 2022. With a long and successful career behind them, four professionals joined hands with the objective of making, Data Driven Technologies more accessible to small and medium-sized companies.
                </p>
              </div>
            </div>

            {/* Milestone 2: Leadership Team */}
            <div className="relative group">
              <div className="absolute -left-[35px] md:-left-[63px] top-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg">
                <Target size={20} />
              </div>

              <div className="space-y-6">
                <div>
                  <span className="inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white mb-2">
                    Founding Visionaries
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-950">
                    The Leadership Behind Kashsam
                  </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {founders.map((founder, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-gray-50/60 p-6 shadow-xs hover:border-blue-300 hover:bg-white transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                            {founder.tag}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-950">{founder.name}</h4>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{founder.role}</p>
                        <p className="text-xs leading-relaxed text-gray-600">
                          {founder.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default AboutUs