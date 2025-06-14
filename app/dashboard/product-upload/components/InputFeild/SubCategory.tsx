"use client"
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export default function SubCategory() {
    const [subShowCategory, setSubShowCategory] = useState(false);
    const [subselectedCategory, setSubSelectedCategory] = useState("");
    const categories = [
        "Men's Clothing",
        "Women's Clothing",
        "Electronics",
        "Jewelry",
        "Kids Clothing",
    ];

    const handleCategorySelect = (category: string) => {
        setSubSelectedCategory(category);
        setSubShowCategory(false);
    };


    return (
        <div className="relative inline-block text-left w-full max-w-md">
            <label className="text-[13px] font-bold text-gray-700 block pb-2">SUB CATEGORY</label>
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setSubShowCategory(!subShowCategory)}
            >
                <input
                    required
                    readOnly
                    value={subselectedCategory}
                    placeholder="Select a sub category"
                    className="bg-white text-gray-800 p-4 rounded-md border border-gray-300 w-full cursor-pointer"
                />
                <div className="absolute right-3 text-2xl top-2/3 transform -translate-y-1/2 text-gray-600">
                    {!subShowCategory ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </div>
            </div>

            {subShowCategory && (
                <div className="absolute z-10 mt-1 w-full border rounded-md shadow-lg border-gray-200 bg-white text-sm text-gray-900">
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
