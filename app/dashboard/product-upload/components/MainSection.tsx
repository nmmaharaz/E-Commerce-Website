import Category from "./InputFeild/Category"
import IsFeatured from "./InputFeild/IsFeatured"
import Location from "./InputFeild/Location"
import ProductColor from "./InputFeild/ProductColor"
import ProductSize from "./InputFeild/ProductSize"
import ProductWeight from "./InputFeild/ProductWeight"
import ProductRating from "./InputFeild/Rating"
import SubCategory from "./InputFeild/SubCategory"
import ProductUpload from "./ProductUpload"
import { FaCloudUploadAlt } from "react-icons/fa"

export default function MainSection() {
  
  return (
    <div className="">
      <form className="space-y-5">
        <div className="bg-white shadow-sm p-6 rounded-xl">
          <p className="text-xl text-gray-900 mb-6">Basic Information</p>
          <div>
            <label className="text-[13px] font-bold text-gray-700 block pb-2">PRODUCT NAME</label>
            <input className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" required />
          </div>
          <div>
            <label className="text-[13px] pt-4 font-bold text-gray-700 block pb-2 uppercase">Deshcription</label>
            <textarea rows={4} required className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" />
          </div>
          <div className="grid grid-cols-1 pt-2 md:grid-cols-3 gap-4">
            <Category></Category>
            <SubCategory></SubCategory>
            <div>
              <label className="text-[13px] uppercase font-bold text-gray-700 block pb-2">Cost Price</label>
              <input required className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
            </div>
            <div>
              <label className="text-[13px] font-bold text-gray-700 block pb-2">OLD PRICE</label>
              <input required className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
            </div>
            <div>
              <label className="text-[13px] uppercase font-bold text-gray-700 block pb-2">Selling Price</label>
              <input required className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
            </div>
            <IsFeatured></IsFeatured>
          </div>
          <div className="grid grid-cols-1 pt-4 lg:grid-cols-3 gap-4">
             <div>
              <label className="text-[13px] font-bold text-gray-700 block pb-2">PRODUCT STOCK</label>
              <input required className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
            </div>
            <div>
              <label className="text-[13px] font-bold text-gray-700 block pb-2">BRAND</label>
              <input required className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
            </div>
            
            <div>
              <label className="text-[13px] font-bold text-gray-700 block pb-2">PRODUCT RAMS</label>
              <input className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
            </div>
            <ProductWeight></ProductWeight>
            <ProductSize></ProductSize>
            <ProductColor></ProductColor>

          </div>
          <div className=" pt-4 lg:grid-cols-2 gap-4">
            <Location></Location>
            <ProductRating></ProductRating>
            {/* <ProductSize></ProductSize> */}
          </div>
        </div>
        <div className="bg-white shadow-sm p-6 mt-6 rounded-xl">
          <ProductUpload></ProductUpload>
          <button className="flex mt-4 w-full py-3 rounded-md justify-center items-center *:text-white bg-blue-600 hover:bg-blue-700 duration-300" type="submit">
            <FaCloudUploadAlt className="text-2xl" />
            <p className="uppercase ml-2 font-semibold">Publish and View</p>
          </button>
        </div>
      </form>
    </div>
  )
}
