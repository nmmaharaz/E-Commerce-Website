import Image from "next/image";
import Link from "next/link";
import Location from "./location/Location";
import Container from "./Container";
import SearchProduct from "./SearchProduct";
import { IoBagOutline } from "react-icons/io5";

export default function TopNavbar() {
  return (
    <nav>
      <Container className="flex items-center justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/logo.png"
              alt="E-Commerce"
              width={250}
              height={70}
            ></Image>
          </Link>
        </div>
        <div className="flex items-center h-full gap-4 w-full max-w-4xl">
          <Location />
          <SearchProduct />
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="bg-[#6D4AAE] hover:bg-[#53348C] px-4 py-1 rounded-2xl text-white font-bold"
            href="/login"
          >
            Sign In
          </Link>
          <Link className="" href="/shoping">
            <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50">
              {/* Bag Icon */}
              <IoBagOutline className="text-xl text-gray-800" />

              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </div>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
