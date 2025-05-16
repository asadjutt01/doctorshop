'use client'; 
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
import { FaTrash } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

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
orderData:any;
};
const CartSummary: React.FC<CartSummaryProps> = ({
  name,
  cardNumber,
  expiryDate,
  cvv,
  error,
  setError,
  selectedAddressId,
//   toastMessage,
// toastType,
// setToastMessage,
// setToastType,
orderData,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  
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

  const [toastMessage, setToastMessage] = useState<any>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "success"
  );
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
        // const formData = new FormData();
        // formData.append("payment_type", "cart_payment");
        // formData.append("user_id", orderData?.user_id);
        // // formData.append("address_id", selectedAddressId);
        // const response: any = await Service.Cart_Method.cartCheckout(formData);

        // 🔹 Send Required Data for Stripe Payment
        const formDatastripe = new FormData();
        formDatastripe.append("payment_type", "cart_payment");
        formDatastripe.append("id", paymentMethod?.id);
        formDatastripe.append("combined_order_id", orderData?.combined_order_id);
        // formDatastripe.append("combined_order_id", orderData?.order_id);
        formDatastripe.append("amount", orderData?.grand_total);
        formDatastripe.append("grand_total", orderData?.grand_total);
        formDatastripe.append("user_id", user_id);
        formDatastripe.append("order_type", "from_erp");
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
         
            // if (
            //   user_type === "customer_pharmaceuti" ||
            //   user_type === "customer_credit" ||
            //   user_type === "customer"
            // ) {
              setToastType("success");
              setToastMessage("Payment is successful Redirecting to your home...");
              console.log('successRespoonse>>>>>>>',"Payment is successful Redirecting to your home...");
              console.log('toastMessage>>>>>>>',toastMessage);
              router.push("/");
              
            // } else {
              // setToastType("success");
              // setToastMessage(
              //   `Payment is successful Redirecting to your home...`
              // );
              // console.log('successRespoonse>>>>>>>',"Payment is successful Redirecting to your home...");
              // router.push("/");
            // }
            const cartList = await getCartList();
            const cartSummary: any = await getCartSummary();
            // if (cartSummary && cartList) {
            //   dispatch(setCartSummary(cartSummary));
            //   dispatch(setCartsWithList(cartList));
            // }

            getCartCount(dispatch);
        

          setLoading(false);
          return;
        }else{
          setToastType("error");
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
    
      // try {
      //   const formData = new FormData();
      //   formData.append("payment_type", "cart_payment");
      //   formData.append("user_id", user_id);
      //   formData.append("address_id", selectedAddressId);
      //   const cartcheckoutResponse = await Service.Cart_Method.cartCheckout(
      //     formData
      //   );
      //   // if(cartcheckoutResponse){
      //   setToastType("success");
      //   setToastMessage("Checkout successful!");
      //   getCartCount(dispatch);
      //   const cartList = await getCartList();
      //   const cartSummary: any = await getCartSummary();
      //   if (cartSummary && cartList) {
      //     dispatch(setCartSummary(cartSummary));
      //     dispatch(setCartsWithList(cartList));
      //   }
      //   router.push("/dashboard");
      //   if (user_type === "customer_guest") {
      //     handleLogout();
      //   }
      //   // }
      // } catch (error) {
      //   console.error(error);
      // } finally {
      //   setLoading(false);
      // }
    
  };
  const closeToast = () => {
    setToastMessage(null);
  };
  return (
    <div className="cart-summary">
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Net Amount: </span>
        <span className="cart-summary__item-value">
          £{orderData?.subtotal != null
    ? (Math.floor(Number(orderData.subtotal) * 100) / 100).toFixed(2)
    : "0.00"}
        </span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Carriage Charge: </span>
        <span className="cart-summary__item-value">
          {orderData?.shipping_cost ?? "£0.00"}
        </span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Discount: </span>
        <span className="cart-summary__item-value">
          {orderData?.coupon_discount?.toFixed(2) ?? "£0.00"}
        </span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Vat is 20%: </span>
        <span className="cart-summary__item-value">
        £{orderData?.total_tax != null
    ? (Math.floor(Number(orderData.total_tax) * 100) / 100).toFixed(2)
    : "0.00"}
</span>
      </div>
      <div className="cart-summary__total">
        <span>Order Total: </span>
        <span className="primary-text">
          {orderData?.grand_total ?? "£0.00"}
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
          duration={4000} // Adjust as needed
          onClose={closeToast}
        />
      )}
    </div>
  );
};
interface CartItemProps {
    item: any;
    onDeleteStart?: () => void;
    onDeleteEnd?: () => void;
}
const CartItem: React.FC<CartItemProps> = ({
    item,
    onDeleteStart,
    onDeleteEnd,
  }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item?.quantity ?? 1);
    // const price = parseFloat(item?.price?.replace(/[^0-9.]/g, "")) || 0;
    const price = parseFloat(String(item?.price).replace(/[^0-9.]/g, "")) || 0;

    const [totalPrice, setTotalPrice] = useState(price);
  
    const handleQuantityChange = (type: "increase" | "decrease") => {
      setQuantity((prev: any) => {
        if (type === "decrease" && prev === 1) return prev;
        const newQuantity = type === "increase" ? prev + 1 : prev - 1;
        cartQuantityUpdate(newQuantity);
        return newQuantity;
      });
    };
  
    const cartQuantityUpdate = async (updatedQuantity: number) => {
      const formData = new FormData();
      formData.append("id", item?.id);
      formData.append("quantity", updatedQuantity.toString());
      try {
        setIsLoading(true);
        const responseqty: any = await Service.Cart_Method.cartQuantityUpdate(
          formData
        );
        setTotalPrice(responseqty?.price * updatedQuantity);
        getCartCount(dispatch);
        const cartList = await getCartList();
        const cartSummary: any = await getCartSummary();
        if (cartSummary && cartList) {
          dispatch(setCartSummary(cartSummary));
          dispatch(setCartsWithList(cartList));
        }
        if (responseqty?.result === true) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to update cart quantity", error);
        setIsLoading(false);
      }
    };
  
    const handleDelete = async () => {
      try {
        if (!item?.id) {
          console.error("Error: Cart Item ID is missing!");
          return;
        }
        setDeleting(true);
        onDeleteStart?.();
        const formData = new FormData();
        formData.append("id", item.id);
        const authToken = getItem("authToken");
        if (authToken) {
          const user_id: any = getItem("user_id");
          formData.append("user_id", user_id);
        } else {
          const temp_user_id: any = getItem("temp_user_id");
          formData.append("temp_user_id", temp_user_id);
        }
        const responseqty: any = await Service.Cart_Method.cartDelete(formData);
        if (responseqty?.result === true) {
          const cartList = await getCartList();
          const cartSummary: any = await getCartSummary();
          if (cartSummary && cartList) {
            dispatch(setCartSummary(cartSummary));
            dispatch(setCartsWithList(cartList));
            getCartCount(dispatch);
          }
        }
      } catch (error) {
        console.error("Delete Error:", error);
      } finally {
        setDeleting(false);
        onDeleteEnd?.();
      }
    };
  
    useEffect(() => {
      // fetchCartSummary();
    }, [quantity, totalPrice]);
  
    return (
      <div className="cart-item relative">
        {/* {deleting ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              style={{
                // display: "inline-block",
  
                width: "24px",
                height: "24px",
                border: "3px solid #007bff",
                borderTop: "3px solid transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                left: "50%",
              }}
            />
          </div>
        ) : (
          <button
            className="remove-item-btn"
            onClick={() => {
              handleDelete();
            }}
            style={{
              width: "22px",
              height: "22px",
              backgroundColor: "#ffeef0",
              border: "none",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            
            <FaTrash
              color="#f30a0a"
              size={10}
              // onClick={() => { handleDelete() }}
              className=""
            />
          </button>
        )} */}
        <div className="cart-item__content ">
          <div className="cart-item__details">
            <div className="cart-item__image-container">
              <Image
                src={item.image}
                alt={item.name}
                className="cart-item__image"
                width={60}
                height={80}
              />
            </div>
            <div className="cart-item__info">
              <span className="cart-item__info__title">{item?.product_name}</span>
              <div className="cart-item__info-section">
                {item?.product_code && item.product_code != 0 && (
                  <div className="cart-item__info-section-detail">
                    <span className="cart-item__info-section-detail-key">
                      Product Code:
                    </span>
                    <span className="cart-item__info-section-detail-value">
                      {item?.product_code && item.product_code != 0
                        ? item.product_code
                        : "-"}
                    </span>
                  </div>
                )}
                {item?.pip_code && item.pip_code != 0 && (
                  <div className="cart-item__info-section-detail">
                    <span className="cart-item__info-section-detail-key">
                      PIP Code:
                    </span>
                    <span className="cart-item__info-section-detail-value">
                      {item?.pip_code && item.pip_code != 0 ? item.pip_code : "-"}
                    </span>
                  </div>
                )}
                {item?.variation && (
                  <div className="cart-item__info-section-detail">
                    <span className="cart-item__info-section-detail-key">
                      Variation:
                    </span>
                    <span className="cart-item__info-section-detail-value">
                      {item?.variation
                        ? // && item.variation != 0
                          item.variation
                        : "-"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="cart-item__price-section">
            <span className="cart-item__price">
              {totalPrice?.toFixed(2) ?? "-"}
            </span>
            <div>
              {/* <div className="cart-item__quantity">
                <button
                  className="cart-item__quantity-btn"
                  onClick={() => handleQuantityChange("decrease")}
                  disabled={quantity === 1}
                  style={{
                    opacity: quantity === 1 ? 0.5 : 1,
                    cursor: quantity === 1 ? "not-allowed" : "pointer",
                  }}
                >
                  <AiFillMinusCircle
                    size={26}
                    className="quantity-btn-plus"
                    color="#575757"
                  />
                </button>
                <span className="cart-item__details-qty">{quantity}</span>
                <button
                  className="cart-item__quantity-btn"
                  onClick={() => handleQuantityChange("increase")}
                >
                  <AiFillPlusCircle
                    size={26}
                    className="quantity-btn-minus"
                    color="#575757"
                  />
                </button>
              </div> */}
              <div>
                <span style={{
                  fontSize:"14px"
                }}>Quantity: {quantity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default function Index() {
  const dispatch = useDispatch();
 
  // const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState<any>({});
  const [cartItems, setCartItems] = useState<any[]>();

  const [toastMessage, setToastMessage] = useState<any>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "success"
  );
  const [hydrated, setHydrated] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number>(0);

  useEffect(() => {
    setHydrated(true);
  }, []);

  
  const fetchCart = async () => {
    const searchParams = new URLSearchParams(window.location.search);

    const user_id = searchParams.get('user_id') ?? '';
    const order_id = searchParams.get('order_id') ?? '';
    try {
      setIsLoading(true)
      const formData = new FormData();
      formData.append("user_id", user_id);
      formData.append("order_id", order_id);
      

      const response: any = await Service.Cart_Method.cartCheckoutPaymentOrder(formData);

      // Do something with CartList here
      if(response?.success === true){
      setOrderData(response)
      setItem("user_id",response?.user_id)
      setCartItems(response?.products)
      setIsLoading(false)
    }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchCart();
  }, []); // Only run on component mount


  const [name, setName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("2024-07-05");
  const [cvv, setCvv] = useState<string>("");
  const [error, setError] = useState("");

  const [nameError, setNameError] = useState<string>("");
  const [cardNumberError, setCardNumberError] = useState<string>("");
  const [expiryDateError, setExpiryDateError] = useState<string>("");
  const [cvvError, setCvvError] = useState<string>("");

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
                  <div className="cart">
                  <div className="cart__items">
                    {/* {hydrated && user && user?.name && (
                      <h2 className="cart__title">{user?.name ?? "Guest"}</h2>
                    )} */}

                    { !isLoading?<>
                    {cartItems && cartItems.length > 0 ? (
                      cartItems.map((item: any, index: number) => (
                        <CartItem
                          key={index}
                          item={item}
                        //   onDeleteStart={() => setDeletingItem(item.id)}
                        //   onDeleteEnd={() => setDeletingItem(null)}
                        />
                      ))
                    ) : (
                      <div className="flex justify-center item-center h-full">
                        <p className="text-center text-gray-500">
                          Your cart is empty
                        </p>
                      </div>
                    )}
                    </>: <div style={{
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                      minHeight:"200px"
                    }}>
                    <div
            style={{
              // display: "inline-block",
              // position:"absolute",
              width: "24px",
              height: "24px",
              border: "3px solid #007bff",
              borderTop: "3px solid transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              // marginBottom: "10px",
              // top:"30%",
              // left:"50%",
            }}
          /></div>}
                  </div>
                  <div className="cart__total">
                    <span className="cart__total-items">
                      {/* Item Total ({cartItems ? cartItems?.length : "0"} items) */}
                    </span>
                    <span className="cart__total-price">
                      {/* {cartSummary?.sub_total ?? "£0.00"} */}
                    </span>
                  </div>
                </div>
                </div>
                {hydrated &&
                //   user_type &&
                //   (user_type !== "customer_credit" ||
                //     (user_type === "customer_credit" &&
                //       Number(user?.organization_type) !== 1 &&
                //       Number(user?.organization_type) !== 2)) && (
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
                //   {/* )} */
                }
              </div>
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
                orderData={orderData}
                // grand_total_value={cartSummary?.grand_total_value}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Elements>
  );
}