import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { generateSlug } from "@/utils/functions";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import { IRootState } from "@/redux/store";
import {
  getCategorySub,
  getCategorySubSub,
} from "@/utils/fetchData/fetchDataFunction";
import Collection_Card from "@/components/CollectionCard/CollectionCard";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";

interface SubCategory {
  id: string;
  name: string;
}

const MainCategory: React.FC = () => {
  const router = useRouter();
  const { maincategory, secondcategory } = router.query;

  const categories: any[] = useSelector(
    (state: IRootState) => state.category.first_category_all
  );
  const [selectedCategory, setSelectedCategory] = useState<any>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>([]);
  const [subSubCategories, setSubSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!maincategory || !secondcategory) return;

    const maincategoryData = categories.find(
      (category) => generateSlug(category.name) === maincategory
    );
    setSelectedCategory(maincategoryData);
    if (!maincategoryData) {
      // Stop loading if no main category found
      return;
    }

    const fetchSubCategories = async () => {
      try {
        setLoading(true); // Ensure loading starts
        const subCategoriesData = await getCategorySub(maincategoryData.id);

        const subcategoryData = subCategoriesData.find(
          (category: any) => generateSlug(category.name) === secondcategory
        );
        setSelectedSubCategory(subcategoryData);
        const subSubCategoriesData = await getCategorySubSub(subcategoryData.id);
        console.log("subSubCategoriesData//////////", subSubCategoriesData);
        setSubSubCategories(subSubCategoriesData || []); // Default to empty array if no data
      } catch (error) {
        console.error("Error fetching subcategories:", error);
        setSubSubCategories([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
  }, [maincategory, secondcategory, categories]);

  const handleButtonClick = (item: any, index: number) => {
    console.log(`Clicked: ${item.title} (Index: ${index})`);
  };

  return (
    <div>
      <HeaderWithCat />
      <div
        className="category-bannner-container-mobile-container-2"
        // style={{ backgroundImage: `url('${selectedSubCategory?.banner}')` }}
      >
        <div className="lg-container">
          <div className="category-bannner-container-mobile">
            <div className="collection-hero-inner">
              <h1>{selectedSubCategory?.name}</h1>
            </div>
            <div className="image-container">
              <Image
                src={selectedSubCategory?.banner}
                alt="Second Cat Img"
                className="img-2nd"
                width={400}
                height={335}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="categories-section">
        <div className="lg-container">
          {loading ? (
            <div className="loader-container">
              <Loader /> {/* Use your custom LoaderName component */}
            </div>
          ) : subSubCategories.length > 0 ? (
            <div className="row">
              <div className="col-lg-3 dispay-none">
                <div className="category-filter ">
                  <h3>Product Categories</h3>
                  <div className="category-list">
                    {subSubCategories.map((category, index) => (
                      <a key={index}  href={`/collection/${generateSlug(selectedCategory?.name)}/${generateSlug(selectedSubCategory?.name)}/${generateSlug(category?.name)}`} className="category-item">
                        <p>
                          {category?.name}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <Collection_Card
                  collections={subSubCategories}
                  selectedCategory={selectedCategory}
                  selectedSubCategory={selectedSubCategory}
                  buttonLabel="View Products"
                  routethird={true}
                  onButtonClick={handleButtonClick}
                />
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <p>Products not found.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainCategory;