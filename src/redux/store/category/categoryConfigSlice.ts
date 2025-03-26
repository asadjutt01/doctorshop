import { getItem } from "@/utils/localStorage/localStorage";
import { createSlice } from "@reduxjs/toolkit";
// import { flattenCategories } from '../../utils/functions/functions';
// import { CategoryItem } from '../../types/category';

// const flatCategoryArray: CategoryItem[] = flattenCategories(cat);
const initialState = {
  first_category_all: [],
  sub_category: [],
  sub_sub_category: [],
};

const categoryConfigSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryAll(state, action) {
        state.first_category_all = action.payload; // ✅ Updates main category
      },
      setSubCategory(state, action) {
        state.sub_category = action.payload; // ✅ Updates sub-category
      },
      setSubSubCategory(state, action) {
        state.sub_sub_category = action.payload; // ✅ Updates sub-sub-category
      },
  },
});

export const { setCategoryAll,setSubCategory,setSubSubCategory } = categoryConfigSlice.actions;

export default categoryConfigSlice.reducer;
