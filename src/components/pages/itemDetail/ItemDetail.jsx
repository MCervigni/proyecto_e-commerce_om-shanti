import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";
import styles from "./itemDetail.module.css";
import ItemCount from "./itemCount";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productSelected = products.find((el) => el.id === +id);
    setProduct(productSelected);
  }, [id]);

  const onAdd = (quantity) => {
    console.log(
      `Has agregado ${quantity} unidades de "${product.title}" al carrito.`
    );
  };

  return (
    <div className={styles.itemDetail}>
      {product && (
        <>
          <img
            src={product.img}
            alt={product.title}
            className={styles.imgItemDetail}
          />
          <div className={styles.cardItemDetail}>
            <h2 className={styles.titleItemDetail}>{product.title}</h2>
            <p className={styles.descriptionItemDetail}>
              {product.description}
            </p>
            <p>
              <b>Precio: ${product.price?.toLocaleString()}</b>
            </p>
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
