// import styles from "./itemList.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    let filterProducts = products.filter((e) => e.category === name);

    let task = new Promise((res) => {
      setTimeout(() => {
        res(name ? filterProducts : products);
      }, 500);
    });
    task
      .then((resp) => {
        setMyProducts(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finally");
      });
  }, [name]);

  return <ItemList myProducts={myProducts} />;
};

export default ItemListContainer;
