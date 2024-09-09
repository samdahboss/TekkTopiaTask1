// Import the menu icon image and PropTypes for prop validation
import menuIcon from '../assets/icons/icon-menu.svg';  // SVG icon for the menu
import PropTypes from 'prop-types';  // For validating the type of props passed to the component

// Define the Menuicon component, which receives a prop for toggling the side navigation
export default function Menuicon({ toggleSideNav }) {
  return (
    // Button element for toggling the mobile side navigation
    // Tailwind CSS: Hidden on large screens, adds right margin on smaller screens
    <button className="lg:hidden mr-4" id="menu-button" onClick={toggleSideNav}>
      
      {/* Image element for the menu icon */}
      {/* Tailwind CSS: Sets the icon's width and height */}
      <img 
        src={menuIcon}  // Source for the image (menu icon SVG)
        alt="menu_icon"  // Alt text for accessibility
        className="w-4 h-4"  // Tailwind classes to set the icon size
      />
    </button>
  )
}

// Prop validation to ensure toggleSideNav is a required function
Menuicon.propTypes = {
  toggleSideNav: PropTypes.func.isRequired,  // Ensures that the toggleSideNav prop is a function and is required
};
