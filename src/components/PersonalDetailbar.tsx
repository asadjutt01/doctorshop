import { IRootState } from "@/redux/store";
import { getItem } from "@/utils/localStorage/localStorage";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function PersonalDetailbar({authToken, user_type}:any) {


//   const [authToken, setAuthToken] = useState<string | null>(null);
//   const [user_type, setuser_type] = useState<string | null>(null);
//       useEffect(() => {
//         const token: any = getItem("authToken");
//         const user_type: any = getItem("user_type");
//         setAuthToken(token);
//         setuser_type(user_type);
//       }, []);
  const deliveryAddressList: any = [];
  const requiredFields = [
    "post_code",
    "address1",
    // "address2",
    // "address3",
    "town",
    "city",
    // "county",
    "country",
  ];

  const isValidAddress = (address: any): boolean => {
    return requiredFields.every(
      (field) =>
        field in address && address[field] !== null && address[field] !== ""
    );
  };

  // ✅ deliveryAddressList is the array directly
  const allValid = Array.isArray(deliveryAddressList?.addresses)
    ? deliveryAddressList?.addresses.every(isValidAddress)
    : false;
  return (
    <>
      {authToken && user_type !== "customer_guest" && !allValid   && (
        <div className="personal-detail-valid-top-bar">
          <span>Your profile information is incomplete. Please check your profile and add the missing details.</span>
          <button className="btn profile-btn">Go to Profile</button>
        </div>
      )}
    </>
  );
}
