import { IoMdHome } from "react-icons/io";

export default function TopHeading() {
  return (
    <div className="flex bg-white shadow-md p-6 rounded-xl items-center justify-between mb-6">
      <h1 className="text-xl text-gray-900">Product Upload</h1>
      <div className="flex items-center gap-2">
        <div className="flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded-xl hover:bg-blue-700 transition">
          <IoMdHome/>
          <p className="text-sm ml-1">Dashboard</p>
        </div>
        /
        <div className="flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded-xl hover:bg-blue-700 transition">
          <IoMdHome/>
          <p className="text-sm ml-1">Products</p>
        </div>
        /
        <div className="flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded-xl hover:bg-blue-700 transition">
          <IoMdHome/>
          <p className="text-sm ml-1">Product Upload</p>
        </div>
      </div>
    </div>
  );
}
