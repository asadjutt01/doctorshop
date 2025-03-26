import TableList from "@/components/TableList/TableList";
import Image from "next/image";
import { Tab, Nav, Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { CountryName } from "@/constants/constant";
import { RxCross1 } from "react-icons/rx";
import LabeledInput from "@/components/LabeledInputProps/LabeledInputProps ";
import { handleInputChange, handleSelectChange } from "@/utils/functions";
import { validateRequired } from "@/validation/Validation";
import { Option } from "@/types/types";
import LabeledSelect from "@/components/LabeledSelect/LabeledSelect";
import DashboardLayout from "../components/Dashboardlayout";
import Service from "@/services";
import { getItem } from "@/utils/localStorage/localStorage";

interface RowData {
  id: number;
  [key: string]: any;
}

const MyAccountProfile = () => {
  const router = useRouter();
  const [activeKey2, setActiveKey2] = useState("userDetail");
  const [menuRow, setMenuRow] = useState<number | null>(null);

  const handleMenuToggle = (id: number) => {
    setMenuRow(menuRow === id ? null : id);
  };

  // Add Delivery Modal States
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

  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const handleShowAdd = () => setIsOpenAdd(true);
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
  };

  const [userData, setUserData] = useState<any>(null);
  const [pharmaUserData, setPharmaUserData] = useState<any>(null);
  const user_id: any = getItem("user_id");
  const pharma_id: any = getItem("pharma_id");

  const getUserInfo = async () => {
    const formData = new FormData();
    formData.append("id", user_id);

    try {
      const response: any = await Service.Users_Methods.getUserList(formData);
      console.log("User Data >>>>>>", response);
      if (response) {
        setUserData(response);
      } else {
        console.log("No user data received.");
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
      console.log("Pharma Data >>>>>>", response);
      if (response) {
        setPharmaUserData(response);
      } else {
        console.log("No pharma data received.");
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
  }, [user_id, pharma_id]);

  const hasPharmaData = pharmaUserData && pharmaUserData.user_type === "customer_pharmaceuti";

  console.log("userData>>>>>>>>>>>>>>>>>>>>>", userData);
  console.log("pharmaUserData>>>>>>>>>>>>>>>>>>>>>", pharmaUserData);

  return (
    <DashboardLayout>
      <Tab.Container activeKey={activeKey2} onSelect={(k: any) => setActiveKey2(k)}>
        <div className="tabs-container-dashboard">
          <Nav variant="tabs" className="custom-tabs">
            <Nav.Item>
              <Nav.Link eventKey="userDetail" className="tabs-header-button">
                User Detail
              </Nav.Link>
            </Nav.Item>
            {hasPharmaData && (
              <Nav.Item>
                <Nav.Link eventKey="pharmaceuticalAccount" className="tabs-header-button">
                  Pharmaceutical Account
                </Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <Nav.Link eventKey="deliveryAddress" className="tabs-header-button">
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
                      <div className="detailsItem-label">Healthcare Organization Type:</div>
                      <div className="detailsItem-value">
                        {userData?.organization_type || "--"}
                      </div>
                    </div>
                    <div className="detailsItem">
                      <div className="detailsItem-label">First Name:</div>
                      <div className="detailsItem-value">
                        {userData?.name ? userData.name.split(" ")[0] : "--"}
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
                      <div className="detailsItem-value">{userData?.email || "--"}</div>
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
                  </div>
                  <button
                    className="user-panel-Button"
                    onClick={() => {
                      router.push("/register");
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
                        <div className="detailsItem-label">License Holder First Name:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.name || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">License Holder Last Name:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.last_name || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">Type of License:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.license_type === 0
                            ? "None"
                            : pharmaUserData?.license_type || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">License Number:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.license_number || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">License Registration Date:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.registration_date || "--"}
                        </div>
                      </div>
                      <div className="detailsItem">
                        <div className="detailsItem-label">License Holder Email:</div>
                        <div className="detailsItem-value">
                          {pharmaUserData?.email || "--"}
                        </div>
                      </div>
                    </div>
                    <button
                      className="user-panel-Button"
                      onClick={() => {
                        router.push("/register-pharma");
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
                    userData.delivery_addresses.map((address: any, index: number) => (
                      <div className="user-panel-deliveryAddress-card" key={index}>
                        <div className="address-card-header">
                          <span className="address-text">Address - {index + 1}</span>
                          <button
                            className="user-panel-Button"
                            onClick={() => {
                              setPostCode(address.postal_code || "");
                              setAddressLine1(address.address1 || "");
                              setAddressLine2(address.address2 || "");
                              setAddressLine3(address.address3 || "");
                              setTown(address.town || "");
                              setCity(address.city || "");
                              setCounty(address.state || "");
                              setCountry(
                                CountryName.find((c: any) => c.label === address.country) || null
                              );
                              handleShowAdd();
                            }}
                          >
                            Edit Details
                          </button>
                        </div>
                        <div className="address-card-container">
                          <div className="address-card-row">
                            <span className="address-card-label">Post Code:</span>
                            <span className="address-card-value">
                              {address.postal_code || "--"}
                            </span>
                          </div>
                          <div className="address-card-row">
                            <span className="address-card-label">Address Line 1:</span>
                            <span className="address-card-value">
                              {address.address1 || "--"}
                            </span>
                          </div>
                          <div className="address-card-row">
                            <span className="address-card-label">Address Line 2:</span>
                            <span className="address-card-value">
                              {address.address2 || "--"}
                            </span>
                          </div>
                          <div className="address-card-row">
                            <span className="address-card-label">Address Line 3:</span>
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
                            <span className="address-card-label">County:</span>
                            <span className="address-card-value">
                              {address.state || "--"}
                            </span>
                          </div>
                          <div className="address-card-row">
                            <span className="address-card-label">Country:</span>
                            <span className="address-card-value">
                              {address.country || "--"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
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
                          <span className="address-card-label">Address Line 1:</span>
                          <span className="address-card-value">--</span>
                        </div>
                        <div className="address-card-row">
                          <span className="address-card-label">Address Line 2:</span>
                          <span className="address-card-value">--</span>
                        </div>
                        <div className="address-card-row">
                          <span className="address-card-label">Address Line 3:</span>
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
        show={isOpenAdd}
        size="xl"
        onHide={handleCloseAdd}
      >
        <button className="modal-close-icon" onClick={handleCloseAdd}>
          <RxCross1 />
        </button>
        <div className="checkout-delivery__header mt-4">
          <span className="checkout-delivery__header__title">Delivery Address</span>
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
                handleInputChange(setPostCode, [validateRequired], setPostCodeError)(
                  e.target.value
                )
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
                handleInputChange(setAddressLine1, [validateRequired], setAddressLine1Error)(
                  e.target.value
                )
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
                handleInputChange(setAddressLine2, [validateRequired], setAddressLine2Error)(
                  e.target.value
                )
              }
              errorTitle={addressLine2Error}
            />
            <LabeledInput
              id="addressLine3"
              type="text"
              placeholder="Address Line 3"
              value={addressLine3}
              label="Address Line 3"
              onChange={(e) =>
                handleInputChange(setAddressLine3, [validateRequired], setAddressLine3Error)(
                  e.target.value
                )
              }
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
                handleInputChange(setTown, [validateRequired], setTownError)(e.target.value)
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
                handleInputChange(setCity, [validateRequired], setCityError)(e.target.value)
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
                handleInputChange(setCounty, [validateRequired], setCountyError)(
                  e.target.value
                )
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
            <button className="save-button-add-delivery-model" onClick={handleCloseAdd}>
              Add New
            </button>
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default MyAccountProfile;