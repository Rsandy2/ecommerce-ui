import { prisma } from "../../lib/prisma";
const bcrypt = require("bcrypt");

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      let userAccount = null;
      console.log("test in api login");
      const hash = await bcrypt.hash(password, 0);

      const confirmPasswordHash = (plainPassword, hashedPassword) => {
        return new Promise((resolve) => {
          bcrypt.compare(plainPassword, hashedPassword, function (err, res) {
            resolve(res);
          });
        });
      };

      const basicCompare = (x, y) => {
        return x === y;
      };

      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      // console.log("made it first user", user);

      if (user !== null) {
        //Compare the hash

        const res = await basicCompare(password, user.password);
        console.log(res);
        if (res === true) {
          console.log("its was trye");
          userAccount = {
            userId: user.id,
            username: user.username,
            email: user.email,
            userRole: user.userRole,
          };
        }

        // console.log("Made it to: ");
      }

      return res.status(200).json({ message: userAccount });
    } catch (err) {
      return res.status(503).json({
        err: "this is in 'login' ts api route file : " + err.toString(),
      });
    }
  } else {
    return res
      .status(405)
      .json({ error: "This request only supports POST requests" });
  }
};
