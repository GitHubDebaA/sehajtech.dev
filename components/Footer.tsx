import FollowUsButton from "./ui/FollowUs";
import Button from "./ui/Button";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-6 border-t border-white/10">
            <div className="max-w-full mx-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6">
                        {/* Address */}
                        <div className="mb-8">
                            <div className="text-xl mb-4">Address</div>
                            <div className="text-gray-200">Plot Number 65, 1st Floor, Sector 44, Gurugram-122002</div>
                        </div>

                        {/* Contact with us */}
                        <div className="mb-8">
                            <div className="text-xl mb-4">Contact With Us</div>

                            <div className="text-gray-200">Sales & Demo</div>
                            <div className="text-gray-200 mb-2">+91 8976-711-399</div>

                            <div className="text-gray-200">HR, Career & Others</div>
                            <div className="text-gray-200">(022) 6279 2000</div>
                        </div>

                        {/* Email */}
                        <div className="mb-8">
                            <div className="text-xl mb-4">Email</div>

                            <div className="flex items-center gap-3 text-gray-200 lowercase">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 shrink-0"
                                >
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>

                                <a href="mailto:Vikas.Mehta@sehajtechconsultants.co.in" className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Vikas.Mehta@sehajtechconsultants.co.in
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200 lowercase">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 shrink-0"
                                >
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>

                                <a href="mailto:Manu.Sharma@sehajtech.com" className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Manu.Sharma@sehajtech.com
                                </a>
                            </div>
                        </div>

                        {/* Subscribe to our newsletter */}
                        <div className="mb-8">
                            <div className="text-xl mb-4">Subscribe To Our Newsletter!</div>

                            <form className="max-w-md space-y-4">
                                {/* Name input field, required */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name *"
                                        className="w-full px-4 py-2 bg-white/90 text-gray-900 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] transition-all duration-300"
                                    />
                                </div>

                                {/* Email input field, required */}
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        className="w-full px-4 py-2 bg-white/90 text-gray-900 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] transition-all duration-300"
                                    />
                                </div>

                                {/* Subscribe button */}
                                <div className="flex justify-center">
                                    <Button>Subscribe</Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* About Us */}
                        <div className="mb-8">
                            <div className="text-xl mb-4">About Us</div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Overview
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Leadership
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Our Clientele
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Client Testimonials
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Awards & Recognition
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        {/* Others */}
                        <div className="mb-8">
                            <div className="text-xl mb-4">Others</div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    News
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Events
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Case Studies
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    View Our Blogs
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Videos
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Career Overview
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Industries We Serve */}
                        <div className="mb-8">
                            <div className="text-xl mb-4">Industries We Serve</div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Infrastructure
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Real Estate
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Manufacturing
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Smart City
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Metro Rail Projects
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Highways, Tunnels, Bridges & Airports
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Asset Operations & Maintenance
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Power, Renewable Energy
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Pre-Engineering Buildings
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    EPC
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Water Supply, Distribution, WTP
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Oil & Gas
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Mining
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Mall Management
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Office Space Management
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Facility Management
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Solutions */}
                        <div className="mb-8">
                            <div className="text-xl mb-4">Solutions</div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Rise with SAP
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Grow with SAP
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    SAP S/4 HANA
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    SAP BPC
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    SAP ECM
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Microsoft Sharepoint
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    DocLife
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Business Processes Consulting
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Business Intelligence
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Audit And Training
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    CRM
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    Maintenance Support Services
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    SAP C4C
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    SAP SuccessFactors
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    SAP Ariba
                                </a>
                            </div>
                            <div className="text-gray-200 cursor-pointer mb-2">
                                <a className="hover:text-[var(--primary-gold)] transition-colors duration-300 break-all">
                                    SAP Fiori
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 flex flex-col md:flex-row items-center">
                {/* Left Container - Rights  */}
                <div className="w-full md:basis-[50%] flex justify-center md:justify-start mb-4 md:mb-0 md:border-r md:border-white/10">
                    <div className="text-gray-200">
                        <p>Copyright © {currentYear} Sehajtech Info Solutions. All rights reserved.</p>
                    </div>
                </div>

                {/* Right Container - Follow Us  */}
                <div className="w-full md:basis-[50%] flex justify-start md:justify-start items-center gap-6 flex-wrap">
                    <FollowUsButton />
                </div>
            </div>
        </footer>
    );
}