import { prisma } from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, username, email } = req.body;

  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        id,
        username,
        email,
      },
    });

    res.status(200).json({ updatedRes: req.body });
  } catch (err) {
    res.status(400).json({
      message: `Something went wrong :/ ${err}`,
    });
  }
}
