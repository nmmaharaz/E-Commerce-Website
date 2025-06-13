import Link from "next/link";
import Container from "./Container";
import Fashion from "./SubNavbarButton/Fashion";
import Electronics from "./SubNavbarButton/Electronics";
import Bags from "./SubNavbarButton/Bags";
import Footwear from "./SubNavbarButton/Footwear";
import Beauty from "./SubNavbarButton/Beauty";
import Wellness from "./SubNavbarButton/Wellness";
import Groceries from "./SubNavbarButton/Groceries";
import CategoryButton from "./SubNavbarButton/CategoryButton";

export default function SubNavbar() {
  return (
    <nav>
      <Container className="flex pt-3 items-center justify-between">
        <div>
          <CategoryButton></CategoryButton>
        </div>
         <Fashion></Fashion>
         <Electronics></Electronics>
         <Bags></Bags>
        <Footwear></Footwear>
        <Link href="/fashion">
        <Groceries></Groceries>
        </Link>
        <Link href="/fashion">
         <Beauty></Beauty>
        </Link>
        <Link href="/fashion">
         <Wellness></Wellness>
        </Link>
      </Container>
    </nav>
  );
}
