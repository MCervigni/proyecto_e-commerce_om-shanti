import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  const { productsInCart } = useContext(CartContext);
  let totalProductsInCart = productsInCart();
  return (
    <Link to="/cart">
      <FontAwesomeIcon icon={faShoppingCart} /> {totalProductsInCart}
    </Link>
  );
}

export default CartWidget;
