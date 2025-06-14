"use client";
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

interface productSizeProps {
  productSize: string[];
  setProductSize: (value: string[]) => void;
}

export default function ProductSize({ productSize, setProductSize }: productSizeProps) {
  const [subShowCategory, setSubShowCategory] = useState(false);

  const categories = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "3XL",
    "4XL",
    "5XL",
  ];

  // Handle select
  const handleCategorySelect = (category: string) => {
    if (!productSize.includes(category)) {
      setProductSize([...productSize, category]);
    }
    setSubShowCategory(false); 
  };

  return (
    <div className="relative inline-block text-left w-full ">
      <label className="text-[13px] uppercase font-bold text-gray-700 block pb-2">
        Product Size
      </label>

      {/* Input Field + Toggle Button */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setSubShowCategory(!subShowCategory)}
      >
        <input
          readOnly
          value={productSize.join(", ") || ""}
          placeholder="Select product size"
          className="bg-white text-gray-800 p-4 rounded-md border border-gray-300 w-full cursor-pointer"
        />
        <div className="absolute right-3 text-2xl top-2/3 transform -translate-y-1/2 text-gray-600">
          {!subShowCategory ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
        </div>
      </div>

      {subShowCategory && (
        <div className="absolute z-10 h-64 overflow-auto w-full border rounded-md shadow-lg border-gray-200 bg-white text-sm text-gray-900 mt-1">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategorySelect(category)}
              className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                productSize.includes(category) ? "bg-gray-100 " : ""
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
