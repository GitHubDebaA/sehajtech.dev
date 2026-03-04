"use client";

import { useEffect, useState } from "react";
import Button from "./ui/Button";

const clients = [
    { name: "Whirlpool Corp", location: "Gurgaon" },
    { name: "Samsung", location: "Gurgaon" },
    { name: "Tata Motors", location: "Pune" },
    { name: "Indian Metals & Ferro Alloys", location: "Mumbai" },
    { name: "Greaves Cotton", location: "Chennai" },
    { name: "Pennar Industries", location: "Pune" },
    { name: "Varun Beverages", location: "Vadodara" },
    { name: "Adani Green", location: "Ahmedabad" },
    { name: "Gujarat State Fertilizers & Chemicals", location: "Ahmedabad" },
    { name: "GHCL Limited", location: "Gujarat" },
    { name: "Godrej Industries", location: "Gurgaon" },
    { name: "Eternal (Zomato)", location: "Noida" },
    { name: "Strides Pharma Science", location: "Solapur" },
    { name: "ITC LTD", location: "Kolkata" }
];

// Fisher–Yates shuffle
function shuffleArray<T>(array: T[]) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export default function ClientsMarquee() {
    const [shuffledClients, setShuffledClients] = useState<
        typeof clients | null
    >(null);

    useEffect(() => {
        // Runs only on client after hydration
        setShuffledClients(shuffleArray(clients));
    }, []);

    // Prevent SSR mismatch
    if (!shuffledClients) return null;

    return (
        <section className="w-full overflow-hidden relative">
            {/* Section Heading */}
            <div className="text-center mb-8 px-6">
                <h2 className="text-4xl">
                    Our Esteemed Clients
                </h2>
            </div>

            {/* Gradient Fade Edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

            {/* Row 1 */}
            <div className="relative overflow-hidden">
                <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
                    {[...shuffledClients, ...shuffledClients].map((item, index) => (
                        <ClientCard key={index} {...item} />
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div className="relative overflow-hidden mt-12">
                <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
                    {[...shuffledClients, ...shuffledClients].map((item, index) => (
                        <ClientCard key={index} {...item} />
                    ))}
                </div>
            </div>

            <div className="text-center m-8">
                <Button>View More</Button>
            </div>
        </section>
    );
}

/* Client Card */
function ClientCard({
    name,
    location,
    onHoverStart,
    onHoverEnd,
}: {
    name: string;
    location: string;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
}) {
    return (
        <div
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="
        relative
        min-w-[260px]
        px-8 
        py-4
        flex 
        flex-col 
        items-center 
        justify-center
        text-center
        transition-all 
        duration-300
        hover:-translate-y-1
        cursor-pointer
        overflow-hidden

        before:absolute
        before:top-0
        before:left-0
        before:h-full
        before:w-[2px]
        before:bg-[var(--primary-gold)]
        before:opacity-0
        before:transition-all
        before:duration-300

        after:absolute
        after:top-0
        after:right-0
        after:h-full
        after:w-[2px]
        after:bg-[var(--primary-gold)]
        after:opacity-0
        after:transition-all
        after:duration-300

        hover:before:opacity-100
        hover:after:opacity-100

        hover:before:shadow-[0_0_12px_var(--primary-gold)]
        hover:after:shadow-[0_0_12px_var(--primary-gold)]
      "
        >
            <h4 className="text-lg">{name}</h4>
            <span className="text-sm text-gray-500">{location}</span>
        </div>
    );
}