// Define the Navlist component which renders a navigation menu
export default function Navlist() {
  // Array of navigation items to be displayed
  const ulItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    // Unordered list (ul) containing the navigation items
    // Tailwind CSS: flexbox layout, space between items, centered items, hidden on small screens, visible on large screens (lg:flex)
    <ul className="nav-items flex space-x-4 items-center justify-center hidden lg:flex px-4 ml-8">
      {/* Map through the ulItems array and create a list item (li) for each one */}
      {ulItems.map((item) => (
        // li element for each navigation item
        // Tailwind CSS: small text, pointer cursor, padding on the y-axis for spacing
        <li key={item} className="text-sm nav-item cursor-pointer py-5">
          {/* Anchor tag for each nav item */}
          {/* Tailwind CSS: gray text color and pointer cursor */}
          <a className="text-gray-500 cursor-pointer nav-item-link">{item}</a>
        </li>
      ))}
    </ul>
  );
}
