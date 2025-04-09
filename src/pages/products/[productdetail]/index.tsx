import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { generateSlug } from "@/utils/functions";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import { IRootState } from "@/redux/store";
import ProducSlider from "@/components/ProductSlider";
import ProducDetailContent from "@/components/ProducDetailContent";
import TabsComponent from "@/components/DetailTabs";
import RelatedProducts from "@/components/RelatedProducts";
import ProductBreadcrum from "@/components/ProductBreadcrum";
import {
  getCategorySub,
  getCategorySubSub,
  getProductList,
  getSingleProduct,
} from "@/utils/fetchData/fetchDataFunction";
// import CategoryProductCard from "@/components/CategoryProductCard";
import Image from "next/image";
import CategoryFilter from "@/components/CategoryFilter";
import ProductDetailModal from "@/components/ProductDetailModal";
import CategoryProductCard from "@/components/CategoryProductCard";
import Breadcrumb from "@/components/Breadcrumb";
// import CategoryFilter from "@/components/CategoryFilter";
interface SubCategory {
  id: string;
  name: string;
}

const Product: React.FC = () => {
  const router = useRouter();
  const { productId, productdetail } = router.query;
// console.log("productId>>>>>>",productId);
// console.log("productName>>>>>>>>>>",productdetail);
  const categories: any[] = useSelector(
    (state: IRootState) => state.category.first_category_all
  );
  const [selectedCategory, setSelectedCategory] = useState<any>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>([]);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState<any>([]);
  const [selectedSingleProduct, setSelectedSingleProduct] = useState<any>();

  // const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  // const [subSubCategories, setSubSubCategories] = useState<SubCategory[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (!productId || !productId) return;
    if (!router.isReady) return;
    // Fetch Product
    const fetchSubCategories = async () => {
      try {
          // console.log("productId>>>>>>",productId);
          // console.log("productdetail>>>>>>>",productdetail);
          if (productId) {
          const selectedSingleProduct = await getSingleProduct(Number(productId));
          
          setSelectedSingleProduct(selectedSingleProduct[0]);
          if (selectedSingleProduct[0]?.category) {
            const categoryProducts :any = await getProductList(
              selectedSingleProduct[0]?.category
            );
            setCategoryProducts(categoryProducts.data);
          }     
          }else{
            if(productdetail){
              const selectedSingleProduct = await getSingleProduct(productdetail);
              // console.log("selectedSingleProduct>>>>>>>>>>>>>>>>>>>>",selectedSingleProduct);
            setSelectedSingleProduct(selectedSingleProduct[0]);
            if (selectedSingleProduct[0]?.category) {
              const categoryProducts:any = await getProductList(
                selectedSingleProduct[0]?.category
              );
              setCategoryProducts(categoryProducts.data); 
            }    } 
          }
       
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
    // console.log("selectedSinglePrdcgsdfgsdfgoduct",selectedSingleProduct)
    // fetchSubSubCategories();
  }, [router.isReady, productId, productdetail]);
  const handleButtonClick = (item: any, index: number) => {
    // console.log(`Clicked: ${item.title} (Index: ${index})`);
  };

  return (
    <div>
      <HeaderWithCat />
      <div className="product-detail-section">
        <div className="lg-container">
          <Breadcrumb />
          <div className="product-details">
            <div className="row">
              <div className="col-lg-6">
                <div className="slider">
                  <ProducSlider
                    showWarning={true}
                    showshort={false}
                    product={selectedSingleProduct}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <ProducDetailContent
                  showShort={true}
                  showSocial={true}
                  warningMobile={false}
                  product={selectedSingleProduct}
                />
              </div>
            </div>
          </div>
          <TabsComponent product={selectedSingleProduct}  />
        </div>
      </div>
      <RelatedProducts products={categoryProducts} />
      <Footer />
    </div>
  );
};

export default Product;
