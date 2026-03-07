"use client";

import { motion } from "framer-motion";
import { Rocket, Globe, Award, Target } from "lucide-react";

const milestones = [
    {
        year: "2007 – 2008",
        title: "Foundation",
        icon: <Rocket size={28} />,
        items: [
            "Separate Line of Business",
            "Separate Entity Established",
            "First Customer Acquisition"
        ]
    },
    {
        year: "2010 – 2016",
        title: "Expansion",
        icon: <Globe size={28} />,
        items: [
            "SAP Gold Partner",
            "First Middle East Order",
            "First Swiss Order",
            "Customer Milestone 10+"
        ]
    },
    {
        year: "2019 – 2025",
        title: "Global Recognition",
        icon: <Award size={28} />,
        items: [
            "DRS Partner of the Year 2023",
            "Net New Business Partner 2024",
            "CMMI Level 5 Certification",
            "First UK & USA Orders",
            "Expansion into Oil & Gas",
            "IoT, Power BI, RPA Adoption"
        ]
    },
    {
        year: "2028",
        title: "Our Vision",
        icon: <Target size={28} />,
        items: [
            "To become the most preferred IT solutions company across global markets and verticals."
        ]
    }
];

export default function Journey() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xl md:text-5xl mb-4">
                        Our Journey
                    </h2>

                    <p className="text-base text-gray-600 leading-relaxed">
                        From humble beginnings to global partnerships,
                        our journey reflects continuous innovation,
                        customer success, and industry recognition.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-1"
                        >

                            <div className="flex items-start mb-4 space-x-4">
                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--primary-gold)] text-white mb-4">
                                    {milestone.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {milestone.year}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {milestone.title}
                                    </p>
                                </div>
                            </div>

                            <ul className="text-sm text-gray-600 space-y-1">
                                {milestone.items.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}