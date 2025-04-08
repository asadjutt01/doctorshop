import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import coll1 from "../app/images/coll1.png";
import coll2 from "../app/images/coll2.png";
import coll3 from "../app/images/coll3.png";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { IRootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { generateSlug } from "@/utils/functions";

export default function Collections() {
  const maincategories : any = useSelector(
    (state: IRootState) => state.category.first_category_all
  );
  const sub_categories_specific: any = useSelector(
    (state: IRootState) => state.category.sub_category_specific
  );
  
  const swiperRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Set minimum display time for loader (4 seconds)
    const timer = setTimeout(() => {
      setMinimumTimeElapsed(true);
    }, 2000);

    // Check loading conditions
    if (minimumTimeElapsed) {
      if (sub_categories_specific === undefined) {
        setError(true);
        setLoading(false);
      } else if (sub_categories_specific.length === 0) {
        setLoading(false);
      } else {
        setLoading(false);
        setError(false);
      }
    }

    // Cleanup
    return () => clearTimeout(timer);
  }, [sub_categories_specific, minimumTimeElapsed]);


  // console.log("sub_categories>>>>>>>>>>>>>>>>" , sub_categories_specific);
  

  return (
    <div className="lg-container">
      <div className="our-collections">
        <div>
          <div className="center-heading">
            <h2>Our Collections</h2>
          </div>
          <div className="swiper-slider-section">
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "3px solid #ccc",
                    borderTop: "3px solid #3498db",
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
              <p className="text-center text-red-500">Failed to load collections.</p>
            ) : sub_categories_specific.length === 0 ? (
              <p className="text-center text-gray-500">No collections available.</p>
            ) : (
              <Swiper
                onSwiper={(swiper: any) => {
                  swiperRef.current = swiper;
                }}
                spaceBetween={16}
                loop={true}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Navigation]}
              >
                {sub_categories_specific.map((category: any) =>{
                  
                  const selectedcategory = maincategories?.find((item:any)=>item?.id === category?.parent_id);
                  return (
                  <SwiperSlide
                    key={category.id}
                    className="slider-card cursor-pointer"
                  >
                    <div className="">
                      <Link
                        href={`/${generateSlug(selectedcategory?.name)}/${generateSlug(category.name)}`}
                      >
                        <div className="collection-card">
                          <Image
                            src={category?.cover_image}
                            width={300}
                            height={380}
                            alt={category.name}
                            style={{ objectFit: "cover" }}
                          />
                          <div className="card-content">
                            <p>{category.name}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                )})}
              </Swiper>
            )}
            {!loading && (
              <div className="controlers show-arrow">
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
          </div>
        </div>
      </div>
    </div>
  );
}