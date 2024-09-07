// Import necessary components and hooks
import Navlist from "./Navlist"; // Navigation menu component for desktop view
import NavbarUtilities from "./NavbarUtilities"; // Component for additional utilities like cart and user icon
import Menuicon from "./Menuicon"; // Component for the mobile menu icon
import Sidenav from "./Sidenav"; // Side navigation for mobile view
import { useState } from "react"; // useState hook to manage the side navigation state

// Define the Navbar component
export default function Navbar() {
  // State to track whether the side navigation is shown or hidden
  const [showSideNav, SetShowSideNav] = useState(false);

  // Function to toggle the visibility of the side navigation
  const toggleSideNav = () => {
    SetShowSideNav((prevShowSideNav) => !prevShowSideNav); // Toggle between true and false
  };

  return (
    // Main navbar container
    // Tailwind CSS: Flexbox layout, centered horizontally, relative positioning, and bottom border
    <nav className="flex mx-auto relative border-b border-gray-300">
      {/* Menuicon component, used for mobile navigation */}
      {/* Passes toggleSideNav as a prop to the Menuicon to trigger the side nav */}
      <Menuicon toggleSideNav={toggleSideNav} />

      {/* Branding or logo */}
      {/* Tailwind CSS: Large bold text for the brand, with padding */}
      <h1 className="text-2xl font-black brand-icon items-center py-4">
        sneakers
      </h1>

      {/* Navigation list for larger screens (desktop view) */}
      <Navlist />

      {/* Utility buttons like cart and user icon */}
      <NavbarUtilities />

      {/* Conditionally render the Sidenav component if showSideNav is true */}
      {/* Pass toggleSideNav to close the side navigation when clicking the close button */}
      {showSideNav && <Sidenav toggleSideNav={toggleSideNav} />}
    </nav>
  );
}
