"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../public/assets/logo.png";

export default function HeaderTop() {
    return (
        <div className="hidden md:block w-full bg-white">
            <div className="px-6 flex flex-col md:flex-row items-center">

                {/* Left Container - Logo */}
                <div className="w-full md:basis-[30%] flex justify-center md:justify-start mb-4 md:mb-0">
                    <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] h-[50px] sm:h-[60px] md:h-[70px]">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Sehajtech Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Container - Awards */}
                <div className="w-full md:basis-[70%] flex justify-center md:justify-start items-center gap-6 flex-wrap text-[var(--dark-text)]">
                    <div className="px-4 py-2 border rounded-lg text-sm">
                        🏆 Top IT Consultant 2025
                    </div>

                    <div className="px-4 py-2 border rounded-lg text-sm">
                        ⭐ 5-Star Client Rating
                    </div>

                    <div className="px-4 py-2 border rounded-lg text-sm">
                        🚀 100+ Successful Projects
                    </div>
                </div>
            </div>
        </div>
    );
}