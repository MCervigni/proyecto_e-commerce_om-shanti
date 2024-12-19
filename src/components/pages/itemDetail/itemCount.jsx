/* import { useState } from "react";
import styles from "./itemDetail.module.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement} disabled={count === 1}>
        -
      </button>
      <span class={styles.btnAdd}>{count}</span>
      <button onClick={increment} disabled={count === stock}>
        +
      </button>
      <button onClick={() => onAdd(count)} class={styles.btnAddProduct}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount; */
