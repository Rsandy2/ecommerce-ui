import * as React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (event: any) => {
    event.preventDefault();
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
