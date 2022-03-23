import React from "react";
import styles from "../styles/ProductCard.module.scss";

interface CardProps {
    productData: {
        bookTitle: string;
        authorName: string;
        bookCoverUrl: string;
        altText: string;
        buttonText: string;
    };
}

const ProductCard = (props: CardProps) => {
    const {bookTitle, authorName, bookCoverUrl, altText, buttonText} = props.productData;

    return (
        <div id = {styles.card__container}>
            <div className = {styles.card}>
                <h2 className = {styles.card__title}>{bookTitle}</h2>
                <h3 className = {styles.card__author}>{authorName}</h3>
                <img className={styles.card__img} src = {bookCoverUrl} alt= {altText}/>
                <input className = {styles.card__btn} type = "submit" value = {buttonText}></input>
            </div>
        </div>
    );
};

export default ProductCard;