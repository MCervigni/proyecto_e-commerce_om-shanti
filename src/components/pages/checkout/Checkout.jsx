import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import styles from "./checkout.module.css"


const Checkout = () => {
  const { cart, getTotalPrice, resetCart } = useContext(CartContext);
  const [userData, setUserData] = useState({
    nombre: "",
    userEmail: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const dataInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((e) => {
      let refDoc = doc(productsCollection, e.id);
      updateDoc(refDoc, { stock: e.stock - e.quantity });
    });
  };

  return (
    <div>
      <h2>Confirmación de compra</h2>
      {orderId ? (
        <h3>Muchas gracias por su compra! Su ticket es ID:{orderId}</h3>
      ) : (
        <div >
        <form onSubmit={formHandler} className={styles.checkoutForm}>
          <input
            type="text"
            placeholder="Nombre y Apellido"
            name="nombre"
            onChange={dataInput}
          />
          <input
            type="text"
            placeholder="E-mail"
            name="userEmail"
            onChange={dataInput}
          />
          <input
            type="text"
            placeholder="Teléfono"
            name="telefono"
            onChange={dataInput}
          />
          <button> enviar </button>
          <button type="button"> cancelar </button>
        </form>
        </div>
      )}
    </div>
  );
};
  /* return (
    <div>
      <h2 style={{ fontStyle: "italic", fontSize: "1.4rem" , fontWeight:500, color:"gray"}}>Página Finalizar Compra</h2>
      <h3 style={{ fontSize: "1.4rem" , fontWeight:500, color:"gray"}}>⚠ En construcción ⚠</h3>
    </div>
  ); */

export default Checkout;
