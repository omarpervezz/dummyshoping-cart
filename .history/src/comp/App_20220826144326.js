import { useState } from "react";
import "../styles/App.css";
import CartItemContainer from "./CartItemContainer/CartItemContainer";
import Product from "./Product";
import { ProductsTitle } from "./ProductsTitle";
function App() {
  const [seletectedItem, setSelectedItem] = useState(null);
  return (
    <div className="App">
      <ProductsTitle />
      <Product />
      {seletectedItem && <CartItemContainer />}
    </div>
  );
}

export default App;
