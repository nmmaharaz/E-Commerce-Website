import Category from "./InputFeild/Category"
import IsFeatured from "./InputFeild/IsFeatured"
import Location from "./InputFeild/Location"
import ProductSize from "./InputFeild/ProductSize"
import ProductWeight from "./InputFeild/ProductWeight"
import SubCategory from "./InputFeild/SubCategory"

export default function MainSection() {
  return (
    <div className="bg-white shadow-xl p-6 rounded-xl">
      <p className="text-xl text-gray-900 mb-6">Basic Information</p>
      <form className="space-y-5">
        <div>
          <label className="text-[13px] font-bold text-gray-700 block pb-2">PRODUCT NAME</label>
          <input className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
        </div>
        <div>
          <label className="text-[13px] font-bold text-gray-700 block pb-2 uppercase">Deshcription</label>
          <textarea rows={4} className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Category></Category>
          <SubCategory></SubCategory>
          <div>
            <label className="text-[13px] font-bold text-gray-700 block pb-2">PRICE</label>
            <input className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
          </div>
          <div>
            <label className="text-[13px] font-bold text-gray-700 block pb-2">OLD PRICE</label>
            <input className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
          </div>
          <IsFeatured></IsFeatured>
          <div>
            <label className="text-[13px] font-bold text-gray-700 block pb-2">PRODUCT STOCK</label>
            <input className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <label className="text-[13px] font-bold text-gray-700 block pb-2">BRAND</label>
            <input className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
          </div>
          <div>
            <label className="text-[13px] font-bold text-gray-700 block pb-2">DISCOUNT</label>
            <input className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
          </div>
          <div>
            <label className="text-[13px] font-bold text-gray-700 block pb-2">PRODUCT RAMS</label>
            <input className="bg-gray-50 text-gray-800 p-4 rounded-md border border-gray-300 w-full" type="text" />
          </div>
          <ProductWeight></ProductWeight>
          <ProductSize></ProductSize>
          <ProductSize></ProductSize>

        </div>
        <Location></Location>
      </form>
    </div>
  )
}
