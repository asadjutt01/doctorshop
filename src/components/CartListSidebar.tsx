// import React from "react";
// import { Button, FormControl } from "react-bootstrap";
// import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// // import {
// //   selectCartState,
// //   increaseQuantity,
// //   decreaseQuantity,
// //   removeFromCart,
// // } from "@/redux/slices/cartSlice";

// export default function CartList() {
//   // const { cartItems } = useSelector(selectCartState);
//   const dispatch = useDispatch();

//   const handleIncreaseQuantity = (id: number) => {
//     // dispatch(increaseQuantity(id));
//   };

//   const handleDecreaseQuantity = (id: number) => {
//     // dispatch(decreaseQuantity(id));
//   };


  


//   return (
//     <div>
//       <div className="cart-list-sidebar">
//         {cartItems.map((product: any) => (
//           <div key={product.id} className="list-card">
//             <div className="img-card">
//               <Image src={product.image} alt={product.title} />
//             </div>
//             <div className="details">
//               <h5>{product.title}</h5>
//               <div className="qty-picker">
//                 <Button
//                   variant="outline-secondary"
//                   onClick={() => handleDecreaseQuantity(product.id)}
//                 >
//                   <i className="fa-solid fa-minus"></i>
//                 </Button>
//                 <FormControl
//                   value={product.quantity}
//                   onChange={(e) =>
//                     dispatch(
//                       increaseQuantity({
//                         id: product.id,
//                         quantity: Math.max(1, parseInt(e.target.value)),
//                       })
//                     )
//                   }
//                 />
//                 <Button
//                   variant="outline-secondary"
//                   onClick={() => handleIncreaseQuantity(product.id)}
//                 >
//                   <i className="fa-solid fa-plus"></i>
//                 </Button>
//               </div>
//             </div>
//             <div className="action">
//               <a onClick={() => dispatch(removeFromCart(product.id))}>
//                 <i className="fa-regular fa-trash"></i>
//               </a>
//               <h4>${product.price}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
