import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  const { id, name, email } = req.body;

  try {
    await prisma.user.create({
      data: {
        id,
        name,
        email,
      },
    });

    res.status(200).json({ message: "Endpoint Success" });
  } catch (err) {
    res.status(400).json({
      message: `Something went wrong :/ ${err}`,
    });
  }
}
