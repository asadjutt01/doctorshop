"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
interface SidebarProps {
  currentStep: any;
  steps: any | [];
  handleStepClick: (value: any) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ currentStep,
  steps,
  handleStepClick, }) => {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";

  const [activeTab, setActiveTab] = useState("Company Detail");
  // const menuItems = [
  //   { name: "Company Detail", route: "/CompanyDetails" },
  //   { name: "Banking Info", route: "/banking-info" },
  //   { name: "Regulatory Compliance", route: "/RegulatoryCompliance" },
  //   { name: "Email Notification", route: "/EmailNotification" },
  //   { name: "Website Detail", route: "/WebsiteDetail" },
  //   { name: "Responsive Person", route: "/ResponsivePerson" },
  // ];

  return (
    <div
      className={`sidebar ${isLoginPage ? "hidden" : "flex"} `}
    // style={{
    //   boxShadow: "0px 4px 6px #00000029",
    // }}
    >
      <ul className="sidebar-list">
        {steps && steps.map((item: any, index: any) => (
          <li
            key={index}
            className={`sidebar-item  ${item.stepNumber !== currentStep ? "side-unselected " : "side-selected"}`}
          >
            {/* <button
            onClick={() => handleStepClick(item.stepNumber)}
            className="link-button"
            dangerouslySetInnerHTML={{ __html: item.title }} // This renders the HTML
          /> */}
            <button className={`side-button`} onClick={()=>{
              handleStepClick(item.stepNumber)
            }}>
              <span className={`${item.stepNumber !== currentStep ? "side-unselected " : "side-selected"}`}>
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default Sidebar;