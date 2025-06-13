import FeaturedCategories from "./components/FeaturedCategories/FeaturedCategories";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
        <Hero></Hero>
        <FeaturedCategories></FeaturedCategories>
    </div>
  );
}
