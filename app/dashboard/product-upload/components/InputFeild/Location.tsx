"use client"
import Link from "next/link";
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export default function Location() {
    const [ShowCategory, setShowCategory] = useState(false);

    return (
        <div className="relative w-full group text-left">
            <div>
                <label className="text-[13px] font-bold text-gray-700 block pb-2">
                    LOCATION</label>
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
                className={`absolute h-64 overflow-auto duration-700 left-0 z-10 w-full pt-2 ${ShowCategory ? "block" : "hidden"
                    }`}
            >
                <div className="py-1 border rounded-md shadow-lg border-gray-200 bg-white text-sm text-gray-700">
                    {[
                        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
                        "Anguilla", "Antigua And Barbuda", "Argentina", "Argentina", "Argentina", "Argentina", "Argentina", "Argentina"
                    ].map((country, i) => (
                        <Link key={i} href="/men" className="block px-4 py-2 hover:bg-gray-100">
                       {country}
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
