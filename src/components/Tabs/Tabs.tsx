import React, { useState } from "react";

interface Tab {
  label: string;
  stepNumber: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (value: any) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs,
  activeTab,
  setActiveTab,
}) => {

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.stepNumber)}
            className={`${activeTab === tab.stepNumber
              ? "tab-selected"
              : "tab-unselected"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {/* <div className="">
        {tabs[activeIndex] && tabs[activeIndex].content}
      </div> */}
    </div>
  );
};

export default Tabs;