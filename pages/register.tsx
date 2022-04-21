import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const [userRole, setUserRole] = useState("user");
  const [isForwardable, setisForwardable] = useState(false);
  return (
    <>
      <button
        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        onClick={() => {
          setUserRole("user"), setisForwardable(true);
        }}
      >
        Set User
      </button>
      <button
        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        onClick={() => {
          setUserRole("vendor"), setisForwardable(true);
        }}
      >
        Set Vendor
      </button>

      <div>Current User: {userRole.toUpperCase()}</div>
      {isForwardable ? <Register userRole={userRole} /> : null}
    </>
  );
}

function Register(props: any) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const registerUser = async (event: any) => {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
      userRole: props.userRole,
    };

    await axios.post("/api/register", data);
    // fetch("/api/register", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });

    signIn("credentials", {
      username,
      email,
      password,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    })
      .then(function (result: any) {
        router.push(result.url);
      })
      .catch((err) => {
        console.log("Failed to register outside: " + err.toString());
      });
  };

  return (
    <>
      <h1>Register Page</h1>
      <h1>Current User in Register Page is {props.userRole.toUpperCase()}</h1>

      <form onSubmit={registerUser}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Email:{" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Register User</button>

        <Link href="/register">Register</Link>
      </form>
    </>
  );
}
