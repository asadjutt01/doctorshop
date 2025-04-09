import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductSlider from "./widgets/ProductSlider";
// import { selectCartState } from "@/redux/slices/cartSlice";
import ProductDetailModal from "./ProductDetailModal";
import { IRootState } from "@/redux/store";

export default function NewArrivalSlider() {
  const products = useSelector((state: IRootState) => state.product.productsToday);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [show, setShow] = useState(false);
  const handleQuickViewClick = (product: any) => {
    // console.log("Quick View Clicked", product);
    setSelectedProduct(product)
    setShow(true);
  };


  const handleAddToCartClick = (product: any) => {
    // console.log("Add to Cart Clicked", product);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="lg-container">
        <div className="new-arrivals-section">
          <div className="center-heading">
            <h2>Best Seller</h2>
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
