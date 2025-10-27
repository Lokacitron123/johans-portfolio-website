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
      className={`group relative flex items-center justify-center gap-2 h-12 px-5 rounded-full text-white bg-gray-900 dark:bg-white dark:text-gray-900 outline-none transition-all hover:scale-[1.05] active:scale-95 ${className}`}
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
    </button>
  );
};
