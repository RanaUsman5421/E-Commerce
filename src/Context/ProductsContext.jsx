import React, { createContext, useState } from "react";
import { all_products } from "../assets/assets";




export const ProductsContext = createContext();
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_products.length; i++) {
        cart[all_products[i].id] = 0; // Use product id, not index
    }
    return cart;
}
const ProductsProvider = (props) => {


  const [cartItems, setCartItems] = React.useState(getDefaultCart());
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1) }));
    }
    
    
    const getTotalCartAmount = () => {
        let totalAmout = 0;
        for (const item in cartItems) {
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmout += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmout;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems) {
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }



  const contextValue = { all_products, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;