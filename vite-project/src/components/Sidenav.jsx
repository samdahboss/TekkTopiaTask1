// Import PropTypes to validate the props passed to the component
import PropTypes from "prop-types";

// Define the Sidenav component that takes toggleSideNav as a prop
export default function Sidenav({ toggleSideNav }) {
  // Array of navigation items
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    // Main container for the side navigation
    // Tailwind CSS: fixed positioning, full width & height, placed at the top-left corner, semi-transparent black background
    <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-70 lg:hidden">
      
      {/* Inner container for the side navigation menu */}
      {/* Tailwind CSS: fixed, white background, shadow effect, full height, width set to 64 (16rem) */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg px-2">
        
        {/* Header section with a close button */}
        {/* Tailwind CSS: Flexbox for aligning items, padding */}
        <div className="flex items-center justify-between p-2">
          
          {/* Close button */}
          {/* Tailwind CSS: Large bold text, gray color, triggers the toggleSideNav function on click */}
          <button
            className="text-2xl font-bold brand-icon items-center py-4 text-gray-500"
            onClick={toggleSideNav}
          >
            x
          </button>
        </div>
        
        {/* Navigation items */}
        <ul>
          {navItems.map((item, index) => (
            // List items for each navigation link
            // Tailwind CSS: Padding and bold font
            <li className="p-2 font-bold" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// PropTypes to ensure toggleSideNav is a required function
Sidenav.propTypes = {
  toggleSideNav: PropTypes.func.isRequired,
};
