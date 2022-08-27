import "../styles/App.css";
import Product from "./Product";
import { ProductsTitle } from "./ProductsTitle";
function App() {
  
  return (
    <div className="App">
      <ProductsTitle />
      <Product />
      <CartItemContainer state={state} />
    </div>
  );
}

export default App;
