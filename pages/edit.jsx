import styles from "../styles/Query.module.scss";
import { FieldPathValues, FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
// import fetchData from "../lib/puppeteer";
import { prisma } from "../lib/prisma";
function Edit({ userData }) {
  const [debugContent, setDebugContent] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // setDebugContent();
  };
  console.log(errors);

  const submitWebsiteUrl = async () => {
    // const res = await fetch("http://localhost:3000/api/get-book-data", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     url: websiteURL,
    //   }),
    // }).then(
    //   (res) => res.json()
    //   // console.log(res.json());
    // );
    // const res = await fetch(
    //   "https://www.googleapis.com/books/v1/volumes?q={Catching Fire}",
    //   {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //   }
    // ).then((res) => res.json());
    // console.log(res);
  };
  //   console.log(props);
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
                              key={user.name}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              {user.name}
                            </td>
                            <td
                              key={user.email}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                              {user.email}
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
        </div>

        <div className="mb-4">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
            <input
              type="url"
              placeholder="Link"
              onChange={(e) => {
                // setDebugContent(e.target.value);
              }}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full overflow-x-hidden"
            />

            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            />

            <p className="w-full overflow-x-hidden">Debug: {debugContent}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const userData = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
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
