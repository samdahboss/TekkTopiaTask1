import Navbar from "./components/Navbar";
import Productdisplay from "./components/Productdisplay";
export default function App() {
  return (
    <div className="lg:px-8 px-4">
      <Navbar/>
      <Productdisplay/>
    </div>
  );
}