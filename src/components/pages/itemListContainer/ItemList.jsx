import ProductCard from "../../common/productCard/ProductCard";
import styles from "./itemList.module.css";

const ItemList = ({ myProducts }) => {
  return (
    <div class={styles.itemList}>
      {myProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
