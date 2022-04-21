import { useSession, signIn, signOut } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function TestLogin() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.username} <br />
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
