import React from "react";

export default function Footer() {
  return (
    <footer className="w-full p-5 px-4 text-center text-gray-50 bg-gray-900">
      <p className="mb-2 text-lg">
        &copy; {new Date().getFullYear()} Johan Masuoka{" "}
        <span className="text-red-600/90">Lindell</span>
      </p>
    </footer>
  );
}
