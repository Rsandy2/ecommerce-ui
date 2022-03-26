import type { NextPage } from "next";
import styles from "../styles/Admin.module.scss";
const Admin: NextPage = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <ul className={styles.responsive_table}>
            <li className={styles.table_header}>
              <div className="col col-1">Id</div>
              <div className="col col-2">Name</div>
              <div className="col col-3">Email</div>
              <div className="col col-4">Actions</div>
            </li>
            <li className={styles.table_row}>
              <div className="col col-1">00001</div>
              <div className="col col-2">John Doe</div>
              <div className="col col-3">jdoe@gmail.com</div>
              <div className="col col-4">
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Manage</button>
                  <div className={styles.dropdown_content}>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.table_row}>
              <div className="col col-1">00002</div>
              <div className="col col-2">John Marie</div>
              <div className="col col-3">jdoe@gmail.com</div>
              <div className="col col-4">
                {" "}
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Manage</button>
                  <div className={styles.dropdown_content}>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.table_row}>
              <div className="col col-1">00003</div>
              <div className="col col-2">John Pinker</div>
              <div className="col col-3">jdoe@gmail.com</div>
              <div className="col col-4">
                {" "}
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Manage</button>
                  <div className={styles.dropdown_content}>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.table_row}>
              <div className="col col-1">00004</div>
              <div className="col col-2">John Aster</div>
              <div className="col col-3">jdoe@gmail.com</div>
              <div className="col col-4">
                {" "}
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Manage</button>
                  <div className={styles.dropdown_content}>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.container}>
          <ul className={styles.responsive_table}>
            <li className={styles.table_header}>
              <div className="col col-1">Book</div>
              <div className="col col-2">Author</div>
              <div className="col col-3">UUID</div>
              <div className="col col-4">Actions</div>
            </li>
            <li className={styles.table_row}>
              <div className="col col-1">Fallen Kingdoms</div>
              <div className="col col-2">John Doe</div>
              <div className="col col-3">1234</div>
              <div className="col col-4">
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Manage</button>
                  <div className={styles.dropdown_content}>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                    <a href="#">Rename</a>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.table_row}>
              <div className="col col-1">Fallen Nations</div>
              <div className="col col-2">John Marie</div>
              <div className="col col-3">1234</div>
              <div className="col col-4">
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Manage</button>
                  <div className={styles.dropdown_content}>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                    <a href="#">Rename</a>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.table_row}>
              <div className="col col-1">Fallen Mountains</div>
              <div className="col col-2">John Pinker</div>
              <div className="col col-3">1234</div>
              <div className="col col-4">
                {" "}
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Manage</button>
                  <div className={styles.dropdown_content}>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                    <a href="#">Rename</a>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.table_row}>
              <div className="col col-1">Fallen Journey</div>
              <div className="col col-2">John Aster</div>
              <div className="col col-3">1234</div>
              <div className="col col-4">
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Manage</button>
                  <div className={styles.dropdown_content}>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                    <a href="#">Rename</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Admin;
