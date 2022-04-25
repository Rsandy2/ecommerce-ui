import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  const { search } = req.body;
  try {
    const books = await prisma.book.findMany({
      where: {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
    });
    res.status(200).json({ message: "Endpoint Success" });
    res.json(books);
  } catch (err) {
    res.status(400).json({ message: `bing bong your request is wrong ${err}` });
  }
}
