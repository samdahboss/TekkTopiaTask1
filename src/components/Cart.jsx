// Import the delete icon and cart item images
import deleteIcon from "../assets/icons/icon-delete.svg";
import { useContext } from 'react';
import { CartContext } from './CartContext';

// Cart component displays the list of items in the user's cart
export default function Cart() {
  // Sample cart items array (usually this would come from a state or API)
  // Note: This array should be replaced with the actual cart items data

  // Get the removeItem function and cartItems from the CartContext
  const { removeItem, cartItems } = useContext(CartContext);

  return (
    // Cart container with absolute positioning to appear below the Navbar
    <div className="absolute top-full w-full lg:w-80 right-0 z-20 bg-white shadow-2xl rounded-lg p-4">
      {/* Cart title */}
      <h2 className="py-2 border-b font-bold">Cart</h2>

      {/* List of cart items with overflow auto and custom scrollbar hiding */}
      <ul className="max-h-cart hide-scrollbar overflow-auto">
        {cartItems.map((item, index) => (
          // List item for each cart item
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b"
          >
            {/* Item image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-10 h-10 rounded-md"
            />

            {/* Item details */}
            <div className="w-full justify-center px-2 ">
              <h6 className="text-xs text-gray-700">{item.name}</h6>
              <span className="text-xs">
                ${item.price}.00 x {item.quantity}{" "}
                {/* Total price for the quantity */}
                <span className="font-bold">${item.price * item.quantity}</span>
              </span>
            </div>

            {/* Delete button */}
            <button>
              {/* Delete icon button, calls removeItem function when clicked */}
              <img src={deleteIcon} onClick={() => removeItem(index)} alt="Delete" />
            </button>
          </li>
        ))}
      </ul>

      {/* Checkout button */}
      <button className="bg-orange w-full p-2 rounded-lg">Checkout</button>
    </div>
  );
}