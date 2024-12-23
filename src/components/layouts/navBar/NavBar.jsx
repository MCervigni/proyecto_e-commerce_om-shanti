import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./navBar.module.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <img src="/img-logo-YT.png" alt="Logo Tienda Om Shanti" />
        <h1>Om Shanti</h1>
      </Link>
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`${styles.navUl} ${menuOpen ? styles.showMenu : ""}`}>
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
      </ul>
      <div className={styles.cartWidget}>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
