import { useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import styles from "./counter.module.css";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ product, initialQuantity = 1, showAddButton = true }) => {
  const { addItem, cart } = useContext(CartContext);
  const [count, setCount] = useState(initialQuantity);

  useEffect(() => {
    setCount(initialQuantity);
  }, [initialQuantity]);

  const handleIncrement = () => {
    if (count < product.stock) {
      setCount(count + 1);
      if (!showAddButton) {
        addItem(product, 1);
      }
    } else {
      toast.error("No hay suficiente stock disponible");
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      if (!showAddButton) {
        addItem(product, -1);
      }
    } else {
      toast("Se debe agregar al menos 1 producto", { icon: "⚠️" });
    }
  };

  const onAdd = () => {
    const productInCart = cart.find((item) => item.id === product.id);
    const totalQuantity = productInCart
      ? productInCart.quantity + count
      : count;

    if (totalQuantity <= product.stock) {
      addItem(product, count);
      toast.success("Producto agregado al carrito");
    } else {
      toast.error("No hay suficiente stock disponible");
    }
  };

  return (
    <div className={styles.counterContainer}>
      <div className={styles.counterControls}>
        <button onClick={handleDecrement}>-</button>
        <span>
          <b> {count} </b>
        </span>
        <button onClick={handleIncrement}>+</button>
      </div>
      {showAddButton && (
        <button className={styles.addButton} onClick={onAdd}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default Counter;
