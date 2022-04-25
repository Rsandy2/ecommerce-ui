import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  const { email } = req.body;

  try {
    await prisma.user.delete({
      where: {
        email: email,
      },
    });

    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(400).json({
      message: `Something went wrong :/ ${err}`,
    });
  }
}
