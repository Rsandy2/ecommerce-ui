import useScript from "../components/useScript";
import emailjs from "@emailjs/browser";
import { getToken } from "next-auth/jwt";

export async function getServerSideProps(context) {
  const session = await getToken(context);
  console.log("session", session);
  const books = await prisma.shoppingCart.findMany({
    where: {
      userId: `${session ? session["token"]["user"]["userId"] : ""}`,
    },
    select: {
      books: true,
    },
  });
  const userData = await prisma.user.findUnique({
    where: {
      id: `${session ? session["token"]["user"]["userId"] : ""}`,
    },
    select: {
      username: true,
      email: true,
    },
  });
  return {
    props: {
      books,
      userData,
    },
  };
}

export default function test({ books, userData }) {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("kvMbDFm5UqrDUyUvy");
    emailjs
      .send("service_t61tx0k", "template_927474s", {
        to_name: "iskerop",
        confirmation_number: "32e423423",
        message: "hunger games : qty 3",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <script type="text/javascript">
        {`(function() {
            emailjs.init("kvMbDFm5UqrDUyUvy");
        })
        ();`}
      </script>
      <button onClick={sendEmail}>Send email</button>
    </div>
  );
}
