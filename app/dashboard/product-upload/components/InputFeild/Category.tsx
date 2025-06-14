"use client"
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

interface CategoryProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Category({ selectedCategory, setSelectedCategory }: CategoryProps) {
  const [showCategory, setShowCategory] = useState(false);
  

  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Electronics",
    "Jewelry",
    "Kids Clothing",
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategory(false);
  };

  return (
    <div className="relative inline-block text-left w-full ">
      <label className="text-[13px] font-bold text-gray-700 block pb-2">CATEGORY</label>

      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowCategory(!showCategory)}
      >
        <input
          required
          readOnly
          value={selectedCategory}
          placeholder="Select a category"
          className="bg-white text-gray-800 p-4 rounded-md border border-gray-300 w-full cursor-pointer"
        />
        <div className="absolute right-3 text-2xl top-2/3 transform -translate-y-1/2 text-gray-600">
          {!showCategory ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
        </div>
      </div>

      {showCategory && (
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
