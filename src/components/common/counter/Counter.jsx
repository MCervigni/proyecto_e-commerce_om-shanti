import { useContext, useState } from "react";
import styles from "./counter.module.css";
import { CartContext } from "../../../context/CartContext";

/* const btnStyles = {
  padding: "10px 40px",
  backgroundColor: "steelblue",
  fontSize: "1.5rem",
  color: "white",
  border: "none",
  borderRadius: "8px",
}; */
// const divStyles = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: "20px",
// };
const Counter = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("minimo 1 ");
    }
  };

  const onAdd = () => {
    let productToCart = { ...product, quantity: count };
    addToCart(productToCart);
  };

  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span class={styles.btnAdd}>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button class={styles.btnAddProduct} onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
