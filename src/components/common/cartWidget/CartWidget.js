import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { productsInCart } = useContext(CartContext);
  let totalProductsInCart = productsInCart();
  return (
    <Link to="/cart">
      🛒<span>{totalProductsInCart}</span>
    </Link>
  );
};

export default CartWidget;
