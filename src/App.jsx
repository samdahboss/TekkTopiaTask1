import Navbar from "./components/Navbar";
import Productimage from "./components/Productimage";
import Productinfo from "./components/Productinfo";
import { CartProvider } from "./components/CartContext";


export default function App() {
  return (
    <CartProvider>
      <div className="lg:px-8 lg:px-4">
        <Navbar/>
        <div className="product-display flex flex-col lg:flex-row">
          <Productimage/>
          <Productinfo/>
        </div>
      </div>
    </CartProvider>
  );
}