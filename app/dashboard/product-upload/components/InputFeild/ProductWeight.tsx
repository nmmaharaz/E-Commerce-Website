"use client"
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export default function ProductWeight({ productWeight, setProductWeight }: { productWeight: string[], setProductWeight: (value: string[]) => void }) {
    const [SubShowCategory, setSubShowCategory] = useState(false);

    const categories = Array.from({ length: 50 }, (_, i) => `${i + 1}kg`);
    // const categories = [
    //     "1kg",
    //     "2kg",
    //     "3kg",
    //     "4kg",
    //     "5kg",
    //     "6kg",
    //     "7kg",
    //     "8kg",
    //     "9kg",
    //     "10kg",
    //     "11kg",
    //     "12kg",    
    //     "13kg",
    //     "14kg",
    //     "15kg",
    //     "16kg",
    //     "17kg",
    //     "18kg",
    //     "19kg",
    //     "20kg",
    // ];

    const handleCategorySelect = (category: string) => {
        setProductWeight([...productWeight, category]);
        setSubShowCategory(false);
    };


    return (
        <div className="relative inline-block text-left w-full ">
            <label className="text-[13px] uppercase font-bold text-gray-700 block pb-2">PRODUCT WEIGHT</label>
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setSubShowCategory(!SubShowCategory)}
            >
                <input
                    readOnly
                    placeholder="Select product weight"
                    value={productWeight.join(", ") || ""}
                    className="bg-white text-gray-800 p-4 rounded-md border border-gray-300 w-full cursor-pointer"
                />
                <div className="absolute right-3 text-2xl top-2/3 transform -translate-y-1/2 text-gray-600">
                    {!SubShowCategory ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </div>
            </div>

            {SubShowCategory && (
                <div className="absolute z-10 h-64 overflow-auto w-full border rounded-md shadow-lg border-gray-200 bg-white text-sm text-gray-900">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategorySelect(category)}
                            className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${productWeight.includes(category) ? "bg-gray-100" : ""
                                }`}
                        >
                            {category}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
