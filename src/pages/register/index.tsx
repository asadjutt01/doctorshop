import React, { useEffect, useState } from "react";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import LabeledInput from "@/components/LabeledInputProps/LabeledInputProps ";
import { handleInputChange, handleSelectChange } from "@/utils/functions";
import {
  validateEmail,
  validatePhoneNumber,
  validateRequired,
} from "@/validation/Validation";
import LabeledSelect from "@/components/LabeledSelect/LabeledSelect";
import { Option } from "@/types/types";
import SwitchSingle from "@/components/SwitchSingle";
import Checkbox from "@/components/CheckBox/CheckBox";
import { CountryName } from "@/constants/constant";
import LabeledPhoneInput from "@/components/LabeledPhoneInput/LabeledPhoneInput";
import { useRouter } from "next/router";
import Service from "@/services";
import { getItem, removeItem, setItem } from "@/utils/localStorage/localStorage";
import Toast from "@/components/Toast"; // Import the Toast component
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
import { login } from "@/redux/store/auth/authConfigSlice";

export default function Register() {
  const user_id: any = getItem('user_id');
  // const credit_id: any = getItem('credit_id');
  const cartsWithList = useSelector((state: IRootState) => state.cart.carts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");
  const router = useRouter();
  const { query }: any = router;
  const [healthOrganizationType, setHealthOrganizationType] = useState<Option | any>(null);
  const [healthOrganizationName, setHealthOrganizationName] = useState<string>("");

  const [healthOrganizationNameError, setHealthOrganizationNameError] = useState<string>("");

  // Personal Details States
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [bussinessName, setBussinessName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");


  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const togglePasswordVisibility = (setShowPassword:any) => {
    setShowPassword((prev:any) => !prev);
  };
  // Personal Details Error States
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [bussinessNameError, setBussinessNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [mobileNumberError, setMobileNumberError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [isCheckedSendCode, setIsCheckedSendCode] = useState<boolean>(true);

  // Delivery Details States
  const [postCode, setPostCode] = useState<string>("");
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [addressLine3, setAddressLine3] = useState<string>("");
  const [town, setTown] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [country, setCountry] = useState<Option | any>(null);

  const [isChecked, setIsChecked] = useState<boolean>(true);

  // Delivery Details Error States
  const [postCodeError, setPostCodeError] = useState<string>("");
  const [addressLine1Error, setAddressLine1Error] = useState<string>("");
  const [addressLine2Error, setAddressLine2Error] = useState<string>("");
  const [addressLine3Error, setAddressLine3Error] = useState<string>("");
  const [townError, setTownError] = useState<string>("");
  const [cityError, setCityError] = useState<string>("");
  const [countyError, setCountyError] = useState<string>("");
  const [countryError, setCountryError] = useState<string>("");

  // Personal Details States Credit
  const [firstNameCredit, setFirstNameCredit] = useState<string>("");
  const [lastNameCredit, setLastNameCredit] = useState<string>("");
  const [emailCredit, setEmailCredit] = useState<string>("");
  const [bussinessNameCredit, setBussinessNameCredit] = useState<string>("");
  // const [companyNameCredit, setCompanyNameCredit] = useState<string>("");
  const [departmentNameCredit, setDepartmentNameCredit] = useState<string>("");
  const [invoiceStateEmailCredit, setInvoiceStateEmailCredit] = useState<string>("");
  const [phoneNumberCredit, setPhoneNumberCredit] = useState<string>("");
  const [mobileNumberCredit, setMobileNumberCredit] = useState<string>("");

  // Personal Details Error States Credit
  const [firstNameCreditError, setFirstNameCreditError] = useState<string>("");
  const [lastNameCreditError, setLastNameCreditError] = useState<string>("");
  const [emailCreditError, setEmailCreditError] = useState<string>("");
  // const [companyNameCreditError, setCompanyNameCreditError] = useState<string>("");
  const [bussinessNameCreditError, setBussinessNameCreditError] = useState<string>("");
  const [phoneNumberCreditError, setPhoneNumberCreditError] = useState<string>("");
  const [mobileNumberCreditError, setMobileNumberCreditError] = useState<string>("");
  const [departmentNameCreditError, setDepartmentNameCreditError] = useState<string>("");
  const [invoiceStateEmailCreditError, setInvoiceStateEmailCreditError] = useState<string>("");

  const healthcareOrganizationTypes = [
    { label: "GP Surgery", value: 1 },
    { label: "NHS Hospitals", value: 2 },
    { label: "Private Clinic", value: 3 },
    { label: "Private Hospitals", value: 4 },
    { label: "Dental Practice", value: 5 },
    { label: "Optometry Clinic", value: 6 },
    { label: "Pharmacy", value: 7 },
    { label: "Podiatry Clinic", value: 8 },
    { label: "Other", value: 9 },
  ];

  const isPersonalDetailsValid = healthOrganizationType && (
    (healthOrganizationType.value > 2 &&
      firstName && lastName && email && password && confirmPassword && mobileNumber && password === confirmPassword &&
      (healthOrganizationType.value !== 9 || healthOrganizationName)) ||
    (healthOrganizationType.value <= 2 &&
      firstNameCredit && lastNameCredit && emailCredit && bussinessNameCredit &&
      invoiceStateEmailCredit && phoneNumberCredit && mobileNumberCredit)
  );

  const isDeliveryDetailsValid =
    postCode && addressLine1 
    // && addressLine2 && addressLine3
     &&
    town && city && county && country && isChecked;

  useEffect(() => {
  if (
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password !== confirmPassword
  ) {
    setConfirmPasswordError("Passwords do not match");
  } else {
    setConfirmPasswordError("");
  }
}, [password, confirmPassword]);

  const [currentStep, setCurrentStep] = useState(0);
  const steps = [{ label: "Personal Detail" }, { label: "Delivery Address" }];
  const [errors, setError] = useState({})

   
  const nextStep = async () => {
    // setLoading(true);

    if (currentStep === 0 && isPersonalDetailsValid) {
      setCurrentStep(1);
      // try {
      //   const res = await handleRegister();
      //   setCurrentStep(1);
      // } catch (err) {
      //   console.error("Registration failed:", err);
      // } finally {
      //   setLoading(false);
      // }
      return ;
    } 
     if (currentStep === 1 && isDeliveryDetailsValid) {
      setLoading(true);
      try {
        await handleRegister();
        await add_delivrey_adress();
      } catch (err) {
        console.error("Address addition failed:", err);
      } finally {
        setLoading(false);
      }
      return ;
    } 
  setLoading(false);
  
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const cartItems: any = cartsWithList?.data[0]?.cart_items;
  // console.log("cartItems>>>>>>>>>>>>>>>>>>>>>>>>>>>in register>", cartItems);
  // console.log("cartItems>>>>>>>>>>>>>>>>>>>>>>>>>>>in register>", cartsWithList);
  const hasPharma = cartItems?.some((product: any) => product?.pharmaceutical_product === "true");
  ;

  const handleRegister = async () => {
    try {
      const formData = new FormData();

      formData.append("first_name", firstName?.trim() || "");
      formData.append("last_name", lastName?.trim() || "");
      
      formData.append("email", email?.trim() || "");
      formData.append("organization_type", healthOrganizationType?.value || "");
      formData.append("password",password?.trim()  || "");
      formData.append("confirm_password", confirmPassword?.trim() || "");
      formData.append("mobile_number", mobileNumber?.trim() || "");

      if (healthOrganizationType?.value <= 2) {
        formData.set("first_name", firstNameCredit?.trim() || "");
        formData.set("last_name", lastNameCredit?.trim() || "");
        formData.set("email", emailCredit?.trim() || "");
        formData.set("phone_number", phoneNumberCredit?.trim() || "");
        formData.set("mobile_number", mobileNumberCredit?.trim() || "");
        formData.append("bussiness_name", bussinessNameCredit?.trim() || ""); // bussiness Name
        // formData.append("department_name", departmentNameCredit || "");
        formData.append("statement_email", invoiceStateEmailCredit?.trim() || "");
      } else if (healthOrganizationType?.value === 9) {
        formData.append("organization_name", healthOrganizationName?.trim() || "");
        
      }else{
        formData.append("bussiness_name", bussinessName?.trim() || "");
      }

      // console.log("FormData to be sent:", Object.fromEntries(formData.entries()));

      // setToastType("info");
      // setToastMessage("Registering... Please wait while we create your account.");

      const response: any = await Service.Auth_Methods.user_regiser(formData);
 
      setItem("credit_id", response?.credit_id);
      setItem("authToken", response?.token);
      setItem("user_type", response?.user_type);
      setItem("user_id", response?.user_id);
      setItem("is_pharmaceutical", response.is_pharmaceutical);
      setItem("is_pharma_approved", response.is_pharma_approved);
      setItem("user", response?.user);
      dispatch(login({ user: response.user, token: response.access_token }));
      
  
if (response?.status == false) {
  setError(response?.errors)
  setToastType("error");

  if (response?.errors) {
const Errors = response?.errors
    for (const error in Errors) {
         
            const element = Errors[error];
            if(element?.length > 0){
               setToastType("error");
              setToastMessage(element[0] ||"Registration Failed! Something went wrong. Please try again.");
              if(error === "email"){
               setEmailError(element[0])
               setEmailCreditError(element[0])
              }
            }
      
        }
    
  }
}else{
  setToastType("success");
setToastMessage(response?.message || "Registration Successful! Your account has been created.");
}
      // setToastMessage(response?.message || "Registration Successful! Your account has been created.");

      // const cart_data = getItem('cart_data')
      // if (cart_data && Object.keys(cart_data).length > 0) {
      //   try {
      //     const cartResponse = await Service.Cart_Method.addToCart(cart_data);
      //     if (cartResponse) {
      //       console.log("Successfully added to cart");
      //       setToastType("success");
      //       setToastMessage("Added to Cart! The item has been successfully added to your cart.");
      //       removeItem("cart_data"); // Clear the stored cart data after adding
      //     } else {
      //       console.error("Failed to add to cart");
      //       setToastType("error");
      //       setToastMessage("Failed to Add! Unable to add the item to your cart. Please try again.");
      //     }
      //   } catch (cartError) {
      //     console.error("Error adding cart:", cartError);
      //     setToastType("error");
      //     setToastMessage("Error! Something went wrong. Please try again.");
      //   }
      // }
      setFirstName("");
      setLastName("");
      setEmail("");
      setHealthOrganizationType(null);
      setPassword("");
      setConfirmPassword("");
      setMobileNumber("");
      setFirstNameCredit("");
      setLastNameCredit("");
      setEmailCredit("");
      setPhoneNumberCredit("");
      setMobileNumberCredit("");
      setBussinessNameCredit("");
      setDepartmentNameCredit("");
      setInvoiceStateEmailCredit("");
      setHealthOrganizationName("");
      setEmailError("")
      setEmailCreditError("")
      return response;
    } catch (err:any) {
      if(err.response?.data?.status == false){
        setError(err.response?.data?.errors)
        const Errors =  err.response?.data?.errors
        for (const error in Errors) {
            const element = Errors[error];
            if(element?.length > 0){
               setToastType("error");
              setToastMessage(element[0] ||"Registration Failed! Something went wrong. Please try again.");
              if(error === "email"){
               setEmailError(element[0])
               setEmailCreditError(element[0])
              }
            }
        }
    }
      throw err;
    }
  };


  const add_delivrey_adress = async () => {
    try {
      const formData = new FormData();

      formData.append("credit_id", user_id);
      formData.append("post_code", postCode || "");
      formData.append("address1", addressLine1 || "");
      formData.append("address2", addressLine2 || "");
      formData.append("address3", addressLine3 || "");
      formData.append("town", town || "");
      formData.append("city", city || "");
      formData.append("county", county || "");
      formData.append("country", country.label || "");

      // console.log("FormData to be sent:", Object.fromEntries(formData.entries()));

      // setToastType("info");
      // setToastMessage("Adding Address... Please wait while we save your delivery address.");

      const response:any = await Service.Customer_Address_Method.addadress_customer(formData);

      // console.log("Address Response:", response);
      // setToastType("success");
      // setToastMessage(response?.message || "Address Added! Your delivery address has been saved.");

      // const is_pharmaceutical =  getItem("is_pharmaceutical")
      if (query?.fromcheckout === "true" && query?.hasPharma === 'true' && query?.login === 'false') {
        const temp_user_id: any = getItem("temp_user_id");
        const formData = new FormData();
        const user_id: any = getItem('user_id');
        formData.append("user_id", user_id);
        formData.append("temp_user_id", temp_user_id);
        const tempResponse: any = await Service.Cart_Method.tempUserIdUpdate(
            formData
        );
        const user_type: any = getItem("user_type")
        if(user_type !== "customer_credit"){
          const data = {
          fromcheckout: true,
          hasPharma:true,
          login:false,
        };
        console.log("GGGGGGGGGGGGGGGGG", query?.fromcheckout === "true", query?.hasPharma === 'true' , query?.login === 'false');
        router.push(
          {
            pathname: `/login`,
            query: data,
          },
          `/login`,
          { shallow: true }
        );}else{
          router.push("/");
        }
    
      } else  {
      router.push("/");
      }
         
      setPostCode("");
      setAddressLine1("");
      setAddressLine2("");
      setAddressLine3("");
      setTown("");
      setCity("");
      setCounty("");
      setCountry({ label: "", value: "" });

      return response;
    } catch (err:any) {

      const errorMessage =
      err.response?.data?.message;
      console.error("Address Error:", err);
      setToastType("error");
      setToastMessage(errorMessage || "Failed to Add Address! Something went wrong. Please try again.");
      throw err;
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
                <h2 className="card-title">Register Account</h2>
              </div>
              <div className="stepper" style={{ width: "50%" }}>
                <div className="stepper__track">
                  <div className="stepper__track-upper">
                    <div
                      className="stepper__track-inner"
                      style={{
                        width: `calc(${(currentStep / (steps.length - 1)) * 100}%)`,
                      }}
                    ></div>
                  </div>
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`stepper__step ${currentStep === index ? "stepper__step--active" : ""}`}
                      style={{
                        left: `calc(${(index / (steps.length - 1)) * 99}%)`,
                      }}
                    >
                      <div
                        className="stepper__circle"
                        style={{
                          backgroundColor: `${currentStep >= index ? "#005eb8" : "#98A2A2"} `,
                        }}
                      >
                        <span className="stepper__label">{step.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {currentStep === 0 && (
                <div className="register-form">
                  <div className="form-input-container">
                    <LabeledSelect
                      id="healthOrganizationType"
                      label="Health Organization Type"
                      options={healthcareOrganizationTypes}
                      onChange={handleSelectChange(setHealthOrganizationType)}
                      value={healthOrganizationType}
                      required={false}
                    />
                  </div>

                  {healthOrganizationType?.value !== null &&
                    healthOrganizationType?.value > 2 && (
                      <>
                        {healthOrganizationType?.label === "Other" && (
                          <div className="form-input-container">
                            <LabeledInput
                              id="healthOrganizationName"
                              type="text"
                              placeholder="Health Organization Name"
                              value={healthOrganizationName}
                              label="Enter Health Organization Name"
                              required={true}
                              onChange={(e) =>
                                handleInputChange(
                                  setHealthOrganizationName,
                                  [validateRequired],
                                  setHealthOrganizationNameError
                                )(e.target.value)
                              }
                              errorTitle={healthOrganizationNameError}
                            />
                          </div>
                        )}
                        <div className="form-input-container">
                          <LabeledInput
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            label="First Name"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setFirstName,
                                [validateRequired],
                                setFirstNameError
                              )(e.target.value)
                            }
                            errorTitle={firstNameError}
                          />
                          <LabeledInput
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            label="Last Name"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setLastName,
                                [validateRequired],
                                setLastNameError
                              )(e.target.value)
                            }
                            errorTitle={lastNameError}
                          />
                         
                        </div>
                       
                        <div className="form-input-container">
                        <LabeledInput
                            id="bussinessNameCredit"
                            type="text"
                            placeholder="Bussiness Name"
                            value={bussinessName}
                            label="Bussiness Name"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setBussinessName,
                                [],
                                setBussinessNameError
                              )(e.target.value)
                            }
                            errorTitle={bussinessNameError}
                          />
                        </div>
                        <div className="form-input-container">
                          <LabeledInput
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            label="Email"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setEmail,
                                [validateRequired, validateEmail],
                                setEmailError
                              )(e.target.value)
                            }
                            errorTitle={emailError}
                          />
                          {/* <LabeledInput
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            label="Password"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setPassword,
                                [validateRequired],
                                setPasswordError
                              )(e.target.value)
                            }
                            errorTitle={passwordError}
                          /> */}
                           <LabeledInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    label="Password"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(setPassword, [validateRequired], setPasswordError)(e.target.value)
                    }
                    password_input={true}
                    togglePasswordVisibility={()=>togglePasswordVisibility(setShowPassword)}
                    errorTitle={passwordError}
                  />
                        </div>
                        <div className="form-input-container">
                          <LabeledPhoneInput
                            id="mobileNumber"
                            label="Mobile Number"
                            value={mobileNumber}
                            onChange={(value) =>
                              handleInputChange(
                                setMobileNumber,
                                [validateRequired, validatePhoneNumber],
                                setMobileNumberError
                              )(value || "")
                            }
                            placeholder="Phone Number"
                            errorTitle={mobileNumberError}
                            disabled={false}
                          />
                          <LabeledInput
                            id="confirmPassword"
                            type={showPasswordConfirm ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            label="Confirm Password"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setConfirmPassword,
                                [validateRequired],
                                setConfirmPasswordError
                              )(e.target.value)
                            }
                            password_input={true}
                    togglePasswordVisibility={()=>togglePasswordVisibility(setShowPasswordConfirm)}
                            errorTitle={confirmPasswordError}
                          />
                        </div>
                        {/* <div className="switch-select-container">
                          <div className="switch-select">
                            <SwitchSingle
                              checked={isCheckedSendCode}
                              onToggle={setIsCheckedSendCode}
                            />
                            <span className="switch-select-text">Send Text (SMS)</span>
                          </div>
                          <div>
                            <button type="submit" className="primary-button-small">
                              Send Code
                            </button>
                          </div>
                        </div> */}
                      </>
                    )}
                  {healthOrganizationType?.value !== null &&
                    healthOrganizationType?.value <= 2 && (
                      <>
                        <div className="form-input-container">
                          <LabeledInput
                            id="firstNameCredit"
                            type="text"
                            placeholder="First Name"
                            value={firstNameCredit}
                            label="First Name"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setFirstNameCredit,
                                [validateRequired],
                                setFirstNameCreditError
                              )(e.target.value)
                            }
                            errorTitle={firstNameCreditError}
                          />
                          <LabeledInput
                            id="lastNameCredit"
                            type="text"
                            placeholder="Last Name"
                            value={lastNameCredit}
                            label="Last Name"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setLastNameCredit,
                                [validateRequired],
                                setLastNameCreditError
                              )(e.target.value)
                            }
                            errorTitle={lastNameCreditError}
                          />

                        </div>
                        <div className="form-input-container">
                          <LabeledInput
                            id="emailCredit"
                            type="email"
                            placeholder="Email"
                            value={emailCredit}
                            label="Email"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setEmailCredit,
                                [validateRequired],
                                setEmailCreditError
                              )(e.target.value)
                            }
                            errorTitle={emailCreditError}
                          />
                          <LabeledInput
                            id="bussinessNameCredit"
                            type="text"
                            placeholder="Bussiness Name"
                            value={bussinessNameCredit}
                            label="Bussiness Name"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setBussinessNameCredit,
                                [validateRequired],
                                setBussinessNameCreditError
                              )(e.target.value)
                            }
                            errorTitle={bussinessNameCreditError}
                          />
                        </div>
                        <div className="form-input-container">
                          {/* <LabeledInput
                            id="departmentNameCredit"
                            type="text"
                            placeholder="Department Name"
                            value={departmentNameCredit}
                            label="Department Name"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setDepartmentNameCredit,
                                [validateRequired],
                                setDepartmentNameCreditError
                              )(e.target.value)
                            }
                            errorTitle={departmentNameCreditError}
                          /> */}
                          <LabeledInput
                            id="invoiceStateEmailCredit"
                            type="text"
                            placeholder="Invoice / Statement Email"
                            value={invoiceStateEmailCredit}
                            label="Invoice / Statement Email"
                            required={true}
                            onChange={(e) =>
                              handleInputChange(
                                setInvoiceStateEmailCredit,
                                [validateRequired],
                                setInvoiceStateEmailCreditError
                              )(e.target.value)
                            }
                            errorTitle={invoiceStateEmailCreditError}
                          />
                        </div>
                        <div className="form-input-container">
                          <LabeledPhoneInput
                            id="mobileNumberCredit"
                            label="Mobile Number"
                            value={mobileNumberCredit}
                            onChange={(value) =>
                              handleInputChange(
                                setMobileNumberCredit,
                                [validateRequired],
                                setMobileNumberCreditError
                              )(value || "")
                            }
                            placeholder="Enter phone number"
                            errorTitle={mobileNumberCreditError}
                            disabled={false}
                          />
                          <LabeledPhoneInput
                            id="phoneNumberCredit"
                            label="Phone Number"
                            value={phoneNumberCredit}
                            onChange={(value) =>
                              handleInputChange(
                                setPhoneNumberCredit,
                                [validateRequired],
                                setPhoneNumberCreditError
                              )(value || "")
                            }
                            placeholder="Phone Number"
                            errorTitle={phoneNumberCreditError}
                            disabled={false}
                          />
                        </div>
                        {/* <div className="" style={{ display: "flex" }}>
                          <div className="switch-select-container">
                            <div className="switch-select">
                              <SwitchSingle
                                checked={isCheckedSendCode}
                                onToggle={setIsCheckedSendCode}
                              />
                              <span className="switch-select-text">Send Text (SMS)</span>
                            </div>
                            <button type="submit" className="primary-button-small">
                              Send Code
                            </button>
                          </div>
                        </div> */}
                      </>
                    )}
                </div>
              )}
              {currentStep === 1 && (
                <div className="register-form">
                  {/* <div className="switch-select-container">
                    <div className="switch-select">
                      <SwitchSingle
                        checked={isCheckedSendCode}
                        onToggle={setIsCheckedSendCode}
                      />
                      <span className="switch-select-text">Manual Entry</span>
                    </div>
                  </div> */}
                  <div className="form-input-container">
                    <LabeledInput
                      id="postCode"
                      type="text"
                      placeholder="Post Code"
                      value={postCode}
                      label="Post Code"
                      onChange={(e) =>
                        handleInputChange(
                          setPostCode,
                          [validateRequired],
                          setPostCodeError
                        )(e.target.value)
                      }
                      errorTitle={postCodeError}
                    />
                    <LabeledInput
                      id="addressLine1"
                      type="text"
                      placeholder="Address Line 1"
                      value={addressLine1}
                      label="Address Line 1"
                      onChange={(e) =>
                        handleInputChange(
                          setAddressLine1,
                          [validateRequired],
                          setAddressLine1Error
                        )(e.target.value)
                      }
                      errorTitle={addressLine1Error}
                    />
                  </div>
                  <div className="form-input-container">
                    <LabeledInput
                      id="addressLine2"
                      type="text"
                      placeholder="Address Line 2"
                      value={addressLine2}
                      label="Address Line 2"
                      onChange={(e) =>
                        handleInputChange(
                          setAddressLine2,
                          [],
                          setAddressLine2Error
                        )(e.target.value)
                      }
                      required={false}
                      errorTitle={addressLine2Error}
                    />
                    <LabeledInput
                      id="addressLine3"
                      type="text"
                      placeholder="Address Line 3"
                      value={addressLine3}
                      label="Address Line 3"
                      onChange={(e) =>
                        handleInputChange(
                          setAddressLine3,
                          [],
                          setAddressLine3Error
                        )(e.target.value)
                      }
                      required={false}
                      errorTitle={addressLine3Error}
                    />
                  </div>
                  <div className="form-input-container">
                    <LabeledInput
                      id="town"
                      type="text"
                      placeholder="Town"
                      value={town}
                      label="Town"
                      onChange={(e) =>
                        handleInputChange(
                          setTown,
                          [validateRequired],
                          setTownError
                        )(e.target.value)
                      }
                      errorTitle={townError}
                    />
                    <LabeledInput
                      id="city"
                      type="text"
                      placeholder="City"
                      value={city}
                      label="City"
                      onChange={(e) =>
                        handleInputChange(
                          setCity,
                          [validateRequired],
                          setCityError
                        )(e.target.value)
                      }
                      errorTitle={cityError}
                    />
                  </div>
                  <div className="form-input-container">
                    <LabeledInput
                      id="county"
                      type="text"
                      placeholder="County"
                      value={county}
                      label="County"
                      onChange={(e) =>
                        handleInputChange(
                          setCounty,
                          [validateRequired],
                          setCountyError
                        )(e.target.value)
                      }
                      errorTitle={countyError}
                    />
                    <LabeledSelect
                      id="country"
                      label="Country"
                      options={CountryName}
                      onChange={handleSelectChange(setCountry)}
                      value={country}
                      required={false}
                    />
                  </div>
                  <div className="">
                    <Checkbox
                      text={"Terms & Condition"}
                      classname={""}
                      isChecked={isChecked}
                      setIsChecked={setIsChecked}
                      labelLink={"/terms-&-conditions"}
                    />
                  </div>
                </div>
              )}

              <div className="my-2 w-full button-contaioner gap-4">
                {currentStep === 1 &&   <button
                  type="submit"
                  className="secondary-button"
                  onClick={()=>{
                    setCurrentStep(0)
                  }}
                  // disabled={
                  //   (currentStep === 0 && !isPersonalDetailsValid) ||
                  //   (currentStep === 1 && !isDeliveryDetailsValid) ||
                  //   loading
                  // }
                  style={{
                    // backgroundColor:
                    //   (currentStep === 0 && !isPersonalDetailsValid) ||
                    //     (currentStep === 1 && !isDeliveryDetailsValid) ||
                    //     loading
                    //     ? "#ccc"
                    //     : undefined
                  }}
                >
                  {"Back"}
                </button>}
                <button
                  type="submit"
                  className="primary-button"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 0 && !isPersonalDetailsValid) ||
                    (currentStep === 1 && !isDeliveryDetailsValid) ||
                    loading
                  }
                  style={{
                    backgroundColor:
                      (currentStep === 0 && !isPersonalDetailsValid) ||
                        (currentStep === 1 && !isDeliveryDetailsValid) ||
                        loading
                        ? "#ccc"
                        : undefined
                  }}
                >
                  {loading ? "Processing..." : "Next"}
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