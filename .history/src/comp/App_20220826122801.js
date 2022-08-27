import "../styles/App.css";
import Product from "./Product";
import { ProductsTitle } from "./ProductsTitle";
import { ContextProvider } from "./Product";
import { useContext } from "react";
function App() {
   const {value} = useContext(ContextProvider);
   
  return (
    <div className="App">
      <ProductsTitle />
      <Product />
    </div>
  );
}

export default App;
