"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export type CarouselSlide = {
    title: string;
    description?: string;
    image: string;
    primaryButton?: {
        label: string;
        link: string;
    };
    secondaryButton?: {
        label: string;
        link: string;
    };
};

type CarouselProps = {
    slides: CarouselSlide[];
    height?: string; // e.g., "90vh" or "calc(100vh-96px)"
    overlayOpacity?: string; // e.g., "bg-black/60"
    autoplayDelay?: number;
    align?: "center" | "left";
};

export default function Carousel({
    slides,
    height = "90vh",
    overlayOpacity = "bg-black/60",
    autoplayDelay = 5000,
    align = "center",
}: CarouselProps) {
    return (
        <section className="w-full" style={{ height }}>
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{ delay: autoplayDelay }}
                pagination={{ clickable: true }}
                loop
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Overlay */}
                            <div className={`absolute inset-0 ${overlayOpacity}`} />

                            {/* Content */}
                            <div
                                className={`relative z-10 h-full flex flex-col justify-center px-6 text-white ${align === "center"
                                        ? "items-center text-center"
                                        : "items-start text-left max-w-6xl mx-auto"
                                    }`}
                            >
                                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                    {slide.title}
                                </h1>

                                {slide.description && (
                                    <p className="max-w-2xl text-lg md:text-xl mb-8">
                                        {slide.description}
                                    </p>
                                )}

                                <div className="flex gap-4 flex-wrap">
                                    {slide.primaryButton && (
                                        <a
                                            href={slide.primaryButton.link}
                                            className="bg-[#C5A000] px-8 py-3 rounded-md text-black font-semibold hover:bg-yellow-500 transition"
                                        >
                                            {slide.primaryButton.label}
                                        </a>
                                    )}

                                    {slide.secondaryButton && (
                                        <a
                                            href={slide.secondaryButton.link}
                                            className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition"
                                        >
                                            {slide.secondaryButton.label}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}