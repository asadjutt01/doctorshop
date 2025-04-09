import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import p1 from "../../../app/images/p1.png";
import p2 from "../../../app/images/p2.png";
import p3 from "../../../app/images/p3.png";
import p4 from "../../../app/images/p4.png";
import s1 from "../../../app/images/s1.png";
import s2 from "../../../app/images/s2.png";
import s3 from "../../../app/images/s3.png";
import s4 from "../../../app/images/s4.png";
import { StaticImageData } from "next/image";

interface Product {
  id: string | number;
  name: string; // ✅ Match API response
  thumbnail_image: string; // ✅ Match API response
  has_discount: boolean;
  discount: string;
  stroked_price: string;
  main_price: string;
  rating: number;
  sales: number;
  is_wholesale: boolean;
  productCode: number;
  pipCode: number;
  price: number;
  priceIncVat: any;
  links: {
    details: string;
  };
}

interface ProductState {
  products: Product[];
  productsToday: Product[];
  productsFeatured: Product[];
  bestSellerProduct: Product[];
}

const initialState: ProductState = {
  products: [],
  productsToday: [],
  productsFeatured: [],
  bestSellerProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setProductsToday: (state, action: PayloadAction<Product[]>) => {
      state.productsToday = action.payload;
    },
    setproductsFeatured: (state, action: PayloadAction<Product[]>) => {
      state.productsFeatured = action.payload;
      // console.log("state.productsFeatured", state.productsFeatured);
    },
    setproductsBestSeller: (state, action: PayloadAction<Product[]>) => {
      state.bestSellerProduct = action.payload;
      // console.log("state.productsBestSeller", state.bestSellerProduct);
    },
  },
});

export const {
  setProducts,
  setProductsToday,
  setproductsFeatured,
  setproductsBestSeller,
} = productSlice.actions;
export default productSlice.reducer;
