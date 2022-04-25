import useScript from "../components/useScript";
import emailjs from "@emailjs/browser";
import { getToken } from "next-auth/jwt";

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
