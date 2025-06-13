"use client"
import Link from "next/link";
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export default function Category() {
    const [ShowCategory, setShowCategory] = useState(false);

    return (
        <div className="relative group inline-block text-left">
            <div>
                <label className="text-[13px] font-bold text-gray-700 block pb-2">CATEGORY</label>
                <div className="flex justify-between items-center">
                    <input
                     onClick={() => setShowCategory(!ShowCategory)}
                    className="bg-white text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
                <div className="absolute right-3 text-2xl top-2/3 transform -translate-y-1/2 text-gray-600">
                    {!ShowCategory ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </div>

                </div>
            </div>
            {/* Conditional rendering of dropdown */}
            <div
                className={`absolute duration-700 left-0 z-10 w-full pt-2 ${ShowCategory ? "block" : "hidden"
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
