import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  let [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // let isInCart = cart.filter((el) => el.id === product.id);
    // let isInCart = cart.find((el) => el.id === product.id);
    let isInCart = cart.some((el) => el.id === product.id);

    if (isInCart) {
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    let filteredArray = cart.filter((e) => e.id !== id);
    setCart(filteredArray);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((total, e) => {
      return total + e.price * e.quantity;
    }, 0);
    return total;
  };

  const productsInCart = () => {
    let total = cart.reduce((total, e) => {
      return total + e.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    resetCart,
    removeProduct,
    getTotalPrice,
    productsInCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
