// import React from "react";
// import { useRouter } from "next/router";
// import HeaderWithCat from "@/components/HeaderWithCat";
// import Footer from "@/components/Footer";
// import { useSelector } from "react-redux";
// // import { selectCartState } from "@/redux/slices/cartSlice";
// import Breadcrumb from "@/components/Breadcrumb";

// import { generateSlug } from "@/utils/functions";
// import { categories } from "@/constants/constant";
// import ProductBreadcrum from "@/components/ProductBreadcrum";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

// interface ProductProps {
//   product: any;
// }

// export async function getStaticPaths() {
//   const paths: any = [];

//   // Iterate through categories and subcategories to create paths for all third-level categories
//   categories.forEach((category) => {
//     category.subcategories?.forEach((subCategory) => {
//       subCategory.subcategories?.forEach((thirdCategory:any) => {
//         thirdCategory && thirdCategory?.products?.forEach((product: Product) => {
//           paths.push({
//             params: {
//               maincategory: generateSlug(category.name),
//               secondcategory: generateSlug(subCategory.name),
//               thirdcategory: generateSlug(thirdCategory.name),
//               productname: generateSlug(product.name),
//             },
//           });
//         });
//       });
//     });
//   });
//   return { paths, fallback: false };
// }


// export async function getStaticProps({ params }: any) {
//   const {maincategory,secondcategory,thirdcategory, productname } = params;


//   const maincategoryfinded = categories.find(
//     (category) => generateSlug(category.name) === maincategory
//   );

//   // Find the second category based on the slug
//   const secondcategoryfinded = maincategoryfinded?.subcategories?.find(
//     (category) => generateSlug(category.name) === secondcategory
//   );

//   // Find the third category based on the slug
//   const thirdcategoryfinded:any = secondcategoryfinded?.subcategories?.find(
//     (category) => generateSlug(category.name) === thirdcategory
//   );

//   // Find the product based on the product name slug
//   const productfinded = thirdcategoryfinded?.products?.find(
//     (product: Product) => generateSlug(product.name) === productname
//   );

//   console.log('params>>>>>>>>>>', params);


//   return {
//     props: {
//       // maincategoryfinded,
//       // secondcategoryfinded,
//       // thirdcategoryfinded,
//       product:productfinded,
//       // productname: productname,
//     },
//   };
// }

// const Product: React.FC<ProductProps> = ({product }) => {
//   // console.log('product>>>>>>>>>>>>>>>>>>>>>>>>>', product);
//   const router = useRouter();
//   return (
//     <div>
//       <HeaderWithCat />
//       <div className="product-detail-section">
//         <div className="lg-container">
//           <ProductBreadcrum />
//           <div className="product-details">
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="slider">
//                   <ProducSlider showWarning={true} showshort={false} />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <ProducDetailContent
//                   showShort={true}
//                   productname={product?.name}
//                   showSocial={true}
//                   warningMobile={false}
//                 />
//               </div>
//             </div>
//           </div>
//           <TabsComponent />
//         </div>
//       </div>
//       <RelatedProducts />
//       <Footer />
//     </div>
//   );
// };

// export default Product;


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
  const { maincategory, secondcategory, thirdcategory, productname } = router.query;

  const categories: any[] = useSelector(
    (state: IRootState) => state.category.first_category_all
  );
  const [selectedCategory, setSelectedCategory] = useState<any>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>([]);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState<any>([]);
  const [selectedSingleProduct, setSelectedSingleProduct] = useState<any>();
  const [selectedVariant, setSelectedVariant] = useState<any>({});
  // const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  // const [subSubCategories, setSubSubCategories] = useState<SubCategory[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!maincategory || !secondcategory || !thirdcategory) return;
    // Find the category by slug
    const maincategoryData = categories.find(
      (category) => generateSlug(category.name) === maincategory
    );
    setSelectedCategory(maincategoryData);
    if (!maincategoryData) return;

    // Fetch subcategories
    const fetchSubCategories = async () => {
      try {
        const subCategoriesData = await getCategorySub(maincategoryData.id);
        // setSubCategories(subCategoriesData);

        const selectedsubcategory = subCategoriesData.find(
          (category: any) => generateSlug(category.name) === secondcategory
        );
        setSelectedSubCategory(selectedsubcategory)
        const subSubCategoriesData = await getCategorySubSub(
          selectedsubcategory.id
        );
        const selectedSubSubcategory = subSubCategoriesData.find(
          (category: any) => generateSlug(category.name) === thirdcategory
        );
        // console.log("selectedSubSubcategory>>>>>>>>>>>>>",selectedSubSubcategory?.name);
        setSelectedSubSubCategory(selectedSubSubcategory);

        if (selectedSubSubcategory?.id) {
          const categoryProducts:any = await getProductList(
            selectedSubSubcategory?.id
          );
          setCategoryProducts(categoryProducts.data);
          console.log(">....categoryProducts.data",categoryProducts);
          const selectedSingleProductdata = categoryProducts.data.find(
            (product: any) => generateSlug(product.slug) === productname
          );
          console.log("selectedSingleProductdata????????????",selectedSingleProductdata);
          const selectedSingleProduct = await getSingleProduct(
            selectedSingleProductdata?.id ?? productname
          );
          // console.log('productname>>>>>>>>>>>>>>>>>>', productname);
          // console.log('selectedSingleProduct>>>>>>>>>>>>>>>>>>', selectedSingleProduct[0]);
          setSelectedSingleProduct(selectedSingleProduct[0])

        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
    // fetchSubSubCategories();
  }, [maincategory, secondcategory, categories]);
  const handleButtonClick = (item: any, index: number) => {
    // console.log(`Clicked: ${item.title} (Index: ${index})`);
  };
  // const [selectedProduct, setSelectedProduct] = useState<any>(null);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleQuickViewClick = (product: any) => {
  //   console.log("Quick View Clicked", product);
  //   setShow(true);
  //   setSelectedProduct(product);
  // };
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
                    selectedVariant={selectedVariant}
                    setSelectedVariant={setSelectedVariant} />
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
      <Footer />
    </div>
  );
};

export default Product;