// import { createSlice } from "@reduxjs/toolkit";
// import p1 from "../../app/images/p1.png";
// import p2 from "../../app/images/p2.png";
// import p3 from "../../app/images/p3.png";
// import p4 from "../../app/images/p4.png";
// import s1 from "../../app/images/s1.png";
// import s2 from "../../app/images/s2.png";
// import s3 from "../../app/images/s3.png";
// import s4 from "../../app/images/s4.png";

// const initialState = {
//   products: [
//     {
//       id: 12,
//       image: s2,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title:
//         "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 13,
//       image: s3,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 11,
//       image: s1,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 14,
//       image: s4,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 1,
//       image: p1,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 2,
//       image: p2,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 3,
//       image: p3,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 4,
//       image: p4,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 5,
//       image: p3,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 6,
//       image: p1,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 7,
//       image: p2,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 8,
//       image: p3,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 9,
//       image: p1,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 10,
//       image: p2,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },

//     {
//       id: 15,
//       image: s1,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 16,
//       image: s2,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 17,
//       image: s3,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//     {
//       id: 18,
//       image: s4,
//       price: 125,
//       rating: 5,
//       priceIncVat: 130,
//       title: "Lorem Ipsum is simply dummy text of the printing and ….",
//       quantity: 1,
//       productCode: "K3A0562345",
//       pipCode: "K3A0562345",
//     },
//   ],

//   cartItems: [],
//   subtotal: 0,
// };

// // Create slice
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingProductIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       if (existingProductIndex >= 0) {
//         state.cartItems[existingProductIndex].quantity += 1;
//       } else {
//         state.cartItems.push({ ...action.payload, quantity: 1 });
//       }

//       state.subtotal = state.cartItems.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       );
//     },

//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(
//         (item) => item.id !== action.payload
//       );

//       state.subtotal = state.cartItems.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       );
//     },

//     increaseQuantity: (state, action) => {
//       const item = state.cartItems.find((item) => item.id === action.payload);
//       if (item) item.quantity += 1;

//       state.subtotal = state.cartItems.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       );
//     },

//     decreaseQuantity: (state, action) => {
//       const item = state.cartItems.find((item) => item.id === action.payload);
//       if (item && item.quantity > 1) item.quantity -= 1;

//       state.subtotal = state.cartItems.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       );
//     },
//   },
// });

// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
//   cartSlice.actions;

// export const selectCartState = (state) => ({
//   products: state.Cart.products,
//   cartItems: state.Cart.cartItems,
//   subtotal: state.Cart.subtotal,
// });

// export default cartSlice.reducer;
