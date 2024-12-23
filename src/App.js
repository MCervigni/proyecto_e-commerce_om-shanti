import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navBar/NavBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Checkout from "./components/pages/checkout/Checkout";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Toaster />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
