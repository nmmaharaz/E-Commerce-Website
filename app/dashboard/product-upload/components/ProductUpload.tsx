"use client";
import { Images } from "lucide-react";
import axios from "axios";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ProductUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
    const [productImage, setProductImage] = useState<string[]>([]);
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "E-Commerce");
    data.append("cloud_name", "dpzzr3vcq");
    const { data: uploadUrl } = await axios.post(
      "https://api.cloudinary.com/v1_1/dpzzr3vcq/image/upload",
      data
    );
    console.log("uploadUrl", uploadUrl);
    setProductImage(prev => [...prev, uploadUrl.url]);
  };

  const handleClick = () => {
    fileInputRef.current?.click(); // Trigger input click when icon is clicked
  };

  console.log("productImage", productImage);

  return (
    <div>
      <p className="text-xl text-gray-900 mb-6">Media And Published</p>
     <div className="flex flex-wrap gap-4 items-center justify-start">
         {productImage.length > 0 && <>
      {
        productImage.map((image, index) => (
            <div key={index} className="border border-dashed border-gray-400 w-44 h-44 rounded-xl">
          <Image
            src={image}
            alt="Product"
            width={200}
            height={200}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        ))
      }
      </>}
      <div
        className="flex flex-col w-44 h-44 border border-dashed border-gray-400 items-center justify-center bg-gray-100 p-6 rounded-xl cursor-pointer"
        onClick={handleClick}
      >
        <Images size={64} className="text-gray-400" />
        <p className="text-sm font-semibold text-gray-400 pt-2">image upload</p>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
     </div>
    </div>
  );
}
