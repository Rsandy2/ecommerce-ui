import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.body;

  try {
    await prisma.book.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(400).json({
      message: `Something went wrong :/ ${err}`,
    });
  }
}
