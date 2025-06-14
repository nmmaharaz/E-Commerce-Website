"use client"
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export default function IsFeatured({isFeatured, setIsFeatured}: {isFeatured: string, setIsFeatured: (value: string) => void}) {
    const [SubShowCategory, setSubShowCategory] = useState(false);
    
    const categories = [
        "True",
        "False"
    ];

    const handleCategorySelect = (category: string) => {
        setIsFeatured(category);
        setSubShowCategory(false);
    };


    return (
       <div className="relative inline-block text-left w-full ">
            <label className="text-[13px] uppercase font-bold text-gray-700 block pb-2">Is Featured</label>
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setSubShowCategory(!SubShowCategory)}
            >
                <input
                    required
                    readOnly
                    value={isFeatured}
                    placeholder="Select is featured"
                    className="bg-white text-gray-800 p-4 rounded-md border border-gray-300 w-full cursor-pointer"
                />
                <div className="absolute right-3 text-2xl top-2/3 transform -translate-y-1/2 text-gray-600">
                    {!SubShowCategory ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </div>
            </div>

            {SubShowCategory && (
                <div className="absolute z-10 w-full border rounded-md shadow-lg border-gray-200 bg-white text-sm text-gray-900">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategorySelect(category)}
                            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {category}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
