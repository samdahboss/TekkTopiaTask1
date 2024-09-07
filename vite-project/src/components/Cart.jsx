// Import the delete icon and cart item images
import deleteIcon from "../assets/icons/icon-delete.svg";
import cartImage1 from "../assets/image-product-1-thumbnail.jpg";
import cartImage2 from "../assets/image-product-2-thumbnail.jpg";
import cartImage3 from "../assets/image-product-3-thumbnail.jpg";
import cartImage4 from "../assets/image-product-4-thumbnail.jpg";

// Cart component displays the list of items in the user's cart
export default function Cart() {
  // Sample cart items array (usually this would come from a state or API)
  const cartItems = [
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 100,
      quantity: 3,
      image: cartImage1,
    },
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 100,
      quantity: 3,
      image: cartImage2,
    },
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 100,
      quantity: 2,
      image: cartImage3,
    },
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 100,
      quantity: 2,
      image: cartImage4,
    },
  ];

  // Handle delete function (currently just logs to the console)
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    // Cart container with absolute positioning to appear below the Navbar
    <div className="absolute top-full w-full lg:w-80 right-0 bg-white shadow-lg rounded-lg p-4">
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
              <img src={deleteIcon} onClick={handleDelete} alt="Delete" />
            </button>
          </li>
        ))}
      </ul>

      {/* Checkout button */}
      <button className="bg-orange w-full p-2 rounded-lg">Checkout</button>
    </div>
  );
}
