import { IRootState } from "@/redux/store";
import { getItem } from "@/utils/localStorage/localStorage";
import { useRouter } from "next/navigation";
import React from "react";

export default function PersonalDetailbar({ authToken, user_type }: any) {
  console.log("authToken, user_type", authToken, user_type);
  const router = useRouter();

  const deliveryAddressList: any = getItem("userAddressList");
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
  //   console.log(
  //     deliveryAddressList?.addresses,
  //     "allValid",
  //     allValid,
  //     "authToken",
  //     authToken,
  //     "user_type",
  //     user_type
  //   );
  return (
    <>
      {authToken && user_type !== "customer_guest" && !allValid && (
        <div className="personal-detail-valid-top-bar">
          <span>
            Your profile information is incomplete. Please check your profile
            and add the missing details.
          </span>
          <button
            className="btn profile-btn"
            onClick={() => router.push("/dashboard/my-account-profile")}
          >
            Go to Profile
          </button>
        </div>
      )}
    </>
  );
}
