"use client";

// import components
import HeaderTop from "./Navabar/Header";
import Nav from "./Navabar/Nav";

export default function Navbar() {
    return (
        <header className="w-full sticky top-0 z-[100] bg-white shadow-sm">
            <HeaderTop />
            <Nav />
        </header>
    );
}