"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { generateSlug } from "@/utils/functions";
interface SidebarProps {
  currentRoute:any;
  routes: any | [];
  handleRoutesClick: (value: any) => void;
}
const SideBarNew: React.FC<SidebarProps> = ({ 
  currentRoute,
  routes,
  handleRoutesClick,
 }) => {


  const router = useRouter();
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
      className={`sidebar flex`}
    // style={{
    //   boxShadow: "0px 4px 6px #00000029",
    // }}
    >
      <ul className="sidebar-list">
        {routes && routes.map((item: any, index: any) => {      
console.log('generateSlug(item.label)',generateSlug(item.label) ,currentRoute);
          return(
          <li
            key={index}
            className={`sidebar-item  ${generateSlug(item.label) !== currentRoute ? "side-unselected " : "side-selected"}`}
          >
            {/* <button
            onClick={() => handleStepClick(item.stepNumber)}
            className="link-button"
            dangerouslySetInnerHTML={{ __html: item.title }} // This renders the HTML
          /> */}
            <button className={`side-button`} onClick={()=>{
              handleRoutesClick(item.value)
              router.push(`/dashboard/${generateSlug(item?.label)}`)
            }}>
              <span className={`${generateSlug(item.label) !== currentRoute ? "side-unselected " : "side-selected"}`}>
                {item.label}
              </span>
            </button>
          </li>
        )})}
      </ul>
    </div>
  );

};

export default SideBarNew;