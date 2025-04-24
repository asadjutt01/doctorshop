import React, { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import LabeledInput from "@/components/LabeledInputProps/LabeledInputProps ";
import { handleInputChange, handleSelectChange } from "@/utils/functions";
import { validateEmail, validatePhoneNumber, validateRequired } from "@/validation/Validation";
import LabeledSelect from "@/components/LabeledSelect/LabeledSelect";
import { Option } from "@/types/types";
import Switch from "@/components/Switch";
import SwitchSingle from "@/components/SwitchSingle";
import Link from "next/link";
import Checkbox from "@/components/CheckBox/CheckBox";
import Stepper from "@/components/Stepper/Stepper";
import { CountryName } from "@/constants/constant";
import LabeledPhoneInput from "@/components/LabeledPhoneInput/LabeledPhoneInput";
import { useRouter } from "next/router";
import Service from "@/services";
import { getItem, setItem } from "@/utils/localStorage/localStorage";
import Swal from "sweetalert2";
import { login } from "@/redux/store/auth/authConfigSlice";
import { useDispatch } from "react-redux";
import Toast from "@/components/Toast";

export default function Index() {
    const user_id: any = getItem("user_id");
    const dispatch = useDispatch()
    const router = useRouter();
    const { query }: any = router;
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [toastType, setToastType] = useState<"success" | "error" | "info">("success");
    // Personal Details States
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [mobileNumber, setMobileNumber] = useState<string>("");
    // Personal Details Error States
    const [firstNameError, setFirstNameError] = useState<string>("")
    const [lastNameError, setLastNameError] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("");
    const [mobileNumberError, setMobileNumberError] = useState<string>("");

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



    // Delivery Details Error States
    const [postCodeError, setPostCodeError] = useState<string>("");
    const [addressLine1Error, setAddressLine1Error] = useState<string>("");
    const [addressLine2Error, setAddressLine2Error] = useState<string>("");
    const [addressLine3Error, setAddressLine3Error] = useState<string>("");
    const [townError, setTownError] = useState<string>("");
    const [cityError, setCityError] = useState<string>("");
    const [countyError, setCountyError] = useState<string>("");
    const [countryError, setCountryError] = useState<string>("");




    useEffect(() => {

    }, [dispatch])





    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        { label: "Personal Detail" },
        { label: "Delivery Address" },
    ];

    const isPersonalDetailsValid =  firstName &&
    lastName &&
    email && 
    mobileNumber ;
    
      const isDeliveryDetailsValid =
        postCode &&
addressLine1 &&
// addressLine2 &&
// addressLine3 &&
town &&
city &&
county &&
country;
    
    const nextStep = async () => {

        if (currentStep === 0) {
            try {
                await addpersnol_detail();
                setCurrentStep(1);
            } catch (err) {
                console.error("Registration failed:", err);
            } finally {
                ;
            }
        } else if (currentStep === 1) {
            try {
                await add_delivrey_adress();
                // console.log("Address added successfully!");
                // if (query?.fromcheckout === 'true') {
                //     router.push("/add-to-cart/checkout");
                // }
                // Add your success navigation here if needed
            } catch (err) {
                console.error("Address addition failed:", err);
            } finally {

            }
        } else {

        }
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };



    const addpersnol_detail = async () => {
        try {
            const formData = new FormData();
            formData.append("first_name", firstName || "");
            formData.append("last_name", lastName || "");
            formData.append("email", email || "");
            formData.append("mobile_number", mobileNumber || "");

            // console.log("FormData to be sent:", Object.fromEntries(formData.entries()));

            setToastType("info"); // Toast: Info
            setToastMessage("Registering User... Please wait while we process your request.");

            const response: any = await Service.Auth_Methods.guest_user_pharma(formData);
            // console.log("Response:", response?.id);
            setItem("user_id", response?.user_id);
            setItem("user_type", response?.user_type);
            setItem("authToken", response.token);
            dispatch(login({ user: response, token: response.token }));
            if (query?.fromcheckout === "true") {
                const temp_user_id: any = getItem("temp_user_id");
                const formData = new FormData();
                formData.append("user_id", response?.user_id);
                formData.append("temp_user_id", temp_user_id);
                const tempResponse: any = await Service.Cart_Method.tempUserIdUpdate(
                    formData
                );
                // Success alert
                setToastType("success"); // Toast: Success
                setToastMessage("Registration Successful! Your personal details have been saved successfully.");
            } else {
                setToastType("success"); // Toast: Success
                setToastMessage("Registration Successful! Your personal details have been saved successfully.");
            }


            // Reset form fields after successful registration
            setFirstName("");
            setLastName("");
            setEmail("");
            setMobileNumber("");

            return response;
        } catch (err) {
            console.error("Registration Error:", err);

            setToastType("error"); // Toast: Error
            setToastMessage("Registration Failed! Something went wrong. Please try again.");

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
            // formData.append("user_id", user_id);
            // console.log("FormData to be sent:", Object.fromEntries(formData.entries()));

            setToastType("info"); // Toast: Info
            setToastMessage("Adding Delivery Address... Please wait while we process your request.");

            const response = await Service.Customer_Address_Method.addadress_customer(formData);
            // console.log("Response:", response);
            if (query?.fromcheckout === "true") {
                setToastType("success"); // Toast: Success
                setToastMessage("Address Added Successfully! Your delivery address has been saved.");
                router.push("/add-to-cart/checkout");
            } else {
                setToastType("success"); // Toast: Success
                setToastMessage("Address Added Successfully! Your delivery address has been saved.");
                router.push("/");
            }



            // Reset form fields after successful address addition
            setPostCode("");
            setAddressLine1("");
            setAddressLine2("");
            setAddressLine3("");
            setTown("");
            setCity("");
            setCounty("");
            setCountry({ label: "", value: "" }); // Adjust based on your country object structure

            return response;
        } catch (err) {
            console.error("Address Addition Error:", err);

            setToastType("error"); // Toast: Error
            setToastMessage("Failed to Add Address! Something went wrong. Please try again.");

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
                                <h2 className="card-title">Guest Account Details</h2>
                            </div>

                            <Stepper
                                width={'50%'}
                                currentStep={currentStep}
                                steps={steps}
                                setCurrentStep={setCurrentStep}
                            />


                            {currentStep === 0 && (<div className="register-form">


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
                                                [
                                                    validateRequired
                                                ],
                                                setFirstNameError
                                            )(e.target.value)
                                        }
                                        errorTitle={firstNameError} />

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
                                                [
                                                    validateRequired
                                                ],
                                                setLastNameError
                                            )(e.target.value)
                                        }
                                        errorTitle={lastNameError} />
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
                                                [
                                                    validateRequired,
                                                    validateEmail
                                                ],
                                                setEmailError
                                            )(e.target.value)
                                        }
                                        errorTitle={emailError} />

                                    {/* <LabeledInput
                                        id="phoneNumber"

                                        type="phone"
                                        placeholder="Phone Number"
                                        value={phoneNumber}
                                        label="Phone Number"
                                        required={true}
                                        onChange={(e) =>
                                            handleInputChange(
                                                setPhoneNumber,
                                                [
                                                    validateRequired,
                                                    validatePhoneNumber
                                                ],
                                                setPhoneNumberError
                                            )(e.target.value)
                                        }
                                        errorTitle={phoneNumberError} /> */}

                                    {/* <LabeledPhoneInput
                                       id="phoneNumber"
                                        label="Phone Number"
                                        value={phoneNumber}
                                        onChange={(value) =>
                                            handleInputChange(setPhoneNumber, [validateRequired,validatePhoneNumber], setPhoneNumberError)(
                                                value || ""
                                            )
                                        }
                                        placeholder="Phone Number"
                                        errorTitle={phoneNumberError}
                                        disabled={false}
                                    /> */}
                                    <LabeledPhoneInput
                                        id="mobileNumber"
                                        label="Mobile Number"
                                        value={mobileNumber}
                                        onChange={(value) =>
                                            handleInputChange(setMobileNumber, [validateRequired], setMobileNumberError)(
                                                value || ""
                                            )
                                        }
                                        placeholder="Enter phone number"
                                        errorTitle={mobileNumberError}
                                        disabled={false}
                                    />
                                </div>
                                {/* <div className="" style={{ display: "flex", justifyContent: "flex-end" }}>


                                    <div className="switch-select-container">

                                        <div className="switch-select">
                                            <SwitchSingle
                                                checked={isCheckedSendCode}
                                                onToggle={setIsCheckedSendCode}
                                            />

                                            <span className="switch-select-text">
                                                Send Text (SMS)
                                            </span>
                                        </div>
                                        <button type="submit" className="primary-button-small">Send Code</button>
                                    </div>
                                </div> */}


                            </div>)}
                            {currentStep === 1 && (
                                <div className="register-form">
                                    <div className="switch-select-container">

                                        <div className="switch-select">
                                            <SwitchSingle
                                                checked={isCheckedSendCode}
                                                onToggle={setIsCheckedSendCode}
                                            />

                                            <span className="switch-select-text">
                                                Manual Entry
                                            </span>
                                        </div>

                                    </div>
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
                                                    [
                                                        validateRequired
                                                    ],
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
                                                    [
                                                        validateRequired
                                                    ],
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
                                                    [
                                                        validateRequired
                                                    ],
                                                    setTownError
                                                )(e.target.value)
                                            }
                                            errorTitle={townError} />



                                        <LabeledInput
                                            id="city"
                                            type="text"
                                            placeholder="City"
                                            value={city}
                                            label="City"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    setCity,
                                                    [
                                                        validateRequired
                                                    ],
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
                                                    [
                                                        validateRequired
                                                    ],
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

                                    {/* <div className="">
                                        <Checkbox
                                            text={"Terms & Condition"}
                                            labelLink={'/terms&condition'}
                                            classname={""}
                                            isChecked={isChecked}
                                            setIsChecked={setIsChecked}
                                        />

                                    </div> */}
                                </div>

                            )}

                            <div className="my-2 w-full button-contaioner">

                                <button
                                disabled={
                                    (currentStep === 0 && !isPersonalDetailsValid) ||
                                    (currentStep === 1 && !isDeliveryDetailsValid) 
                                  }
                                  style={{
                                    backgroundColor:
                                      (currentStep === 0 && !isPersonalDetailsValid) ||
                                        (currentStep === 1 && !isDeliveryDetailsValid) 
                                        ? "#ccc"
                                        : undefined
                                  }}
                                type="submit" className="primary-button" onClick={nextStep}>Next</button>
                            </div>

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
            <Footer />
        </div>
    );
}