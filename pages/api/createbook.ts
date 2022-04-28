import { prisma } from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    isbn,
    title,
    author,
    publishedDate,
    description,
    language,
    image,
    price,
  } = req.body;

  try {
    const createProduct = await axios.post(
      "http://localhost:3000/api/createProduct",
      req.body
    );

    console.log(createProduct?.data?.message.id, "HERE IT IS");

    const setPrice = await stripe.prices.create({
      unit_amount: 100 * parseFloat(price),
      currency: "usd",
      product: createProduct?.data?.message.id,
    });

    await prisma.book.create({
      data: {
        isbn,
        title,
        author,
        image,
        description,
        language,
        publishedDate,
        price: parseFloat(price),
        productId: createProduct?.data?.message.id,
        priceId: setPrice?.id,
      },
    });

    console.log(setPrice, "Set Price");
    res.status(200).json({ message: "Endpoint Success" });
  } catch (err) {
    res.status(400).json({
      message: `Something went wrong :/ ${err}`,
    });
  }
}
