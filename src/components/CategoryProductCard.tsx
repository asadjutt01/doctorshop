// components/ProductCard.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import noimage from "../app/images/no-image.jpg";
import { generateSlug } from "@/utils/functions";
import Service from "@/services";
import Toast from "@/components/Toast"; // Import the Toast component
import { getCartCount } from "./LoadInitialData/LoadInitialData";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
import { getItem } from "@/utils/localStorage/localStorage";

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
  pip_code: any;
  price: number;
  vat: any;
  product_code: any;
  links: {
    details: string;
  };
}

interface CategoryProductCardProps {
  products: Product[];
  handleQuickViewClick: (product: Product) => void;
  onAddToCartClick?: (product: Product) => void;
  selectedCategory: any;
  selectedSubCategory: any;
  selectedSubSubCategory?: any;
  navigatetoProductdirectly?: boolean;
}

const CategoryProductCard: React.FC<CategoryProductCardProps> = ({
  products,
  handleQuickViewClick,
  onAddToCartClick,
  selectedCategory,
  selectedSubCategory,
  selectedSubSubCategory,
  navigatetoProductdirectly = false,
}) => {
  console.log(products, "products");
  const dispatch = useDispatch();
  const [failedImages, setFailedImages] = useState<Set<string | number>>(
    new Set()
  );
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "success"
  );
  const user_id: any = getItem("user_id");
  const isAuthenticated = useSelector(
    (state: IRootState) => state.auth.isAuthenticated
  );
  const handleImageError = (productId: string | number) => {
    setFailedImages((prev) => new Set(prev).add(productId));
  };

  const handAddToCart = async (product: any) => {
    setLoading(true);
    setToastType("info");
    setToastMessage(
      "Adding to Cart... Please wait while we process your request"
    );

    const formData = new FormData();
    formData.append("id", product?.id);
    formData.append("quantity", "1");
    formData.append("tax", product?.vat);
    formData.append("discount", product?.discount);
    // formData.append("user_id", "89");
    formData.append("product_name", product?.name);
    formData.append("stock_qty", "1");
    formData.append("price", product?.variant[0]?.price);
    formData.append("variant", product.variant[0].variant);
    if (isAuthenticated) {
      formData.append("user_id", user_id);
    } else {
      const temp_user_id: any = getItem("temp_user_id");
      formData.append("temp_user_id", temp_user_id);
    }
    try {
      const response = await Service.Cart_Method.addToCart(formData);
      if (response) {
        // dispatch(addToCart(formData)); // Uncomment if using Redux
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
    } finally {
      setLoading(false);
    }
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <div className="row ">
      {products.map((product: any, index) => {
        const isImageInvalid =
          !product.thumbnail_image ||
          product.thumbnail_image.trim() === "" ||
          failedImages.has(product.id);
        return (
          <div className=" col-lg-4 col-md-6" key={index}>
            <div className="products-card">
              <Link
                href={
                  navigatetoProductdirectly
                    // ? `/products/${product?.slug}`
                    ? `/${generateSlug(selectedCategory.name)}/${generateSlug(
                        selectedSubCategory?.name
                      )}/${generateSlug(product?.name)}`
                    : `/${generateSlug(selectedCategory.name)}/${generateSlug(
                        selectedSubCategory?.name
                      )}/${generateSlug(
                        selectedSubSubCategory?.name
                      )}/${generateSlug(product?.name)}`
                }
              >
                <div className="banner">
                  <Image
                    src={isImageInvalid ? noimage : product.thumbnail_image}
                    alt={`Image of ${product.name}`}
                    width={500}
                    height={500}
                    onError={() => handleImageError(product.id)}
                    style={{
                      width: "100%",
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Link>
              <div className="content">
                <Link
                  href={
                    navigatetoProductdirectly
                      // ? `/products/${product?.slug}`
                      ? `/${generateSlug(selectedCategory.name)}/${generateSlug(
                        selectedSubCategory?.name
                      )}/${generateSlug(product?.name)}`
                      : `/${generateSlug(selectedCategory.name)}/${generateSlug(
                          selectedSubCategory?.name
                        )}/${generateSlug(
                          selectedSubSubCategory?.name
                        )}/${generateSlug(product?.name)}`
                  }
                >
                  <h6 style={{ height: "50px" }}>{product.name}</h6>
                </Link>
                {product.product_code &&
                  product.product_code !== "N/A" &&
                  product.product_code !== "0" && (
                    <div className="product_code">
                      <div className="details">
                        <div className="code_name">Product Code:</div>
                        <div className="code">{product.product_code}</div>
                      </div>
                    </div>
                  )}

                {product.pip_code &&
                  product.pip_code !== "N/A" &&
                  product.pip_code !== "0" && (
                    <div className="pip_code">
                      <div className="details">
                        <div className="code_name">PIP Code:</div>
                        <div className="code">{product.pip_code}</div>
                      </div>
                    </div>
                  )}

                <div className="action">
                  <div className="pricing">
                    <div className="price">
                      <div>
                        <span className="cost">
                          £
                          {product.price != null && !isNaN(product.price)
                            ? Number(product.price).toFixed(2)
                            : "0.00"}
                        </span>
                      </div>
                      <div className="inc_vat">
                        <div className="cost_inc_vat">
                          £
                          {(
                            (Number(product?.variant?.[0]?.price) || 0) +
                            (Number(product?.vat) || 0)
                          ).toFixed(2)}
                          inc VAT
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="product_btns">
                      <button
                        className="quick_view_btn"
                        onClick={() => handleQuickViewClick(product)}
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
          </div>
        );
      })}
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          duration={5000}
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default CategoryProductCard;
