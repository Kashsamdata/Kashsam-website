import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import brandLogo from '../assets/Kashsam.png';

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:pr-8">
                        <Link
                            to="/"
                            aria-label="Kashsam Data Solutions home"
                            className="inline-block"
                        >
                            <img
                                src={brandLogo}
                                alt="Kashsam Data Solutions"
                                className="h-16 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
                            Kashsam Data Solutions got incorporated on June 6, 2022,
                            as a Private Limited.
                        </p>

                        <Link
                            to="/about-us"
                            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                        >
                            Learn more
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>

                    {/* IT Services */}
                    <div>
                        <h4 className="mb-5 text-sm font-semibold text-gray-900">
                            IT Services
                        </h4>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    to="/data-platform-analytics"
                                    className="text-gray-500 hover:text-blue-700 transition"
                                >
                                    Data Platform & Analytics
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/iot-connectivity-solutions"
                                    className="text-gray-500 hover:text-blue-700 transition"
                                >
                                    IoT & Connectivity Solutions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/seamless-erp-and-crm-integration"
                                    className="text-gray-500 hover:text-blue-700 transition"
                                >
                                    ERP & CRM Consultancy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/web-delivery-implementation"
                                    className="text-gray-500 hover:text-blue-700 transition"
                                >
                                    Web Delivery & Implementation
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/ai-enabled-process-automation"
                                    className="text-gray-500 hover:text-blue-700 transition"
                                >
                                    AI-Enabled Process Automation
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/security-services"
                                    className="text-gray-500 hover:text-blue-700 transition"
                                >
                                    Security Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h4 className="mb-5 text-sm font-semibold text-gray-900">
                            Quick Links
                        </h4>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/" className="text-gray-500 hover:text-blue-700 transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about-us" className="text-gray-500 hover:text-blue-700 transition">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link to="/our-team" className="text-gray-500 hover:text-blue-700 transition">
                                    Our Team
                                </Link>
                            </li>

                            <li>
                                <Link to="/services" className="text-gray-500 hover:text-blue-700 transition">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link to="/book-appointment" className="text-gray-500 hover:text-blue-700 transition">
                                    Book Appointment
                                </Link>
                            </li>

                            <li>
                                <Link to="/blog" className="text-gray-500 hover:text-blue-700 transition">
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="text-gray-500 hover:text-blue-700 transition">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-5 text-sm font-semibold text-gray-900">
                            Get in Touch
                        </h4>

                        <div className="space-y-5">

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                    <Phone
                                        size={16}
                                        className="text-blue-700"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                        Call Us
                                    </p>

                                    <a
                                        href="tel:+919381052467"
                                        className="mt-1 block text-sm font-medium text-gray-700 hover:text-blue-700 transition"
                                    >
                                        +91-9381052467
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                    <Mail
                                        size={16}
                                        className="text-blue-700"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                        Email Us
                                    </p>

                                    <a
                                        href="mailto:Info@kashsam.com"
                                        className="mt-1 block text-sm font-medium text-gray-700 hover:text-blue-700 transition"
                                    >
                                        Info@kashsam.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-7">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <p className="text-xs text-gray-400">
                            © {currentYear} Kashsam Data Solutions. All rights reserved.
                        </p>

                        <div className="flex items-center gap-5 text-xs">
                            <Link
                                to="/privacy-policy"
                                className="text-gray-400 hover:text-blue-700 transition"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/terms"
                                className="text-gray-400 hover:text-blue-700 transition"
                            >
                                Terms of Service
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
}