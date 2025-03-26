import React, { useEffect, useState, useRef } from "react";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Autoplay, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
// import { selectCartState } from "@/redux/slices/cartSlice";
// import { addToCart } from "@/redux/slices/cartSlice";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import ProductSlider from "./widgets/ProductSlider";
import { Modal, Form } from "react-bootstrap";
import ProducDetailContent from "./ProducDetailContent";
import ProducSlider from "@/components/ProductSlider";
import { FaTimes } from "react-icons/fa";
import ProductDetailModal from "./ProductDetailModal";
import { addToCart } from "@/redux/store/cart/cartConfigSlice";
import { IRootState } from "@/redux/store";
import { setProducts } from "@/redux/store/product/productConfigSlice";

export default function BestSellerSlider() {
  const [show, setShow] = useState(false);
  const swiperRef = useRef<any>(null);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product)); // Dispatch action to add product to cart
  };

  const handleQuickViewClick = (product: any) => {
    console.log("Quick View Clicked it is product of it", product);
    setSelectedProduct(product)
    setShow(true);
  };

  const handleAddToCartClick = (product: any) => {
    // console.log("Add to Cart Clicked", product);
  };

  const products = useSelector((state: IRootState) => state.product.productsFeatured);


  // console.log("Products from Redux:", products);
  // console.log('products,,,,,,,', products);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div>
      <div className="lg-container ">
        <div className="best-seller-section">
          <div className="center-heading">
            <h2>Trending Products</h2>
            <p>There are many variations of passages of lorem ipsum</p>
          </div>
          <ProductSlider
            products={products}
            slidesPerView={{
              0: 1,
              500: 2,
              768: 3,
              1200: 4,
            }}
            autoplayDelay={4000}
            showNavigation={true}
            onQuickViewClick={handleQuickViewClick}
            onAddToCartClick={handleAddToCartClick}
          />
          <ProductDetailModal
            show={show}
            onClose={handleClose}
            product={selectedProduct}
          />
        </div>
      </div>
    </div>
  );
}
