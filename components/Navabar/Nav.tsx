"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import Image from "next/image";
import logo from "../../public/assets/logo.png";


export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "About Us", link: "/about" },
        { name: "Industries", link: "/industries" },
        { name: "Solutions", link: "/solutions" },
        { name: "Our Clients", link: "/clients" },
        { name: "Resources", link: "/resources" },
        { name: "Careers", link: "/careers" },
    ];

    return (
        <nav
            className="w-full transition-all duration-300 bg-neutral-50 shadow-md"
        >
            <div className="relative max-w-7xl mx-auto px-6 py-6 lg:py-7 flex items-center justify-between">
                {/* Left (optional future logo space) */}
                <div className="md:hidden">
                    <Link href="/">
                        <div className="relative w-[140px] h-[40px]">
                            <Image
                                src={logo}
                                alt="Sehajtech Logo"
                                fill
                                className="object-contain mix-blend-multiply"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Center Menu */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-base whitespace-nowrap">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => setActiveMenu(item.name)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Link href={item.link} className="flex items-center gap-1 group relative cursor-pointer">
                                <span className={`transition ${pathname === item.link ? "text-[var(--primary-gold)]" : "text-[var(--dark-text)] group-hover:text-[var(--primary-gold)]"}`}>
                                    {item.name}
                                </span>
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--primary-gold)] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="flex justify-end md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4 text-center">
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.link} className="block">
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

/* Dropdown Column Component */
function DropdownColumn({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <div>
            <h4 className="font-semibold mb-3 text-[#C5A000]">{title}</h4>
            <ul className="space-y-2 text-sm">
                {items.map((item, index) => (
                    <li key={index} className="hover:text-[#C5A000] cursor-pointer transition">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}