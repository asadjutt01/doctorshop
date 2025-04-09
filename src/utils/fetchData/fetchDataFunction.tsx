import { setProducts } from "@/redux/store/product/productConfigSlice";
import Service from "../../services";
import { getItem, setItem } from "../localStorage/localStorage";
import { AppDispatch, IRootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setCartCount } from "@/redux/store/cart/cartConfigSlice";

const getProductList = async (categoryId?: any) => {
  try {
    // console.log("hello>>>>>>>");
    const response = await Service.Product_Methods.getProduct(categoryId);
    // console.log("response>>>>>>>", response);
    // return response?.data ?? []; // ✅ Ensure it returns products
    return response ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};
const getProductToday = async () => {
  try {
    // console.log("hello>>>>>>>");
    const response = await Service.Product_Methods.getProductToday();
    // console.log("response>>>>>>>", response);
    return response?.data ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};

const getProdutbest = async () => {
  try {
    // console.log("hello>>>>>>>");
    const response = await Service.Product_Methods.getbestseller();
    // console.log("response>>>>>>>", response);
    return response?.data ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};
const getProductFeatured = async () => {
  try {
    // console.log("hello>>>>>>>");
    const response = await Service.Product_Methods.getProductFeatured();
    // console.log("response>>>>>>>", response);
    return response?.data ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};

const getCategoryAll = async () => {
  try {
    // console.log("hello>>>>>>>");
    const response = await Service.Categories_Method.getCategoryAll();
    // console.log("response>>>>>>>", response);
    return response?.data ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};

const getCategorySub = async (id: number) => {
  try {
    // console.log("hello>>>>>>>");
    const response = await Service.Categories_Method.getCategorySub(id);
    // console.log("response>>>>>>>", response);
    return response?.data ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};
const getCategorySubSpecific = async () => {
  try {
    // console.log("hello>>>>>>>");
    const response = await Service.Categories_Method.getCategorySubSpecific();
    // console.log("response>>>>>>>", response);
    return response?.data ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};
const getCategorySubSub = async (id: number) => {
  try {
    // console.log("hello>>>>>>>");
    const response = await Service.Categories_Method.getCategorySubSub(id);
    // console.log("response>>>>>>>", response);
    return response?.data ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};
const getSingleProduct = async (slug: any) => {
  try {
    // console.log("hello>>>>>>>");
    const response = await Service.Product_Methods.getSingleProduct(slug);
    // console.log("response>>>>>>>", response);
    return response?.data ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};
const getCartSummary = async () => {
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
    // console.log("hello>>>>>>>");
    const response = await Service.Cart_Method.getCartSummary(formData);
    // console.log("response>>>>>assd>>", response);
    return response ?? {}; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};
const getCartList = async () => {
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
    
    // console.log("hello>>>>>>>");
    const response = await Service.Cart_Method.getCartList(formData);
    // console.log("response>>>>>>>", response);
    return response ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};
const getCartMultiAddress = async () => {
  try {
    // console.log("hello>>>>>>>");
    const userId: any = getItem("user_id");
    const formData = new FormData();
    formData.append("user_id", userId);

    const response = await Service.Users_Methods.getCartMultiAddress(formData);
    // console.log("response>>>>>>>", response);
    return response ?? []; // ✅ Ensure it returns products
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // ✅ Return empty array on failure
  }
};


// const getCartCount = async () => {
//   const dispatch = useDispatch();
//   try {
//     const response: any = await Service.Cart_Method.getCartCount();
//     console.log("Count Data >>>>>>", response.count);
//     if (response && response.count !== undefined) {

//       dispatch(setCartCount(response.count))
//     } else {
//       console.log("No count received.");
//       // setCartCount(0);
//     }
//   } catch (err) {
//     console.error("Error fetching cart count:", err);
//     // setCartCount(0);
//   }
// };

export {
  getProductList,
  getProductToday,
  getProductFeatured,
  getCategoryAll,
  getCategorySub,
  getCategorySubSpecific,
  getCategorySubSub,
  getSingleProduct,
  getProdutbest,
  getCartSummary,
  getCartList,
  getCartMultiAddress,
  // getCartCount,
};
