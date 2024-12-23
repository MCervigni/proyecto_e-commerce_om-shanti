import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const productInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (productInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const resetCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const productsInCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeProduct,
        resetCart,
        getTotalPrice,
        productsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
