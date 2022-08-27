import { useState } from "react";
import "../styles/App.css";
import CartItemContainer from "./CartItemContainer/CartItemContainer";
import Product from "./Product";
import { ProductsTitle } from "./ProductsTitle";
function App() {
  
  return (
    <div className="App">
      <ProductsTitle />
      <Product setSelectedItem={setSelectedItem} />
      
    </div>
  );
}

export default App;
