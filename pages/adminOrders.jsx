import { useState } from "react"; // Using to handle forms?
import React from "react";
import styles from "../styles/AdminManage.module.scss";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import EditOrder from "../components/EditOrder";
import AddOrder from "../components/AddOrder";
import ManageHeader from "../components/ManageHeader";
// https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form

export default function AdminPanel() {
  const [inputs, setInputs] = useState({});
  //const [isOpen, setIsOpen] = React.useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [addisOpen, addsetIsOpen] = useState(false);

  return (
    <div
      className="container-fluid min-h-screen w-screen"
      style={{ backgroundColor: "#DDBEA9" }}
    >
      <div className="" style={{ backgroundColor: "#B98B73" }}>
				<ManageHeader />
			</div>
      <div className="container-xl">
        <div className="table_responsive" style={{ marginTop: "10%" }}>
          <div className={styles.table_wrapper}>
            <div className={styles.table_title}>
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    <b>Manage Orders</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    className="btn btn-success"
                    data-toggle="modal"
                    style={{ ...{ float: "right" }, ...{ marginLeft: "5%" } }}
                    onClick={() => addsetIsOpen(!isOpen)}
                  >
                    <AddOrder
                      addisOpen={addisOpen}
                      addsetIsOpen={addsetIsOpen}
                    />
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Order</span>
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
                  <th>Order ID?</th>
                  <th>Name</th>
                  <th>User ID</th>
                  <th>Email</th>
                  <th>Total Price</th>
                  <th>Date</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>Clara Zhang</td>
                  <td>420</td>
                  <td>clarasemail@yahoo.com</td>
                  <td>$99.99</td>
                  <td>04/24/2022</td>

                  <td>
                    <a
                      className="edit"
                      data-toggle="modal"
                      style={{ float: "left" }}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <EditOrder isOpen={isOpen} setIsOpen={setIsOpen} />
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
                        <FaTrash />
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Bobby</td>
                  <td>232</td>
                  <td>cexample@gmail.com</td>
                  <td>$10.00</td>
                  <td>04/24/2022</td>

                  <td>
                    <a
                      className="edit"
                      data-toggle="modal"
                      style={{ float: "left" }}
                      onClick={() => setIsOpen(!isOpen)}
                    >
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
                        <FaTrash />
                      </i>
                    </a>
                  </td>
                </tr>
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
}
