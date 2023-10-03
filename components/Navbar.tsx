"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute flex w-full items-center justify-between p-1 pl-4 pr-4 bg-black z-50">
      <Image
        src="/logo.png"
        alt="Apeta Logo"
        width={80}
        height={40}
        className="object-cover"
      />
      <button className="text-xs border border-gray-400 bg-transparent px-4 py-2 rounded-full">
        Download the App
      </button>
    </nav>
  );
}
