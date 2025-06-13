import { useEffect } from "react";

interface DeliveryLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationModal({ isOpen, onClose }: DeliveryLocationModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Full-screen overlay and center modal
    <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
      {/* Modal box */}
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-1">Choose your Delivery Location</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter your address and we will specify the offer for your area.
        </p>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search your area..."
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>
        <ul className="space-y-1 max-h-80 overflow-scroll">
          {[
            "All", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
            "Anguilla", "Antigua And Barbuda", "Argentina", "Argentina", "Argentina", "Argentina", "Argentina", "Argentina"
          ].map((country, i) => (
            <li key={i} className="cursor-pointer hover:text-blue-500">{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
