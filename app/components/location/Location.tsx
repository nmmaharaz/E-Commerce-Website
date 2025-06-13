"use client";

import { useState } from "react";
import LocationModal from "./LocationModal";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="border cursor-pointer border-gray-300 rounded-lg pl-4 pr-10 py-1 text-left"
      >
        <p className="text-xs text-gray-500">Your Location</p>
        <p className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          All
        </p>
      </button>
      <LocationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
