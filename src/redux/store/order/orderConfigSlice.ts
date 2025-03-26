import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: string;
  items: any[];
  totalAmount: number;
  status: "pending" | "completed" | "cancelled";
}

interface OrderState {
  orders: Order[];
  Order_Detail:[];
}

const initialState: OrderState = {
  orders: [],
  Order_Detail:[],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    setOrderDetail: (state, action: PayloadAction<any>) => {
      state.Order_Detail=action.payload
      // console.log( "state.Order_Detail>>>>>>>>>>>>>>>",state.Order_Detail);
      
    },
  },
});

export const { addOrder, setOrderDetail } = orderSlice.actions;
export default orderSlice.reducer;
