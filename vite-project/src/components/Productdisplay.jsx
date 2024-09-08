import Productimage from "./Productimage";

export default function Productdisplay() {
  return (
    <div className="product-display flex flex-col lg:flex-row">
      <Productimage/>
      <div className="productdisplay__info lg:w-1/2 w-full lg:py-24 py-6 lg:pr-24">
        <h6 className="productdisplay__info--title text-sm text-gray-700 font-bold">
          SNEAKER COMPANY
        </h6>
        <h1 className="lg:text-5xl text-3xl font-bold py-4">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-gray-500 py-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="productdisplay__info--price flex justify-between items-center py-4">
          <h2 className="text-2xl font-bold">
            $125.00{" "}
            <span className="bg-black text-white text-sm p-2 rounded-md">
              50%
            </span>
          </h2>
        </div>
        <h3 className="font-bold text-gray-400 line-through">$250.00</h3>
      </div>
    </div>
  );
}
