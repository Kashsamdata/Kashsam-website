import React from 'react'
import { ArrowRight, CalendarDays, Clock3, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const posts = [
  {
    category: 'Data Strategy',
    title: 'Why modern businesses need a unified data foundation',
    excerpt:
      'A strong data layer helps teams connect systems, improve visibility, and move from reporting to real-time decision making.',
    date: 'June 12, 2026',
    readTime: '5 min read',
  },
  {
    category: 'Automation',
    title: 'AI workflows that reduce manual work without slowing teams down',
    excerpt:
      'When workflow automation is designed around real process pain points, it improves productivity and creates measurable ROI quickly.',
    date: 'June 04, 2026',
    readTime: '4 min read',
  },
  {
    category: 'Cybersecurity',
    title: 'Security-first digital transformation for growing enterprises',
    excerpt:
      'Transformation projects often fail when governance and risk planning are treated as an afterthought. Here is how to build them in early.',
    date: 'May 30, 2026',
    readTime: '6 min read',
  },
]

function Blog() {
  return (
    <div className="overflow-hidden bg-white text-gray-900 selection:bg-blue-600 selection:text-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pb-20 pt-20 lg:pt-28">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute right-10 top-0 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-800">
              <Sparkles size={12} /> Insights & ideas
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Fresh thinking for smarter business decisions.
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Explore practical perspectives on data strategy, digital transformation, automation, cybersecurity, and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-3xl border border-blue-100 bg-blue-50/70 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Featured insight</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-950">The KPI framework every growing business should review quarterly</h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Talk to an expert
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
            >
              <div className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white p-6">
                <span className="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-5 flex items-center gap-4 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={13} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-snug text-gray-950">{post.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:text-blue-900"
                >
                  Read more
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
