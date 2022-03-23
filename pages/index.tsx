import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import ProductCard from "../components/ProductCard";

const Home: NextPage = () => {
  const data = {
    bookTitle: "Percy Jackson and the Olympians: The Lightning Thief",
    authorName: "Rick Riordan",
    bookCoverUrl: "https://images-na.ssl-images-amazon.com/images/I/91RQ5d-eIqL.jpg",
    altText: "Percy Jackson Book Cover",
    buttonText: "Add to cart",
  };

  const data2 = {
    bookTitle: "City of Bones",
    authorName: "Cassandra Clare",
    bookCoverUrl: "https://images-na.ssl-images-amazon.com/images/I/81GvNdZqETL.jpg",
    altText: "City of Bones Book Cover",
    buttonText: "Add to cart",
  };

  return (
    <div className={styles.container}> 
      <div id = {styles.card}>
        <ProductCard productData={data} /> 
        <ProductCard productData={data2} /> 
        <ProductCard productData={data} /> 
        <ProductCard productData={data2} />
      </div>
    </div>
  );
};

export default Home;
