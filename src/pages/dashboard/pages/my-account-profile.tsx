import TableList from "@/components/TableList/TableList";
import Image from "next/image";
import { Tab, Nav, Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { CountryName, TypeofLicense } from "@/constants/constant";
import { RxCross1 } from "react-icons/rx";
import LabeledInput from "@/components/LabeledInputProps/LabeledInputProps ";
import { handleInputChange, handleSelectChange } from "@/utils/functions";
import {
  validateEmail,
  validatePhoneNumber,
  validateRequired,
} from "@/validation/Validation";
import { Option } from "@/types/types";
import LabeledSelect from "@/components/LabeledSelect/LabeledSelect";
import DashboardLayout from "../components/Dashboardlayout";
import Service from "@/services";
import { getItem, setItem } from "@/utils/localStorage/localStorage";
import { stat } from "fs";
import LabeledPhoneInput from "@/components/LabeledPhoneInput/LabeledPhoneInput";
import { login } from "@/redux/store/auth/authConfigSlice";
import { useDispatch } from "react-redux";
import Toast from "@/components/Toast";
import LabeledDateTime from "@/components/LabeledDateTime/LabeledDateTime";
import Link from "next/link";
import Checkbox from "@/components/CheckBox/CheckBox";
import { getCartMultiAddress } from "@/utils/fetchData/fetchDataFunction";

interface RowData {
  id: number;
  [key: string]: any;
}

const MyAccountProfile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeKey2, setActiveKey2] = useState("userDetail");
  const [menuRow, setMenuRow] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "success"
  );
  const handleMenuToggle = (id: number) => {
    setMenuRow(menuRow === id ? null : id);
  };

  // user detail states
  const [healthOrganizationType, setHealthOrganizationType] = useState<
    Option | any
  >(null);
  const [healthOrganizationName, setHealthOrganizationName] =
    useState<string>("");

  const [healthOrganizationNameError, setHealthOrganizationNameError] =
    useState<string>("");

  // Personal Details States
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [bussinessName, setBussinessName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Personal Details Error States
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [bussinessNameError, setBussinessNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [mobileNumberError, setMobileNumberError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  // Personal Details States Credit
  const [firstNameCredit, setFirstNameCredit] = useState<string>("");
  const [lastNameCredit, setLastNameCredit] = useState<string>("");
  const [emailCredit, setEmailCredit] = useState<string>("");
  // const [companyNameCredit, setCompanyNameCredit] = useState<string>("");
  const [departmentNameCredit, setDepartmentNameCredit] = useState<string>("");
  const [invoiceStateEmailCredit, setInvoiceStateEmailCredit] =
    useState<string>("");
  const [phoneNumberCredit, setPhoneNumberCredit] = useState<string>("");
  const [mobileNumberCredit, setMobileNumberCredit] = useState<string>("");
  const [bussinessNameCredit, setBussinessNameCredit] = useState<string>("");
  // Personal Details Error States Credit
  const [firstNameCreditError, setFirstNameCreditError] = useState<string>("");
  const [lastNameCreditError, setLastNameCreditError] = useState<string>("");
  const [emailCreditError, setEmailCreditError] = useState<string>("");
  const [companyNameCreditError, setCompanyNameCreditError] =
    useState<string>("");
  const [phoneNumberCreditError, setPhoneNumberCreditError] =
    useState<string>("");
  const [mobileNumberCreditError, setMobileNumberCreditError] =
    useState<string>("");
  const [departmentNameCreditError, setDepartmentNameCreditError] =
    useState<string>("");
  const [invoiceStateEmailCreditError, setInvoiceStateEmailCreditError] =
    useState<string>("");
  const [bussinessNameCreditError, setBussinessNameCreditError] =
    useState<string>("");

  // Add Delivery Modal States
  const [addressId, setAddressId] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [addressLine3, setAddressLine3] = useState<string>("");
  const [town, setTown] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [country, setCountry] = useState<Option | any>(null);

  const [postCodeError, setPostCodeError] = useState<string>("");
  const [addressLine1Error, setAddressLine1Error] = useState<string>("");
  const [addressLine2Error, setAddressLine2Error] = useState<string>("");
  const [addressLine3Error, setAddressLine3Error] = useState<string>("");
  const [townError, setTownError] = useState<string>("");
  const [cityError, setCityError] = useState<string>("");
  const [countyError, setCountyError] = useState<string>("");
  const [countryError, setCountryError] = useState<string>("");

  // Pharma States
  const [companyName, setCompanyName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [licenseHolderfirstName, setLicenseHolderfirstName] =
    useState<string>("");
  const [licenseHolderlastName, setLicenseHolderlastName] =
    useState<string>("");
  const [licenseType, setLincenseType] = useState<Option | any>(null);
  const [licenseNumber, setLicenseNumber] = useState<string>("");
  const [licenseName, setLicenseName] = useState<string>("");
  const [licenseRegisterationDate, setLicenseRegisterationDate] =
    useState<string>("2024-07-05");
  const [licenseHolderEmail, setLicenseHolderEmail] = useState<string>("");
  const [signature, setSignature] = useState<string>("");

  // Pharma Error States
  const [companyNameError, setCompanyNameError] = useState<string>("");
  const [accountNumberError, setAccountNumberError] = useState<string>("");
  const [licenseHolderfirstNameError, setLicenseHolderfirstNameError] =
    useState<string>("");
  const [licenseHolderlastNameError, setLicenseHolderlastNameError] =
    useState<string>("");
  const [licenseTypeError, setLincenseTypeError] = useState<Option | any>(null);
  const [licenseNumberError, setLicenseNumberError] = useState<string>("");
  const [licenseNameError, setLicenseNameError] = useState<string>("");
  const [licenseRegisterationDateError, setLicenseRegisterationDateError] =
    useState<string>("");
  const [licenseHolderEmailError, setLicenseHolderEmailError] =
    useState<string>("");
  const [signatureError, setSignatureError] = useState<string>("");

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
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpenAddEdit, setIsOpenAddEdit] = useState(false);
  const handleShowAdd = (address: any) => {
    setIsOpenAdd(true);
  };
  const handleShowAddEdit = (address: any) => {
    setIsOpenAddEdit(true);
    setAddressId(address?.address_id || "");
    setPostCode(address?.postal_code || "");
    setAddressLine1(address?.address1 || "");
    setAddressLine2(address?.address2 || "");
    setAddressLine3(address?.address3 || "");
    setTown(address?.town || "");
    setCity(address?.city || "");
    setCounty(address.county || "");
    setCountry(
      CountryName.find((c: any) => c.label === address?.country) || null
    );
  };
  const handleCloseAdd = () => {
    setPostCode("");
    setAddressLine1("");
    setAddressLine2("");
    setAddressLine3("");
    setTown("");
    setCity("");
    setCounty("");
    setCountry(null);
    setIsOpenAdd(false);
    setIsOpenAddEdit(false);
  };
  const [isOpenEditUser, setIsOpenEditUser] = useState(false);
  const handleShowEditUser = (userData: any) => {
    console.log("userData>>>>>>>>>>", userData);
    setIsOpenEditUser(true);
    const healthtype: any = healthcareOrganizationTypes?.find(
      (item) => item.value === Number(userData?.organization_type)
    );
    setHealthOrganizationType(healthtype);
    if (Number(userData?.organization_type > 2)) {
      setFirstName(userData?.name);
      setLastName(userData?.last_name);
      setBussinessName(userData?.company_name);
      setEmail(userData?.email);
      setHealthOrganizationName(userData?.organization_name);
      setMobileNumber(userData?.mobile_number);
    }

    if (Number(userData?.organization_type <= 2)) {
      setFirstNameCredit(userData?.name);
      setLastNameCredit(userData?.last_name);
      setEmailCredit(userData?.email);
      setBussinessNameCredit(userData?.company_name);
      setDepartmentNameCredit(userData?.department_name);
      setInvoiceStateEmailCredit(userData?.statement_email);
      setPhoneNumberCredit(userData?.phone_number);
      setMobileNumberCredit(userData?.mobile_number);
    }
    if (userData?.organization_name) {
      setHealthOrganizationName(userData?.organization_name);
    }
    // console.log("healthtype>>>>>>>>>>",healthtype);
  };
  const handleCloseEditUser = () => {
    // setPostCode("");
    // setAddressLine1("");
    // setAddressLine2("");
    // setAddressLine3("");
    // setTown("");
    // setCity("");
    // setCounty("");
    // setCountry(null);
    setIsOpenEditUser(false);
  };
  const [isOpenEditUserPharma, setIsOpenEditUserPharma] = useState(false);
  const handleShowEditUserPharma = (UserData: any) => {
    console.log("userData>>>>>>>>>>", UserData);
    setIsOpenEditUserPharma(true);
    const LicenseType: any = TypeofLicense?.find(
      (item) => item.value === Number(pharmaUserData?.license_type)
    );
    setCompanyName(pharmaUserData?.company_name);
    setAccountNumber(pharmaUserData?.account_number);
    setLicenseHolderfirstName(pharmaUserData?.name);
    setLicenseHolderlastName(pharmaUserData?.last_name);
    setLincenseType(LicenseType);
    setLicenseNumber(pharmaUserData?.license_number);
    setLicenseName(pharmaUserData?.license_name);
    setLicenseRegisterationDate(pharmaUserData?.registration_date);
    setLicenseHolderEmail(pharmaUserData?.email);
    setSignature(pharmaUserData?.Signature);
  };
  const handleCloseEditUserPharma = () => {
    setIsOpenEditUserPharma(false);
  };

  const [userData, setUserData] = useState<any>(null);
  const [pharmaUserData, setPharmaUserData] = useState<any>(null);
  const user_id: any = getItem("user_id");
  // const pharma_id: any = getItem("pharma_id");

  const getUserInfo = async () => {
    const formData = new FormData();
    formData.append("id", user_id);

    try {
      const response: any = await Service.Users_Methods.getUserList(formData);
      // console.log("User Data >>>>>>", response);
      if (response) {
        setUserData(response);
      } else {
        // console.log("No user data received.");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  const getUserInfoPharma = async () => {
    const formData = new FormData();
    formData.append("id", user_id);

    try {
      const response: any = await Service.Users_Methods.getUserpharma(formData);
      // console.log("Pharma Data >>>>>>", response);
      if (response) {
        setPharmaUserData(response);
      } else {
        // console.log("No pharma data received.");
      }
    } catch (err) {
      console.error("Error fetching pharma data:", err);
    }
  };

  useEffect(() => {
    if (user_id) {
      getUserInfo();
      getUserInfoPharma();
    }
  }, [user_id]);

  const hasPharmaData = Boolean(pharmaUserData?.is_pharmaceutical);
  // pharmaUserData && pharmaUserData.user_type === "customer_pharmaceuti";

  // console.log("userData>>>>>>>>>>>>>>>>>>>>>", userData);
  // console.log("pharmaUserData>>>>>>>>>>>>>>>>>>>>>", pharmaUserData);
  const handleUpdateUser = async () => {
    try {
      const formData = new FormData();

      formData.append("user_id", user_id || "");
      formData.append("first_name", firstName || "");
      formData.append("last_name", lastName || "");
      formData.append("email", email || "");
      formData.append("organization_type", healthOrganizationType?.value || "");
      formData.append("password", password || "");
      formData.append("confirm_password", confirmPassword || "");
      formData.append("mobile_number", mobileNumber || "");

      if (healthOrganizationType?.value <= 2) {
        formData.set("first_name", firstNameCredit || "");
        formData.set("last_name", lastNameCredit || "");
        formData.set("email", emailCredit || "");
        formData.set("phone_number", phoneNumberCredit || "");
        formData.set("mobile_number", mobileNumberCredit || "");
        formData.append("bussiness_name", bussinessNameCredit || ""); // bussiness Name
        // formData.append("company_name", companyNameCredit || "");
        formData.append("department_name", departmentNameCredit || "");
        formData.append("statement_email", invoiceStateEmailCredit || "");
      } else if (healthOrganizationType?.value === 9) {
        formData.append("organization_name", healthOrganizationName || "");
      } else {
        formData.append("bussiness_name", bussinessName || "");
      }

      // console.log("FormData to be sent:", Object.fromEntries(formData.entries()));

      setToastType("info");
      setToastMessage(
        "Updating... Please wait while we Updating your account."
      );

      const response: any = await Service.Auth_Methods.user_regiser_Update(
        formData
      );

      if (response) {
        getUserInfo();
        getUserInfoPharma();
        handleCloseEditUser();

        setToastType("success");
        setToastMessage("Update Successful! Your account has been Updated.");

        setFirstName("");
        setLastName("");
        setBussinessName("");
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
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setToastType("error");
      setToastMessage(
        "Error While Updating ! Something went wrong. Please try again."
      );
    }
  };

  const handleUpdateUserPharma = async () => {
    try {
      const formData = new FormData();

      formData.append("user_id", user_id || "");
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

      setToastType("info");
      setToastMessage(
        "Updating Pharma Account... Please wait while we process your request."
      );

      const response: any =
        await Service.Auth_Methods.user_regiser_pharma_update(formData);
      if (response) {
        setToastType("success");
        setToastMessage("Update Successful! Your account has been Updated.");
        getUserInfo();
        getUserInfoPharma();
        handleCloseEditUserPharma();
        setCompanyName("");
        setAccountNumber("");
        setLicenseHolderfirstName("");
        setLicenseHolderlastName("");
        setLincenseType(null);
        setLicenseNumber("");
        setLicenseName("");
        setLicenseRegisterationDate("");
        setLicenseHolderEmail("");
        setSignature("");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setToastType("error");
      setToastMessage(
        "Error While Updating ! Something went wrong. Please try again."
      );
    }
  };

  const isDeliveryDetailsValid =
    postCode &&
    addressLine1 &&
    // && addressLine2 && addressLine3
    town &&
    city &&
    country;

  const handleUpdateAddress = async () => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("address_id", addressId);
      formData.append("post_code", postCode || "");
      formData.append("address1", addressLine1 || "");
      formData.append("address2", addressLine2 || "");
      formData.append("address3", addressLine3 || "");
      formData.append("town", town || "");
      formData.append("city", city || "");
      formData.append("county", county || "");
      formData.append("country", country.label || "");

      // console.log("FormData to be sent:", Object.fromEntries(formData.entries()));

      setToastType("info");
      setToastMessage(
        "Updating Address... Please wait while we save your delivery address."
      );
      const response: any =
        await Service.Customer_Address_Method.address_update(formData);
      if (response) {
        setToastType("success");
        setToastMessage(
          "Update Successful! Your delivery address has been Updated."
        );

        const deliveryAdderssList = await getCartMultiAddress();
        setItem("userAddressList", deliveryAdderssList);
        getUserInfo();
        getUserInfoPharma();
        handleCloseAdd();
        setPostCode("");
        setAddressLine1("");
        setAddressLine2("");
        setAddressLine3("");
        setTown("");
        setCity("");
        setCounty("");
        setCountry(null);
        setLoading(false);
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setToastType("error");
      setToastMessage(
        "Error While Updating ! Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  const handleAddNewAddress = async () => {
    try {
      setLoading(true);
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

      setToastType("info");
      setToastMessage(
        "Adding Address... Please wait while we save your delivery address."
      );

      const response: any =
        await Service.Customer_Address_Method.addadress_customer(formData);

      // console.log("Address Response:", response);
      setToastType("success");
      setToastMessage("Address Added! Your delivery address has been saved.");
      const deliveryAdderssList = await getCartMultiAddress();
      setItem("userAddressList", deliveryAdderssList);
      getUserInfo();
      getUserInfoPharma();
      handleCloseAdd();
      setPostCode("");
      setAddressLine1("");
      setAddressLine2("");
      setAddressLine3("");
      setTown("");
      setCity("");
      setCounty("");
      setCountry({ label: "", value: "" });
      setLoading(false);
      return response;
    } catch (err) {
      console.error("Address Error:", err);
      setToastType("error");
      setToastMessage(
        "Failed to Add Address! Something went wrong. Please try again."
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <DashboardLayout>
      <Tab.Container
        activeKey={activeKey2}
        onSelect={(k: any) => setActiveKey2(k)}
      >
        <div className="tabs-container-dashboard">
          <Nav variant="tabs" className="custom-tabs">
            <Nav.Item>
              <Nav.Link eventKey="userDetail" className="tabs-header-button">
                User Detail
              </Nav.Link>
            </Nav.Item>
            {hasPharmaData && (
              <Nav.Item>
                <Nav.Link
                  eventKey="pharmaceuticalAccount"
                  className="tabs-header-button"
                >
                  Pharmaceutical Account
                </Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <Nav.Link
                eventKey="deliveryAddress"
                className="tabs-header-button"
              >
                Delivery Address
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="custom-tab-content">
            <Tab.Pane eventKey="userDetail">
              <div className="">
                <div className="userDetailsContainer">
                  <div className="detailsRow">
                    <div className="detailsItem">
                      <div className="detailsItem-label">
                        Healthcare Organization Type:
                      </div>
                      <div className="detailsItem-value">
                        {/* {userData?.organization_type || "--"} */}
                        {healthcareOrganizationTypes?.find(
                          (item) =>
                            item.value === Number(userData?.organization_type)
                        )?.label || "--"}
                      </div>
                    </div>
                    <div className="detailsItem">
                      <div className="detailsItem-label">First Name:</div>
                      <div className="detailsItem-value">
                        {userData?.name ? userData.name : "--"}
                      </div>
                    </div>
                    <div className="detailsItem">
                      <div className="detailsItem-label">Last Name:</div>
                      <div className="detailsItem-value">
                        {userData?.last_name || "--"}
                      </div>
                    </div>
                    <div className="detailsItem">
                      <div className="detailsItem-label">Email:</div>
                      <div className="detailsItem-value">
                        {userData?.email || "--"}
                      </div>
                    </div>
                    <div className="detailsItem">
                      <div className="detailsItem-label">Password:</div>
                      <div className="detailsItem-value">***********</div>
                    </div>
                    <div className="detailsItem">
                      <div className="detailsItem-label">Mobile Number:</div>
                      <div className="detailsItem-value">
                        {userData?.mobile_number || "--"}
                      </div>
                    </div>
                    <div className="detailsItem">
                      <div className="detailsItem-label">Phone Number:</div>
                      <div className="detailsItem-value">
                        {userData?.phone_number || "--"}
                      </div>
                    </div>
                    {userData?.statement_email && (
                      <div className="detailsItem">
                        <div className="detailsItem-label">
                          Statement Email:
                        </div>
                        <div className="detailsItem-value">
                          {userData?.statement_email || "--"}
                        </div>
                      </div>
                    )}
                    {userData?.department_name && (
                      <div className="detailsItem">
                        <div className="detailsItem-label">
                          Department Name:
                        </div>
                        <div className="detailsItem-value">
                          {userData?.department_name || "--"}
                        </div>
                      </div>
                    )}
                    {userData?.company_name && (
                      <div className="detailsItem">
                        <div className="detailsItem-label">Bussiness Name:</div>
                        <div className="detailsItem-value">
                          {userData?.company_name || "--"}
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    className="user-panel-Button"
                    onClick={() => {
                      // router.push("/register");
                      handleShowEditUser(userData);
                    }}
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            </Tab.Pane>

            {hasPharmaData && (
              <Tab.Pane eventKey="pharmaceuticalAccount">
                <div className="">
                  <div className="userDetailsContainer">
                    <div className="detailsRow">
                      <div className="detailsItem">
                        <div className="detailsItem-label">Company Name:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.company_name || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">Account Number:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.account_number || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">
                          License Holder First Name:
                        </div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.name || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">
                          License Holder Last Name:
                        </div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.last_name || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">
                          Type of License:
                        </div>
                        <div className="detailsItem-value">
                          {TypeofLicense?.find(
                            (item) =>
                              item.value ===
                              Number(pharmaUserData?.license_type)
                          )?.label || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">License Number:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.license_number || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">
                          License Registration Date:
                        </div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.registration_date || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">
                          License Holder Email:
                        </div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.email || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">Signature:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.Signature || "--"}
                        </div>
                      </div>
                    </div>
                    <button
                      className="user-panel-Button"
                      onClick={() => {
                        handleShowEditUserPharma(pharmaUserData);
                      }}
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              </Tab.Pane>
            )}

            <Tab.Pane eventKey="deliveryAddress">
              <div className="user-panel-deliveryAddress">
                <div className="user-panel-deliveryAddress__header">
                  <button className="user-panel-Button" onClick={handleShowAdd}>
                    Add Delivery Address
                  </button>
                </div>
                <div className="user-panel-deliveryAddress-card-container">
                  {userData?.delivery_addresses?.length > 0 ? (
                    userData.delivery_addresses.map(
                      (address: any, index: number) => (
                        <div
                          className="user-panel-deliveryAddress-card"
                          key={index}
                        >
                          <div className="address-card-header">
                            <span className="address-text">
                              Address - {index + 1}
                            </span>
                            <button
                              className="user-panel-Button"
                              onClick={() => {
                                handleShowAddEdit(address);
                              }}
                            >
                              Edit Details
                            </button>
                          </div>
                          <div className="address-card-container">
                            <div className="address-card-row">
                              <span className="address-card-label">
                                Post Code:
                              </span>
                              <span className="address-card-value">
                                {address.postal_code || "--"}
                              </span>
                            </div>
                            <div className="address-card-row">
                              <span className="address-card-label">
                                Address Line 1:
                              </span>
                              <span className="address-card-value">
                                {address.address1 || "--"}
                              </span>
                            </div>
                            <div className="address-card-row">
                              <span className="address-card-label">
                                Address Line 2:
                              </span>
                              <span className="address-card-value">
                                {address.address2 || "--"}
                              </span>
                            </div>
                            <div className="address-card-row">
                              <span className="address-card-label">
                                Address Line 3:
                              </span>
                              <span className="address-card-value">
                                {address.address3 || "--"}
                              </span>
                            </div>
                            <div className="address-card-row">
                              <span className="address-card-label">Town:</span>
                              <span className="address-card-value">
                                {address.town || "--"}
                              </span>
                            </div>
                            <div className="address-card-row">
                              <span className="address-card-label">City:</span>
                              <span className="address-card-value">
                                {address.city || "--"}
                              </span>
                            </div>
                            <div className="address-card-row">
                              <span className="address-card-label">
                                County:
                              </span>
                              <span className="address-card-value">
                                {address.county || "--"}
                              </span>
                            </div>
                            <div className="address-card-row">
                              <span className="address-card-label">
                                Country:
                              </span>
                              <span className="address-card-value">
                                {address.country || "--"}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <div className="user-panel-deliveryAddress-card">
                      <div className="address-card-header">
                        <span className="address-text">Address - 1</span>
                      </div>
                      <div className="address-card-container">
                        <div className="address-card-row">
                          <span className="address-card-label">Post Code:</span>
                          <span className="address-card-value">--</span>
                        </div>
                        <div className="address-card-row">
                          <span className="address-card-label">
                            Address Line 1:
                          </span>
                          <span className="address-card-value">--</span>
                        </div>
                        <div className="address-card-row">
                          <span className="address-card-label">
                            Address Line 2:
                          </span>
                          <span className="address-card-value">--</span>
                        </div>
                        <div className="address-card-row">
                          <span className="address-card-label">
                            Address Line 3:
                          </span>
                          <span className="address-card-value">--</span>
                        </div>
                        <div className="address-card-row">
                          <span className="address-card-label">Town:</span>
                          <span className="address-card-value">--</span>
                        </div>
                        <div className="address-card-row">
                          <span className="address-card-label">City:</span>
                          <span className="address-card-value">--</span>
                        </div>
                        <div className="address-card-row">
                          <span className="address-card-label">County:</span>
                          <span className="address-card-value">--</span>
                        </div>
                        <div className="address-card-row">
                          <span className="address-card-label">Country:</span>
                          <span className="address-card-value">--</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>

      <Modal
        className="delivery-modal"
        centered
        show={isOpenAdd || isOpenAddEdit}
        size="xl"
        onHide={handleCloseAdd}
      >
        <button className="modal-close-icon" onClick={handleCloseAdd}>
          <RxCross1 />
        </button>
        <div className="checkout-delivery__header mt-4">
          <span className="checkout-delivery__header__title">
            Delivery Address
          </span>
        </div>

        <div className="checkout-delivery__form bg-gray-custom-model">
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
                handleInputChange(setCounty, [], setCountyError)(e.target.value)
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
          <div className="add-delivery-model">
            <button
              className="save-button-add-delivery-model"
              disabled={!isDeliveryDetailsValid || loading}
              style={{
                backgroundColor:
                  (!isDeliveryDetailsValid || loading) ? "#ccc" : undefined,
              }}
              onClick={() => {
                if (isOpenAdd) {
                  handleAddNewAddress();
                } else {
                  handleUpdateAddress();
                }
              }}
            >
              {isOpenAdd ? "Add New" : "Update"} Address
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        className="delivery-modal"
        centered
        show={isOpenEditUser}
        size="xl"
        onHide={handleCloseEditUser}
      >
        <button className="modal-close-icon" onClick={handleCloseEditUser}>
          <RxCross1 />
        </button>
        {/* <div className="checkout-delivery__header mt-4">
          <span className="checkout-delivery__header__title">Delivery Address</span>
        </div> */}
        <div
          className="register-form"
          style={{
            margin: "20px 0px",
          }}
        >
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
                  />{" "}
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
                </div>
                {/* <div
                  className="my-2 w-full button-contaioner"
                  style={{
                    padding: "10px 0px",
                  }}
                >
                  <button
                    type="submit"
                    className="primary-button"
                    onClick={() => {handleUpdateUser()}}
                  >
                    Update User Detail
                  </button>
                </div> */}
                {/* <div
                  className="form-input-container"
                  style={{
                    fontWeight: "bold",
                    margin: "10px 0px",
                  }}
                >
                  {" "}
                  Change Password
                </div> */}
                {/* <div className="form-input-container">
                  <LabeledInput
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
                  />
                  <LabeledInput
                    id="confirmPassword"
                    type="password"
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
                    errorTitle={confirmPasswordError}
                  />
                </div>
                <div className="my-2 w-full button-contaioner">
                  <button
                    type="submit"
                    className="primary-button"
                    onClick={() => {}}
                  >
                    Update Password
                  </button>
                </div> */}
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
                  <LabeledInput
                    id="departmentNameCredit"
                    type="email"
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
                  />
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
          <div
            className="my-2 w-full button-contaioner"
            style={{
              padding: "10px 0px",
            }}
          >
            <button
              type="submit"
              className="primary-button"
              onClick={() => {
                handleUpdateUser();
              }}
            >
              Update User Detail
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        className="delivery-modal"
        centered
        show={isOpenEditUserPharma}
        size="xl"
        onHide={handleCloseEditUserPharma}
      >
        <button
          className="modal-close-icon"
          onClick={handleCloseEditUserPharma}
        >
          <RxCross1 />
        </button>
        {/* <div className="checkout-delivery__header mt-4">
          <span className="checkout-delivery__header__title">Delivery Address</span>
        </div> */}
        <div
          className="register-form"
          style={{
            margin: "20px 0px",
          }}
        >
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
              required={false}
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

          {/* <div
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
                    
                  </div>
                </div> */}
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
          <div
            className="my-2 w-full button-contaioner"
            style={{
              padding: "10px 0px",
            }}
          >
            <button
              type="submit"
              className="primary-button"
              onClick={() => {
                handleUpdateUserPharma();
              }}
            >
              Update User Detail Pharma
            </button>
          </div>
        </div>
      </Modal>
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          duration={3000}
          onClose={closeToast}
        />
      )}
    </DashboardLayout>
  );
};

export default MyAccountProfile;
