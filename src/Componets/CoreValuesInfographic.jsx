import React from 'react';
import { 
  BrainCircuit, 
  Workflow, 
  Database, 
  Award, 
  CalendarDays 
} from 'lucide-react';

const coreValues = [
  {
    id: 1,
    title: 'Data Transformation',
    subtitle: 'Turning Data Into Opportunity',
    detail: 'Helping businesses operate smarter, make informed decisions, and achieve measurable impact.',
    icon: BrainCircuit,
    yOffset: 'lg:translate-y-3',
  },
  {
    id: 2,
    title: 'Artificial Intelligence',
    subtitle: 'AI & Machine Learning',
    detail: 'Deploying practical AI models and intelligent capabilities to automate complex processes.',
    icon: BrainCircuit,
    yOffset: 'lg:-translate-y-1',
  },
  {
    id: 3,
    title: 'Analytics & Automation',
    subtitle: 'Smarter Operations',
    detail: 'Transforming complex datasets into clear, actionable business metrics and streamlined workflows.',
    icon: Workflow,
    yOffset: 'lg:-translate-y-3',
  },
  {
    id: 4,
    title: 'Data Engineering',
    subtitle: 'Scalable Infrastructure',
    detail: 'Building high-integrity data pipelines and storage foundations that scale seamlessly.',
    icon: Database,
    yOffset: 'lg:-translate-y-1',
  },
  {
    id: 5,
    title: 'Proven Growth',
    subtitle: '4+ Years Expertise',
    detail: 'Proven track record driving data-led innovation and measurable growth for leading brands.',
    icon: Award,
    yOffset: 'lg:translate-y-3',
  },
];

export default function CoreValuesInfographic() {
  return (
    <section
      className="w-full bg-white py-12 px-4 sm:px-8 lg:py-16 text-slate-800"
      style={{
        backgroundColor: '#fff',
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
            Our Core Values
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Core Values
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Driving Transformation Through Data and Innovation. At <strong className="text-slate-900">Kashsam Data Solutions</strong>, we turn data into opportunity through AI, analytics, process automation, and data engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-4 items-start mb-10 sm:mb-12">
          {coreValues.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className={`flex flex-col items-center text-center group transition-all duration-300 ${item.yOffset}`}
              >
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-900/10 transition-all duration-300">
                  <IconComponent className="w-9 h-9 text-blue-700 group-hover:text-white" strokeWidth={1.75} />
                </div>

                <div className="w-px h-6 my-2 border-l border-dashed border-blue-200" />

                <div className="w-7 h-7 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shadow-sm mb-3">
                  0{item.id}
                </div>

                <h3 className="text-sm font-bold text-gray-950">
                  {item.title}
                </h3>
                <p className="text-[11px] font-bold text-blue-700 uppercase tracking-wider mt-1">
                  {item.subtitle}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mt-2 max-w-[210px]">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Proven Expertise Summary Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-200/80 shadow-[0_18px_50px_rgba(30,64,175,0.07)] max-w-4xl mx-auto grid md:grid-cols-2 gap-5 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-blue-700">Proven Expertise</p>
              <p className="text-sm text-gray-600 mt-0.5">
                Proven experience powering data-driven growth for leading brands.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:border-l md:border-gray-100 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-gray-950 tracking-tight">4+ Years</span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Experience</span>
              </div>
              <p className="text-xs text-gray-600 mt-0.5">
                Years of expertise in driving data-driven growth and innovation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}