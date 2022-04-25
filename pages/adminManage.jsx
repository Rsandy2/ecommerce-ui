import { useState } from "react"; // Using to handle forms?
import React from "react";
import styles from "../styles/AdminManage.module.scss";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import EditUser from "../components/EditUser";
import AddUser from "../components/AddUser";
import { prisma } from "../lib/prisma";
import axios from "axios";
import { useRouter } from "next/router";

// https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form

export default function AdminPanel({ userData }) {
  const [inputs, setInputs] = useState({});
  //const [isOpen, setIsOpen] = React.useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [addisOpen, addsetIsOpen] = useState(false);
  const router = useRouter();

  async function deleteUser(data) {
    const dataP = { email: data };
    await axios.post("/api/deleteUser", dataP);
    router.replace(router.asPath);
    // console.log(data);
  }
  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{ backgroundColor: "#DDBEA9" }}
    >
      <div className="container-xl">
        <div className="table_responsive" style={{ marginTop: "10%" }}>
          <div className={styles.table_wrapper}>
            <div className={styles.table_title}>
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    <b>Manage Users</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    className="btn btn-success"
                    data-toggle="modal"
                    style={{ ...{ float: "right" }, ...{ marginLeft: "5%" } }}
                    onClick={() => addsetIsOpen(!addisOpen)}
                  >
                    <AddUser
                      addisOpen={addisOpen}
                      addsetIsOpen={addsetIsOpen}
                    />
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Account</span>
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
                  <th>User ID</th>
                  <th>Type</th>
                  <th>Username</th>
                  <th>Email</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <>
                    <tr>
                      <td>{user.id}</td>
                      <td>
                        {user.userRole === "user" ? "Customer" : "Vendor"}
                      </td>
                      <td>{user.username}</td>

                      <td>{user.email}</td>

                      <td>
                        <a
                          className="edit"
                          data-toggle="modal"
                          style={{ float: "left" }}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          <FaEdit />
                          <EditUser isOpen={isOpen} setIsOpen={setIsOpen} />
                          <i data-toggle="tooltip" title="Edit"></i>
                        </a>
                        <a
                          className="delete"
                          data-toggle="modal"
                          style={{ float: "right" }}
                        >
                          <i data-toggle="tooltip" title="Delete">
                            <FaTrash onClick={() => deleteUser(user.email)} />
                          </i>
                        </a>
                      </td>
                    </tr>
                  </>
                ))}
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

      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Add User</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" required></input>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <textarea className="form-control" required></textarea>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" required></input>
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                ></input>
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Add"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Edit User</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" required></input>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <input type="text" className="form-control" required></input>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" required></input>
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                ></input>
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Save"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                ></input>
                <input
                  type="submit"
                  className="btn btn-danger"
                  value="Delete"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const userData = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      userRole: true,
    },
  });
  console.log(userData);
  return {
    props: {
      userData,
    },
  };
}
