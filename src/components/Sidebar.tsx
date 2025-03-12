"use client";

import React from "react";
import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 z-[1] px-[8px] py-[10px] bg-[#242737] h-full w-[80px] flex flex-col gap-[20px] items-center">
      <div className="border border-[#374151] rounded-lg px-[18px] py-[10px]">
        <Image
          id="logo"
          src="/images/Accounticon.png"
          width={24}
          height={24}
          alt="logo"
        />
      </div>
      <div>
        <label
          className="input border-none outline-none bg-transparent p-0 caret-transparent text-white"
          style={{
            "--size": "none",
            "--input-color": "none",
          }}
        >
          <svg
            className="h-[2.5em] text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="white"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="w-full flex flex-col items-center gap-[8px]">
        <div className="bg-[#374151] w-full rounded-lg text-center py-[6px]">
          <Image
            id="vector"
            src="/images/WindowRounded.png"
            width={20}
            height={20}
            alt="vector"
            className="m-auto"
          />
        </div>
        <div className="bg-transparent w-full rounded-lg text-center py-[6px]">
          <Image
            id="vector"
            src="/images/PersonRounded.png"
            width={20}
            height={20}
            alt="vector"
            className="m-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-auto gap-[8px]">
        <div className="bg-transparent w-full rounded-lg text-center py-[6px]">
          <Image
            id="vector"
            src="/images/PeopleAltRounded.png"
            width={20}
            height={20}
            alt="vector"
            className="m-auto"
          />
        </div>
        <div className="bg-transparent w-full rounded-lg text-center py-[6px]">
          <Image
            id="vector"
            src="/images/SettingsRounded.png"
            width={20}
            height={20}
            alt="vector"
            className="m-auto"
          />
        </div>
        <div className="bg-transparent w-full rounded-lg text-center py-[6px]">
          <Image
            id="vector"
            src="/images/Avatar.png"
            width={20}
            height={20}
            alt="vector"
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
