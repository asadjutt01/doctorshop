import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Autoplay, Pagination } from "swiper/modules";
import noimage from "../app/images/no-image.jpg";
import Image from "next/image";
import ventilation from "../app/images/ventilation.png";
import coll1 from "../app/images/coll1.png";
import coll2 from "../app/images/coll2.png";
import coll3 from "../app/images/coll3.png";
import coll4 from "../app/images/coll4.png";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// @ts-ignore

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { getItem } from "@/utils/localStorage/localStorage";

interface ProductSliderProps {
  showWarning: boolean;
  showshort: boolean;
  product?: any;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  showWarning,
  showshort,
  product,
}) => {
  // console.log("showWarning>>>>>>>>>>>>>>>>>>>", showWarning);
  const [failedImages, setFailedImages] = useState<Set<string | number>>(
    new Set()
  );
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const swiperRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const [minimumLoadingComplete, setMinimumLoadingComplete] = useState(false); // Persistent loader flag
  const getPharma: any = getItem("user_type");
  // Persistent loader logic
  useEffect(() => {
    // Set a minimum loading time of 3 seconds
    const timer = setTimeout(() => {
      setMinimumLoadingComplete(true);
    }, 3000); // 3000ms = 3 seconds

    // Check if product data is available and clear loading state
    if (product) {
      setIsLoading(false);
    }

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [product]);
// console.log("product>>>>>>>>>>>>>>>>.",product);
  // Combined loading condition: show loader until both minimum time and data are ready
  const shouldShowLoader = isLoading || !minimumLoadingComplete;

  return (
    <div className="product-detail-slider">
      {shouldShowLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            minHeight: "400px", // Adjust based on your slider height
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Gray overlay
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #f3f3f3",
              borderTop: "5px solid #3498db",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : (
        <>
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
            }}
          >
            {[product?.thumbnail_image, ...(product?.images || [])]
              .filter((img) => img)
              .map((img: any, index: number) => {
                const isImageInvalid =
                  !img ||
                  img.trim() === "" ||
                  img === "N/A" ||
                  failedImages.has(product?.id);
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={isImageInvalid ? noimage : img}
                      width={500}
                      height={500}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="Product image"
                      onError={(e:any) => e.target.src ="/no-image.jpg"}
                    />
                  </SwiperSlide>
                );
              })}

            {/* <SwiperSlide>
            <Image
                src={product?.thumbnail_image}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  // padding:"10px",
                  objectFit: "cover",
                }}
                alt="Description of image"
              />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                src={product?.thumbnail_image}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  // padding:"10px",
                  objectFit: "cover",
                }}
                alt="Description of image"
              />
            </SwiperSlide> */}
            <div className="controlers-detail-page show-arrow">
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
          </Swiper>
          <div className="dispay-none">
            <Swiper
              onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {[product?.thumbnail_image, ...(product?.images || [])]
                .filter((img) => img && img !== "N/A")
                .map((img: any) => {
                  const isImageInvalid =
                    !img ||
                    img.trim() === "" ||
                    img === "N/A" ||
                    failedImages.has(product?.id);
                  return (
                    <SwiperSlide>
                      <Image
                        src={isImageInvalid ? noimage : img}
                        width={500}
                        height={500}
                        style={{
                          width: "100%",
                          height: "100%",
                          // padding:"10px",
                          objectFit: "cover",
                        }}
                        alt="Description of image"
                        onError={(e:any) => e.target.src ="/no-image.jpg"}
                      />
                    </SwiperSlide>
                  );
                })}
              {/* <SwiperSlide>
              <Image
                src={product?.thumbnail_image}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  // padding:"10px",
                  objectFit: "cover",
                }}
                alt="Description of image"
              />
              </SwiperSlide>
              <SwiperSlide>
              <Image
                src={product?.thumbnail_image}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  // padding:"10px",
                  objectFit: "cover",
                }}
                alt="Description of image"
              />
              </SwiperSlide>
              <SwiperSlide>
              <Image
                src={product?.thumbnail_image}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  // padding:"10px",
                  objectFit: "cover",
                }}
                alt="Description of image"
              />
              </SwiperSlide> */}
            </Swiper>
          </div>
          {showshort ? (
            <div className="short-disc">
              <h5 style={{ fontWeight: "bold" }}>Short Description:</h5>
              <p>{product?.short_description}</p>
            </div>
          ) : null}



          {
            getPharma !== "customer_pharmaceuti" ? (
              <>
                {showWarning ? (
                  <div className="warning-msg">
                    <h6>Restricted Access, Authorized Use Only</h6>
                    <p>
                      Please be advised that access to this product is restricted and
                      available only to eligible individuals. At Doctor Shop, we are
                      committed to ensuring the safety and proper use of our
                      pharmaceuticals.
                    </p>
                    <button className="btn-cart">
                      Register For A Pharmaceutical Account
                    </button>
                  </div>
                ) : null}
              </>
            ) : null
          }
        </>
      )}

    </div>
  );
};

export default ProductSlider;