import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'

import brandLogo from '../assets/Kashsam.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Our Team', path: '/our-team' },
  { name: 'Blog', path: '/blog' },
  { name: 'Our Products', path: '/our-products' },
]

const serviceLinks = [
  { name: 'Data Platform & Analytics', path: '/data-platform-analytics' },
  { name: 'IoT & Connectivity Solutions', path: '/iot-connectivity-solutions' },
  { name: 'Seamless ERP and CRM Consultancy', path: '/seamless-erp-and-crm-integration' },
  { name: 'Web Delivery & Implementation', path: '/web-delivery-implementation' },
  { name: 'AI-Enabled Process Automation', path: '/ai-enabled-process-automation' },
  { name: 'Security Services', path: '/security-services' },
]

const ServicesDropdown = ({ mobile = false, isActive, onNavigate }) => {
  const active = isActive('/services') || serviceLinks.some(({ path }) => isActive(path))

  return (
    <details className={mobile ? 'group' : 'group relative'}>
      <summary
        className={
          mobile
            ? `flex cursor-pointer list-none items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition ${
                active
                  ? 'bg-blue-50 font-semibold text-blue-800'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-800'
              }`
            : `relative flex cursor-pointer list-none items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                active ? 'font-semibold text-blue-800' : 'text-gray-700 hover:text-blue-800'
              }`
        }
      >
        Services
        <ChevronDown size={15} className="transition-transform group-open:rotate-180" />
        {!mobile && active && (
          <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-800" />
        )}
      </summary>
      <div
        className={
          mobile
            ? 'ml-3 mt-1 space-y-1 border-l border-blue-100 pl-3'
            : 'invisible absolute left-0 top-full z-50 mt-2 w-72 translate-y-1 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl shadow-slate-900/10 transition-all group-open:visible group-open:translate-y-0 group-open:opacity-100'
        }
      >
        <Link
          to="/services"
          onClick={onNavigate}
          className="block rounded-lg px-3 py-2.5 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
        >
          All Services
        </Link>
        <div className="my-1 border-t border-gray-100" />
        {serviceLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onNavigate}
            className={`block rounded-lg px-3 py-2.5 text-sm transition ${
              isActive(link.path)
                ? 'bg-blue-50 font-semibold text-blue-800'
                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-800'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </details>
  )
}

const NavigationLinks = ({ mobile = false, isActive, onNavigate }) => {
  const renderLink = (link) => {
    const active = isActive(link.path)

    return (
      <Link
        key={link.path}
        to={link.path}
        onClick={onNavigate}
        className={
          mobile
            ? `block rounded-lg px-4 py-3 text-base font-medium transition ${
                active
                  ? 'bg-blue-50 font-semibold text-blue-800'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-800'
              }`
            : `relative px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? 'font-semibold text-blue-800'
                  : 'text-gray-700 hover:text-blue-800'
              }`
        }
      >
        {link.name}
        {!mobile && active && (
          <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-800" />
        )}
      </Link>
    )
  }

  return (
    <>
      {navLinks.slice(0, 3).map(renderLink)}
      <ServicesDropdown mobile={mobile} isActive={isActive} onNavigate={onNavigate} />
      {navLinks.slice(3).map(renderLink)}

      <div className={mobile ? 'mt-3 border-t border-gray-100 pt-4' : 'ml-3'}>
        <Link
          to="/contact"
          onClick={onNavigate}
          className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary-base px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(0,80,160,0.18)] transition-all hover:bg-primary-hover hover:shadow-[0_10px_26px_rgba(0,80,160,0.25)] active:scale-[0.98] ${
            mobile ? 'w-full' : ''
          }`}
        >
          Get Started
          <ArrowRight size={15} />
        </Link>
      </div>
    </>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  /* --------------------------------
     Scroll Detection
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* --------------------------------
     Prevent Body Scroll
  -------------------------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const isActive = (path) => {
    const currentPath = location.pathname.replace(/\/+$/, '') || '/'
    const targetPath = path.replace(/\/+$/, '') || '/'
    return currentPath === targetPath
  }

  const handleNavigation = () => setIsOpen(false)

  return (
    <header
      role="navigation"
      aria-label="Main Navigation"
      className="relative"
    >
      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-gray-200 bg-white/95 py-2.5 shadow-sm backdrop-blur-md'
            : 'border-gray-200/80 bg-white/90 py-3.5 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            aria-label="Kashsam Data Solutions"
            className="rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <img
              src={brandLogo}
              alt="Kashsam Data Solutions"
              className="h-auto w-28 sm:w-36 md:w-40 lg:w-44"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center md:flex">
            <NavigationLinks isActive={isActive} onNavigate={handleNavigation} />
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Open navigation menu"
            className="rounded-xl border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-700 md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 md:hidden ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gray-950/45 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[88vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
            >
              <img
                src={brandLogo}
                alt="Kashsam Data Solutions"
                className="h-10 w-auto"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="flex flex-col gap-1">
              <NavigationLinks mobile isActive={isActive} onNavigate={handleNavigation} />
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="border-t border-gray-100 px-6 py-5">
            <p className="text-center text-xs text-gray-400">
              Kashsam Data Solutions
            </p>

            <p className="mt-1 text-center text-xs text-gray-400">
              Data · Intelligence · Growth
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar