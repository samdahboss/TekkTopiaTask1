import productImage1 from "../assets/image-product-1.jpg";
import productThumbnail1 from "../assets/image-product-1-thumbnail.jpg";
import productImage2 from "../assets/image-product-2.jpg";
import productThumbnail2 from "../assets/image-product-2-thumbnail.jpg";
import productImage3 from "../assets/image-product-3.jpg";
import productThumbnail3 from "../assets/image-product-3-thumbnail.jpg";
import productImage4 from "../assets/image-product-4.jpg";
import productThumbnail4 from "../assets/image-product-4-thumbnail.jpg";

import { useState } from "react";

import nextIcon from "../assets/icons/icon-next.svg";
import prevIcon from "../assets/icons/icon-previous.svg";   

export default function Productimage() {
  const imageViews = [
    {
      id: 1,
      image: productImage1,
      thumbnail: productThumbnail1,
    },
    {
      id: 2,
      image: productImage2,
      thumbnail: productThumbnail2,
    },
    {
      id: 3,
      image: productImage3,
      thumbnail: productThumbnail3,
    },
    {
      id: 4,
      image: productImage4,
      thumbnail: productThumbnail4,
    },
  ];
  const [imageIndex, setImageIndex] = useState(1);
  const handlePrevClick = () => {
    setImageIndex(prevImageIndex => {
      const newIndex = (prevImageIndex - 1 + imageViews.length) % imageViews.length;
      return newIndex === 0 ? imageViews.length : newIndex;
    });
  };
  
  const handleNextClick = () => {
    setImageIndex(prevImageIndex => {
      const newIndex = (prevImageIndex + 1) % imageViews.length;
      return newIndex === 0 ? imageViews.length : newIndex;
    });
  };
  return (
    <div className="productdisplay__image lg:w-1/2  lg:py-12 lg:px-8">
      <div className="productdisplay__image--mobile lg:hidden relative z-0">
        <button className="prev-button absolute top-1/2 bg-white rounded-full p-2 left-4" onClick={handlePrevClick}>
            <img 
                src={prevIcon} 
                alt="prev" 
                className="w-3 h-3"
            />
        </button>
        <img
          src={imageViews[imageIndex - 1].image}
          alt="product"
          className="w-screen"
        />
        <button className="next-button absolute top-1/2 bg-white rounded-full p-2 right-4" onClick={handleNextClick}>
            <img 
                src={nextIcon} 
                alt="next" 
                className="w-3 h-3" 
            />
        </button>
      </div>
      <img
        src={imageViews[imageIndex - 1].image}
        alt="product"
        className="lg:w-3/4 hidden lg:block mx-auto lg:rounded-md"
      />
      <div className="product-view lg:flex w-3/4 mx-auto py-4 hidden justify-between">
        {imageViews.map((item, index) => {
          return (
            <button className="product-view__button w-16 relative transition" key={index}>
              <img
                src={item.thumbnail}
                className="rounded-md"
                onClick={() => setImageIndex(item.id)}
                style={
                  imageIndex === item.id
                    ? { border: "3px solid var(--orange)" }
                    : {}
                }
              ></img>
              {(imageIndex === item.id) && (
                <span className="absolute top-0 left-0 bg-gray-300 opacity-40 h-full w-full">
                  {}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
