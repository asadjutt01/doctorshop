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
  getProductList,
} from "@/utils/fetchData/fetchDataFunction";
import Collection_Card from "@/components/CollectionCard/CollectionCard";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";
import { Accordion } from "react-bootstrap";
import CategoryProductCard from "@/components/CategoryProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";
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
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // Filter states
  const [sortHighToLow, setSortHighToLow] = useState(false);
  const [sortLowToHigh, setSortLowToHigh] = useState(false);
  const [priceFilters, setPriceFilters] = useState({
    under50: false,
    from50to100: false,
    from100to200: false,
    above200: false,
  });
  const [showAll, setShowAll] = useState(true); // New state for "Show All Products"
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
        // console.log("subCategoriesData?.length > 0",subSubCategoriesData,subSubCategoriesData)
        if(subSubCategoriesData?.length > 0){
        console.log("subSubCategoriesData//////////", subSubCategoriesData);
        setSubSubCategories(subSubCategoriesData || []); // Default to empty array if no data
        }else{
          // if (subcategoryData.id) {
          const categoryProducts:any = await getProductList(subcategoryData.id);
          setCategoryProducts(categoryProducts.data || []);
          setFilteredProducts(categoryProducts.data || []); // Initialize filtered products
        // }
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
        setSubSubCategories([]); // Set empty array on error
        setCategoryProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
  }, [maincategory, secondcategory, categories]);

    // Utility function to extract numeric price
    const getNumericPrice = (price: any): number => {
      if (typeof price === "number") return price;
      if (typeof price === "string") {
        return parseFloat(price.replace(/[^0-9.]/g, "")) || 0; // Remove non-numeric chars (e.g., £) and parse
      }
      return 0; // Default to 0 if price is invalid
    };
  // Handle filtering and sorting
  useEffect(() => {
    let updatedProducts = [...categoryProducts];

    // If "Show All" is checked, skip filtering and sorting
    if (showAll) {
      setFilteredProducts(updatedProducts);
      return;
    }

    // Apply price range filters
    const activePriceFilters = Object.entries(priceFilters)
      .filter(([_, isActive]) => isActive)
      .map(([key]) => key);

    if (activePriceFilters.length > 0) {
      updatedProducts = updatedProducts.filter((product) => {
        const price = getNumericPrice(product.price);

        return activePriceFilters.some((filter) => {
          if (filter === "under50") return price < 50;
          if (filter === "from50to100") return price >= 50 && price <= 100;
          if (filter === "from100to200") return price > 100 && price <= 200;
          if (filter === "above200") return price > 200;
          return false;
        });
      });
    }

    // Apply sorting
    if (sortHighToLow) {
      updatedProducts.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
    } else if (sortLowToHigh) {
      updatedProducts.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
    }

    setFilteredProducts(updatedProducts);
  }, [sortHighToLow, sortLowToHigh, priceFilters, categoryProducts, showAll]);

  const resetAllFilters = () => {
    setSortHighToLow(false);
    setSortLowToHigh(false);
    setPriceFilters({
      under50: false,
      from50to100: false,
      from100to200: false,
      above200: false,
    });
    setShowAll(false);
  };

  const handleSortChange = (type: "highToLow" | "lowToHigh") => {
    resetAllFilters();
    if (type === "highToLow") {
      setSortHighToLow(true);
    } else {
      setSortLowToHigh(true);
    }
  };

  const handlePriceFilterChange = (filter: keyof typeof priceFilters) => {
    resetAllFilters();
    setPriceFilters({
      under50: filter === "under50" ? !priceFilters.under50 : false,
      from50to100: filter === "from50to100" ? !priceFilters.from50to100 : false,
      from100to200: filter === "from100to200" ? !priceFilters.from100to200 : false,
      above200: filter === "above200" ? !priceFilters.above200 : false,
    });
  };

  const handleShowAllChange = () => {
    setShowAll(true);
    setSortHighToLow(false);
    setSortLowToHigh(false);
    setPriceFilters({
      under50: false,
      from50to100: false,
      from100to200: false,
      above200: false,
    });
  };
    const handleQuickViewClick = (product: any) => {
      console.log("Quick View Clicked", product);
      setShow(true);
      setSelectedProduct(product);
    };
  
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
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
     {subSubCategories.length> 0 ? (<div className="categories-section">
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
      </div>):(
         <div className="categories-section">
         <div className="lg-container category-container">
           {loading ? (
             <div className="loader-container">
               <Loader />
             </div>
           ) : (
             <div className="row">
               <div className="col-lg-3 dispay-none">
                 <div className="category-filter">
                   <h3>Filters</h3>
                   <Accordion defaultActiveKey="0">
                     <Accordion.Item eventKey="0">
                       <Accordion.Header>Price</Accordion.Header>
                       <Accordion.Body>
                         <div className="filter-option">
                           <input
                             type="checkbox"
                             id="showAll"
                             checked={showAll}
                             onChange={handleShowAllChange}
                           />
                           <label htmlFor="showAll">Show All Products</label>
                         </div>
                         <div className="filter-option">
                           <input
                             type="checkbox"
                             id="highToLow"
                             checked={sortHighToLow}
                             onChange={() => handleSortChange("highToLow")}
                           />
                           <label htmlFor="highToLow">High to Low</label>
                         </div>
                         <div className="filter-option">
                           <input
                             type="checkbox"
                             id="lowToHigh"
                             checked={sortLowToHigh}
                             onChange={() => handleSortChange("lowToHigh")}
                           />
                           <label htmlFor="lowToHigh">Low to High</label>
                         </div>
                         <div className="filter-option">
                           <input
                             type="checkbox"
                             id="under50"
                             checked={priceFilters.under50}
                             onChange={() => handlePriceFilterChange("under50")}
                           />
                           <label htmlFor="under50">Under £50</label>
                         </div>
                         <div className="filter-option">
                           <input
                             type="checkbox"
                             id="50to100"
                             checked={priceFilters.from50to100}
                             onChange={() => handlePriceFilterChange("from50to100")}
                           />
                           <label htmlFor="50to100">£50 - £100</label>
                         </div>
                         <div className="filter-option">
                           <input
                             type="checkbox"
                             id="100to200"
                             checked={priceFilters.from100to200}
                             onChange={() => handlePriceFilterChange("from100to200")}
                           />
                           <label htmlFor="100to200">£100 - £200</label>
                         </div>
                         <div className="filter-option">
                           <input
                             type="checkbox"
                             id="above200"
                             checked={priceFilters.above200}
                             onChange={() => handlePriceFilterChange("above200")}
                           />
                           <label htmlFor="above200">Above £200</label>
                         </div>
                       </Accordion.Body>
                     </Accordion.Item>
                   </Accordion>
                 </div>
               </div>
               <div className="col-lg-9">
                 {filteredProducts.length > 0 ? (
                   <CategoryProductCard
                     products={filteredProducts}
                     handleQuickViewClick={handleQuickViewClick}
                     selectedCategory={selectedCategory}
                     selectedSubCategory={selectedSubCategory}
                    //  selectedSubSubCategory={selectedSubSubCategory}
                    navigatetoProductdirectly={true}
                   />
                 ) : (
                   <div className="no-products-available">
                     <h4>No Products Available</h4>
                     <p>
                       {categoryProducts.length === 0
                         ? "We couldn’t find any products in this category. Please explore other categories or check back later for new additions."
                         : "We couldn’t find any products matching your filter criteria. Please adjust your filters or select 'Show All Products' to view the full list."}
                     </p>
                   </div>
                 )}
                 <ProductDetailModal
                   show={show}
                   onClose={handleClose}
                   product={selectedProduct}
                 />
               </div>
             </div>
           )}
         </div>
       </div>
      )}

      <Footer />
    </div>
  );
};

export default MainCategory;