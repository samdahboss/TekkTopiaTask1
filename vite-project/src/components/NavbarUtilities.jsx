import cartIcon from "../assets/icons/icon-cart.svg"; // Import cart icon image
import userIcon from "../assets/image-avatar.png"; // Import user avatar image
import Cart from "./Cart"; // Import Cart component
import { useState } from "react"; // Import useState hook from React

export default function NavbarUtilities() {
  // useState hook to manage the visibility of the cart; initially set to false (hidden)
  const [showCart, setShowCart] = useState(false);

  // Function to toggle the cart visibility state
  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart); // Flip the current state between true and false
  };

  return (
    <div className="ml-auto flex space-x-8 py-4">
      {/* Cart button with the cart icon */}
      <button className=" text-black" id="cart-button">
        <img
          src={cartIcon} // Cart icon image
          alt="cart_icon" // Alt text for accessibility
          className="w-5 h-5" // Tailwind CSS to control the width and height of the icon
          onClick={toggleCart} // On click, toggle the cart visibility
        />
      </button>

      {/* User avatar button */}
      <button className=" text-black" id="user-button">
        <img
          src={userIcon} // User avatar image
          alt="user_icon" // Alt text for accessibility
          className="rounded-full h-8 w-8 border-2 border-orange" // Tailwind CSS: circular avatar with border
        />
      </button>

      {/* Conditional rendering of the Cart component; only shows when showCart is true */}
      {showCart && <Cart />}
    </div>
  );
}
