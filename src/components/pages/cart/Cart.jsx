import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h2 style={{ fontStyle: "italic", fontSize: "1.4rem" , fontWeight:500, color:"gray"}}>Página del Carrito</h2>
      <h3 style={{ fontSize: "1.4rem" , fontWeight:500, color:"gray"}}>⚠ En construcción ⚠</h3>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
