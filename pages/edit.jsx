import styles from "../styles/Query.module.scss";
import { FieldPathValues, FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { prisma } from "../lib/prisma";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Edit({ userData }) {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({ username: "", email: "", id: "" });
  const [debugContent, setDebugContent] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const router = useRouter();
  const handleSubmit = (data) => {
    update(formData);
  };

  const reloadRoute = () => {
    router.reload();
    // router.replace(router.asPath);
  };

  async function update(data) {
    try {
      fetch("http://localhost:3000/api/update", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((res) => {
          reloadRoute();
          return res.json();
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    isEdit && JSON.stringify(debugContent) !== JSON.stringify(formData)
      ? setDisabled(false)
      : setDisabled(true);
  });

  return (
    <>
      <div className={styles.container}>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData ? (
                      userData.map((user) => (
                        <>
                          <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td
                              key={user.id}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              {user.id}
                            </td>
                            <td
                              key={user.username}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              {user.username}
                            </td>
                            <td
                              key={user.email}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              {user.email}
                            </td>
                            <td
                              className="text-sm text-gray-900 font-light px-6
                              py-4 whitespace-nowrap"
                            >
                              <button
                                onClick={() => {
                                  setFormData({
                                    username: user.username,
                                    email: user.email,
                                    id: user.id,
                                  });

                                  setDebugContent({
                                    username: user.username,
                                    email: user.email,
                                    id: user.id,
                                  });

                                  setIsEdit(true);
                                }}
                                className="bg-red-400 mr-5 p-2 text-white "
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        </>
                      ))
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <EditForm /> */}

          <div className="mb-4">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(formData);
                setIsEdit(false);
              }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Content
              </label>
              <input
                type="input"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full overflow-x-hidden"
              />

              <input
                type="input"
                placeholder="Email"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                value={formData.email}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full overflow-x-hidden"
              />

              <input
                className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor:pointer ${
                  isDisabled ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
                }`}
                type="submit"
                disabled={isDisabled}
              />

              <p className="w-full overflow-x-hidden">
                Debug: <pre>{JSON.stringify(debugContent)}</pre>
                <Link href="/">Home</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const userData = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
  console.log(userData);
  return {
    props: {
      userData,
    },
  };
}

export default Edit;
