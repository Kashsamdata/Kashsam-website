import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Building2,
  Clock,
  Headphones
} from 'lucide-react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="overflow-hidden bg-white text-gray-950 selection:bg-blue-600 selection:text-white">

      {/* ================= HERO SECTION (CENTER ALIGNED) ================= */}
      <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-blue-50/60 via-blue-50/20 to-white border-b border-gray-100">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-400/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs mb-6">
            <Sparkles size={14} className="text-blue-600 animate-pulse" /> Connect With Our Experts
          </div>

          {/* Short English text written above the heading */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
            Start Your Enterprise Journey Today
          </p>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.15]">
            Get in Touch <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">With Us!</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Partner with our expert strategists and engineers to build a powerful, secure, and data-driven ecosystem tailored for your enterprise growth.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM & QUICK INFO GRID ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Box: Interactive Form */}
            <div className="lg:col-span-7 bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-950/5 relative">
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-2xl shadow-lg hidden sm:block">
                <Headphones size={24} />
              </div>

              <div className="mb-8">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                  Send a Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-2">
                  Let's Start a Conversation
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Fill out the form below and our team will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-3xl bg-blue-50/80 border border-blue-200 p-8 sm:p-10 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950">Message Sent Successfully!</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to us. One of our specialists will review your details and contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
                    }}
                    className="mt-4 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-2xl transition shadow-lg shadow-blue-600/20"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Your Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91-9381052467"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry / Support"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Your Message <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-2xl shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Contact Channels & Hours */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Info Card */}
              <div className="bg-gradient-to-br from-blue-950 via-gray-950 to-gray-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-semibold text-blue-200 mb-6">
                  Direct Reach
                </span>
                
                <h3 className="text-2xl font-bold mb-8">Contact Channels</h3>
                
                <div className="space-y-6">
                  <a
                    href="tel:+919381052467"
                    className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-400/40 transition"
                  >
                    <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-md text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone Number</span>
                      <span className="font-bold text-base text-white">+91-9381052467</span>
                    </div>
                  </a>

                  <a
                    href="mailto:Info@kashsam.com"
                    className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-400/40 transition"
                  >
                    <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-md text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase tracking-wider font-semibold">Email Address</span>
                      <span className="font-bold text-base text-white">Info@kashsam.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-blue-50/50 border border-blue-200/80 rounded-3xl p-8 flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-950">Working Hours</h4>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    Monday – Saturday: 9:00 AM – 7:00 PM IST<br />
                    Dedicated support available for all active clients.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= OFFICES & LOCATIONS GRID ================= */}
      <section className="py-24 bg-gray-50/80 border-t border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
              Our Locations
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl mt-2">
              Global Office Presence
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Visit or connect with our teams across our registered, regional, and on-site hubs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Registered Office */}
            <div className="bg-white border border-gray-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold shadow-xs">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Headquarters</span>
                    <h3 className="text-lg font-bold text-gray-950">Registered Office</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A4/405, Adora Akshaya Homes, OMR, Padur, Chennai - 603103, Tamil Nadu, India
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                <MapPin size={14} /> Chennai Hub
              </div>
            </div>

            {/* Faridabad Offices */}
            <div className="bg-white border border-gray-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold shadow-xs">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">North India Hub</span>
                    <h3 className="text-lg font-bold text-gray-950">Faridabad Offices</h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm text-gray-600">
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-gray-900 mb-1">Address 1:</strong>
                    T5/519, RPS Infinia, 12th Avenue, 12/6 Milestone, Mathura Road, Sector 27C, Faridabad - 121003, Haryana, India
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <strong className="block text-xs uppercase tracking-wider text-gray-900 mb-1">Address 2:</strong>
                    C-06, Ground Floor, RPS Palms, Sector 88, Faridabad - 121002, Haryana, India
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                <MapPin size={14} /> Haryana Hub
              </div>
            </div>

            {/* Mumbai On Site Office */}
            <div className="bg-white border border-gray-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold shadow-xs">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">West India Hub</span>
                    <h3 className="text-lg font-bold text-gray-950">Mumbai On Site Office</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  901- Harbhajan Commercial Complex, Plot No. 4954A, S, B1 to B7, Opp Petrol Pump, CST Road, Kalina, Santacruz (East), Mumbai - 400098, Maharashtra, India
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                <MapPin size={14} /> Mumbai Hub
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Contact