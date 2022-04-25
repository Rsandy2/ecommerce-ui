import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  const { isbn, userId } = req.body;

  try {
    await prisma.book.update({
      where: {
        isbn: "0545227240",
      },
      data: {
        shoppingCart: {
          disconnect: {
            userId: userId,
          },
        },
      },
    });

    res.status(200).json({ message: "Endpoint Success" });
  } catch (err) {
    res.status(400).json({
      message: `Something went wrong :/ ${err}`,
    });
  }
}
