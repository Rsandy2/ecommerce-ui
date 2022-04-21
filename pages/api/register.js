import { PrismaClient } from "@prisma/client";
import { prisma } from "../../lib/prisma";
const bcrypt = require("bcrypt");

export default async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password, userRole } = req.body;

    try {
      const hash = await bcrypt.hash(password, 0);

      await prisma.user.create({
        data: {
          username: username,
          email: email,
          password: hash,
          userRole: userRole,
        },
      });

      req.body.userRole === "vendor"
        ? await prisma.vendor.create({
            data: {
              username: username,
              email: email,
              password: hash,
              userRole: userRole,
            },
          })
        : console.log("No create");

      return res.status(200).json({ message: req.body });
    } catch (err) {
      return res.status(503).json({
        err: "this is in register ts api route file : " + err.toString(),
      });
    }
  } else {
    return res
      .status(405)
      .json({ error: "This request only supports POST requests" });
  }
};
