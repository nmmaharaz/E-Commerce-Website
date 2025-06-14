"use client";
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

interface productColorProps {
  productColor: string[];
  setProductColor: (value: string[]) => void;
}

export default function ProductColor({ productColor, setProductColor }: productColorProps) {
  const [subShowCategory, setSubShowCategory] = useState(false);

  const categories = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Yellow",
    "Pink",
    "Purple",
    "Orange",
    "Gray",
    "Brown",
    "Cyan",
    "Magenta",
    "Lime",
    "Teal",
    "Navy",
    "Maroon",
    "Olive",
    "Silver",
    "Gold"
  ];

  // Handle select
  const handleCategorySelect = (category: string) => {
    if (!productColor.includes(category)) {
      setProductColor([...productColor, category]);
    }
    setSubShowCategory(false); 
  };

  return (
    <div className="relative inline-block text-left w-full ">
      <label className="text-[13px] uppercase font-bold text-gray-700 block pb-2">
        Product Color
      </label>

      {/* Input Field + Toggle Button */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setSubShowCategory(!subShowCategory)}
      >
        <input
          readOnly
          value={productColor.join(", ") || ""}
          placeholder="Select product Color"
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
                productColor.includes(category) ? "bg-gray-100 " : ""
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
