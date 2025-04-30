import React, { useEffect, useState } from "react";
import { Button, Accordion, FormControl, Modal } from "react-bootstrap";
import Image from "next/image";
import productvideo from "../app/images/productvideo.png";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import AboutProduct from "@/components/AboutProduct";
import ProductVideo from "@/components/ProductVideo";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import ProducSlider from "@/components/ProductSlider";
import Microscope from "@/components/Microscope";
import Breadcrumb from "@/components/Breadcrumb";
import Taglines from "@/components/Taglines";
import Testimonials from "@/components/Testimonials";
import BestSellerSlider from "@/components/BestSellerSlider";
import ProducDetailContent from "@/components/ProducDetailContent";
import Footer from "@/components/Footer";
// import coll3 from ".../app/images/coll3.png";
import coll3 from "../../../app/images/coll3.png";
import Switch from "@/components/Switch";
import LabeledInput from "@/components/LabeledInputProps/LabeledInputProps ";
import { handleInputChange, handleSelectChange } from "@/utils/functions";
import { validatePhoneNumber, validateRequired } from "@/validation/Validation";
import LabeledCardInput from "@/components/LabeledCardInput/LabeledCardInput";
import LabeledSelect from "@/components/LabeledSelect/LabeledSelect";
import { Option } from "@/types/types";
import LabeledPhoneInput from "@/components/LabeledPhoneInput/LabeledPhoneInput";
import { CountryName } from "@/constants/constant";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
import {
  getCartList,
  getCartMultiAddress,
  getCartSummary,
} from "@/utils/fetchData/fetchDataFunction";
import Toast from "@/components/Toast";
import {
  setCartSummary,
  setCartsWithList,
} from "@/redux/store/cart/cartConfigSlice";
import {
  clearAll,
  getItem,
  removeItem,
  setItem,
} from "@/utils/localStorage/localStorage";
import { setUserAddressList } from "@/redux/store/user/userConfigSlice";
import Service from "@/services";
import { loadStripe } from "@stripe/stripe-js";
import LabeledDateTime from "@/components/LabeledDateTime/LabeledDateTime";
import LabeledStripeInput from "@/components/LabeledStripeInput/LabeledStripeInput";
import { v4 as uuidv4 } from "uuid";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements,
} from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { getCartCount } from "@/components/LoadInitialData/LoadInitialData";
import { logout } from "@/redux/store/auth/authConfigSlice";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
const collections = [
  { src: coll3, title: "Hemodialysis Machine" },
  { src: coll3, title: "xray ultrasound machine" },
  { src: coll3, title: "ICU Medical ventilator" },
  { src: coll3, title: "Hemodialysis Machine" },
  { src: coll3, title: "xray ultrasound machine" },
  { src: coll3, title: "ICU Medical ventilator" },
];
type CartSummaryProps = {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  error: string;
  setError: (value: string) => void;
  selectedAddressId: any;
  toastMessage:any;
toastType:any;
setToastMessage:any;
setToastType:any;
};
const CartSummary: React.FC<CartSummaryProps> = ({
  name,
  cardNumber,
  expiryDate,
  cvv,
  error,
  setError,
  selectedAddressId,
  toastMessage,
toastType,
setToastMessage,
setToastType,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const cartSummary: any = useSelector(
    (state: IRootState) => state.cart.cartSummary
  );
  const router = useRouter();
  // console.log("cartSummary>>>>>11",cartSummary);
  const user_id: any = getItem("user_id");
  const user_type: any = getItem("user_type");
  const user: any = getItem("user");
  // const user = {
  //   id: 89,
  //   type: "customer_credit",
  //   name: "checklogin",
  //   email: "checklogin@gmail.com",
  //   organization_type: "2",
  //   avatar: null,
  //   avatar_original:
  //     "https://erpdoctorshop.tech9et.com/public/assets/img/placeholder.jpg",
  //   phone: null,
  //   email_verified: false,
  // };
  const [loading, setLoading] = useState(false);

  // const [toastMessage, setToastMessage] = useState<any>(null);
  // const [toastType, setToastType] = useState<"success" | "error" | "info">(
  //   "success"
  // );
  const handleLogout = () => {
    dispatch(logout());
    // console.log("It is logging out");
    removeItem("authToken");
    removeItem("cart_data");
    clearAll();
    getCartCount(dispatch);
    // setAuthToken(null);
    storeTempId();
    // setToastType("success");
    // setToastMessage("Logged Out! You have been successfully logged out.");

    setTimeout(() => {
      router.push("/");
    }, 3000);
  };
  const storeTempId = () => {
    let temp_user_id = getItem("temp_user_id"); // Check if temp_user_id exists in storage

    if (!temp_user_id) {
      temp_user_id = uuidv4(); // Generate new UUID
      setItem("temp_user_id", temp_user_id); // Store it in localStorage
    }
  };
  const handleCheckoutPayment = async () => {
    setLoading(true);

    if (
      user_type !== "customer_credit" ||
      (user_type === "customer_credit" &&
        Number(user?.organization_type) !== 1 &&
        Number(user?.organization_type) !== 2)
    ) {
      if (!stripe || !elements) {
        setToastType("error");
        setToastMessage("Stripe has not loaded yet.");
        setLoading(false);
        return;
      }

      const cardElement = elements.getElement(CardNumberElement);
      if (!cardElement) {
        setToastType("error");
        setToastMessage("Card details are required.");
        setLoading(false);
        return;
      }

      try {
        // 🔹 Create Payment Method
        const { paymentMethod, error: paymentError } =
          await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: { name },
          });

        if (paymentError) {
          setToastType("error");
          setToastMessage(paymentError.message);
          setLoading(false);
          return;
        }
        // console.log("paymentMethod>>>",paymentMethod?.id);
        // 🔹 Initiate Payment Request with Backend
        const formData = new FormData();
        formData.append("payment_type", "cart_payment");
        formData.append("user_id", user_id);
        formData.append("address_id", selectedAddressId);
        const response: any = await Service.Cart_Method.cartCheckout(formData);

        // 🔹 Send Required Data for Stripe Payment
        const formDatastripe = new FormData();
        formDatastripe.append("payment_type", "cart_payment");
        formDatastripe.append("id", paymentMethod?.id);
        formDatastripe.append("combined_order_id", response?.combined_order_id);
        formDatastripe.append("amount", cartSummary?.grand_total_value);
        formDatastripe.append("grand_total", cartSummary?.grand_total_value);
        formDatastripe.append("user_id", user_id);

        // Get `clientSecret` for Payment Intent
        const stripeApiresponse: any =
          await Service.Cart_Method.stripeCheckoutSession(formDatastripe);

        if (!stripeApiresponse?.id) {
          setToastType("error");
          setToastMessage("Failed to get payment intent from the server.");
          setLoading(false);
          return;
        }

        // ✅ Payment Success!
        if (stripeApiresponse?.status === 200) {
         
            if (
              user_type === "customer_pharmaceuti" ||
              user_type === "customer_credit" ||
              user_type === "customer"
            ) {
              setToastType("success");
              setToastMessage(
                `Payment is successful Redirecting to your dashboard...`
              );
              router.push("/dashboard");
            } else {
              setToastType("success");
              setToastMessage(
                `Payment is successful Redirecting to your home...`
              );
              // console.log('successRespoonse>>>>>>>',successRespoonse);
              if (user_type === "customer_guest") {
                handleLogout();
              }
              router.push("/");
            }
            const cartList = await getCartList();
            const cartSummary: any = await getCartSummary();
            if (cartSummary && cartList) {
              dispatch(setCartSummary(cartSummary));
              dispatch(setCartsWithList(cartList));
            }

            getCartCount(dispatch);
        

          setLoading(false);
          return;
        }else{
          setToastType("erroe");
              setToastMessage(
                `Payment is Failed...`
              );
        }
      } catch (error) {
        setToastType("error");
        setToastMessage("Error during payment");
        console.error("Error during payment:", error);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const formData = new FormData();
        formData.append("payment_type", "cart_payment");
        formData.append("user_id", user_id);
        formData.append("address_id", selectedAddressId);
        const cartcheckoutResponse = await Service.Cart_Method.cartCheckout(
          formData
        );
        // if(cartcheckoutResponse){
        setToastType("success");
        setToastMessage("Checkout successful!");
        getCartCount(dispatch);
        const cartList = await getCartList();
        const cartSummary: any = await getCartSummary();
        if (cartSummary && cartList) {
          dispatch(setCartSummary(cartSummary));
          dispatch(setCartsWithList(cartList));
        }
        router.push("/dashboard");
        if (user_type === "customer_guest") {
          handleLogout();
        }
        // }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  // const handleCheckoutPayment = async () => {
  //   setLoading(true);

  //   if (!stripe || !elements) {
  //     alert("Stripe has not loaded yet.");
  //     setLoading(false);
  //     return;
  //   }

  //   const cardElement = elements.getElement(CardNumberElement);
  //   if (!cardElement) {
  //     alert("Card details are required.");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     // 🔹 Generate PaymentMethod Token
  //     const { token, error } = await stripe.createToken(cardElement);

  //     if (error) {
  //       alert(error.message);
  //       setLoading(false);
  //       return;
  //     }

  //     // 🔹 Send Token to Backend for Processing
  //     // const response:any = await fetch("/api/payment/process", {
  //     //   method: "POST",
  //     //   headers: { "Content-Type": "application/json" },
  //     //   body: JSON.stringify({
  //     //     stripe_token: token.id, // ✅ Send generated token
  //     //     amount: cartSummary?.grand_total_value, // ✅ Pass the amount
  //     //     user_id: user_id, // ✅ Send user ID if needed
  //     //     // order_id: response?.combined_order_id, // ✅ Send order details
  //     //   }),
  //     // });

  //     const formData = new FormData();
  //       formData.append("payment_type", "cart_payment");
  //       formData.append("token", token.id);
  //       const response:any = await Service.Cart_Method.cartCheckout(formData);

  //     const data = await response.json();

  //     if (data.success) {
  //       alert("Payment Successful!");
  //       await Service.Cart_Method.stripeSuccess(); // Handle success
  //     } else {
  //       alert("Payment Failed!");
  //       await Service.Cart_Method.stripeCancel(); // Handle failure
  //     }
  //   } catch (error) {
  //     console.error("Error generating token:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const closeToast = () => {
    setToastMessage(null);
  };
  return (
    <div className="cart-summary">
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Net Amount: </span>
        <span className="cart-summary__item-value">
          {cartSummary?.sub_total ?? "£0.00"}
        </span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Carriage Charge: </span>
        <span className="cart-summary__item-value">
          {cartSummary?.shipping_cost ?? "£0.00"}
        </span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Discount: </span>
        <span className="cart-summary__item-value">
          {cartSummary?.discount ?? "£0.00"}
        </span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Vat is 20%: </span>
        <span className="cart-summary__item-value">
          {cartSummary?.tax ?? "£0.00"}
        </span>
      </div>
      <div className="cart-summary__total">
        <span>Order Total: </span>
        <span className="primary-text">
          {cartSummary?.grand_total ?? "£0.00"}
        </span>
      </div>
      <div className="cart-summary__delivery_time">
        <span>Delivery:</span>
        <span>3 to 5 Working days</span>
      </div>
      <span className="cart-summary__note">
        Shipping, taxes, and discount codes calculated at checkout.
      </span>
      <button
        className="cart-summary__checkout-btn"
        disabled={!stripe || !elements}
        onClick={handleCheckoutPayment}
      >
        {loading ? "Processing..." : "Payment Confirmation"}
      </button>
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          duration={3000} // Adjust as needed
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default function Index() {
  const dispatch = useDispatch();
  const user: any = getItem("user");
  const user_type: any = getItem("user_type");
  const deliveryAddressList: any = useSelector(
    (state: IRootState) => state.user.userAddressList
  );
  const [toastMessage, setToastMessage] = useState<any>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "success"
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    if (deliveryAddressList) {
      setCustomerName(deliveryAddressList?.name ?? "");
      setPhoneNumber(deliveryAddressList?.phone ?? "");

      if (
        Array.isArray(deliveryAddressList?.addresses) &&
        deliveryAddressList.addresses.length > 0
      ) {
        setAddress(
          `${deliveryAddressList.addresses[0]?.post_code ?? ""} ${
            deliveryAddressList.addresses[0]?.address1 ?? ""
          } ${deliveryAddressList.addresses[0]?.address2 ?? ""} ${
            deliveryAddressList.addresses[0]?.address3 ?? ""
          } ${deliveryAddressList.addresses[0]?.city ?? ""} ${
            deliveryAddressList.addresses[0]?.town ?? ""
          } ${deliveryAddressList.addresses[0]?.county ?? ""} ${
            deliveryAddressList.addresses[0]?.country ?? ""
          }
           `
        );
        setSelectedAddressId(deliveryAddressList.addresses[0]?.id);
      } else {
        // setPhoneNumber(phoneNumber1);
        // setAddress("");
      }
    }
  }, [deliveryAddressList]);
  const fetchCartcart = async () => {
    try {
      const cartSummary: any = await getCartSummary(); // ✅ Now it returns data correctly
      console.log("cartSummary>>>>>11", cartSummary);
      const cartList = await getCartList(); // ✅ Now it returns data correctly
      const deliveryAdderssList = await getCartMultiAddress(); // ✅ Now it returns data correctly
      if (cartSummary) {
        dispatch(setCartSummary(cartSummary)); // ✅ Dispatch to Redux store
      }
      if (cartList) {
        dispatch(setCartsWithList(cartList)); // ✅ Dispatch to Redux store
      }
      if (deliveryAdderssList) {
        dispatch(setUserAddressList(deliveryAdderssList)); // ✅ Dispatch to Redux store
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    
    fetchCartcart();
  }, [dispatch]);
  // delivery-modal select
  // const [show, setShow] = useState(false);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  // delivery-modal Add
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  // const [isChecked, setIsChecked] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] = useState("address1");
  const handleCloseSelect = () => setIsOpenSelect(false);
  const handleCloseAdd = () => setIsOpenAdd(false);

  const handleShowSelect = () => setIsOpenSelect(true);
  const handleShowAdd = () => setIsOpenAdd(true);

  const [selectedAddressId, setSelectedAddressId] = useState<number>(0);
  const [customerName, setCustomerName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>(
    ""
  );

  const [name, setName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("2024-07-05");
  const [cvv, setCvv] = useState<string>("");
  const [error, setError] = useState("");

  const [customerNameError, setCustomerNameError] = useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [cardNumberError, setCardNumberError] = useState<string>("");
  const [expiryDateError, setExpiryDateError] = useState<string>("");
  const [cvvError, setCvvError] = useState<string>("");

  // select Delivery modal states
  // Customer 1
  const [customerName1, setCustomerName1] = useState<string>("");
  const [phoneNumber1, setPhoneNumber1] = useState<string>("");
  const [address1, setAddress1] = useState<string>("");

  // Customer 2
  const [customerName2, setCustomerName2] = useState<string>("");
  const [phoneNumber2, setPhoneNumber2] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");

  // Error states
  // Customer 1
  const [customerName1Error, setCustomerName1Error] = useState<string>("");
  const [phoneNumber1Error, setPhoneNumber1Error] = useState<string>("");
  const [address1Error, setAddress1Error] = useState<string>("");

  // Customer 2
  const [customerName2Error, setCustomerName2Error] = useState<string>("");
  const [phoneNumber2Error, setPhoneNumber2Error] = useState<string>("");
  const [address2Error, setAddress2Error] = useState<string>("");

  // Add Deliery Modal States
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

  const handleAddNewAddress = async () => {
    try {
      
                 
      const user_id: any = getItem("user_id");
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
      if(response){
        setToastType("success");
      setToastMessage("Address Added! Your delivery address has been saved.");
      fetchCartcart();
      handleCloseAdd();
      handleShowSelect();
      setPostCode("");
      setAddressLine1("");
      setAddressLine2("");
      setAddressLine3("");
      setTown("");
      setCity("");
      setCounty("");
      setCountry({ label: "", value: "" });
      }
      return response;
    } catch (err) {
      console.error("Address Error:", err);
      setToastType("error");
      setToastMessage(
        "Failed to Add Address! Something went wrong. Please try again."
      );
      throw err;
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div>
        <HeaderWithCat />
        <div className="checkout">
          <div className="lg-container">
            <Breadcrumb />
            <div className="checkout-container">
              <div className="checkout-card">
                <div className="checkout-delivery">
                  <div className="checkout-delivery__header">
                    <span className="checkout-delivery__header__title">
                      Delivery Address
                    </span>
                    <button
                      className="checkout-delivery__header__button"
                      onClick={handleShowSelect}
                    >
                      Use Other Address
                    </button>
                  </div>
                  <div className="checkout-delivery__form">
                    <div className="form-input-container">
                      <LabeledInput
                        id="customerName"
                        type="text"
                        placeholder="Customer Name"
                        value={customerName}
                        label="Customer Name"
                        disabled
                        onChange={(e) =>
                          handleInputChange(
                            setCustomerName,
                            [validateRequired],
                            setCustomerNameError
                          )(e.target.value)
                        }
                        errorTitle={customerNameError}
                      />

                      <LabeledPhoneInput
                        id="phoneNumber"
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(value) =>
                          handleInputChange(
                            setPhoneNumber,
                            [validateRequired, validatePhoneNumber],
                            setPhoneNumberError
                          )(value || "")
                        }
                        placeholder="Phone Number"
                        errorTitle={phoneNumberError}
                        disabled={true}
                      />
                    </div>
                    <div className="form-input-container">
                      <LabeledInput
                        id="Address"
                        type="text"
                        placeholder="Address"
                        value={address}
                        disabled
                        label="Address"
                        onChange={(e) =>
                          handleInputChange(
                            setAddress,
                            [validateRequired],
                            setAddressError
                          )(e.target.value)
                        }
                        errorTitle={addressError}
                      />
                    </div>
                  </div>
                </div>
                {hydrated &&
                  user_type &&
                  (user_type !== "customer_credit" ||
                    (user_type === "customer_credit" &&
                      Number(user?.organization_type) !== 1 &&
                      Number(user?.organization_type) !== 2)) && (
                    <div className="checkout-payment">
                      <div className="checkout-payment__header">
                        <span className="checkout-payment__header__title">
                          Payment Method
                        </span>
                      </div>
                      <div className="checkout-payment__form">
                        <div className="form-input-container">
                          <LabeledInput
                            id="name"
                            type="text"
                            placeholder="Name on Card"
                            value={name}
                            label="Name on Card"
                            onChange={(e) =>
                              handleInputChange(
                                setName,
                                [validateRequired],
                                setNameError
                              )(e.target.value)
                            }
                            errorTitle={nameError}
                          />
                          {/* <LabeledCardInput
                          id="cardNumber"
                          type="text"
                          placeholder="Card Number"
                          value={cardNumber}
                          label="Card Number"
                          onChange={(e) =>
                            handleInputChange(
                              setCardNumber,
                              [validateRequired],
                              setCardNumberError
                            )(e.target.value)
                          }
                          errorTitle={cardNumberError}
                          cardNumber={true}
                        /> */}
                          <LabeledStripeInput
                            id="card-number"
                            label="Card Number"
                            required
                          />
                        </div>
                        <div className="form-input-container">
                          {/* <LabeledDateTime
                          // id="expiryDate"
                          // type="text"
                          // placeholder="mm / yy"
                          // value={expiryDate}
                          // label="Expiry Date"
                          // onChange={(e) =>
                          //   handleInputChange(
                          //     setExpiryDate,
                          //     [validateRequired],
                          //     setExpiryDateError
                          //   )(e.target.value)
                          // }
                          // errorTitle={expiryDateError}
                          id="expiryDate"
                          label="Expiry Date"
                          type="date"
                          value={expiryDate} // Pass the string value directly
                          onChange={(date: any) => setExpiryDate(date)}
                        /> */}
                          <LabeledStripeInput
                            id="card-expiry"
                            label="Expiry Date"
                            required
                          />

                          {/* <LabeledCardInput
                          id="cvv"
                          type="text"
                          placeholder="****"
                          value={cvv}
                          label="Cvv"
                          onChange={(e) =>
                            handleInputChange(
                              setCvv,
                              [validateRequired],
                              setCvvError
                            )(e.target.value)
                          }
                          errorTitle={cvvError}
                        /> */}
                          <LabeledStripeInput
                            id="card-cvc"
                            label="CVC"
                            required
                          />
                        </div>
                        <div className="form-input-container">
                          {error && <p className="error">{error}</p>}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
              {/* <CartSummary
              name={name}
              cardNumber={cardNumber}
              expiryDate={expiryDate}
              cvv={cvv}
              error={error}
              setError={setError}
            /> */}

              <CartSummary
                name={name}
                cardNumber={cardNumber}
                expiryDate={expiryDate}
                cvv={cvv}
                error={error}
                setError={setError}
                selectedAddressId={selectedAddressId}
                toastMessage={toastMessage}
                toastType={toastType}
                setToastMessage={setToastMessage}
                setToastType={setToastType}
                // grand_total_value={cartSummary?.grand_total_value}
              />
            </div>
          </div>
        </div>

        <Footer />
        <Modal
          className="delivery-modal"
          centered
          show={isOpenSelect}
          size="xl"
          onHide={handleCloseSelect}
        >
          <button className="modal-close-icon" onClick={handleCloseSelect}>
            <RxCross1 />
          </button>
          <div className="checkout-delivery__header mt-4">
            <span className="checkout-delivery__header__title">
              Delivery Address
            </span>
            <button
              className="checkout-delivery__header__button"
              onClick={() => {
                handleCloseSelect();
                handleShowAdd();
              }}
            >
              Add New
            </button>
          </div>
          {deliveryAddressList &&
            deliveryAddressList.addresses?.length > 0 &&
            deliveryAddressList.addresses?.map((item: any, index: number) => {
              return (
                <div
                  className="checkout-delivery__form bg-gray-custom-model"
                  key={index}
                >
                  <div className="switch-select">
                    <Switch
                      value={`address${index + 1}`}
                      selectedValue={selectedOption}
                      onChange={() => {
                        setSelectedOption(`address${index + 1}`);
                        setSelectedAddressId(item?.id);
                        setCustomerName(deliveryAddressList?.name ?? "");
                        setPhoneNumber(deliveryAddressList?.phone ?? "");
                        setAddress(
                          `${item?.address1 ?? ""} ${item?.address2 ?? ""} ${
                            item?.address3 ?? ""
                          }`
                        );
                        handleCloseSelect();
                      }}
                    />

                    <span className="address-heading-model">
                      Address - {index + 1}
                    </span>
                  </div>

                  <div className="form-input-container">
                    <LabeledInput
                      id={`customerName${index + 1}`}
                      type="text"
                      placeholder="Customer Name"
                      value={deliveryAddressList?.name ?? customerName1}
                      label="Customer Name"
                      onChange={(e) =>
                        handleInputChange(
                          setCustomerName1,
                          [validateRequired],
                          setCustomerName1Error
                        )(e.target.value)
                      }
                      disabled
                      errorTitle={customerName1Error}
                    />
                    <LabeledPhoneInput
                      id="phoneNumber1"
                      label="Phone Number"
                      value={deliveryAddressList?.phone ?? phoneNumber1}
                      onChange={(value) =>
                        handleInputChange(
                          setPhoneNumber1,
                          [validateRequired, validatePhoneNumber],
                          setPhoneNumber1Error
                        )(value || "")
                      }
                      placeholder="Phone Number"
                      errorTitle={phoneNumber1Error}
                      disabled={true}
                      // className={'bg-white'}
                    />
                  </div>
                  <div className="form-input-container">
                    <LabeledInput
                      id="Address1"
                      type="text"
                      placeholder="Address"
                      value={`${item?.address1} ${item?.address2} ${item?.address3}`}
                      label="Address"
                      onChange={(e) =>
                        handleInputChange(
                          setAddress1,
                          [validateRequired],
                          setAddress1Error
                        )(e.target.value)
                      }
                      disabled
                      errorTitle={address1Error}
                    />
                  </div>
                </div>
              );
            })}

          {/* <div className="checkout-delivery__form bg-gray-custom-model">
          <div className="switch-select">
            <Switch
              value="address2"
              selectedValue={selectedOption}
              onChange={setSelectedOption}
            />
            <span className="address-heading-model">Address - 2</span>
          </div>
          <div className="form-input-container">
            <LabeledInput
              id="customerName2"
              type="text"
              placeholder="Customer Name"
              value={customerName2}
              label="Customer Name"
              onChange={(e) =>
                handleInputChange(
                  setCustomerName2,
                  [validateRequired],
                  setCustomerName2Error
                )(e.target.value)
              }
              disabled
              errorTitle={customerName2Error}
            />

            <LabeledPhoneInput
              id="phoneNumber2"
              label="Phone Number"
              value={phoneNumber2}
              onChange={(value) =>
                handleInputChange(
                  setPhoneNumber2,
                  [validateRequired, validatePhoneNumber],
                  setPhoneNumber2Error
                )(value || "")
              }
              placeholder="Phone Number"
              errorTitle={phoneNumber2Error}
              disabled={true}
              // className={'bg-white'}
            />
          </div>
          <div className="form-input-container">
            <LabeledInput
              id="Address2"
              type="text"
              placeholder="Address"
              value={address2}
              label="Address"
              // labelTextColor={'text-white'}
              // required={true}
              onChange={(e) =>
                handleInputChange(
                  setAddress2,
                  [validateRequired],
                  setAddress2Error
                )(e.target.value)
              }
              disabled
              errorTitle={address2Error}
            />
          </div>
        </div> */}
        </Modal>
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
            <div className="add-delivery-model">
              <button
                className="save-button-add-delivery-model"
                onClick={() => {
                  // handleCloseAdd();
                  // handleShowSelect();
                  handleAddNewAddress();
                }}
              >
                Add New
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </Elements>
  );
}
