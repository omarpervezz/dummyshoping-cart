import "../styles/App.css";
import Product, { useContentProvider } from "./Product";
import { ProductsTitle } from "./ProductsTitle";
function App() {
  const { sendV } = useContentProvider();

  return (
    <div className="App">
      <ProductsTitle />
      <Product />
    </div>
  );
}

export default App;
