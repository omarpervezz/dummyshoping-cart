import { useState } from "react";
import "../styles/App.css";
import CartItemContainer from "./CartItemContainer/CartItemContainer";
import Product from "./Product";
import { ProductsTitle } from "./ProductsTitle";
function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="App">
      <ProductsTitle />
      <Product setSelectedItem={setSelectedItem} />
      {selectedItem && <CartItemContainer />}
    </div>
  );
}

export default App;
