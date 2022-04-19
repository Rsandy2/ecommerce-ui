import { useSession, signIn, signOut } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function TestLogin() {
  console.log(process.env.AUTH0_CLIENT_ID);
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <Toaster />
      Not signed in <br />
      <button className="mx-4" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}
