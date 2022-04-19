import { useSession, getSession } from "next-auth/react";
import Layout from "../components/layout";
import type { NextPageContext } from "next";
export default function ApiExamplePage() {
  const { data: session, status } = useSession();
  //   const loading = status === "loading";

  console.log(session);

  return (
    <Layout>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src="/api/session" />
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      <iframe src="/api/jwt" />
    </Layout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
