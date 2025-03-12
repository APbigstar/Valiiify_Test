"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
export function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <div
        className={`${contentStyles.base} ${contentStyles.height}`}
      >
        {children}
      </div>
    </>
  );
}
