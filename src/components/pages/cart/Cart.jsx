import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { CartContext } from "../../../context/CartContext";
import Counter from "../../common/counter/Counter";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart, resetCart, removeProduct, getTotalPrice } =
    useContext(CartContext);
  let totalAmount = getTotalPrice();

  const handleResetCart = () => {
    resetCart();
    toast.success("Carrito vaciado");
  };

  return (
    <div>
      <h2 className={styles.cartTitle}>Carrito de compras</h2>

      {cart.length > 0 ? (
        <>
          {cart.map((e) => (
            <div key={e.id} className={styles.cartContainer}>
              <div key={e.id} className={styles.productCardCart}>
                <div className={styles.imgContainer}>
                  <img
                    src={e.img}
                    alt={e.title}
                    className={styles.productImgCart}
                  />
                </div>
                <div className={styles.productCardInfo}>
                  <p>
                    Producto: <b>{e.title}</b>
                  </p>
                  <p>
                    Precio por unidad <b>$ {e.price.toLocaleString("es-AR")}</b>
                  </p>
                  <div className={styles.quantityContainer}>
                    <p>Cantidad:</p>
                    <Counter
                      product={e}
                      initialQuantity={e.quantity}
                      showAddButton={false}
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeProduct(e.id)}
                  className={styles.deleteProductBtn}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className={styles.cartInfo}>
            <h3>TOTAL: $ {totalAmount.toLocaleString("es-AR")}</h3>
            <button onClick={handleResetCart} className={styles.emptyCartBtn}>
              Vaciar el carrito
            </button>
            <Link to="/checkout" className={styles.checkoutLink}>
              Finalizar compra
            </Link>
          </div>
        </>
      ) : (
        <div>
          <p className={styles.emptyCart}>El carrito está vacío</p>
          <Link to="/" className={styles.returnLink}>
            Volver a la página principal
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
