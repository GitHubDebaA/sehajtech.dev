"use client";

import Button from "../ui/Button";

export default function CTA() {
    return (
        <section className="w-full bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT - FORM */}
                    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
                        <form className="space-y-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Name */}
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] outline-none transition"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                {/* Company Name */}
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] outline-none transition"
                                        placeholder="Company name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Company Email */}
                                <div className="flex-1">
                                    <input
                                        type="email"
                                        className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] outline-none transition"
                                        placeholder="email@company.com"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex-1">
                                    <input
                                        type="tel"
                                        className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] outline-none transition"
                                        placeholder="+91"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <textarea
                                    rows={3}
                                    className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] outline-none transition resize-none"
                                    placeholder="How can we help you? Feel free to get in touch!"
                                    required
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex justify-center">
                                <Button>Submit</Button>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT - MAP */}
                    <div className="overflow-hidden h-[520px]">
                        <h2 className="text-xl md:text-5xl mb-6 text-white">
                            Partner with SehajTech Info Solutions
                        </h2>

                        <p className="text-base text-gray-100 leading-relaxed mb-4">
                            With a vision rooted in innovation, a legacy of engineering excellence, and next-gen digital capabilities, Highbar Technocrat is your ideal partner for comprehensive digital transformation in the EPC and Real Estate sectors.
                        </p>
                        <p className="text-base text-gray-100 leading-relaxed">
                            Let’s build a smarter, more efficient, and future-ready business—together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}