import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Button, Accordion, FormControl } from "react-bootstrap";
import Image from "next/image";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import AboutProduct from "@/components/AboutProduct";
import ProductVideo from "@/components/ProductVideo";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";

import Microscope from "@/components/Microscope";
import Breadcrumb from "@/components/Breadcrumb";
import Taglines from "@/components/Taglines";
import Testimonials from "@/components/Testimonials";
import BestSellerSlider from "@/components/BestSellerSlider";
import ProducDetailContent from "@/components/ProducDetailContent";
import Footer from "@/components/Footer";
import Service from "@/services";
import Loader from "@/components/Loader/Loader";

interface CartItemProps {
  item: any;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__content">
        <div className="cart-item__details">
          <div className="cart-item__image-container">
            <Image
              src={item.image || "https://erpdoctorshop.tech9et.com/public/assets/img/placeholder.jpg"}
              alt={item.product_name || "Product Image"}
              width={100}
              height={100}
              className="cart-item__image"
            />
          </div>
          <div className="cart-item__info">
            <span className="cart-item__info__title">{item.product_name || "--"}</span>
            <div className="cart-item__info-section">
              <div className="cart-item__info-section-detail">
                <span className="cart-item__info-section-detail-key">Product Code: </span>
                <span className="cart-item__info-section-detail-value">{item.product_code || "--"}</span>
              </div>
              <div className="cart-item__info-section-detail">
                <span className="cart-item__info-section-detail-key">PIP Code: </span>
                <span className="cart-item__info-section-detail-value">{item.pip_code || "--"}</span>
              </div>
              <div className="cart-item__info-section-detail">
                <span className="cart-item__info-section-detail-key">Size: </span>
                <span className="cart-item__info-section-detail-value">--</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-item__price-section">
          <span className="cart-item__price">£{item.price ? item.price.toFixed(2) : "--"}</span>
          <div className="cart-item__quantity">
            <button className="cart-item__quantity-btn"><AiFillMinusCircle color="#575757" /></button>
            <span className="cart-item__details">01</span>
            <button className="cart-item__quantity-btn"><AiFillPlusCircle color="#575757" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSummary = ({ order }: { order: any }) => {
  const router = useRouter();
  return (
    <div className="cart-summary">
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Net Amount: </span>
        <span className="cart-summary__item-value">{order.net_amount || "--"}</span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Carriage Charge: </span>
        <span className="cart-summary__item-value">{order.carriage_charge || "--"}</span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Discount: </span>
        <span className="cart-summary__item-value">£0.00</span>
      </div>
      <div className="cart-summary__item">
        <span className="cart-summary__item-key">Vat is 20%: </span>
        <span className="cart-summary__item-value">{order.total_tax || "--"}</span>
      </div>
      <div className="cart-summary__total">
        <span>Order Total: </span>
        <span className="cart-summary__total-price">{order.grand_total || "--"}</span>
      </div>
      <div className="cart-summary__delivery_time">
        <span>Delivery:</span>
        <span>3 to 5 Working days</span>
      </div>
    </div>
  );
};

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  const [Orders_Detail, setOrders_Detail] = useState<any>(null);

  const getOrderDetail = async (id: any) => {
    try {
      const response: any = await Service.Orders_Methods.getOrderDetail(id);
      // console.log("Orders Data >>>>>>", response);
      if (response) {
        setOrders_Detail(response.orders);
      } else {
        // console.log("No orders received.");
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    if (id) {
      getOrderDetail(id);
    }
  }, [id]);

  console.log("Orders_Detail:", Orders_Detail);

  // Show loader for the entire page while data is being fetched
  if (!Orders_Detail) {
    return (
      <div className="full-page-loader">
        <Loader />
      </div>
    );
  }

  // Render the page content once data is available
  return (
    <div>
      <HeaderWithCat />
      <div className="addtocart">
        <div className="lg-container">
          <div className="cart-container">
            <div className="cart">
              <div className="cart__items">
                <h2 className="cart__title">Order Details</h2>
                {Orders_Detail.products.map((item: any, index: number) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>
              <div className="cart__total">
                <span className="cart__total-items">
                  Item Total ({Orders_Detail?.products?.length || 0} items)
                </span>
                <span className="cart__total-price">{Orders_Detail?.grand_total || "--"}</span>
              </div>
            </div>
            <CartSummary order={Orders_Detail} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}