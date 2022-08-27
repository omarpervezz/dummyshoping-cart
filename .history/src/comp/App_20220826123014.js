import { useContext } from "react";
import "../styles/App.css";
import Product, { useContentProvider } from "./Product";
import { ProductsTitle } from "./ProductsTitle";
function App() {
  const { value } = useContext(ContextProvider);
  console.log(value);
  return (
    <div className="App">
      <ProductsTitle />
      <Product />
    </div>
  );
}

export default App;
