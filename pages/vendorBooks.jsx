import { useState } from "react"; // Using to handle forms?
import React from "react";
import styles from "../styles/AdminManage.module.scss";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import EditBook from "../components/VendorEditBook";
import AddBook from "../components/VendorAddBook";
import VendorHeader from "../components/VendorHeader";
import { getToken } from "next-auth/jwt";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";

// https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form

export default function VendorPanel({ userData }) {
  const [inputs, setInputs] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  let [addisOpen, addsetIsOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  if (session && session?.user.userRole === "vendor") {
    return (
      <div
        className="container-fluid min-h-screen w-screen"
        style={{ backgroundColor: "#DDBEA9" }}
      >
        <div className="" style={{ backgroundColor: "#B98B73" }}>
          <VendorHeader />
        </div>
        <div className="container-xl">
          <div className="table_responsive" style={{ marginTop: "10%" }}>
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
                        userRoleCustom={
                          session?.user.userRole === "vendor"
                            ? "vendor"
                            : "user"
                        }
                      />
                      <i className="material-icons">&#xE147;</i>{" "}
                      <span>Add New Book</span>
                    </a>
                    <a
                      href="#deleteEmployeeModal"
                      className="btn btn-danger"
                      data-toggle="modal"
                      style={{ float: "right" }}
                    >
                      <i className="material-icons">&#xE15C;</i>{" "}
                      <span>checkbox check delete [opt ingnore]</span>
                    </a>
                  </div>
                </div>
              </div>
              <table className="table table_striped table_hover">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Genre</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userData
                    ? userData?.books?.map((book) => (
                        <>
                          <tr>
                            <td>{book.title}</td>
                            <td>{book.author}</td>

                            <td>{book.isbn}</td>
                            <td>{book.genre}</td>
                            <td>{book.price}</td>
                            <td>
                              <a
                                className="edit"
                                data-toggle="modal"
                                style={{ float: "left" }}
                                onClick={() => setIsOpen(!isOpen)}
                              >
                                <EditBook
                                  isOpen={isOpen}
                                  setIsOpen={setIsOpen}
                                />
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
                                  <FaTrash
                                    onClick={() => deleteBook(book.id)}
                                  />
                                </i>
                              </a>
                            </td>
                          </tr>
                        </>
                      ))
                    : null}
                </tbody>
              </table>
              <div className="clearfix">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    router.push("/login");
  }
  return <p>Please Login</p>;
}

export async function getServerSideProps(context) {
  //   const { data: session, status } = useSession();
  const session = await getToken(context);
  console.log(session);
  const userData = await prisma.vendor.findUnique({
    where: {
      email: `${session ? session["token"]["user"]["email"] : ""}`,
    },
    select: { books: {} },
  });

  console.log(userData);
  return {
    props: {
      session: session,
      userData,
    },
  };
}
