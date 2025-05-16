import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import LabeledInput from "@/components/LabeledInputProps/LabeledInputProps ";
import { handleInputChange, handleSelectChange } from "@/utils/functions";
import { validateRequired } from "@/validation/Validation";
import LabeledSelect from "@/components/LabeledSelect/LabeledSelect";
import { Option } from "@/types/types";
import Checkbox from "@/components/CheckBox/CheckBox";
import LabeledDateTime from "@/components/LabeledDateTime/LabeledDateTime";
import { TypeofLicense } from "@/constants/constant";
import Link from "next/link";
import Service from "@/services";
import { getItem, setItem } from "@/utils/localStorage/localStorage";
import { useRouter } from 'next/router';
import Toast from "@/components/Toast"; // Import the Toast component
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/store";

export default function Index() {
  const router = useRouter();
  const user_id: any = getItem('user_id');
  const authToken: any = getItem("authToken");
  const cartsWithList = useSelector((state: IRootState) => state.cart.carts);
  const { query }: any = router;
  // Pharma States
  const [companyName, setCompanyName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [licenseHolderfirstName, setLicenseHolderfirstName] = useState<string>("");
  const [licenseHolderlastName, setLicenseHolderlastName] = useState<string>("");
  const [licenseType, setLincenseType] = useState<Option | any>(null);
  const [licenseNumber, setLicenseNumber] = useState<string>("");
  const [licenseName, setLicenseName] = useState<string>("");
  const [licenseRegisterationDate, setLicenseRegisterationDate] = useState<string>("");
  const [licenseHolderEmail, setLicenseHolderEmail] = useState<string>("");
  const [signature, setSignature] = useState<string>("");

  // Pharma Error States
  const [companyNameError, setCompanyNameError] = useState<string>("");
  const [accountNumberError, setAccountNumberError] = useState<string>("");
  const [licenseHolderfirstNameError, setLicenseHolderfirstNameError] = useState<string>("");
  const [licenseHolderlastNameError, setLicenseHolderlastNameError] = useState<string>("");
  const [licenseTypeError, setLincenseTypeError] = useState<Option | any>(null);
  const [licenseNumberError, setLicenseNumberError] = useState<string>("");
  const [licenseNameError, setLicenseNameError] = useState<string>("");
  const [licenseRegisterationDateError, setLicenseRegisterationDateError] = useState<string>("");
  const [licenseHolderEmailError, setLicenseHolderEmailError] = useState<string>("");
  const [signatureError, setSignatureError] = useState<string>("");
 
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [currentStep, setCurrentStep] = useState(0);
  const steps = [{ label: "Personal Detail" }, { label: "Delivery Address" }];

  // Toast States
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");

  const nextStep = () => {
    addpharma();
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const cartItems: any = cartsWithList?.data[0]?.cart_items;
  const hasPharma = cartItems?.some((product: any) => product?.pharmaceutical_product === "true");
  ;

  const isFormValid = 
  companyName && 
  accountNumber&& 
  licenseHolderfirstName&& 
  licenseHolderlastName&& 
  licenseType&& 
  (licenseType.value !== 8 || licenseName)
  &&
  licenseNumber&& 
  // licenseName&& 
  licenseRegisterationDate&& 
  licenseHolderEmail&& 
  signature  &&
  isChecked &&
!companyNameError 
&&
!accountNumberError 
&&
!licenseHolderfirstNameError &&
!licenseHolderlastNameError
 &&
!licenseTypeError &&
!licenseNumberError 
// &&
// !licenseNameError &&
!licenseRegisterationDateError &&
!licenseHolderEmailError &&
!signatureError 
;


  const addpharma = async () => {
    try {
      const formData = new FormData();
      formData.append("first_name", licenseHolderfirstName || "");
      formData.append("last_name", licenseHolderlastName || "");
      formData.append("holder_email", licenseHolderEmail || "");
      formData.append("license_number", licenseNumber || "");

      if (licenseType?.label || "Other") {
        formData.append("license_name", licenseName || "");
      }

      formData.append("bussiness_name", companyName || "");
      formData.append("account_number", accountNumber || "");
      formData.append("license_type", licenseType.value || "");
      formData.append("registration_date", licenseRegisterationDate || "");
      formData.append("Signature", signature || "");
      formData.append("user_id", user_id || "");
      // formData.append("is_pharmaceutical", "1");

      // console.log("FormData to be sent:", Object.fromEntries(formData.entries()));

      setToastType("info");
      setToastMessage("Registering Pharma Account... Please wait while we process your request.");

      const response: any = await Service.Auth_Methods.user_regiser_pharma(formData);
      if (query?.fromcheckout === "true" && query?.hasPharma === 'true' && query?.login === 'false'  && response?.is_pharma_approved === 1) {
          setToastType("success");
          setToastMessage("Login Successful! Welcome back!");
          const data = {
            fromcheckout: true,
            hasPharma:true,
            login:false,
          };
          console.log("GGGGGGGGGGGGGGGGG 1");
          router.push(
            {
              pathname: `/add-to-cart/checkout`,
              query: data,
            },
            `/add-to-cart/checkout`,
            { shallow: true }
          );
          // router.push("/register-pharma");
        }else if(query?.fromcheckout === "true" && query?.hasPharma === 'true' && query?.login === 'true' && query?.isPharma === 'false' && response.is_pharma_approved === 1){
          router.push("/add-to-cart/checkout");
          console.log("GGGGGGGGGGGGGGGGG 2");
        } else{
          setToastType("success");
          setToastMessage("Login Successful! Welcome back!");
          router.push("/");
          console.log("GGGGGGGGGGGGGGGGG 3");
        }
      setItem("user_id", response.id);
       setItem("is_pharmaceutical", response.is_pharmaceutical);
       setItem("is_pharma_approved", response.is_pharma_approved);
      // setItem("user_type", response?.user_type);
      setToastType("success");
      setToastMessage("Registration Successful! Your pharma account has been created.");
       // Delay redirect to show success toast

      // Reset form fields after successful registration
      setLicenseHolderfirstName("");
      setLicenseHolderlastName("");
      setLicenseHolderEmail("");
      setLicenseNumber("");
      setLicenseName("");
      setCompanyName("");
      setAccountNumber("");
      setLincenseType({ label: "", value: "" });
      setLicenseRegisterationDate("");
      setSignature("");

      return response;
    } catch (err) {
      console.error("Registration Error:", err);
      setToastType("error");
      setToastMessage("Registration Failed! Something went wrong. Please try again.");
    
    }
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <div>
      <HeaderWithCat />
      <div className="register-page">
        <div className="lg-container">
          <div className="register-container">
            <div className="register-page-card">
              <div className="card-title-container">
                <h2 className="card-title">Pharmaceutical Account</h2>
              </div>

              <div className="register-form">
                <div className="form-input-container">
                  <LabeledInput
                    id="companyName"
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    label="Company Name"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(
                        setCompanyName,
                        [validateRequired],
                        setCompanyNameError
                      )(e.target.value)
                    }
                    errorTitle={companyNameError}
                  />
                  <LabeledInput
                    id="accountNumber"
                    type="text"
                    placeholder="Account Number"
                    value={accountNumber}
                    label="Account Number"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(
                        setAccountNumber,
                        [validateRequired],
                        setAccountNumberError
                      )(e.target.value)
                    }
                    errorTitle={accountNumberError}
                  />
                </div>
                <div className="form-input-container">
                  <LabeledInput
                    id="licenseHolderfirstName"
                    type="text"
                    placeholder="License Holder First Name"
                    value={licenseHolderfirstName}
                    label="License Holder First Name"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(
                        setLicenseHolderfirstName,
                        [validateRequired],
                        setLicenseHolderfirstNameError
                      )(e.target.value)
                    }
                    errorTitle={licenseHolderfirstNameError}
                  />
                  <LabeledInput
                    id="licenseHolderlastName"
                    type="text"
                    placeholder="License Holder Last Name"
                    value={licenseHolderlastName}
                    label="License Holder Last Name"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(
                        setLicenseHolderlastName,
                        [validateRequired],
                        setLicenseHolderlastNameError
                      )(e.target.value)
                    }
                    errorTitle={licenseHolderlastNameError}
                  />
                </div>

                <div className="form-input-container">
                  <LabeledSelect
                    id="licenseType"
                    label="License Type"
                    options={TypeofLicense}
                    onChange={handleSelectChange(setLincenseType)}
                    value={licenseType}
                    required={true}
                  />
                  {licenseType?.value < TypeofLicense?.length - 1 && (
                    <LabeledInput
                      id="licenseNumber"
                      type="text"
                      placeholder="License Number"
                      value={licenseNumber}
                      label="License Number"
                      required={true}
                      onChange={(e) =>
                        handleInputChange(
                          setLicenseNumber,
                          [validateRequired],
                          setLicenseNumberError
                        )(e.target.value)
                      }
                      errorTitle={licenseNumberError}
                    />
                  )}
                </div>
                {licenseType?.value > TypeofLicense?.length - 1 && (
                  <div className="form-input-container">
                    <LabeledInput
                      id="licenseName"
                      type="text"
                      placeholder="License Name"
                      value={licenseName}
                      label="License Name"
                      required={true}
                      onChange={(e) =>
                        handleInputChange(
                          setLicenseName,
                          [validateRequired],
                          setLicenseNameError
                        )(e.target.value)
                      }
                      errorTitle={licenseNameError}
                    />

                    <LabeledInput
                      id="licenseNumber"
                      type="text"
                      placeholder="License Number"
                      value={licenseNumber}
                      label="License Number"
                      required={true}
                      onChange={(e) =>
                        handleInputChange(
                          setLicenseNumber,
                          [validateRequired],
                          setLicenseNumberError
                        )(e.target.value)
                      }
                      errorTitle={licenseNumberError}
                    />
                  </div>
                )}
                <div className="form-input-container">
                  <LabeledDateTime
                    id="licenseRegisterationDate"
                    label="License Registration Date"
                    type="date"
                    value={licenseRegisterationDate}
                    required={true}

                    onChange={(date: any) => setLicenseRegisterationDate(date)}
                  />
                  <LabeledInput
                    id="licenseHolderEmail"
                    type="text"
                    placeholder="License Holder Email"
                    value={licenseHolderEmail}
                    label="License Holder Email"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(
                        setLicenseHolderEmail,
                        [validateRequired],
                        setLicenseHolderEmailError
                      )(e.target.value)
                    }
                    errorTitle={licenseHolderEmailError}
                  />
                </div>

                <div
                  className="form-input-container"
                  style={{
                    margin: "0px 4px",
                  }}
                >
                  <div>
                    <p className="points-listings-description">
                      By providing your signature, you acknowledge and agree to
                      the following:
                    </p>

                    <ul className="points-listings">
                      <li>
                        You have read, understood, and accepted our
                        <Link
                          href={`/terms-&-conditions`}
                          className="checkbox-wrapper-text"
                        >
                          Terms & Condition
                        </Link>
                        .
                      </li>
                      <li>
                        You comply with all applicable pharmaceutical
                        regulations, including any local, state, and federal
                        laws.
                      </li>
                      <li>
                        The information provided during the registration process
                        is accurate and truthful.
                      </li>
                      <li>
                        You are authorized to act on behalf of the
                        pharmaceutical entity you represent, if applicable.
                      </li>
                    </ul>
                    <div className="checkbox-container">
                      <Checkbox
                        labelLink={"/terms&condition"}
                        classname={""}
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                      />
                      <span className="checkbox-wrapper-text-black">
                        I acknowledge and agree to the above terms.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-input-container">
                  <LabeledInput
                    id="signature"
                    type="text"
                    placeholder="Signature"
                    value={signature}
                    label="Signature"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(
                        setSignature,
                        [validateRequired],
                        setSignatureError
                      )(e.target.value)
                    }
                    errorTitle={signatureError}
                  />
                </div>
              </div>

              <div className="my-2 w-full button-contaioner">
                <button
                  type="submit"
                  disabled={!authToken || !isFormValid}
                  className="primary-button"
                  style={{
                    backgroundColor: !authToken || !isFormValid  ? "#ccc" : "#0056b3",
                  }}
                  onClick={nextStep}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          {toastMessage && (
            <Toast
              message={toastMessage}
              type={toastType}
              duration={3000}
              onClose={closeToast}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}