import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/router";
import noimage from "../app/images/no-image.jpg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { getItem } from "@/utils/localStorage/localStorage";
interface ProductSliderProps {
  showWarning: boolean;
  showshort: boolean;
  product?: any;
  selectedVariant?: any;
  setSelectedVariant?: any;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  showWarning,
  showshort,
  product,
  selectedVariant,
  setSelectedVariant,
}) => {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const swiperRef = useRef<any>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [minimumLoadingComplete, setMinimumLoadingComplete] = useState(false);
  const getPharma: any = getItem("user_type");

  // Persistent loader logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumLoadingComplete(true);
    }, 3000);

    if (product && selectedVariant) {
      setIsLoading(false);
    }

    return () => clearTimeout(timer);
  }, [product, selectedVariant]);

  // Reset failedImages when selectedVariant changes
  useEffect(() => {
    setFailedImages(new Set());
  }, [selectedVariant]);

  // Ensure thumbsSwiper is reset if it becomes invalid
  useEffect(() => {
    if (thumbsSwiper && !thumbsSwiper.destroyed) {
      return;
    }
    setThumbsSwiper(null);
  }, [thumbsSwiper]);

  const shouldShowLoader =
    isLoading || !minimumLoadingComplete || !selectedVariant || !product;

  const handleClickPharma = () => {
    router.push("/register-pharma");
  };

  // Handle image errors
  const handleImageError = (img: string) => {
    setFailedImages((prev) => new Set([...prev, img]));
  };

  // Filter and prepare images
  const images = [
    selectedVariant?.thumbnail_img,
    ...(selectedVariant?.photos || []),
  ].filter((img: string) => img && img.trim() !== "" && img !== "N/A");

  return (
    <div className="product-detail-slider">
      {shouldShowLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            minHeight: "400px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
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
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            onSwiper={(swiper:any) => {
              swiperRef.current = swiper;
            }}
          >
            {images.map((img: string, index: number) => {
              const isImageInvalid = failedImages.has(img);
              return (
                <SwiperSlide key={index} style={{
                  maxHeight:"600px"
                }}>
                  <Image
                    src={isImageInvalid ? noimage : img}
                    width={500}
                    height={600}
                    style={{
                      width: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                    alt="Product image"
                    onError={(e) => {
                      console.error(`Image failed to load: ${img}`, e);
                      handleImageError(img);
                    }}
                  />
                </SwiperSlide>
              );
            })}
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

          {images.length > 0 && (
            <Swiper
              onSwiper={(swiper:any) => setThumbsSwiper(swiper)}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              style={{ marginTop: "10px" }}
            >
              {images.map((img: string, index: number) => {
                const isImageInvalid = failedImages.has(img);
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={isImageInvalid ? noimage : img}
                      width={100}
                      height={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="Thumbnail image"
                      onError={(e) => {
                        console.error(`Thumbnail failed to load: ${img}`, e);
                        handleImageError(img);
                      }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}

          {showshort && product?.short_description && (
            <div className="short-disc">
              <h5 style={{ fontWeight: "bold" }}>Short Description:</h5>
              <p>{product.short_description}</p>
            </div>
          )}

          {product?.pharmaceutical_product === "true" && showWarning && (
            <div className="warning-msg">
              <h6>Restricted Access, Authorized Use Only</h6>
              <p>
                Please be advised that access to this product is restricted and
                available only to eligible individuals. At Doctor Shop, we are
                committed to ensuring the safety and proper use of our
                pharmaceuticals.
              </p>
              <button className="btn-cart" onClick={handleClickPharma}>
                Register For A Pharmaceutical Account
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductSlider;