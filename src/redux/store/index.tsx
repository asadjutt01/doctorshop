import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authConfigSlice';
import userSlice from './user/userConfigSlice';
import productSlice from './product/productConfigSlice';
import categorySlice from './category/categoryConfigSlice';
import cartSlice from './cart/cartConfigSlice';
import orderSlice from './order/orderConfigSlice';

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    product: productSlice,
    category: categorySlice,
    cart: cartSlice,
    order: orderSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch; // ✅ Add this
export type IRootState = ReturnType<typeof rootReducer>;
