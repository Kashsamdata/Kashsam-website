import React, { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  Phone,
  Sparkles,
} from 'lucide-react'

const perks = [
  'Discovery call with domain experts',
  'Tailored roadmap for your business goals',
  'Clear implementation timeline and next steps',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: 'Data Platform & Analytics',
  date: '',
  time: '',
  message: '',
}

function BookAppointment() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="overflow-hidden bg-white text-gray-900 selection:bg-blue-600 selection:text-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pb-20 pt-20 lg:pt-28">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/3 top-8 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute right-8 top-1/4 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-800">
              <Sparkles size={12} /> Book an appointment
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Let’s discuss the next step for your growth.
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Share your business goals and our specialists will help you identify the right data, automation, and digital transformation roadmap.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg shadow-slate-200/60 sm:p-10">
            {submitted ? (
              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-950">Your request has been received.</h2>
                <p className="mt-3 text-gray-600">
                  Our team will reach out to confirm the meeting details and prepare a tailored consultation for you.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setForm(initialForm)
                  }}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Book another session
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-8">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">Request a consultation</p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950">Tell us about your project</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Full name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Service</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    >
                      <option>Data Platform & Analytics</option>
                      <option>IoT & Connectivity Solutions</option>
                      <option>ERP & CRM Consultancy</option>
                      <option>Web Delivery & Implementation</option>
                      <option>AI-Enabled Process Automation</option>
                      <option>Security Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Preferred date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Preferred time</label>
                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Project details</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your goals, current challenges, and what you’d like to achieve."
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.99]"
                >
                  Book consultation
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl shadow-slate-200/60">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">What to expect</p>
              <h3 className="mt-3 text-2xl font-bold">A focused consultation built around your business.</h3>
              <ul className="mt-6 space-y-4">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-400" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-950">Need a quick answer?</h3>
              <div className="mt-5 space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Phone size={18} />
                  </div>
                  <a href="tel:+919381052467" className="hover:text-blue-700">+91-9381052467</a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:Info@kashsam.com" className="hover:text-blue-700">Info@kashsam.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <CalendarDays size={18} />
                  </div>
                  <span>Mon – Sat, 9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <MessageSquareText size={18} />
                  </div>
                  <span>Response within 1 business day</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Clock3 size={18} />
                  </div>
                  <span>30 to 45 minute consultation</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default BookAppointment
