"use client"
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

export default function CategoryButton() {
  const [ShowCategory, setShowCategory] = useState(false);

  return (
    <div className="relative group inline-block text-left">
      <button
        onClick={() => setShowCategory(!ShowCategory)}
        className="flex gap-x-2 items-center bg-[#6D4AAE] hover:bg-[#53348C] px-6 py-2 rounded-3xl text-white font-bold"
      >
        <IoMdMenu />
        <p>All Categories</p>
        {ShowCategory ? <FaChevronDown /> : <FaChevronRight />}
      </button>

      {/* Conditional rendering of dropdown */}
      <div
        className={`absolute duration-700 left-0 z-10 w-52 pt-2 ${
          ShowCategory ? "block" : "hidden"
        }`}
      >
        <div className="py-1 border rounded-md shadow-lg border-gray-200 bg-white text-sm text-gray-700">
          <Link href="/men" className="block px-4 py-2 hover:bg-gray-100">
            Men&#39;s Clothing
          </Link>
          <Link href="/women" className="block px-4 py-2 hover:bg-gray-100">
            Women&#39;s Clothing
          </Link>
          <Link href="/women" className="block px-4 py-2 hover:bg-gray-100">
            Women&#39;s Clothing
          </Link>
          <Link href="/women" className="block px-4 py-2 hover:bg-gray-100">
            Women&#39;s Clothing
          </Link>
          <Link href="/women" className="block px-4 py-2 hover:bg-gray-100">
            Women&#39;s Clothing
          </Link>
        </div>
      </div>
    </div>
  );
}
