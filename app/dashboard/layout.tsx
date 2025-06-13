"use client"
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div>
         <Header toggleSidebar={toggleSidebar} />
         <div className="flex bg-gray-100">
      <div className="h-screen hidden md:block overflow-y-auto scroll-smooth sticky top-0">
        <Sidebar isOpen={sidebarOpen} />
      </div>
      <div className="flex-1">
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
       </div>
  );
}
