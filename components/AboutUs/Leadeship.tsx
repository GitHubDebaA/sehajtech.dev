"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Button from "../ui/Button"

const leaders = [
    { name: "John Doe", role: "CEO", bio: "20+ years leading tech innovation." },
    { name: "Jane Smith", role: "CTO", bio: "Engineering leader building scalable platforms." },
    { name: "Michael Lee", role: "COO", bio: "Expert in operational excellence and growth." },
    { name: "Sarah Kim", role: "CFO", bio: "Financial strategist ensuring sustainable growth." }
]

export default function Leadership() {

    const [startIndex, setStartIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 2) % leaders.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    const visibleLeaders = [
        leaders[startIndex],
        leaders[(startIndex + 1) % leaders.length]
    ]

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left side */}
                    <div>
                        <h2 className="text-xl md:text-5xl mb-4">
                            Our Leadership
                        </h2>

                        <p className="text-base text-gray-600 leading-relaxed mb-4">
                            Meet the visionaries who turned ambition into achievement. Their leadership, dedication, and strategic foresight have been the driving force behind Highbar Technocrat’s strength and success.
                        </p>

                        {/* View All Button */}
                        <div className="flex justify-center">
                            <Link href="/leadership">
                                <Button>View All Leadership</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="grid md:grid-cols-2 gap-8 h-[260px]">

                        {visibleLeaders.map((leader, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 text-center"
                            >
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-300"></div>

                                <h3 className="text-lg font-semibold">
                                    {leader.name}
                                </h3>

                                <p className="text-sm text-gray-500 mb-2">
                                    {leader.role}
                                </p>

                                <p className="text-sm text-gray-600">
                                    {leader.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}