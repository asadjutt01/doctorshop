import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Accordion, FormControl } from "react-bootstrap";
import Image from "next/image";
// import productvideo from "../app/images/productvideo.png";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import AboutProduct from "@/components/AboutProduct";
// import ProductVideo froma "@/components/ProductVideo";
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
import coll3 from "../../app/images/coll3.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
import {
  getCartList,
  getCartSummary,
} from "@/utils/fetchData/fetchDataFunction";
import {
  setCartSummary,
  setCartsWithList,
} from "@/redux/store/cart/cartConfigSlice";
import { getItem } from "@/utils/localStorage/localStorage";
import Loader from "@/components/Loader/Loader";
import Swal from "sweetalert2";
import Toast from "@/components/Toast";
import Service from "@/services";
import { getCartCount } from "@/components/LoadInitialData/LoadInitialData";
import { FaTrash } from "react-icons/fa";

const collections = [
  { src: coll3, title: "Hemodialysis Machine" },
  { src: coll3, title: "xray ultrasound machine" },
  { src: coll3, title: "ICU Medical ventilator" },
  { src: coll3, title: "Hemodialysis Machine" },
  { src: coll3, title: "xray ultrasound machine" },
  { src: coll3, title: "ICU Medical ventilator" },
];

interface CartItemProps {
  item: any;
  onDeleteStart?: () => void;
  onDeleteEnd?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onDeleteStart, onDeleteEnd }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item?.quantity ?? 1);
  const price = parseFloat(item?.price?.replace(/[^0-9.]/g, "")) || 0;
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
      const responseqty: any = await Service.Cart_Method.cartQuantityUpdate(formData);
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
      {deleting ? (
              <div style={{
                width:"100%",
                height:"100%",
                position:"absolute",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                backdropFilter:"blur(4px)"
              }}>

             
              <div
                style={{
                  // display: "inline-block",
                  
                  width: "24px",
                  height: "24px",
                  border: "3px solid #007bff",
                  borderTop: "3px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  left:"50%"
                }}
              />
               </div>
            ) : (
           
              <button className="remove-item-btn" onClick={() => { handleDelete() }}
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
  {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ef4444"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "16px", height: "16px" }}
  >
    <path d="M3 6h18M9 6v12m6-12v12M10 6V4h4v2" />
  </svg> */}
   <FaTrash
                color="#f30a0a"
                size={10}
                // onClick={() => { handleDelete() }}
                className=""
              />
</button>

            )}
      <div className="cart-item__content ">
        <div className="cart-item__details">
          <div className="cart-item__image-container">
            
            <Image
              src={item.product_thumbnail_image}
              alt="Glossy pill bottle"
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
                  <span className="cart-item__info-section-detail-key">Product Code:</span>
                  <span className="cart-item__info-section-detail-value">{item?.product_code && item.product_code != 0 ? item.product_code : "-"}</span>
                </div>
              )}
              {item?.pip_code && item.pip_code != 0 && (
                <div className="cart-item__info-section-detail">
                  <span className="cart-item__info-section-detail-key">PIP Code:</span>
                  <span className="cart-item__info-section-detail-value">{item?.pip_code && item.pip_code != 0 ? item.pip_code : "-"}</span>
                </div>
              )}
              {item?.variation  && 
               (<div className="cart-item__info-section-detail">
                <span className="cart-item__info-section-detail-key">Variation:</span>
                <span className="cart-item__info-section-detail-value">{item?.variation 
                // && item.variation != 0 
                 ? item.variation : "-"}</span>
              </div>)}
            </div>
          </div>
        </div>
        <div className="cart-item__price-section">
          <span className="cart-item__price">{totalPrice?.toFixed(2) ?? "-"}</span>
          <div>
            <div className="cart-item__quantity">
              <button
                className="cart-item__quantity-btn"
                onClick={() => handleQuantityChange("decrease")}
                disabled={quantity === 1}
                style={{
                  opacity: quantity === 1 ? 0.5 : 1,
                  cursor: quantity === 1 ? "not-allowed" : "pointer",
                }}
              >
                <AiFillMinusCircle size={26} className="quantity-btn-plus" color="#575757" />
              </button>
              <span className="cart-item__details-qty">{quantity}</span>
              <button
                className="cart-item__quantity-btn"
                onClick={() => handleQuantityChange("increase")}
              >
                <AiFillPlusCircle size={26} className="quantity-btn-minus" color="#575757" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CartSummaryProps {
  cartItemsLength: number;
  cartItems: any;
  deleting?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItemsLength, cartItems, deleting = false }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [authToken, setAuthToken] = useState<any>(null);
  const [isPharma, setisPharma] = useState<any>(null);
  const hasPharma = cartItems?.some((product: any) => product?.pharmaceutical_product === "true");

  useEffect(() => {
    const token: any = getItem("authToken");
    const isPharma: any = getItem("is_pharmaceutical");
    setAuthToken(token);
    setisPharma(isPharma);
  }, []);

  const cartSummary = useSelector((state: IRootState) => state.cart.cartSummary);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");
  const closeToast = () => {
    setToastMessage(null);
  };

  const handleClick = () => {
    if (cartItemsLength > 0) {
      // console.log("authToken>>>>>>", authToken);
      // console.log("hasPharma>>>>", hasPharma);
      // console.log("isPharma>>>", isPharma);
      if (hasPharma && !authToken) {
        const data = {
          fromcheckout: true,
          hasPharma: true,
          login: false,
        };
        // Show toast
        setToastType("error");
        setToastMessage("Pharmaceutical products require registration.");
        // router.push("/login/");
        router.push(
          {
            pathname: `/login`,
            query: data,
          },
          `/login`,
          { shallow: true }
        );
        // Clear toast after delay
        setTimeout(() => {
          setToastMessage(null);
        }, 1500);
        return; // Stop further execution
      }
      if (!hasPharma && !authToken) {
        const data = {
          fromcheckout: true,
        };
        // Show toast
        setToastType("info");
        setToastMessage("Proceeding to Login as Guest...");
        // console.log("guest>>>>>>>>>>>>>>");
        router.push(
          {
            pathname: `/checkout-login-register/`,
            query: data,
          },
          `/checkout-login-register/`,
          { shallow: true }
        );
        // Clear toast after delay
        setTimeout(() => {
          setToastMessage(null);
        }, 1500);
        return; // Stop further execution
      }
      if (isPharma === 0 && authToken) {
        const data = {
          fromcheckout: true,
          hasPharma: true,
          login: true,
          isPharma: false,
        };
        setToastType("info");
        setToastMessage("Register your pharmaceutical account");
        router.push(
          {
            pathname: `/register-pharma/`,
            query: data,
          },
          `/register-pharma/`,
          { shallow: true }
        );
        return; // Stop further execution
      }
      if (isPharma === 1 && authToken) {
        // Show toast
        setToastType("info");
        setToastMessage("Proceeding to checkout...");
        router.push("/add-to-cart/checkout/");
        // Clear toast after delay
        setTimeout(() => {
          setToastMessage(null);
        }, 1500);
        return; // Stop further execution
      }
      // Show toast
      setToastType("info");
      setToastMessage("Proceeding to checkout...");
      router.push("/add-to-cart/checkout/");
      // Clear toast after delay
      setTimeout(() => {
        setToastMessage(null);
      }, 1500);
    }
  };

  return (
    <div className="cart-summary relative">
      {deleting && (
                      <div style={{
                        width:"100%",
                        height:"100%",
                        position:"absolute",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backdropFilter:"blur(4px)"
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
        />
        </div>
      )}
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Net Amount: </span>
        <span className="cart-summary__item-value">{cartSummary?.sub_total ?? "£0.00"}</span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Carriage Charge: </span>
        <span className="cart-summary__item-value">{cartSummary?.shipping_cost ?? "£0.00"}</span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Discount: </span>
        <span className="cart-summary__item-value">{cartSummary?.discount ?? "£0.00"}</span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Vat is 20%: </span>
        <span className="cart-summary__item-value">{cartSummary?.tax ?? "£0.00"}</span>
      </div>
      <div className="cart-summary__total">
        <span>Order Total: </span>
        <span className="primary-text">{cartSummary?.grand_total ?? "£0.00"}</span>
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
        disabled={!(cartItemsLength > 0)}
        onClick={handleClick}
      >
        Check Out
      </button>
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          duration={3000}
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default function Index() {
  const dispatch = useDispatch();
  const cartsWithList = useSelector((state: IRootState) => state.cart.carts);
  const cartSummary = useSelector((state: IRootState) => state.cart.cartSummary);
  const cartItems: any = cartsWithList?.data[0]?.cart_items;
  const hasPharma = cartItems?.some((product: any) => product?.pharmaceutical_product === "true");
  const user: any = getItem("user");
  const getPharma: any = getItem("user_type");
  const [hydrated, setHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingItem, setDeletingItem] = useState<string | null>(null);

  useEffect(() => {
    setHydrated(true);
    const fetchCartSummary = async () => {
      try {
        setIsLoading(true);
        const cartList = await getCartList();
        const cartSummary: any = await getCartSummary();
        if (cartSummary && cartList) {
          dispatch(setCartSummary(cartSummary));
          dispatch(setCartsWithList(cartList));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCartSummary();
  }, [dispatch]);

  return (
    <div>
      <HeaderWithCat />
      <div className="addtocart">
        <div className="lg-container">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Breadcrumb />
              {hasPharma ? (
                <div className="pharmaceutical-warning">
                  <span className="register-warning-note">
                    Note on (POM) Pharmaceutical items! We can only sell & ship
                    Pharma items to registered medical professionals at
                    registered premises. If you are not Pharma approved, you
                    should complete our Online POM Form & we will let you know
                    when your account has been given Pharma Approval.
                  </span>
                  <Link href={"/register-pharma"}>
                    <div className="register-warning-pill">
                      <span>Register For A Pharmaceutical Account</span>
                    </div>
                  </Link>
                </div>
              ) : null}
              <div className="cart-container">
                <div className="cart">
                  <div className="cart__items">
                    {hydrated && user && user?.name && (
                      <h2 className="cart__title">{user?.name ?? "Guest"}</h2>
                    )}
                    {cartItems && cartItems.length > 0 ? (
                      cartItems.map((item: any, index: number) => (
                        <CartItem
                          key={index}
                          item={item}
                          onDeleteStart={() => setDeletingItem(item.id)}
                          onDeleteEnd={() => setDeletingItem(null)}
                        />
                      ))
                    ) : (
                      <div className="flex justify-center item-center h-full">
                        <p className="text-center text-gray-500">
                          Your cart is empty
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="cart__total">
                    <span className="cart__total-items">
                      Item Total ({cartItems ? cartItems?.length : "0"} items)
                    </span>
                    <span className="cart__total-price">
                      {cartSummary?.sub_total ?? "£0.00"}
                    </span>
                  </div>
                </div>
                <CartSummary
                  cartItemsLength={cartItems?.length}
                  cartItems={cartItems}
                  deleting={!!deletingItem}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}