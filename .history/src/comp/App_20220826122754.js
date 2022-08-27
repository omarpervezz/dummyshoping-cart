import "../styles/App.css";
import Product from "./Product";
import { ProductsTitle } from "./ProductsTitle";
import { ContextProvider } from "./Product";
function App() {
   const {value} = usecon
  return (
    <div className="App">
      <ProductsTitle />
      <Product />
    </div>
  );
}

export default App;
