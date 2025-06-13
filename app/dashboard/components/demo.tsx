import { FC, useState } from "react";
import {
  FaTachometerAlt,
  FaTags,
  FaBox,
  FaClipboardList,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { MdImage } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState<string | null>("Category");

  const toggleMenu = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };


const SidebarMenu: FC<{
  icon: React.ReactElement;
  label: string;
  isOpen: boolean;
  isExpanded: boolean;
  toggleMenu: (label: string) => void;
  items: string[];
}> = ({ icon, label, isOpen, isExpanded, toggleMenu, items }) => (
  <div>
    <div
      className="flex items-center justify-between px-2 py-2 rounded hover:bg-gray-100 cursor-pointer transition"
      onClick={() => toggleMenu(label)}
    >
      <div className="flex items-center space-x-3">
        <span className="text-lg">{icon}</span>
        {isOpen && <span>{label}</span>}
      </div>
      {isOpen && (
        <span className="text-sm text-gray-400">
          {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
        </span>
      )}
    </div>
    {isOpen && isExpanded && (
      <div className="ml-8 mt-1 space-y-1 text-sm text-gray-600">
        {items.map((item) => (
          <div
            key={item}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
);


  return (
    <div className={`bg-white shadow-lg h-screen p-4 transition-all duration-300 ${isOpen ? "w-64" : "w-16"} overflow-y-auto`}>
      <div className="flex items-center justify-center mb-6">
        <span className="font-bold text-xl">{isOpen ? "ECOMMERCE" : "E"}</span>
      </div>

      <nav className="space-y-2 text-sm font-medium text-gray-700">
        {/* <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" isOpen={isOpen} /> */}
        {/* <SidebarItem
          icon={<MdImage />}
          label="Home Banner Slides"
          isOpen={isOpen}
        /> */}
        <SidebarMenu
          icon={<FaTags />}
          label="Category"
          isOpen={isOpen}
          isExpanded={openMenu === "Category"}
        //   toggleMenu={toggleMenu}
        toggleMenu={toggleMenu}
          items={[
            "Category List",
            "Add a category",
            "Sub Category List",
            "Add a sub category",
          ]}
        />
        {/* <SidebarItem icon={<FaBox />} label="Products" isOpen={isOpen} />
        <SidebarItem icon={<FaClipboardList />} label="Orders" isOpen={isOpen} />
        <SidebarItem icon={<MdImage />} label="Home Banners" isOpen={isOpen} />
        <SidebarItem icon={<MdImage />} label="Home Side Banners" isOpen={isOpen} />
        <SidebarItem icon={<MdImage />} label="Home Bottom Banners" isOpen={isOpen} /> */}
      </nav>
    </div>
  );
};

const SidebarItem: FC<{ icon: React.ReactElement; label: string; isOpen: boolean }> = ({
  icon,
  label,
  isOpen,
}) => (
  <div className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer transition">
    <span className="text-lg">{icon}</span>
    {isOpen && <span>{label}</span>}
  </div>
);


export default Sidebar;
