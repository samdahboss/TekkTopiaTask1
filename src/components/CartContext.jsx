// Import necessary hooks and PropTypes from React
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create a Context to manage the cart state
export const CartContext = createContext();

// Create a Provider Component to wrap the app and provide the cart state
export const CartProvider = ({ children }) => {
  // Initialize the cart items state as an empty array
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItem = (item) => {
    // Use the spread operator to add the new item to the existing cart items
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart by index
  const removeItem = (index) => {
    // Use the filter method to remove the item at the specified index
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  // Return the CartContext Provider with the cart state and functions
  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {/* Render the children components */}
      {children}
    </CartContext.Provider>
  );
};

// Define the propTypes for the CartProvider component
CartProvider.propTypes = {
  // The children prop must be a React node (e.g. a JSX element or a string)
  children: PropTypes.node.isRequired,
};