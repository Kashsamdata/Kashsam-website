import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Componets/Navbar.jsx'
import Footer from './Componets/Footer.jsx'

import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import OurTeam from './Pages/OurTeam'
import Services from './Pages/Services'
import ServiceDetailPage from './Componets/DataPlatformService.jsx'
import Contact from './Pages/Contact'
import BookAppointment from './Pages/BookAppointment'
import Blog from './Pages/Blog'
import Ourproducts from './Pages/Ourproducts'
import DataPlatformService from './Componets/DataPlatformService.jsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-bg text-brand-text-main">

        <Navbar />

        <main className="w-full">
          <Routes>

            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/data-platform-analytics" element={<ServiceDetailPage />} />
            <Route path="/services/iot-connectivity-solutions" element={<ServiceDetailPage />} />
            <Route path="/services/erp-crm-consultancy" element={<ServiceDetailPage />} />
            <Route path="/services/web-delivery-implementation" element={<ServiceDetailPage />} />
            <Route path="/services/ai-enabled-process-automation" element={<ServiceDetailPage />} />
            <Route path="/services/security-services" element={<ServiceDetailPage />} />
            <Route path="/services/*" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/appointment" element={<BookAppointment />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/our-products" element={<Ourproducts />} />
            <Route path="/data-platform-analytics" element={<DataPlatformService />} />

            {/* 404 */}
            <Route
              path="*"
              element={
                <section className="flex min-h-[60vh] items-center justify-center px-6">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-950">
                      Page Not Found
                    </h1>

                    <p className="mt-3 text-gray-600">
                      The page you are looking for does not exist.
                    </p>

                    <a
                      href="/"
                      className="mt-6 inline-flex rounded-md bg-primary-base px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"
                    >
                      Back to Home
                    </a>
                  </div>
                </section>
              }
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  )
}
export default App