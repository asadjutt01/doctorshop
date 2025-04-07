import React, { useRef, useState, useEffect } from "react";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Autoplay, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import "swiper/css/pagination";
import "swiper/css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import noimage from "../../app/images/no-image.jpg";
import { FaHeart } from "react-icons/fa";
import Service from "@/services";
import { getItem, setItem } from "@/utils/localStorage/localStorage";
import { generateSlug } from "@/utils/functions";
import { useRouter } from "next/router";
import Toast from "@/components/Toast";
import { IRootState } from "@/redux/store";
import { getCartCount } from "../LoadInitialData/LoadInitialData";


interface Product {
  id: string | number;
  name: string;
  thumbnail_image: string;
  has_discount: boolean;
  discount: string;
  stroked_price: string;
  main_price: string;
  rating: number;
  sales: number;
  is_wholesale: boolean;
  productCode: number;
  pipCode: number;
  price: number;
  priceIncVat: any;
  links: {
    details: string;
  };
}

interface ProductSliderProps {
  products: any;
  slidesPerView?: {
    [breakpoint: number]: number;
  };
  autoplayDelay?: number;
  showNavigation?: boolean;
  onQuickViewClick?: (product: Product) => void;
  onAddToCartClick?: (product: Product) => void;
}

export default function ProductSlider({
  products,
  slidesPerView = {
    0: 1,
    768: 2,
    991: 4,
    1500: 5,
  },
  autoplayDelay = 3000,
  showNavigation = true,
  onQuickViewClick,
  onAddToCartClick,
}: ProductSliderProps) {
  const router = useRouter();
  const swiperRef = useRef<any>(null);
  const user_id: any = getItem("user_id");
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const [error, setError] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string | number>>(
    new Set()
  );
  const [wishlistedIds, setWishlistedIds] = useState<Set<string | number>>(
    new Set()
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "success"
  );
  // const [authToken, setAuthToken] = useState<string | null>(null);
  const isAuthenticated = useSelector(
    (state: IRootState) => state.auth.isAuthenticated
  );
  useEffect(() => {
    // const token:any = getItem("authToken"); // Ensure getItem correctly retrieves the token
    // setAuthToken(token); // Set `null` explicitly if token is empty or undefined
  }, [isAuthenticated]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumTimeElapsed(true);
    }, 4000);

    if (minimumTimeElapsed) {
      if (products === undefined || products === null) {
        setError(true);
        setLoading(false);
      } else if (products.length === 0) {
        setLoading(false);
      } else if (products.length > 0) {
        setLoading(false);
        setError(false);
      }
    }

    return () => clearTimeout(timer);
  }, [products, minimumTimeElapsed]);

  const handleImageError = (productId: string | number) => {
    setFailedImages((prev) => new Set(prev).add(productId));
  };

  const handleWishlistToggle = async (product: Product) => {
    const isCurrentlyWishlisted = wishlistedIds.has(product.id);
    setWishlistedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(product.id)) {
        newSet.delete(product.id);
        if (selectedProduct?.id === product.id) {
          setSelectedProduct(null);
        }
        setToastType("info");
        setToastMessage(`${product.name} removed from wishlist`);
      } else {
        newSet.add(product.id);
        setSelectedProduct(product);
        setToastType("success");
        setToastMessage(`${product.name} added to wishlist`);
      }
      return newSet;
    });

    try {
      const data = {
        product_id: product.id,
        user_id: user_id,
      };
      await Service.Wish_List_Method.addwishlist(data);
    } catch (err) {
      console.error("Wishlist Error:", err);
      setToastType("error");
      setToastMessage("Failed to update wishlist. Please try again.");
      // Revert the wishlist state on error
      setWishlistedIds((prev) => {
        const newSet = new Set(prev);
        if (isCurrentlyWishlisted) {
          newSet.add(product.id);
        } else {
          newSet.delete(product.id);
        }
        return newSet;
      });
    }
  };

  const handleNavigate = (id: number, slug: string) => {
    const data = {
      productId: id,
      productName: slug,
    };
    router.push(
      {
        pathname: `/products/${slug}`,
        query: data,
      },
      `/products/${slug}`,
      { shallow: true }
    );
  };

  const handAddToCart = async (product: any) => {
    setToastType("info");
    setToastMessage(
      "Adding to Cart... Please wait while we process your request"
    );
    console.log("product.variant", product.variant);
    const formData = new FormData();
    formData.append("id", product?.id);
    formData.append("quantity", "1");
    formData.append("tax", product?.vat);
    formData.append("discount", product?.discount);
    // formData.append("user_id", user_id);
    formData.append("product_name", product?.name);
    formData.append("stock_qty", "1");
    formData.append("price", product.variant[0]?.price);
    formData.append("variant", product.variant[0]?.variant);
    if (isAuthenticated) {
      formData.append("user_id", user_id);
    } else {
      const temp_user_id: any = getItem("temp_user_id");
      formData.append("temp_user_id", temp_user_id);
    }

    console.log("isAuthenticated.......", isAuthenticated);
    try {
      const response = await Service.Cart_Method.addToCart(formData);
      if (response) {
        console.log("Successfully Add to cart");
        getCartCount(dispatch);
        setToastType("success");
        setToastMessage(
          "Added to Cart! The item has been successfully added to your cart."
        );
      } else {
        console.error("Failed to add in cart");
        setToastType("error");
        setToastMessage(
          "Failed to Add! Unable to add the item to your cart. Please try again."
        );
      }
    } catch (error) {
      console.error("Error adding cart:", error);
      setToastType("error");
      setToastMessage("Error! Something went wrong. Please try again.");
    }
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <div className="swiper-slider-section">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #ccc",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">Failed to load products.</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <>
          <Swiper
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={16}
            navigation={showNavigation}
            breakpoints={Object.fromEntries(
              Object.entries(slidesPerView).map(([key, value]) => [
                parseInt(key, 10),
                { slidesPerView: value },
              ])
            )}
            modules={[Autoplay, Pagination]}
          >
            {products.map((product: any) => {
              const isImageInvalid =
                !product.thumbnail_image ||
                product.thumbnail_image.trim() === "" ||
                failedImages.has(product.id);
              const isWishlisted = wishlistedIds.has(product.id);

              return (
                <SwiperSlide
                  key={product.id}
                  className="slider-card cursor-pointer"
                >
                  <div className="products-card">
                    <div
                      className="banner"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleNavigate(product.id, product.slug)}
                    >
                      <Image
                        src={isImageInvalid ? noimage : product.thumbnail_image}
                        alt={`Image of ${product.name}`}
                        width={500}
                        height={500}
                        onError={() => handleImageError(product.id)}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "10px 10px 0px 0px",
                        }}
                      />
                    </div>

                    <div className="content">
                      <h6
                        style={{ height: "50px", cursor: "pointer" }}
                        onClick={() => handleNavigate(product.id, product.name)}
                      >
                        {product.name}
                      </h6>

                      {product.product_code && product.product_code !== "N/A" && product.product_code !== "0" && (
                        <div className="product_code">
                          <div className="details">
                            <div className="code_name">Product Code:</div>
                            <div className="code">{product.product_code}</div>
                          </div>
                        </div>
                      )}

                      {product.pip_code && product.pip_code !== "N/A" && product.pip_code !== "0" && (
                        <div className="pip_code">
                          <div className="details">
                            <div className="code_name">PIP Code:</div>
                            <div className="code">{product.pip_code}</div>
                          </div>
                        </div>
                      )}
                      <div
                        className="wishlist_button"
                        onClick={() => handleWishlistToggle(product)}
                      >
                        <FaHeart
                          className={`heart_icon ${isWishlisted ? "wishlisted" : ""
                            }`}
                          style={{ color: isWishlisted ? "#ff0000" : "" }}
                        />
                      </div>

                      <div className="action">
                        <div className="pricing">
                          <div className="price">
                            <div>
                              <span className="cost">
                                £
                                {product?.variant[0]?.price !== undefined &&
                                  product?.variant[0]?.price !== null
                                  ? Number(product?.variant[0]?.price).toFixed(2)
                                  : "00"}
                              </span>
                            </div>

                            <div className="inc_vat">
                              <div className="cost_inc_vat">
                                £
                                {(
                                  (Number(product?.variant?.[0]?.price) || 0) +
                                  (Number(product?.vat) || 0)
                                ).toFixed(2)}
                                &nbsp;inc VAT
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="buttons">
                          <div className="product_btns">
                            <button
                              className="quick_view_btn"
                              onClick={() => onQuickViewClick?.(product)}
                            >
                              Quick View
                            </button>
                            <button
                              className="add_to_cart_btn"
                              onClick={() => handAddToCart?.(product)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {showNavigation && (
            <div className="controlers">
              <div
                className="left-arrow"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div
                className="right-arrow"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <i className="fa-regular fa-arrow-right"></i>
              </div>
            </div>
          )}
        </>
      )}
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
}
