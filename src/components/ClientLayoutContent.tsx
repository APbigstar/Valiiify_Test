"use client";

import React, { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
export function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");

    document.documentElement.classList.remove("dark");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      document.documentElement.setAttribute("data-theme", "light");
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const contentStyles = {
    base: `
      ml-[80px] 
      overflow-x-hidden 
      overflow-y-auto 
      w-[calc(100vw-80px)]
    `,
    height: "h-[100vh] mt-0",
  };

  return (
    <>
      <Sidebar />
      <div className={`${contentStyles.base} ${contentStyles.height}`}>
        {children}
      </div>
    </>
  );
}
