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
  getSingleProduct,
} from "@/utils/fetchData/fetchDataFunction";
import Image from "next/image";
import ProductDetailModal from "@/components/ProductDetailModal";
import CategoryProductCard from "@/components/CategoryProductCard";
import Loader from "@/components/Loader/Loader";
import { Accordion } from "react-bootstrap";
import Breadcrumb from "@/components/Breadcrumb";
import ProductSlider from "@/components/ProductSlider";
import ProducDetailContent from "@/components/ProducDetailContent";
import TabsComponent from "@/components/DetailTabs";
import RelatedProducts from "@/components/RelatedProducts";

const ThirdCategory: React.FC = () => {
  const router = useRouter();
  const { maincategory, secondcategory, thirdcategory } = router.query;

  const categories: any[] = useSelector(
    (state: IRootState) => state.category.first_category_all
  );
  const [selectedCategory, setSelectedCategory] = useState<any>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>([]);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState<any>([]);
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [paginationLinks, setPaginationLinks] = useState<any>({});
  const [paginationMeta, setPaginationMeta] = useState<any>({});
  const [selectedSingleProduct, setSelectedSingleProduct] = useState<any>();
  const [selectedVariant, setSelectedVariant] = useState<any>({});
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
    // console.log('maincategory>>>>>',maincategory);
    // console.log('secondcategory>>>>>',secondcategory);
    // console.log('thirdcategory>>>>>',thirdcategory);
    if (!maincategory || !secondcategory || !thirdcategory) return;

    const maincategoryData = categories.find(
      (category) => generateSlug(category.name) === maincategory
    );
    setSelectedCategory(maincategoryData);
    if (!maincategoryData) {
      return;
    }

    const fetchSubCategories = async () => {
      try {
        setLoading(true);
        const subCategoriesData = await getCategorySub(maincategoryData.id);

        const selectedsubcategory = subCategoriesData.find(
          (category: any) => generateSlug(category.name) === secondcategory
        );
        setSelectedSubCategory(selectedsubcategory);
        const subSubCategoriesData = await getCategorySubSub(
          selectedsubcategory.id
        );
        // console.log('thirdcategory>>>>>',thirdcategory);
        const selectedSubSubcategory = subSubCategoriesData.find(
          (category: any) => generateSlug(category.name) === thirdcategory
        );
        // console.log("selectedSubSubcategory>>>>",selectedSubSubcategory);
        if (selectedSubSubcategory) {
          setSelectedSubSubCategory(selectedSubSubcategory);

          if (selectedSubSubcategory?.id) {
            const categoryProducts: any = await getProductList(
              selectedSubSubcategory?.id
            );
            setCategoryProducts(categoryProducts.data || []);
            setFilteredProducts(categoryProducts.data || []); // Initialize filtered products
            setPaginationLinks(categoryProducts.links || {});
            setPaginationMeta(categoryProducts.meta || {});
          }
          setLoading(false);
        } else {
          // for product page at third page
          const selectedSingleProduct = await getSingleProduct(thirdcategory);
          // console.log("selectedSingleProduct>>>>>>>>>>>>>>>>>>>>",selectedSingleProduct);
          setSelectedSingleProduct(selectedSingleProduct[0]);
          if (selectedSingleProduct[0]?.id) {
            const categoryProducts = await getProductList(
              selectedSingleProduct[0]?.category
            );
            setCategoryProducts(categoryProducts?.data);
            setLoading(false);
          }

        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
        setCategoryProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
  }, [maincategory, secondcategory, thirdcategory, categories]);

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
      updatedProducts.sort(
        (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price)
      );
    } else if (sortLowToHigh) {
      updatedProducts.sort(
        (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price)
      );
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
      from100to200:
        filter === "from100to200" ? !priceFilters.from100to200 : false,
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
    // console.log("Quick View Clicked", product);
    setShow(true);
    setSelectedProduct(product);
  };

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handlePagination = async (pageUrl: string) => {
    setLoading(true);
    try {
      const res = await fetch(pageUrl);
      const data = await res.json();
      setCategoryProducts(data.data || []);
      setFilteredProducts(data.data || []);
      setPaginationLinks(data.links || {});
      setPaginationMeta(data.meta || {});
    } catch (err) {
      console.error("Pagination fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HeaderWithCat />
      {loading ? (
      <div className="loader-container">
      <Loader />
    </div> 
    ):(<>
      {selectedSingleProduct ? (
        <>
          {/* product page */}
          <div className="product-detail-section">
            <div className="lg-container">
              <Breadcrumb />
              <div className="product-details">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="slider">
                      <ProductSlider
                        showWarning={true}
                        showshort={false}
                        product={selectedSingleProduct}
                        selectedVariant={selectedVariant}
                  setSelectedVariant={setSelectedVariant}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <ProducDetailContent
                      showShort={true}
                      // productname={selectedSingleProduct?.name}
                      showSocial={true}
                      warningMobile={false}
                      product={selectedSingleProduct}
                      selectedVariant={selectedVariant}
                      setSelectedVariant={setSelectedVariant}
                    />
                  </div>
                </div>
              </div>
              <TabsComponent product={selectedSingleProduct} />
            </div>
          </div>
          <RelatedProducts products={categoryProducts} />
        </>
      ) : (
        <>
          <div
            className="category-bannner-container-mobile-container-3"
            // style={{ backgroundImage: `url('${selectedSubSubCategory?.banner}')` }}
          >
            <div className="lg-container">
              <div className="category-bannner-container-mobile">
                <div className="collection-hero-inner">
                  <h1>{selectedSubSubCategory?.name}</h1>
                </div>
                <div className="image-container">
                  {selectedSubSubCategory?.banner  && <Image
                    src={selectedSubSubCategory?.banner}
                    alt="Second Cat Img"
                    className="img-3rd"
                    width={400}
                    height={335}
                  />}
                </div>
              </div>
            </div>
          </div>
          <div className="categories-section">
            <div className="lg-container category-container">
              {/* {loading ? (
                <div className="loader-container">
                  <Loader />
                </div>
              ) : ( */}
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
                                onChange={() =>
                                  handlePriceFilterChange("under50")
                                }
                              />
                              <label htmlFor="under50">Under £50</label>
                            </div>
                            <div className="filter-option">
                              <input
                                type="checkbox"
                                id="50to100"
                                checked={priceFilters.from50to100}
                                onChange={() =>
                                  handlePriceFilterChange("from50to100")
                                }
                              />
                              <label htmlFor="50to100">£50 - £100</label>
                            </div>
                            <div className="filter-option">
                              <input
                                type="checkbox"
                                id="100to200"
                                checked={priceFilters.from100to200}
                                onChange={() =>
                                  handlePriceFilterChange("from100to200")
                                }
                              />
                              <label htmlFor="100to200">£100 - £200</label>
                            </div>
                            <div className="filter-option">
                              <input
                                type="checkbox"
                                id="above200"
                                checked={priceFilters.above200}
                                onChange={() =>
                                  handlePriceFilterChange("above200")
                                }
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
                      <>
                        <CategoryProductCard
                          products={filteredProducts}
                          handleQuickViewClick={handleQuickViewClick}
                          selectedCategory={selectedCategory}
                          selectedSubCategory={selectedSubCategory}
                          selectedSubSubCategory={selectedSubSubCategory}
                        />
                        <div
                          className="mt-4"
                          style={{
                            display: "flex",
                            gap: "60px",
                            justifyContent:"space-between",
                          }}
                        >
                          <div className="pagination-meta mt-2 text-sm text-gray-600">
                            <span>
                              Page {paginationMeta.current_page} of{" "}
                              {paginationMeta.last_page}
                            </span>
                            <span>
                              {" "}
                              | Total Results: {paginationMeta.total}
                            </span>
                          </div>
                          <div className="pagination flex gap-2">
                            <button
                              onClick={() =>
                                handlePagination(paginationLinks.prev)
                              }
                              disabled={!paginationLinks.prev}
                            >
                              {"<<"}
                            </button>
                            <button
                              onClick={() =>
                                handlePagination(paginationLinks.next)
                              }
                              disabled={!paginationLinks.next}
                            >
                              {">>"}
                            </button>
                          </div>
                        </div>
                      </>
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
              {/* )} */}
            </div>
          </div>
        </>
      )}
</>)}
      <Footer />
    </div>
  );
};

export default ThirdCategory;
