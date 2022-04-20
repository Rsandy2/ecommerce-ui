import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Register() {
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
      <h1>Register</h1>

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
