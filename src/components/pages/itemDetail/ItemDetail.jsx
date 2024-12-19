import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { products } from "../../../products";
import styles from "./itemDetail.module.css";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    const getDocById = getDoc(refDoc);
    getDocById.then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  // return (
  //   <div>
  //     <h2>{product.title}</h2>
  //     <img src={product.img} alt={product.title} />
  //     <Counter product={product} />
  //   </div>
  // );

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

            <p>
              <b>Cantidad: </b>
            </p>
            <Counter product={product} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
