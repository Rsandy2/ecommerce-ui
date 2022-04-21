import { prisma } from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { isbn, title, author, publishedDate, description, language, image } =
    req.body;

  try {
    await prisma.book.create({
      data: {
        isbn,
        title,
        author,
        publishedDate,
        description,
        language,
        image,
      },
    });

    res.status(200).json({ message: "Endpoint Success" });
  } catch (err) {
    res.status(400).json({
      message: `Something went wrong :/ ${err}`,
    });
  }
}
