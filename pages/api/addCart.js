import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  const { isbn, userId } = req.body;

  //   console.log();
  try {
    await prisma.shoppingCart.update({
      where: {
        userId: userId,
      },
      data: {
        books: {
          connect: {
            isbn: isbn,
          },
        },
      },
    });

    res.status(200).json({ message: isbn });
  } catch (err) {
    res.status(400).json({
      message: `Something went wrong :/ ${err}`,
    });
  }
}
