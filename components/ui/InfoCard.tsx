import { ReactNode } from "react";

interface InfoCardProps {
    title: string;
    subtitle?: string;
    image?: string;
    icon?: ReactNode;
    children?: ReactNode;
}

export default function InfoCard({ title, subtitle, image, icon, children }: InfoCardProps) {
    return (
        <div className="group w-[200px] h-[250px] bg-[#07182E] rounded-md text-center text-gray-100 overflow-hidden relative">

            {/* Image or Icon */}
            <div className="flex items-center justify-center mx-auto mt-[40px] mb-[10px] w-[75px] h-[75px] rounded-full border border-gray-200 overflow-hidden transition-transform duration-500 group-hover:scale-110">

                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    icon
                )}

            </div>

            {/* Title */}
            <div className="px-2 font-medium text-[18px]">
                {title}
            </div>

            {/* Subtitle */}
            {subtitle && (
                <div className="text-sm text-gray-300">
                    {subtitle}
                </div>
            )}

            {/* Hover Content */}
            <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 mt-2 px-3 text-sm">
                {children}
            </div>

        </div>
    );
}