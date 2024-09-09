// Import the ProductInfoButtons component
import ProductInfoButtons from "./ProductInfoButtons";

// Export the ProductInfo component as the default
export default function ProductInfo() {
 
  // Return the JSX for the product info section
  return (
    // Container for the product info
    <div className="productdisplay__info lg:w-1/2 w-full lg:py-24 lg:px-0 px-8 py-6 lg:pr-24">
      {/* Product brand title */}
      <h6 className="productdisplay__info--title text-sm text-gray-700 font-bold">
        SNEAKER COMPANY
      </h6>
      {/* Product title */}
      <h1 className="lg:text-5xl text-3xl font-bold py-4">
        Fall Limited Edition Sneakers
      </h1>
      {/* Product description */}
      <p className="text-gray-500 py-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      {/* Product price section */}
      <div className="productdisplay__info--price flex justify-between items-center py-4">
        {/* Current price with discount badge */}
        <h2 className="text-2xl font-bold">
          $125.00{" "}
          <span className="bg-black text-white text-sm p-2 rounded-md">
            50%
          </span>
        </h2>
        {/* Original price (hidden on large screens) */}
        <h3 className="font-bold text-gray-400 lg:hidden line-through">
          $250.00
        </h3>
      </div>
      {/* Original price (hidden on small screens) */}
      <h3 className="font-bold text-gray-400 hidden lg:block line-through">
        $250.00
      </h3>
      {/* Render the ProductInfoButtons component */}
      <ProductInfoButtons/>
    </div>
  );
}