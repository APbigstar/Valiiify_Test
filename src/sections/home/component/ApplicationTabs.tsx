"use client";

import { useState } from "react";

const ApplicationTabs = () => {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="bg-white flex items-center gap-3">
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          activeTab === "new"
            ? "bg-emerald-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => setActiveTab("new")}
      >
        New Apps
      </button>
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          activeTab === "unassigned"
            ? "bg-emerald-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => setActiveTab("unassigned")}
      >
        Unassigned
      </button>
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          activeTab === "my"
            ? "bg-emerald-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => setActiveTab("my")}
      >
        My Apps
      </button>
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          activeTab === "warning"
            ? "bg-emerald-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => setActiveTab("warning")}
      >
        Warning
      </button>
    </div>
  );
};

export default ApplicationTabs;
