import React, { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export const Button = ({
  children,
  loading = false,
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`group relative flex items-center justify-center gap-2 h-12 px-5 rounded-full text-white bg-gray-900 outline-none transition-all hover:scale-[1.05] active:scale-95 ${className}`}
    >
      {/* Loading state or children */}
      {loading ? (
        <>
          Loading
          {children}
        </>
      ) : (
        <>{children}</>
      )}

      {/* Optional hover effect */}
      <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-1 bg-red-600/80 left-0 bottom-0" />
    </button>
  );
};
