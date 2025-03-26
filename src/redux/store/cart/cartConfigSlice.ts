import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id:string;
    quantity: number;  // ✅ Changed from string to number
    tax: number;  // ✅ Changed from string to number
    discount: number;  // ✅ Changed from string to number
    user_id: string;
    product_name: string;  // ✅ Changed from product_name to name
    stock_qty: number;  // ✅ Changed from string to number
    price: number;  // ✅ Changed from string to number
variant: string;
}
interface CartSummary {
    sub_total: string;
    tax: string;
    shipping_cost: string;
    discount: string;
    grand_total: string;
    grand_total_value: number;
    coupon_code: string;
    coupon_applied: boolean;
  }
interface CartState {
    items: CartItem[];
    totalPrice: number;
    cartSummary:CartSummary | null;
    carts:any;
    count:any;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
    cartSummary:null,
    carts:null,
    count:0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalPrice += action.payload.price * action.payload.quantity;
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.totalPrice -= state.items[itemIndex].price * state.items[itemIndex].quantity;
                state.items.splice(itemIndex, 1);
            }
        },
        setCartSummary: (state, action: PayloadAction<CartSummary>) => {
            state.cartSummary = action.payload;
          },
        setCartsWithList: (state, action: PayloadAction<any>) => {
            state.carts = action.payload;
          },
          setCartCount: (state, action: PayloadAction<any>) => {
            state.count = action.payload;
          }
    },
});

export const { addToCart, removeFromCart,setCartSummary ,setCartsWithList , setCartCount } = cartSlice.actions;
export default cartSlice.reducer;
