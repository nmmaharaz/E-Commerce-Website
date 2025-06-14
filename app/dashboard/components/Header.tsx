import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaBars } from "react-icons/fa";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-1 bg-white">
     <div className="flex items-center gap-4">
       <Link href="/dashboard" className="text-2xl font-bold">
            <Image
              src="/logo.png"
              alt="E-Commerce"
              width={250}
              height={70}
            ></Image>
          </Link>
      <button onClick={toggleSidebar} className="text-xl">
        <FaBars />
      </button>
     </div>
      <div className="flex items-center gap-2">
        <div className="text-sm text-gray-600">MD NADIMUL MAWLA MEHARAZ</div>
      </div>
    </header>
  );
};

export default Header;
