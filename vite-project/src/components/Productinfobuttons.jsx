// Import necessary hooks and context from React and CartContext
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

// Import the image for the product
import cartImage1 from "../assets/image-product-1.jpg";

// ProductInfoButtons component handles the quantity and add to cart functionality
const ProductInfoButtons = () => {
  // Get the addItem function from the CartContext
  const { addItem } = useContext(CartContext);

  // Initialize the quantity state to 0
  const [quantity, setQuantity] = useState(0);

  // Function to increment the quantity
  const quantityIncrement = () => {
    // Use the callback function to update the quantity state
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to decrement the quantity
  const quantityDecrement = () => {
    // Use the callback function to update the quantity state, ensuring it doesn't go below 0
    setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);
  };

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    // Create an order object with the product details and current quantity
    const order = {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 125.00,
      quantity: quantity,
      image: cartImage1,
    };
    // Call the addItem function from the CartContext with the order object
    addItem(order);
  };

  return (
    // Container for the quantity and add to cart buttons
    <div className="productdisplay__info--buttons flex flex-col lg:flex-row items-center py-4">
      {/* Quantity input and buttons */}
      <div className="lg:w-1/4 w-full px-4 rounded-md bg-gray-100 flex justify-between items-center">
        {/* Decrement quantity button */}
        <button className="text-orange p-2 text-md font-bold" onClick={quantityDecrement}>-</button>
        {/* Display the current quantity */}
        {quantity}
        {/* Increment quantity button */}
        <button className="text-orange p-2 text-md font-bold" onClick={quantityIncrement}>+</button>
      </div>
      {/* Add to cart button */}
      <button onClick={handleAddToCart} className="bg-orange lg:mt-0 ml-0 lg:ml-4 lg:w-1/2 mt-4 w-full text-white p-2 rounded-md">Add to Cart</button>
    </div>
  );
};

export default ProductInfoButtons;