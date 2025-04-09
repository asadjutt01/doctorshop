import React, { useEffect, useState } from "react";
import { Badge, Button, FormControl } from "react-bootstrap";
import Image from "next/image";
import fb from "../app/images/fb.svg";
import whatsapp from "../app/images/whatsapp.svg";
import instagram from "../app/images/insta.svg";
import youtube from "../app/images/youtube.svg";
import x from "../app/images/x.svg";
import linkeidin from "../app/images/Linkin.svg";
import tiktok from "../app/images/tictoc.svg";
import pinterest from "../app/images/Pin.svg";
import { useRouter } from "next/router";
import Service from "@/services";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/store/cart/cartConfigSlice";
import { getItem } from "@/utils/localStorage/localStorage";
import Toast from "@/components/Toast";
import { getCartCount } from "./LoadInitialData/LoadInitialData";
import { IRootState } from "@/redux/store";

interface ProductDetailContentProps {
  showShort: boolean;
  productname?: any;
  showSocial: boolean;
  warningMobile?: any;
  product?: any;
}

export default function ProducDetailContent({
  showShort,
  showSocial,
  productname,
  warningMobile = true,
  product,
}: ProductDetailContentProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user_id: any = getItem("user_id");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");
  const [selectedVariant, setSelectedVariant] = useState<any>(product?.variant?.[0] || {});
  const isAuthenticated = useSelector((state: IRootState) => state.auth.isAuthenticated);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleVariantChange = (variant: any) => {
    setSelectedVariant(variant);
    setQuantity(1);
  };

  const handAddToCart = async () => {
    setLoading(true);
    setToastType("info");
    setToastMessage("Adding to Cart... Please wait while we process your request");

    let cartItem = {
      id: product?.id || "",
      quantity: quantity,
      tax: product?.vat || 0,
      discount: product?.discount || 0,
      user_id: user_id || "",
      product_name: product?.name || "",
      stock_qty: quantity,
      price: selectedVariant?.price || product?.price || 0,
      variant: selectedVariant?.variant || "",
      sku: selectedVariant?.sku || "",
      pip_code: selectedVariant?.pip_code || "",
    };

    if (!isAuthenticated) {
      const temp_user_id: any = getItem("temp_user_id");
      cartItem = { ...cartItem, user_id: temp_user_id };
    }

    const formData = new FormData();
    formData.append("id", product?.id);
    formData.append("quantity", JSON.stringify(quantity));
    formData.append("tax", product?.vat);
    formData.append("discount", product?.discount);
    formData.append("product_name", product?.name);
    formData.append("stock_qty", JSON.stringify(quantity));
    formData.append("price", selectedVariant?.price || product?.price);
    formData.append("variant", selectedVariant?.variant || "");
    formData.append("sku", selectedVariant?.sku || "");
    formData.append("pip_code", selectedVariant?.pip_code || "");

    if (isAuthenticated) {
      formData.append("user_id", user_id);
    } else {
      const temp_user_id: any = getItem("temp_user_id");
      formData.append("temp_user_id", temp_user_id);
    }

    try {
      const response = await Service.Cart_Method.addToCart(formData);
      if (response) {
        getCartCount(dispatch);
        dispatch(addToCart(cartItem));
        setToastType("success");
        setToastMessage("Added to Cart! The item has been successfully added to your cart.");
      } else {
        setToastType("error");
        setToastMessage("Failed to Add! Unable to add the item to your cart. Please try again.");
      }
    } catch (error) {
      console.error("Error adding cart:", error);
      setToastType("error");
      setToastMessage("Error! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { src: fb, alt: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=" },
    { src: whatsapp, alt: "WhatsApp", url: "https://web.whatsapp.com/send?text=" },
    { src: instagram, alt: "Instagram", url: "https://www.instagram.com" },
    { src: youtube, alt: "YouTube", url: "https://www.youtube.com" },
    { src: x, alt: "X (formerly Twitter)", url: "https://twitter.com/intent/tweet?url=" },
    { src: linkeidin, alt: "LinkedIn", url: "https://www.linkedin.com/shareArticle?mini=true&url=" },
    { src: tiktok, alt: "TikTok", url: "https://www.tiktok.com" },
    { src: pinterest, alt: "Pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
  ];

  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(window.location.href);
    // Set the first variant as default, ensuring data shows even if variant is "0"
    setSelectedVariant(product?.variant?.[0] || {});
  }, [product]);

  // console.log("product>>>>>>>>>>>>>>>>>>>>>>>>>>>>dasdS?>", product);


  const closeToast = () => setToastMessage(null);
  const handleBuyItnNow = () => {
    handAddToCart();
    router.push("/add-to-cart/");
  };
  return (
    <div>
      <div className="details">
        <h1>{product?.name}</h1>
        <div className="points_parent">
          <div className="points">
            <h3 className="detail-h3">Brand Name:</h3>
            <span>{product?.brand}</span>
          </div>
          {product?.pharmaceutical_product === "true" && (
            <div className="points">
              <Badge pill className="medical-badge" style={{ backgroundColor: "#00BF73", color: "white", fontWeight: "500" }}>
                Pharmaceutical Product
              </Badge>
            </div>
          )}
        </div>

        {/* Product Codes - Will show even if variant is "0" */}
        <div className="points_parent">
          {selectedVariant?.sku && selectedVariant.sku !== "N/A" && selectedVariant.sku !== "0" && (
            <div className="points">
              <h3 className="detail-h3">Product Code:</h3>
              <span>{selectedVariant.sku}</span>
            </div>
          )}
          {selectedVariant?.pip_code && selectedVariant.pip_code !== "N/A" && selectedVariant.pip_code !== "0" && (
            <div className="points">
              <h3 className="detail-h3">PIP Code:</h3>
              <span>{selectedVariant.pip_code}</span>
            </div>
          )}
        </div>

        <div className="flex-col gap-4">
          {product?.pack_qty && (
            <div className="qty">
              <div className="size"><h3 className="detail-h3">Pack QTY:</h3></div>
              <div className="badge-parent"><div className="badge">{product?.pack_qty}</div></div>
            </div>
          )}
          {product?.size && (
            <div className="qty">
              <div className="size"><h3 className="detail-h3">Size:</h3></div>
              <div className="badge-parent"><div className="badge">{product?.size}</div></div>
            </div>
          )}
          {/* Variant Selection - Only show pills if variant exists and is not "0" */}
          {product?.variant?.length > 0 && selectedVariant?.variant !== "0" && selectedVariant?.variant !== "" && (
            <div className="qty">
              <div className="size"><h3 className="detail-h3">Variant:</h3></div>
              <div className="badge-parent">
                {product.variant.map((variant: any) => (
                  <div
                    key={variant.id}
                    className="badge"
                    onClick={() => handleVariantChange(variant)}
                    style={{
                      cursor: "pointer",
                      margin: "0 5px",
                      padding: "5px 10px",
                      backgroundColor: selectedVariant?.id === variant.id ? "#005eb8" : "#808080",
                      color: "white",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {variant.variant}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="cart-summary__delivery_time-detail-page delivery_time_width">
            <span className="">Delivery:</span>
            <span>3 to 5 Working days</span>
          </div>
        </div>

        <div className="rating mt-3">
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <i key={index} className={index < product?.rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
            ))}
          </div>
          <span>({product?.reviews?.length ?? "0"}) reviews</span>
        </div>

        {/* Price Card - Will show default data even if variant is "0" */}
        <div className="price-card">
          <div className="price-card-buy">
            <div className="w-full">
              {selectedVariant?.qty && (
                <p>There are {selectedVariant.qty} products left</p>
              )}
              <div className="total">
                <h4>{`£${selectedVariant?.price || product?.price || "0.00"}`}</h4>
                <small>
                  {`£${selectedVariant?.total_price || "0.00"}`}
                  <br />
                  inc VAT
                </small>
              </div>
            </div>
            <div className="qty-picker-caontainer w-full">
              <div className="qty-picker">
                <Button variant="" className="cart-item__quantity-btn" onClick={handleDecrement}>
                  <i className="fa-solid fa-minus"></i>
                </Button>
                <FormControl
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  style={{ width: "80px" }}
                />
                <Button variant="" className="cart-item__quantity-btn" onClick={handleIncrement}>
                  <i className="fa-solid fa-plus"></i>
                </Button>
              </div>
            </div>
          </div>
          <div className="price-card-add-card">
            <button className="btn btn-buy-now" onClick={handleBuyItnNow}>
              Buy it now
            </button>
            <button className="btn btn-cart" onClick={handAddToCart}>
              Add to cart
            </button>
          </div>
        </div>

        {warningMobile && (
          <div className="warning-msg-nobile">
            <h6>Restricted Access, Authorized Use Only</h6>
            <p>
              Please be advised that access to this product is restricted and
              available only to eligible individuals. At Doctor Shop, we are
              committed to ensuring the safety and proper use of our
              pharmaceuticals.
            </p>
            <button className="btn btn-cart-mobile">
              Register For A Pharmaceutical Account
            </button>
          </div>
        )}
        {showShort && (
          <div className="short-disc">
            <h6>Short Description:</h6>
            <p dangerouslySetInnerHTML={{ __html: product?.short_description }} />
          </div>
        )}
        {showSocial && (
          <div>
            <h3 style={{ color: "#575757", fontSize: "20px", marginTop: "20px" }}>Share:</h3>
            <div className="share-options">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={`${link.url}${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${link.alt}`}
                >
                  <p><Image src={link.src} alt={link.alt} width={30} height={30} /></p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      {toastMessage && (
        <Toast message={toastMessage} type={toastType} duration={3000} onClose={closeToast} />
      )}
    </div>
  );
}