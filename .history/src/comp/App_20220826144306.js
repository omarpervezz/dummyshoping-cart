import { useState } from "react";
import "../styles/App.css";
import Product from "./Product";
import { ProductsTitle } from "./ProductsTitle";
function App() {
  const [seletectedItem, setSelectedItem] = useState(null);
  return (
    <div className="App">
      <ProductsTitle />
      <Product />
      {sele}
    </div>
  );
}

export default App;
