import React from "react";
import styles from "../styles/ProductCard.module.scss";
import toast, { Toaster } from "react-hot-toast";

interface CardProps {
  productData: {
    title: string;
    author: string;
    image: string;
    altText: string;
    price: string;
  };
}

const notify = () => toast.success("Item added to cart!");

const ProductCard = (props: CardProps) => {
  const { title, author, image, altText, price } = props.productData;

  return (
    <div className="max-h-screen flex justify-center items-center mb-6">
      <div className="container flex justify-center">
        <div className="max-w-sm">
          <div className="bg-white relative shadow-m hover:shadow-2xl transition duration-500 rounded-lg">
            <img
              className="rounded-t-lg object-contain h-80 w-64 py-5"
              src={image}
              alt={altText}
            />
            <div className="rounded-lg bg-white flex flex-col justify-center items-center">
              <h1 className="w-1/2 text-gray-900 font-bold text-xl pb-2 hover:text-gray-700 hover:cursor-pointer">
                {title}
              </h1>
              <h5 className="text-gray-700 py-2 tracking-wide">{author}</h5>
              <button
                className="mt-2 mb-5 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={notify}
              >
                Add to Cart
              </button>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
