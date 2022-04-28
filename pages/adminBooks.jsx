import { useState } from "react"; // Using to handle forms?
import React from "react";
import styles from "../styles/AdminManage.module.scss";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import EditBook from "../components/EditBook";
import AddBook from "../components/AddBook";
import { prisma } from "../lib/prisma";
import axios from "axios";
import { useRouter } from "next/router";
import ManageHeader from "../components/ManageHeader";

// https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form

export default function AdminPanel({ booksData }) {
  const [inputs, setInputs] = useState({});
  //const [isOpen, setIsOpen] = React.useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [addisOpen, addsetIsOpen] = useState(false);
  const router = useRouter();

  async function deleteBook(data) {
    const dataP = { id: data };

    await axios.post("/api/deleteBook", dataP);
    router.replace(router.asPath);
  }

  const card = {
    backgroundColor: "white",
    padding: "3rem 3rem 5rem 3rem",
    boxShadow: "0px 2px 5px #B98B73",
    borderRadius: ".25rem",
    marginBottom: "1rem",
    marginTop: "2rem",
  };

  return (
    <div
      className="container-fluid min-h-screen w-screen"
      style={{ backgroundColor: "#DDBEA9" }}
    >
      <div className="container-lg" style={card}>
        <div className="table_responsive">
          <div className={styles.table_wrapper}>
            <div className={styles.table_title}>
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    <b>Manage Books</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    className="btn btn-success"
                    data-toggle="modal"
                    style={{ ...{ float: "right" }, ...{ marginLeft: "5%" } }}
                    onClick={() => addsetIsOpen(!isOpen)}
                  >
                    <AddBook
                      addisOpen={addisOpen}
                      addsetIsOpen={addsetIsOpen}
                    />
                    <i className="material-icons">&#xE147;</i>
                    <span>Add New Book</span>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    className="btn btn-danger"
                    data-toggle="modal"
                    style={{ float: "right" }}
                  >
                    <i className="material-icons">&#xE15C;</i>
                    <span>checkbox check delete [opt ingnore]</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table_striped table_hover">
              <thead>
                <tr>
                  <th>Product ID?</th>
                  <th>Title</th>

                  <th>ISBN</th>
                  <th>Price</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {booksData
                  ? booksData.map((book) => (
                      <>
                        <tr>
                          <td>{book.id}</td>
                          <td>{book.title}</td>

                          <td>{book.id}</td>
                          <td>${book.price}</td>

                          <td>
                            <a
                              className="edit"
                              data-toggle="modal"
                              style={{ float: "left" }}
                              onClick={() => setIsOpen(!isOpen)}
                            >
                              <EditBook isOpen={isOpen} setIsOpen={setIsOpen} />
                              <i data-toggle="tooltip" title="Edit">
                                <FaEdit />
                              </i>
                            </a>
                            <a
                              className="delete"
                              data-toggle="modal"
                              style={{ float: "right" }}
                            >
                              <i data-toggle="tooltip" title="Delete">
                                <FaTrash onClick={() => deleteBook(book.id)} />
                              </i>
                            </a>
                          </td>
                        </tr>
                      </>
                    ))
                  : null}
              </tbody>
            </table>
            {/* <div className="clearfix">
              <div className="hint_text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className={styles.pagination}>
                <li className="page-item disabled">
                  <a href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const booksData = await prisma.book.findMany({
    select: {
      isbn: true,
      title: true,
      price: true,
      author: true,
      description: true,
      id: true,
    },
  });
  console.log(booksData);
  return {
    props: {
      booksData,
    },
  };
}
