import styles from "../styles/Query.module.scss";
import { FieldPathValues, FieldValues, useForm } from "react-hook-form";
import { Url } from "url";
import { useState } from "react";
import { rejects } from "assert";
// import fetchData from "../lib/puppeteer";

export default function Query() {
  const [websiteURL, setwebsiteURL] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data["Link"]);
    setwebsiteURL(data["Link"]);
    submitWebsiteUrl();
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

    const res = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q={Catching Fire}",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => res.json());

    console.log(res);
  };

  return (
    <>
      <div className={styles.container}>
        <div className="mb-4">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Link
            </label>
            <input
              type="url"
              placeholder="Link"
              onChange={(e) => {
                setwebsiteURL(e.target.value);
              }}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full overflow-x-hidden"

              // {...register("Link", {
              //   required: true,
              //   // onChange: (e) => {
              //   //   console.log(e.target.value);
              //   // },
              // })}
            />

            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            />

            <p className="w-full overflow-x-hidden">Debug: {websiteURL}</p>
          </form>
        </div>
      </div>
    </>
  );
}
