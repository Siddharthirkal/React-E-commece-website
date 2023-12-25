// CartContext.js

import React, { createContext, useReducer, useContext } from 'react';
import cartReducer from './CartReducer';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const initialCartState = { cart: [] }; // Initial state for the cart


export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; // Export both CartContext and cartReducer
