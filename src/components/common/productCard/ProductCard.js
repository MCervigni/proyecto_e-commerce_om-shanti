import { Link } from "react-router-dom";
import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div class={styles.productCard}>
      <img class={styles.productImg} src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <div class={styles.productPrice}>
        ${product.price.toLocaleString("es-AR")}
      </div>

      <Link to={`/itemDetail/${product.id}`} class={styles.buttonLink}>
        Ver detalle
      </Link>
    </div>
  );
};

export default ProductCard;
