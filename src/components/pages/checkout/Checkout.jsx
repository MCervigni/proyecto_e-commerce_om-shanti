import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import styles from "./checkout.module.css";

const Checkout = () => {
  const { cart, getTotalPrice, resetCart } = useContext(CartContext);
  const [userData, setUserData] = useState({
    nombreApellido: "",
    userEmail: "",
    telefono: "",
    comentarios: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const dataInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9\b]+$/;
    return re.test(String(phone));
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (!userData.nombreApellido || !userData.userEmail || !userData.telefono) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (!validateEmail(userData.userEmail)) {
      toast.error("El formato del email es incorrecto");
      return;
    }

    if (!validatePhone(userData.telefono)) {
      toast.error("El formato del teléfono es incorrecto");
      return;
    }

    setLoading(true);

    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total: total,
      date: new Date(),
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
      setLoading(false);
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((e) => {
      let refDoc = doc(productsCollection, e.id);
      updateDoc(refDoc, { stock: e.stock - e.quantity });
    });
  };

  const handleCancel = () => {
    resetCart();
  };

  return (
    <div>
      {loading ? (
        <div className={styles.loaderContainer}>
          <p>Procesando pedido...</p>
        </div>
      ) : orderId ? (
        <div className={styles.checkoutResponse}>
          <h2>Muchas gracias por tu compra!</h2>
          <p>
            Tu ticket de seguimento es: <b> {orderId}</b>
          </p>
          <Link to="/" className={styles.returnLink}>
            Volver a la página principal
          </Link>
        </div>
      ) : (
        <div>
          <form onSubmit={formHandler} className={styles.formContainer}>
            <h3>Complete sus datos</h3>
            <input
              type="text"
              placeholder="Nombre y Apellido"
              name="nombreApellido"
              onChange={dataInput}
              className={styles.inputField}
              value={userData.nombreApellido || ""}
            />
            <input
              type="text"
              placeholder="E-mail"
              name="userEmail"
              onChange={dataInput}
              className={styles.inputField}
              value={userData.userEmail || ""}
            />
            <input
              type="text"
              placeholder="Teléfono"
              name="telefono"
              onChange={dataInput}
              className={styles.inputField}
              value={userData.telefono || ""}
            />
            <textarea
              placeholder="Comentarios"
              name="comentarios"
              onChange={dataInput}
              className={styles.textareaField}
              value={userData.comentarios || ""}
            ></textarea>
            <div className={styles.buttonContainer}>
              <button
                type="submit"
                className={`${styles.button} ${styles.buttonEnviar}`}
              >
                Enviar
              </button>
              <button
                type="button"
                className={`${styles.button} ${styles.buttonCancelar}`}
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
