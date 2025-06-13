import React from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchProduct() {
  return (
    <div className="flex-1 relative h-12">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-full bg-gray-200 text-sm text-gray-700 placeholder-gray-500 pl-4 pr-10 rounded-lg focus:outline-none"
      />
      <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
    </div>
  );
}
