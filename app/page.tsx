"use client";
import axios from "axios";
import FeaturedCategories from "./components/FeaturedCategories/FeaturedCategories";
import Hero from "./components/Hero/Hero";

export default function Home() {
  const handlePost = async () => {
    const data =  await axios.post("/api/product", {name:"Product"});
    console.log("Data from POST request:", data);
  }
  return (
    <div className="min-h-screen">
        <Hero></Hero>
        <FeaturedCategories></FeaturedCategories>
        <button onClick={handlePost} className="bg-blue-500 text-white p-4 rounded-lg m-4">
          Click Me
        </button>
    </div>
  );
}
