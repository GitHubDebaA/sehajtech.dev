"use client";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
        relative z-0
        text-[17px]
        bg-transparent
        border-none
        px-6 py-4
        text-[var(--primary-gold)]
        uppercase
        cursor-pointer
        transition-all duration-500
        overflow-hidden
        font-semibold
        tracking-wider
        rounded-md

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--primary-gold)]
        focus-visible:ring-offset-2

        hover:scale-[1.02]
        active:scale-[0.98]

        before:content-['']
        before:absolute
        before:left-0
        before:bottom-0
        before:h-[2px]
        before:w-0
        before:bg-[var(--primary-gold)]
        before:transition-all
        before:duration-500
        hover:before:w-full

        after:content-['']
        after:absolute
        after:left-0
        after:bottom-0
        after:h-0
        after:w-full
        after:bg-[var(--primary-gold)]
        after:transition-all
        after:duration-400
        after:z-[-1]
        hover:after:h-full

        hover:text-white
      "
        >
            {children}
        </button>
    );
}