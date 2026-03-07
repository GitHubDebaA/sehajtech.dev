export default function InfoCard({ title, icon, children }) {
    return (
        <div className="group w-[200px] h-[250px] bg-[#07182E] rounded-md text-center text-gray-100 overflow-hidden relative">

            {/* Icon circle */}
            <div className="flex items-center justify-center mx-auto mt-[60px] mb-[10px] w-[75px] h-[75px] rounded-full border border-gray-200 bg-[#152f50] transition-transform duration-500 group-hover:scale-110">
                {icon}
            </div>

            {/* Title */}
            <div className="px-2 font-medium text-[18px]">
                {title}
            </div>

            {/* Hidden content */}
            <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 mt-2 px-3 text-sm">
                {children}
            </div>

        </div>
    );
}