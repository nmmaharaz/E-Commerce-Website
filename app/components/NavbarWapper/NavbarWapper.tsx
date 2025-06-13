"use client";
import { usePathname } from "next/navigation";
import TopNavbar from "../TopNavbar";
import SubNavbar from "../SubNavbar";
import Welcome from "../Welcome";

export default function NavbarWapper() {
  const path = usePathname()
  const isDashboard = path.startsWith("/dashboard");
  if (isDashboard) {
    return
  } else {
    return <>
    <Welcome></Welcome>
    <TopNavbar></TopNavbar>
    <SubNavbar></SubNavbar>
    </>;
  }
}
