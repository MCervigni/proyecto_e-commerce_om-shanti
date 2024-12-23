import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Counter from "../../common/counter/Counter";
import DotLoader from "react-spinners/DotLoader";
import styles from "./itemDetail.module.css";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDocById = getDoc(doc(db, "products", id));
    getDocById.then((res) => {
      setProduct({ ...res.data(), id: res.id });
      setLoading(false);
    });
  }, [id]);

  return (
    <div className={styles.itemDetail}>
      {loading ? (
        <div className={styles.loaderContainer}>
          <DotLoader color="#206088" loading={loading} size={40} />
        </div>
      ) : (
        product && (
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
        )
      )}
    </div>
  );
};

export default ItemDetail;
