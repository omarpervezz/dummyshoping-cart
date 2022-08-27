import { useState } from "react";
import "../styles/App.css";
import Product from "./Product";
import { ProductsTitle } from "./ProductsTitle";
function App() {
  const [seletectedItem, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <ProductsTitle />
      <Product />
      <CartItemContainer state={state} />
    </div>
  );
}

export default App;
