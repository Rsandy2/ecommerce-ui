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
    genre,
    userRole,
    email,
  } = req.body;

  try {
    const createProduct = await axios.post(
      "http://localhost:3000/api/createProduct",
      req.body
    );

    console.log(createProduct?.data?.message.id, "HERE IT IS");

    const setPrice = await stripe.prices.create({
      unit_amount: price ? 100 * parseFloat(price) : 1000,
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
        genre,
        publishedDate,
        price: parseFloat(price),
        productId: createProduct?.data?.message.id,
        priceId: setPrice?.id,
      },
    });

    if (userRole === "vendor") {
      await prisma.vendor.update({
        where: { email: email },
        data: {
          books: {
            connect: {
              isbn: isbn,
            },
          },
        },
      });
    }

    res.status(200).json({ message: "Endpoint Success" });
  } catch (err) {
    res.status(400).json({
      message: `Something went wrong :/ ${err}`,
    });
  }
}
