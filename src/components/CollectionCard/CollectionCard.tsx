import React, { useState } from "react";
import Image from "next/image";
import noimage from "../../app/images/no-image.jpg";
import { generateSlug } from "@/utils/functions";
interface CollectionItem {
  src: string | any; // Supports both string paths and imported Next.js images
  title: string;
}

interface CollectionCardProps {
  collections: any[];
  buttonLabel?: string;
  onButtonClick?: (item: CollectionItem, index: number) => void; // Function passed as a prop
  routethird?: boolean;
  selectedCategory?: any;
  selectedSubCategory?: any;
}

const Collection_Card: React.FC<CollectionCardProps> = ({
  collections,
  buttonLabel = "View Range",
  onButtonClick,
  routethird,
  selectedCategory,
  selectedSubCategory,
}) => {
  const [failedImages, setFailedImages] = useState<Set<string | number>>(new Set());
  const handleImageError = (productId: string | number) => {
    setFailedImages((prev) => new Set(prev).add(productId));
  };

  // map((item: any) => generateSlug(item?.name)),generateSlug(currentCategoryName)].join('/')
  return (
    <div className="category-grid">
      {/* <div className="row"> */}
      {collections.map((item, index) => {
        const isImageInvalid =
          !item.banner ||
          item.banner.trim() === "" ||
          failedImages.has(item.id);
        return (
          // <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
          <div className="" key={index}>
            <a
              href={`${routethird
                ? `/${generateSlug(selectedCategory.name)}/${generateSlug(selectedSubCategory?.name)}/${generateSlug(item?.slug)}`.replace(/\/+/g, '/')
                : `/${generateSlug(selectedCategory.name)}/${generateSlug(item?.slug)}`.replace(/\/+/g, '/')
                }`}
            >
              <div className="category-card">
                <div className="banner">
                  {/* <Image src={item.banner} alt={item.title} fill objectFit="cover" /> */}
                  <Image
                    src={isImageInvalid ? noimage : item.cover_image}
                    alt={`Image of ${item.name}`}
                    width={260}
                    height={300}
                    onError={() => handleImageError(item.id)}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="category_card_btn_range_container">


                  <div className="title">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="btn_range-container">
                    <button
                      className="btn_range"
                      onClick={
                        onButtonClick
                          ? () => onButtonClick(item, index) // Dynamic function from props
                          : undefined // Ensure no error if not provided
                      }
                    >
                      {buttonLabel}
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )
      })}
    </div>
  );
};

export default Collection_Card;
