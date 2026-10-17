import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Mic,
  MessageSquare,
  Languages,
  IndianRupee,
  Sparkles,
  GraduationCap,
  Store,
} from "lucide-react";

const KASHASSIST_URL = "https://www.kashassist.com/";
const KASHASSIST_PRICING_URL = "https://kashassist.com/#pricing";

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
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              AI Assistants for Bharat - by KashSam Data Solutions
            </p>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Roz ke kaam,
              <br />
              <span className="text-blue-700">
                AI ke saath
              </span>{" "}
              - WhatsApp jitna aasan.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              KashAssist is our family of AI assistants built for everyday
              India – billing for kirana shops and study help for students.
              Chat in Hindi, English or 8 other Indian languages. 3 free uses,
              no signup needed.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href={KASHASSIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 sm:w-auto"
              >
                Try KashAssist Free
                <ArrowRight size={17} />
              </a>

              <a
                href={KASHASSIST_PRICING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:text-blue-700 sm:w-auto"
              >
                See Pricing
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

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Store
                    size={26}
                    className="text-blue-700"
                  />
                </div>

                {/* Product Name */}
                <h2 className="mt-7 text-3xl font-bold text-gray-950">
                  KashAssist
                </h2>

                {/* Audience */}
                <p className="mt-2 text-sm font-semibold text-blue-700">
                  For shopkeepers & freelancers
                </p>

                {/* Description */}
                <p className="mt-5 text-base leading-7 text-gray-600">
                  Make GST bills in a WhatsApp-style chat, track udhaar khata,
                  get evening sales digests – just speak or type, your bill is
                  ready in seconds.
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
                  For Class 8–12 students
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
          PRODUCT FEATURES
      ===================================================== */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Voice-first */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <Mic
                  size={21}
                  className="text-blue-700"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Voice-first
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Speak in your language – AI understands and replies with voice
                notes
              </p>

            </div>


            {/* WhatsApp */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <MessageSquare
                  size={21}
                  className="text-blue-700"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Works on WhatsApp
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Use it right inside WhatsApp – no new app to learn
              </p>

            </div>


            {/* Languages */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <Languages
                  size={21}
                  className="text-blue-700"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                10 Indian languages
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Hindi, Marathi, Tamil, Telugu, Bengali & more
              </p>

            </div>


            {/* Payments */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <IndianRupee
                  size={21}
                  className="text-blue-700"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                UPI payments
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Simple monthly plans from ₹99 – pay with UPI or card
              </p>

            </div>

          </div>

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
            Start free in 10 seconds
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500">
            No signup. No credit card. Just open the chat and start.
          </p>

          {/* Main CTA */}
          <a
            href={KASHASSIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Go to kashassist.com
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