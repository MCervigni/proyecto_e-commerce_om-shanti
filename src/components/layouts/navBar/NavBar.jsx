import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <img src="/img-logo-YT.png" alt="Logo Tienda Om Shanti" />
        <h1>Om Shanti</h1>
      </Link>
      <ul className={styles.navUl}>
        <li>
          <Link to="/category/mats">Mats</Link>
        </li>
        <li>
          <Link to="/category/portamats">Portamats</Link>
        </li>
        <li>
          <Link to="/category/bolsters">Bolsters</Link>
        </li>
        <li>
          <Link to="/category/bloques">Bloques</Link>
        </li>
        <li>
          <Link to="/category/cintos">Cintos</Link>
        </li>

        <CartWidget />
      </ul>
    </div>
  );
};

export default NavBar;
