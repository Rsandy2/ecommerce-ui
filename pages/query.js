import styles from "../styles/Query.module.scss";
import { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";
// import pick from "lodash/pick";
import toast, { Toaster } from "react-hot-toast";
const _ = require("lodash");
function bookSearch() {
  const [formValue, setFormValue] = useState("");
  const [books, setBooks] = useState({});
  const [selectValue, setSelectValue] = useState();

  const onChange = (e) => {
    const val = e.target.value;

    if (val.length < 3) {
      setFormValue(val);
    }
  };

  const bookQuery = async (data) => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${data}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const bookDate = Object.assign(res["items"]);
        setBooks(bookDate);
        setSelectValue(bookDate[0]);
        console.log(typeof selectValue);
      });
  };

  const debounceSearch = useCallback(
    debounce(async (query) => {
      if (query.length >= 2) {
        console.log("Debounce Active");
        bookQuery(query);
      }
    }, 1000),
    []
  );

  const pickedSubest = (data) => {
    console.log(selectValue);
    let volumeInfo = Object.assign(selectValue["volumeInfo"]);
    let isbn = volumeInfo["industryIdentifiers"][1]["identifier"];
    let author = volumeInfo["authors"][0];
    let image = volumeInfo["imageLinks"]["smallThumbnail"];
    console.log(isbn);
    let subset = _.pick(volumeInfo, [
      "title",
      "publishedDate",
      "description",
      "language",
    ]);
    Object.assign(subset, {
      isbn: parseInt(isbn),
      author: author,
      image: image,
    });
    console.log(subset);
    return subset;
  };

  const create = async (data) => {
    console.log(data);
    try {
      fetch("http://localhost:3000/api/createbook", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (err) {
      console.log("err");
    }
  };

  useEffect(() => {
    debounceSearch(formValue);
  }, [formValue]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = pickedSubest();

    try {
      toast.promise(
        create(data),
        {
          loading: "Working on it...",
          success: "Submitted successfully!",
          error: "Oops! something went wrong.",
        },
        { duration: 3000 }
      );
    } catch (error) {
      console.log(error);
    }
  }

  function CollectiveBookOutput() {
    function handleChange(e) {
      setSelectValue(JSON.parse(e.target.value));
    }

    return (
      <div className="py-3 rounded-full">
        <select onChange={handleChange} value={selectValue}>
          {Object.keys(books).length === 0 ? (
            <option>Empty</option>
          ) : (
            books.map((book) => (
              <option key={book["id"]} value={JSON.stringify(book)}>
                {book["volumeInfo"]["title"]}
              </option>
            ))
          )}
        </select>
      </div>
    );
  }
  return (
    <>
      <div className={styles.container}>
        <div className="mb-4">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Link
            </label>
            <input
              type="input"
              placeholder="Link"
              onChange={(e) => {
                setFormValue(e.target.value);
              }}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full overflow-x-hidden"
            />

            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            />
            <CollectiveBookOutput />
            <p className="w-full overflow-x-hidden">
              Debug: {selectValue ? "Ready for submission" : "Empty"}
            </p>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}
export default bookSearch;
