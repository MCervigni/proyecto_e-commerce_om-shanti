import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">🛒<span>3</span></Link>
  );
};

export default CartWidget;