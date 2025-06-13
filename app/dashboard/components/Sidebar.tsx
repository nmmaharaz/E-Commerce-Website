import Link from "next/link";
import { FC, useState } from "react";
import {
  Image as ImageIcon,
  PanelLeft,
  LayoutDashboard,
  CircleParking,
  ClipboardCheck,
} from "lucide-react";
// import { PanelLeft } from "lucide-react"; // similar structure

import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState<string | null>("");

  console.log(openMenu, "openMenu=====>");

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
        className="flex items-center justify-between px-2 py-3 rounded hover:bg-gray-100 cursor-pointer transition"
        onClick={() => toggleMenu(label)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-gray-500">{icon}</span>
          {isOpen && (
            <span className="font-semibold text-gray-500">{label}</span>
          )}
        </div>
        {isOpen && (
          <span className="text-sm text-gray-400">
            {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
          </span>
        )}
      </div>
      {isExpanded && (
        <div className="ml-8 pt-1 pl-6 mb-3 border-l-1 border-gray-400 space-y-1 text-sm text-gray-600">
          {items.map((item) => (
            <Link href={`/dashboard/${item.toLowerCase().replace(/ /g, "-")}`}
              key={item}
              className="hover:text-blue-600 pt-3 block cursor-pointer transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`bg-white shadow-lg h-screen p-4 transition-all duration-300 ${isOpen ? "w-72" : "w-16"}`}
    >
      <nav className="space-y-2 text-sm font-medium text-gray-700">
        <DeshboardItem
          icon={<LayoutDashboard />}
          label="Dashboard"
          isOpen={isOpen}
        />
        <SidebarMenu
          icon={<ImageIcon />}
          label="Home Banner Slides"
          isOpen={isOpen}
          isExpanded={openMenu === "Home Banner Slides"}
          toggleMenu={toggleMenu}
          items={["Add Home Banner Slide", "Home Slide List"]}
        />
        <SidebarMenu
          icon={<PanelLeft />}
          label="Category"
          isOpen={isOpen}
          isExpanded={openMenu === "Category"}
          toggleMenu={toggleMenu}
          items={[
            "Category List",
            "Add a category",
            "Sub Category List",
            "Add a sub category",
          ]}
        />
        <SidebarMenu
          icon={<CircleParking />}
          label="Products"
          isOpen={isOpen}
          isExpanded={openMenu === "Products"}
          toggleMenu={toggleMenu}
          items={[
            "Product List",
            "Product Upload",
            "Add Product RAMS",
            "Add Product WEIGHT",
            "Add product SIZE",
          ]}
        />
        {/* <SidebarItem icon={<CircleParking />} link="product" label="Products" isOpen={isOpen} /> */}
        <SidebarItem
          icon={<ClipboardCheck />}
          label="Orders"
          isOpen={isOpen}
        />

        <SidebarMenu
          icon={<ImageIcon />}
          label="Home Banners"
          isOpen={isOpen}
          isExpanded={openMenu === "Home Banners"}
          toggleMenu={toggleMenu}
          items={[
            "Banners List",
            "Banners Upload",
          ]}
        />
        <SidebarMenu
          icon={<ImageIcon />}
          label="Home Side Banners"
          isOpen={isOpen}
          isExpanded={openMenu === "Home Side Banners"}
          toggleMenu={toggleMenu}
          items={[
            "Banners List",
            "Banners Upload",
          ]}
        />
        <SidebarMenu
          icon={<ImageIcon />}
          label="Home Bottom Banners"
          isOpen={isOpen}
          isExpanded={openMenu === "Home Bottom Banners"}
          toggleMenu={toggleMenu}
          items={[
            "Banners List",
            "Banners Upload",
          ]}
        />
      </nav>
    </div>
  );
};

const SidebarItem: FC<{
  icon: React.ReactElement;
  label: string;
  isOpen: boolean;
}> = ({ icon, label, isOpen }) => (
  <Link
    href={`/dashboard/${label.toLowerCase()}`}
    className="flex text- items-center space-x-3 px-2 py-3 rounded hover:bg-gray-100 cursor-pointer transition"
  >
    <span className="text-gray-500">{icon}</span>
    {isOpen && <span className="font-semibold text-gray-500">{label}</span>}
  </Link>
);
const DeshboardItem: FC<{
  icon: React.ReactElement;
  label: string;
  isOpen: boolean;
}> = ({ icon, label, isOpen }) => (
  <Link
    href={`/dashboard`}
    className="flex text- items-center space-x-3 px-2 py-3 rounded hover:bg-gray-100 cursor-pointer transition"
  >
    <span className="text-gray-500">{icon}</span>
    {isOpen && <span className="font-semibold text-gray-500">{label}</span>}
  </Link>
);

export default Sidebar;
