import Image from "next/image";

import Carousel, { CarouselSlide } from "@/components/ui/Carousel";
import ClientsMarquee from "./ClientsMarquee";
import GetInTouch from "./GetInTouch";

export default function Hero() {
    const slides: CarouselSlide[] = [
        {
            title: "Enterprise SAP Solutions",
            description:
                "Empowering businesses with scalable CRM and automation solutions.",
            image:
                "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000",
            primaryButton: {
                label: "Explore Solutions",
                link: "/solutions",
            },
            secondaryButton: {
                label: "Contact Us",
                link: "/contact",
            },
        },
        {
            title: "Next-Gen Web & Cloud Applications",
            description:
                "Secure, high-performance digital platforms built for growth.",
            image:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
            primaryButton: {
                label: "Our Services",
                link: "/solutions",
            },
        },
    ];
    return (
        <>
            <Carousel
                slides={slides}
                height="calc(100vh - 96px)" // adjust if navbar height changes
                align="left"
            />

            <div className="text-center m-8 my-16 md:m-16">
                <h1 className="text-2xl md:text-4xl">Raising the bar in IT solutions, empowering your digital future</h1>
            </div>

            <section className="w-full bg-white mb-16">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
                    {/* Image Section */}
                    <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000"
                            alt="About Sehajtech"
                            fill
                            className="object-cover object-center"
                            unoptimized
                        />
                    </div>

                    {/* Content Section */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">
                            About Sehajtech
                        </h2>

                        <p className="text-base text-gray-600 leading-relaxed mb-6">
                            At <span className="font-semibold text-gray-800">Sehajtech</span>,
                            we are dedicated to transforming the Engineering, Construction, and
                            Operations (EC&O) & Real Estate industry through cutting-edge ERP solutions.
                            As an <span className="font-semibold text-gray-800">SAP Gold Partner</span>,
                            we bring unrivalled expertise in delivering tailored solutions that streamline
                            your operations, enhance project efficiency, and drive business growth.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900">
                            Our Heritage
                        </h3>

                        <p className="text-base text-gray-600 leading-relaxed">
                            Sehajtech is backed by the strong legacy of
                            <span className="font-semibold text-gray-800">
                                {" "}HCC (Hindustan Construction Company)
                            </span>, a pioneer in the construction industry.
                            With this lineage, we carry forward decades of experience and
                            deep-rooted understanding of the complexities in large-scale projects.
                            This heritage allows us to deliver robust and future-ready solutions
                            designed for the EC&O sector.
                        </p>
                    </div>
                </div>
            </section>

            <ClientsMarquee />
            <GetInTouch />
        </>
    );
}