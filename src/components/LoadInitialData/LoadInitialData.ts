import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCartList,
  getCartSummary,
  getCategoryAll,
  getCategorySub,
  getCategorySubSpecific,
  getProductFeatured,
  getProductList,
  getProductToday,
  getProdutbest,
} from "@/utils/fetchData/fetchDataFunction";
import {
  setProducts,
  setproductsFeatured,
  setProductsToday,
  setproductsBestSeller,
} from "@/redux/store/product/productConfigSlice";
import {
  setCartCount,
  setCartSummary,
} from "@/redux/store/cart/cartConfigSlice";
import { IRootState } from "@/redux/store";
import {
  setCategoryAll,
  setSubCategory,
  setSubCategorySpecific,
} from "@/redux/store/category/categoryConfigSlice";
import Service from "@/services";
import { v4 as uuidv4 } from "uuid";
import { getItem, setItem } from "@/utils/localStorage/localStorage";

export const getCartCount = async (dispatch: any) => {
  try {
    const formData = new FormData();
     const authToken: any = getItem("authToken");
    if(Boolean(authToken)){
      const user_id:any = getItem("user_id")
      formData.append("user_id", user_id);
    } else{
      const temp_user_id:any = getItem("temp_user_id")
      formData.append("temp_user_id", temp_user_id);
    }
    const response: any = await Service.Cart_Method.getCartCount(formData);
    // console.log("Count Data >>>>>>", response.count);
    if (response && response.count !== undefined) {
      dispatch(setCartCount(response.count));
    } else {
      // console.log("No count received.");
    }
  } catch (err) {
    console.error("Error fetching cart count:", err);
  }
};

const LoadInitialData = () => {
  const dispatch = useDispatch();
 
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductList();
        if (products?.length > 0) {
          dispatch(setProducts(products));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchProducts_todaydeal = async () => {
      try {
        const products = await getProductToday();
        if (products?.length > 0) {
          dispatch(setProductsToday(products));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchbestseller = async () => {
      try {
        const products = await getProdutbest();
        if (products?.length > 0) {
          dispatch(setproductsBestSeller(products));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchProducts_Featured = async () => {
      try {
        const products = await getProductFeatured();
        if (products?.length > 0) {
          dispatch(setproductsFeatured(products));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchcategoryall = async () => {
      try {
        const categories = await getCategoryAll();
        if (categories?.length > 0) {
          dispatch(setCategoryAll(categories));
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // const fetchcategorySub = async () => {
    //   try {
    //     const randomNumber = Math.floor(Math.random() * (35 - 25 + 1)) + 25;
    //     console.log('randomNumber????',randomNumber);
    //     const categories = await getCategorySub(randomNumber);
    //     if (categories?.length > 0) {
    //       dispatch(setSubCategory(categories));
    //     }
    //   } catch (error) {
    //     console.error("Error fetching subcategories:", error);
    //   }
    // };

    const fetchCategorySubSpecific = async () => {
      try {
        const categories = await getCategorySubSpecific();
        if (categories?.length > 0) {
          dispatch(setSubCategorySpecific(categories));
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    const storeTempId = () => {
      let temp_user_id = getItem("temp_user_id"); // Check if temp_user_id exists in storage
  
      if (!temp_user_id) {
        temp_user_id = uuidv4(); // Generate new UUID
        setItem("temp_user_id", temp_user_id); // Store it in localStorage
      }
    };
    fetchcategoryall();
    // fetchcategorySub();
    fetchCategorySubSpecific();
    fetchProducts_todaydeal();
    fetchProducts_Featured();
    fetchProducts();
    fetchbestseller();
    getCartCount(dispatch);
    storeTempId();

  }, [dispatch]);

  return null;
};

export default LoadInitialData;
