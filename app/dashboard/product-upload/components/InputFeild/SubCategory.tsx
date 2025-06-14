"use client"
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export default function SubCategory() {
    const [ShowCategory, setShowCategory] = useState(false);

    return (
        <div onClick={() => setShowCategory(!ShowCategory)} className="relative group inline-block text-left">
            <div>
                <label className="text-[13px] font-bold text-gray-700 block pb-2">
                    SUB CATEGORY</label>
                <div className="flex justify-between items-center">
                    <input
                        className="bg-white text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
                    <div className="absolute right-3 text-2xl top-2/3 transform -translate-y-1/2 text-gray-600">
                        {!ShowCategory ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                    </div>
                </div>
            </div>
            <div
                className={`absolute duration-700 left-0 z-10 w-full ${ShowCategory ? "block" : "hidden"
                    }`}
            >
                <div className="py-1 border rounded-md shadow-lg border-gray-200 bg-white text-sm text-gray-900">
                    <option className="block px-4 py-2 hover:bg-gray-100">
                        Men&#39;s Clothing
                    </option>
                    <option className="block px-4 py-2 hover:bg-gray-100">
                        Women&#39;s Clothing
                    </option>
                    <option className="block px-4 py-2 hover:bg-gray-100">
                        Women&#39;s Clothing
                    </option>
                    <option className="block px-4 py-2 hover:bg-gray-100">
                        Women&#39;s Clothing
                    </option>
                    <option className="block px-4 py-2 hover:bg-gray-100">
                        Women&#39;s Clothing
                    </option>
                </div>
            </div>
        </div>
    );
}
