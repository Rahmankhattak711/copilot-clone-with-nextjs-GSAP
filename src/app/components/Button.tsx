"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border border-[#c43e30] bg-[#641b3a] ml-2 text-white cursor-pointer px-6 py-3 rounded-xs hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}
