import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import Link from "next/link";
import { IRootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { generateSlug } from "@/utils/functions";

export default function CategorySlider() {
  const [loading, setLoading] = useState(true);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const [error, setError] = useState(false);

  const categories: any = useSelector((state: IRootState) => state.category.first_category_all);

  console.log("categoriesdjashdahsdkjashjkdh>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", categories);

  const router = useRouter();
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Set minimum display time for loader (3 seconds as per your original)
    const timer = setTimeout(() => {
      setMinimumTimeElapsed(true);
    }, 3000);

    // Only update loading state when both conditions are met
    if (minimumTimeElapsed) {
      if (categories === undefined || categories === null) {
        setError(true);
        setLoading(false);
      } else if (categories.length === 0) {
        setLoading(false);
      } else if (categories.length > 0) {
        setLoading(false);
        setError(false);
      }
    }

    // Cleanup
    return () => clearTimeout(timer);
  }, [categories, minimumTimeElapsed]);

  const handleClickShopNow = () => {
    router.push("/collection");
  };

  return (
    <div>
      <div className="category-section">
        <div className="lg-container category-section-padding">
          <div className="center-heading">
            <h2>Shop by Category</h2>
            <p>500+ Unique Products</p>
          </div>
          <div className="category-row">
            <div className="slider">
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "360px", // Match the height of category images
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
                      marginRight: "15%",
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
              ) : (
                <>
                  {error ? (
                    <p className="text-center text-red-500">Failed to load products.</p>
                  ) : categories.length === 0 ? (
                    <p className="text-center text-gray-500">No products available.</p>
                  ) : (
                    <Swiper
                      onSwiper={(swiper: any) => {
                        swiperRef.current = swiper;
                      }}
                      spaceBetween={16}
                      loop={true}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        0: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1220: { slidesPerView: 4 },
                        1520: { slidesPerView: 4 },
                      }}
                      modules={[Autoplay, Pagination]}
                    >
                      {categories.map((item: any, index: number) => {
                        const slug = generateSlug(item?.name);
                        console.log("categories>>>>>>>.", categories);
                        return (
                          <SwiperSlide key={index} className="slider-card cursor-pointer">
                            <Link href={`/collection/${slug}`}>
                              <div className="cat-card">
                                <Image src={item?.cover_image} width={330} height={360} alt={item?.name} />
                                <div className="content">
                                  <h5>{item?.name}</h5>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}