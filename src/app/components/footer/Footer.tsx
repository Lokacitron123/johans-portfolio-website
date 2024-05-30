import React from "react";

export default function Footer() {
  return (
    <footer className='w-full p-5 px-4 text-center text-gray-50 bg-gray-900'>
      <small className='mb-2 block text-xs'>
        &copy; 2024 Johan Lindell. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS
      </p>
    </footer>
  );
}
