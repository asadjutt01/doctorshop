"use client";
import TableList from "@/components/TableList/TableList";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DashboardLayout from "../components/Dashboardlayout";
import Service from "@/services";
import Loader from "@/components/Loader/Loader";

interface Product {
  id: number;
  name: string;
  product_code: string;
  pip_code: string;
  thumbnail_image: string;
  base_price: string;
  rating: number;
  slug: any,
}

interface WishlistItem {
  id: number;
  product: Product;
  slug: any,
}

interface CartItemProps {
  item: WishlistItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const router = useRouter();
  // console.log("item >>>>here is item", item);


  // Calculate VAT (assuming 20% VAT rate, adjust as needed)
  const basePriceNum = parseFloat(item.product.base_price.replace("£", "")) || 0;
  const vatPrice = basePriceNum * 1.2;

  const handleNavigate = (id: number, slug: any) => {
    // console.log("item.product.name>>>>>>>>>>>>>>>>adda", id, slug);


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
  // console.log("item >>>>", item);

  return (
    <div className="cart-item-whishlist">
      <div className="cart-item__content">
        <div className="cart-item__details">
          <div className="cart-item__image-container relative">
            <Image
              src={item.product.thumbnail_image || "/placeholder-image.jpg"}
              alt={item.product.name || "Product"}
              className="cart-item__image"
              width={70}
              height={70}
            />
          </div>
          <div className="cart-item__info">
            <div className="cart-item__info-container">
              <span className="cart-item__info__title">
                {item.product.name || "N/A"}
              </span>
            </div>
            <div className="cart-item__info-section">
              <div className="cart-item__info-section-detail">
                <span className="cart-item__info-section-detail-key">
                  Product Code:
                </span>
                <span className="cart-item__info-section-detail-value">
                  {item.product.product_code || "N/A"}
                </span>
              </div>
              <div className="cart-item__info-section-detail">
                <span className="cart-item__info-section-detail-key">
                  PIP Code:
                </span>
                <span className="cart-item__info-section-detail-value">
                  {item.product.pip_code || "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-item__price-section-view">
          <div className="cart-item__price-section">
            <span className="cart-item__price">
              {item.product.base_price || "£0.00"}
            </span>
            <span className="cart-item__price-section-inc-vat">
              {basePriceNum > 0 ? `£${vatPrice.toFixed(2)} inc VAT` : "£0.00 inc VAT"}
            </span>
          </div>
          <div className="view-product-btn-container">
            <button
              className="view-product-btn"
              onClick={() => handleNavigate(item.id, item.product.slug)}
            >
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyWishlist = () => {
  const router = useRouter();
  const [wishlistData, setWishlistData] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const getWishlist = async () => {
    try {
      setIsLoading(true); // Start loading
      const response: any = await Service.Wish_List_Method.getWhishList();
      // console.log("Wishlist Data >>>>>>", response);

      if (response && response.data) {
        setWishlistData(response.data);
      } else {
        // console.log("No wishlist items received.");
        setWishlistData([]); // Ensure wishlistData is empty if no data
      }
    } catch (err) {
      console.error("Error fetching wishlist:", err);
      setWishlistData([]); // Set empty array on error
    } finally {
      setIsLoading(false); // Stop loading regardless of success or failure
    }
  };

  useEffect(() => {
    getWishlist();
   

  }, []);
  console.log("wishlistData >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", wishlistData);
  return (
    <DashboardLayout>
      <div className="cart__items">
        <h2 className="cart__title">My Wishlist</h2>
        {isLoading ? (
          <Loader /> // Show loader while fetching data
        ) : wishlistData.length > 0 ? (
          wishlistData.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="empty-wishlist">
            <p>Your wishlist is empty.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyWishlist;