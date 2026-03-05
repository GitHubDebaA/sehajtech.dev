"use client";

import Button from "./ui/Button";

export default function GetInTouch() {
    return (
        <section className="w-full bg-white my-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT - FORM */}
                    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl md:text-4xl mb-4">Get In Touch</h2>
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
                            {/* Turnover */}
                            <div>
                                <select
                                    className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-[var(--primary-gold)] outline-none transition"
                                    required
                                >
                                    <option value="">Select Turnover</option>
                                    <option>Below ₹1 Cr</option>
                                    <option>₹1 Cr – ₹10 Cr</option>
                                    <option>₹10 Cr – ₹50 Cr</option>
                                    <option>₹50 Cr – ₹100 Cr</option>
                                    <option>₹100 Cr +</option>
                                </select>
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

                        <iframe
                            src="https://www.google.com/maps?q=Plot+Number+65,+Sector+44,+Gurugram&output=embed"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            className="border-0"
                        ></iframe>

                    </div>
                </div>
            </div>
        </section>
    );
}