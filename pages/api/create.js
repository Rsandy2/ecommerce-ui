import { prisma } from "../../lib/prisma";
const bcrypt = require("bcrypt");
export default async function handler(req, res) {
  const {
    username,
    email,
    password,
    userRole,
    address,
    city,
    state,
    zipcode,
    birthdate,
    phonenumber,
  } = req.body;
  try {
    const hash = await bcrypt.hash(password, 0);
    await prisma.profile.create({
      data: {
        mobile: phonenumber,
        user: {
          create: {
            email,
            username,
            password: hash,
            userRole,
            shoppingCart: { create: {} },
          },
        },

        address: {
          create: {
            address,
            city,
            state,
            zip: parseInt(zipcode),
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
