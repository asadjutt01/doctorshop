import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { generateSlug } from "@/utils/functions";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import { IRootState } from "@/redux/store";
import { getCategorySub } from "@/utils/fetchData/fetchDataFunction";
import CollectionList from "@/components/CollectionList";
import CategoryFilter from "@/components/CategoryFilter";
import Collection_Card from "@/components/CollectionCard/CollectionCard";
import Loader from "@/components/Loader/Loader";

interface SubCategory {
  id: string;
  name: string;
}

const MainCategory: React.FC = () => {
  const router = useRouter();
  const { maincategory } = router.query;

  const categories: any[] = useSelector((state: IRootState) => state.category.first_category_all);
  const [selectedCategory, setSelectedSubCategory] = useState<any>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!maincategory) return;

    // Find the category by slug
    const maincategoryData = categories.find(
      (category) => generateSlug(category.name) === maincategory
    );
    setSelectedSubCategory(maincategoryData);
    if (!maincategoryData) {
      setLoading(false); // Stop loading if no main category found
      return;
    }

    // Fetch subcategories
    const fetchSubCategories = async () => {
      try {
        setLoading(true); // Ensure loading starts even if called multiple times
        const subCategoriesData = await getCategorySub(maincategoryData.id);
        setSubCategories(subCategoriesData || []); // Default to empty array if no data
      } catch (error) {
        console.error("Error fetching subcategories:", error);
        setSubCategories([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
  }, [maincategory, categories]);

  const handleButtonClick = (item: any, index: number) => {
    console.log(`Clicked: ${item.title} (Index: ${index})`);
  };

  return (
    <div>
      <HeaderWithCat />
      <div
        className="collection-hero"
        style={{ backgroundImage: `url('${selectedCategory?.banner}')` }}
      >
        <div className="collection-hero-inner">
          <h1>{selectedCategory?.name}</h1>
          <h3>{selectedCategory?.title}</h3>
          <p className="mb-0">{selectedCategory?.description}</p>
        </div>
      </div>
      <div className="collection-mobile">
        <h1>{selectedCategory?.name}</h1>
        <h3>{selectedCategory?.title}</h3>
        <p className="mb-0">{selectedCategory?.description}</p>
      </div>
      <div className="categories-section">
        <div className="lg-container">
          {loading ? (
            <div className="loader-container">
              <Loader /> {/* Use your custom LoaderName component */}
            </div>
          ) : subCategories.length > 0 ? (
            <div className="row">
              <div className="col-lg-3 dispay-none">
                <CategoryFilter selectedCategory={selectedCategory} collections={subCategories} />
              </div>
              <div className="col-12 col-lg-9">
                <Collection_Card
                  collections={subCategories}
                  selectedCategory={selectedCategory}
                  buttonLabel="View Range"
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