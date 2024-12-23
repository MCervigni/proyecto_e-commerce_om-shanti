import { useEffect } from "react";
import { useState } from "react";
//import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DotLoader } from "react-spinners";
import styles from "./itemList.module.css";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let refCollection = productsCollection;
    if (name) {
      const productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", name)
      );
      refCollection = productsCollectionFiltered;
    }
    const getProducts = getDocs(refCollection);
    getProducts.then((res) => {
      let products = res.docs.map((e) => {
        return { ...e.data(), id: e.id };
      });
      setMyProducts(products);
    });
  }, [name]);

  return (
    <div>
      {myProducts.length === 0 && (
        <div className={styles.loaderContainer}>
          <DotLoader
            color="#206088"
            cssOverride={{}}
            loading
            size={40}
            speedMultiplier={1}
          />
        </div>
      )}
      <ItemList myProducts={myProducts} />
    </div>
  );
};

/* BOTON PARA AGREGAR LOS PRODUCTOS A FIRESTORE
      <button onClick={addProductsFirestore}>
        Agregar Productos a Firestore
      </button>
const addProductsFirestore = () => {
let productCollection = collection( db, "products")
 products.forEach((e)=>{
  addDoc(productCollection,e)
 })
 }; */

export default ItemListContainer;
