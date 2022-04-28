import React from "react";
import styles from "../styles/ProductCard.module.scss";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface CardProps {
  productData: {
    title: string;
    author: string;
    image: string;
    altText: string;
    price: string;
    isbn: string;
  };
}

const notify = () => toast.success("Item added to cart!");

const ProductCard = (props: CardProps) => {
  const { title, author, image, altText, price, isbn } = props.productData;
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  async function addCart(data) {
    console.log(data);

    const dataP = {
      isbn: isbn,
      userId: session.user["userId"],
    };
    await axios.post("/api/addCart", dataP);
    router.replace(router.asPath);
  }
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 w-full rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <div className="relative">
        <img className="w-full rounded-xl" src={image} alt={altText} />
        <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
          $ {price}
        </p>
      </div>

      <h1 className="mt-2 text-gray-800 text-lg font-bold cursor-pointer">
        {title}
      </h1>

      <div className="my-2">
        <div className="flex space-x-1 items-center">
          <p>{author}</p>
        </div>

        <button
          className="mt-2 mb-5 py-2 px-2 w-full bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
          onClick={() => {
            notify();
            addCart(isbn);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
    // <div className="max-h-screen flex justify-center items-center mb-6">
    //   <div className="container flex justify-center">
    //     <div className="max-w-sm">
    //       <div className="bg-white relative shadow-m hover:shadow-2xl transition duration-500 rounded-lg">
    //         <img
    //           className="rounded-t-lg object-contain h-80 w-64 py-5"
    //           src={image}
    //           alt={altText}
    //         />
    //         <div className="rounded-lg bg-white flex flex-col justify-center items-center">
    //           <h1 className="tracking-wide text-gray-900 font-bold text-xl pb-2 hover:text-gray-700 hover:cursor-pointer">
    //             {title}
    //           </h1>
    //           <h5 className="text-gray-700 py-2 tracking-wide">{author}</h5>
    //           <button
    //             className="mt-2 mb-5 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
    //             onClick={notify}
    //           >
    //             Add to Cart
    //           </button>
    //         </div>
    //         <div className="absolute top-2 right-2 py-2 px-4 bg-red-200 rounded-lg">
    //           <span className="text-md">${price}.99</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
