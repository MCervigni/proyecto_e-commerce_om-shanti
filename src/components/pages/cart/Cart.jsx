import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import styles from "./cart.module.css"

const Cart = () => {
  const { cart, resetCart, removeProduct, getTotalPrice } =
    useContext(CartContext);
  let totalAmount = getTotalPrice();
  return (
    <div>
      <h2
        style={{
          fontStyle: "italic",
          fontSize: "1.4rem",
          fontWeight: 500,
          color: "gray",
        }}
      >
        Carrito de compras
      </h2>

      {cart.length > 0 ? (
        cart.map((e) => {
          return (
            <div className={styles.cartConteiner}>
            <div key={e.id} className={styles.productCardCart}>
              <img src={e.img} alt={e.title} className={styles.productImgCart}/>
              <div className={styles.productCardInfo}>
              <p>Producto: <b>{e.title}</b></p>
              <p>Cantidad: <b>{e.quantity}</b></p>
              <p>Precio por unidad <b>$ {e.price}</b></p>
              </div>
              <button onClick={() => removeProduct(e.id)}>Eliminar</button>
            </div>
            </div>
          );
        })
      ) : (
        <p>El carrito está vacio</p>
      )}

      {cart.length > 0 && (
        <div>
          <h3>El total del carrito es : ${totalAmount}</h3>
          <button onClick={resetCart}>Vaciar el carrito</button>
          <Link to="/checkout">Finalizar compra</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
