import MainSection from "./components/MainSection";
import ProductUpload from "./components/ProductUpload";
import TopHeading from "./components/TopHeading";

export default function page() {
  return (
    <div>
        <TopHeading></TopHeading>
        <MainSection></MainSection>
        <ProductUpload></ProductUpload>
    </div>
  );
}
