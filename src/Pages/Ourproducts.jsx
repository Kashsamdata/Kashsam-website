import React from "react";
import {
  ArrowRight,
  Mic,
  Sparkles,
  GraduationCap,
  ClipboardList,
  FileText,
  Share2,
  Store,
} from "lucide-react";

const KASHASSIST_URL = "https://www.kashassist.com/";

export default function OurProducts() {
  return (
    <main className="bg-white text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -left-32 top-80 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-4xl text-center">

            {/* Eyebrow */}
            <div className="mx-auto mb-5 flex h-28 w-32 items-center justify-center">
              <img
                src="/images/kashassist-logo.png"
                alt="KashAssist product logo"
                className="h-full w-full object-contain"
              />
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              A practical AI assistant for everyday shopkeeping
            </p>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Your shop’s AI munshi.
              <br />
              <span className="text-blue-700">
                Bolo ya likho.
              </span>{" "}
              Get the bill done.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              KashAssist helps kirana and vegetable vendors create GST-ready
              bills, keep track of customer udhaar, and share bills with
              customers on WhatsApp—all through a simple conversational
              experience.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {["3 bills free", "No signup needed", "Made for local shops"].map((item) => (
                <span key={item} className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-800 shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href={KASHASSIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 sm:w-auto"
              >
                Create your first bill free
                <ArrowRight size={17} />
              </a>

              <a href="#how-it-works" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:text-blue-700 sm:w-auto">
                See how it works
                <ArrowRight size={17} />
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* =================================================
                KASHASSIST
            ================================================= */}
            <div className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-10">

              {/* Background decoration */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-50" />

              <div className="relative">

                {/* Product Logo and Name */}
                <div className="flex flex-wrap items-center gap-5">
                  <img
                    src="/images/kashassist-logo.png"
                    alt="KashAssist logo"
                    className="h-24 w-28 object-contain"
                  />
                  <h2 className="text-3xl font-bold text-gray-950">
                    KashAssist
                  </h2>
                </div>

                {/* Audience */}
                <p className="mt-2 text-sm font-semibold text-blue-700">
                  For kirana shops and vegetable vendors
                </p>

                {/* Description */}
                <p className="mt-5 text-base leading-7 text-gray-600">
                  Describe what a customer bought, by voice or text. KashAssist
                  turns the details into a GST-ready bill, helps keep the
                  customer’s udhaar up to date, and makes it easy to share the
                  bill through WhatsApp.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Create GST-ready bills from everyday product descriptions",
                    "Keep customer credit and outstanding udhaar organised",
                    "Share the finished bill with your customer on WhatsApp",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium leading-6 text-blue-900">
                  Try 3 bills free. No signup is needed to get started.
                </p>

                {/* CTA */}
                <a
                  href={KASHASSIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Open KashAssist
                  <ArrowRight size={17} />
                </a>

              </div>
            </div>


            {/* =================================================
                KASHPADHAIASSIST
            ================================================= */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-8 lg:p-10">

              <div className="absolute right-0 top-0 rounded-bl-2xl bg-gray-900 px-4 py-2 text-xs font-semibold text-white">
                Coming Soon
              </div>

              <div>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <GraduationCap
                    size={26}
                    className="text-gray-700"
                  />
                </div>

                {/* Product Name */}
                <h2 className="mt-7 text-3xl font-bold text-gray-950">
                  KashPadhaiAssist
                </h2>

                {/* Audience */}
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  Planned learning assistant for Class 8–12 students
                </p>

                {/* Description */}
                <p className="mt-5 text-base leading-7 text-gray-600">
                  Step-by-step answers for every subject doubt – in Hinglish.
                  Turn answers into shareable revision cards and prep for
                  exams with a friendly AI tutor.
                </p>

                {/* Coming Soon */}
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500">
                  Coming Soon
                  <ArrowRight size={17} />
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT IT DOES
      ===================================================== */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Made for the rhythm of a local shop</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Everyday shop work, made simpler
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Spend less time writing bills and searching through notebooks.
              Keep the essentials of a sale and customer credit in one simple
              assistant.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Mic,
                title: "Speak or type",
                text: "Enter the items and quantities the way you naturally describe a sale.",
              },
              {
                icon: FileText,
                title: "GST-ready bills",
                text: "Create a clear bill quickly, without manually formatting every sale.",
              },
              {
                icon: ClipboardList,
                title: "Udhaar khata",
                text: "Keep track of customer credit and outstanding amounts in an organised way.",
              },
              {
                icon: Share2,
                title: "Share with customers",
                text: "Forward the bill to your customer on WhatsApp for easy access.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section id="how-it-works" className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Store size={26} />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Simple by design</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              From sale to shared bill in a few steps
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              KashAssist is designed for busy shopkeepers: describe the sale,
              check the bill, and share it with the customer.
            </p>
          </div>

          <ol className="space-y-4">
            {[
              ["Tell KashAssist what was sold", "Speak or type the products and quantities from the customer’s purchase."],
              ["Create a GST-ready bill", "KashAssist turns the sale details into a neat bill for you to use."],
              ["Keep track and share", "Record customer udhaar when needed and forward the bill through WhatsApp."],
            ].map(([title, text], index) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>


      {/* =====================================================
          START FREE
      ===================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <Sparkles
              size={25}
              className="text-blue-700"
            />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Start with 3 free bills
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500">
            No signup needed to try it. Create your first three bills free and see how it fits your daily shop routine.
          </p>

          {/* Main CTA */}
          <a
            href={KASHASSIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Try KashAssist free
            <ArrowRight size={18} />
          </a>

        </div>

      </section>


      {/* =====================================================
          SMALL PRODUCT FOOTER
      ===================================================== */}
      <section className="border-t border-gray-100 bg-gray-50 py-7">

        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="text-xs text-gray-400">
            AI Assistants for Bharat - by{" "}
            <span className="font-medium text-gray-600">
              KashSam Data Solutions
            </span>
          </p>

        </div>

      </section>

    </main>
  );
}