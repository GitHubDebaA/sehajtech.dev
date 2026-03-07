"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import logo from "../../public/assets/logo.png"

export default function Hero() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.35])

    const textY = useTransform(scrollYProgress, [0.45, 0.75], [120, 0])
    const textOpacity = useTransform(scrollYProgress, [0.45, 0.75], [0, 1])

    return (
        <section ref={ref} className="relative h-[200vh]">

            {/* Sticky viewport */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center overflow-hidden">

                {/* Logo */}
                <motion.div
                    style={{ scale }}
                    className="mb-8"
                >
                    <Image
                        src={logo}
                        alt="Our Story"
                        className="w-[700px] h-auto object-contain"
                        priority
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    className="max-w-2xl px-6"
                >
                    <h1 className="text-xl md:text-5xl mb-4">
                        Our Story
                    </h1>

                    <p className="text-base text-gray-600 leading-relaxed">
                        We are a team of SAP experts helping customers to make things easy. We deal in below SAP areas. ABAP, Fiori, MM, SD, FI
                    </p>
                </motion.div>
            </div>
        </section>
    )
}