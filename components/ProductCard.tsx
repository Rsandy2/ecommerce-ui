import React from "react";
import styles from "../styles/ProductCard.module.scss";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getToken } from "next-auth/jwt";

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

  const handleAddCart = () => {
    if (session == null) {
      console.log("session is null");
      location.href = "./login";
    } else {
      console.log("session is not null");
      notify();
      addCart(isbn);
    }
  };

  return (
    <div
      style={{
        height: "90%",
        margin: "1rem 1rem 1rem 1rem",
        borderRadius: ".5rem",
      }}
      className="max-w-sm bg-white px-6 pt-6 pb-2 w-full shadow-lg transform hover:scale-105 transition duration-500"
    >
      <div className="relative">
        <Link href={`./book/${isbn}`}>
          <img
            style={{ borderRadius: ".5rem" }}
            className="w-full h-1/3"
            src={image}
            alt={altText}
          />
        </Link>

        <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
          ${price}
        </p>
      </div>

      <h1 className="truncate mt-2 text-gray-800 text-lg font-bold cursor-pointer">
        {title}
      </h1>

      <div className="my-2">
        <div className="flex space-x-1 items-center">
          <p>{author}</p>
        </div>

        <button
          className="mt-2 mb-5 py-2 px-2 w-full bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
          onClick={handleAddCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const Csession = await getToken(context);
  return {
    props: {
      session: Csession,
    },
  };
}

export default ProductCard;
