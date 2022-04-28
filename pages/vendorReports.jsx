import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
//import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";
import { FaExclamation } from "react-icons/fa";
import VendorHeader from "../components/VendorHeader";

function Reports() {
    const LowInventoryNotices = () => {

        const lowInventoryCard = {
            padding: "1%",
            backgroundColor: "#FFFFA7",

        }

        return (
            <div className="container-fluid min-h-screen w-screen" style={{ backgroundColor: "#DDBEA9" }}>
                <div className="" style={{ backgroundColor: "#B98B73" }}>
				<VendorHeader />
			</div>
                <h3>Low Inventory Notice</h3>
                <div className="card" style={lowInventoryCard}>
                    <div className="row">
                        <div className="col-sm-1">
                            <FaExclamation />
                        </div>
                        <div className="col-sm-11">
                            <b>[stock] remaining for [title] ISBN#[isbn]</b>
                        </div>
                    </div>
                </div>
                <br></br>
                <hr />
            </div>
        );
    };
    const EndOfDaySales = () => { //C an probably get the h3 date just by javascript
        return ( // Check for table responsivity. Base off on manage panels...
            <div>
                <h3>End of Day Sales for [Date]</h3>
                <table className="table table_striped table_hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>ISBN</th>
                            <th>Quantity</th>
                            <th>Total Made</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ranger's Apprentice: The Royal Ranger</td>
                            <td>1234567890123</td>
                            <td>5</td>
                            <td>$100.00</td>
                        </tr>

                    </tbody>
                </table>
                <br></br>
                <hr />
            </div>
        );
    };

    const BookSalesReports = () => {
        return (
            <div>
                <h3>Book Sales Reports</h3>
                <table className="table table_striped table_hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>ISBN</th>
                            <th>Quantity</th>
                            <th>Total Made</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ranger's Apprentice: The Royal Ranger</td>
                            <td>1234567890123</td>
                            <td>5</td>
                            <td>$100.00</td>
                        </tr>

                    </tbody>
                </table>
                <br></br>
                <hr />
            </div>
        );
    };

    const PublisherSalesReport = () => { // idk what this entails.
        return (
            <div>
                <h3>Top Sellers</h3>

                <table className="table table_striped table_hover">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>ISBN</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>Top 3 best selling books go here</td>
                            <td>1234567890123</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>If you give a mouse a cookie...</td>
                            <td>0981230981234</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td>Ranger's Apprentice: The Royal Ranger</td>
                            <td>0987654321124</td>
                            <td>2</td>
                        </tr>

                    </tbody>
                </table>
                <br></br>
                <hr />
            </div>
        );
    };
    const card = {
        backgroundColor: "white",
        padding: "3rem 3rem 5rem 3rem",
        boxShadow: "0px 2px 5px #B98B73",
        borderRadius: ".25rem",
        marginBottom: "1rem",
    };

    return (
        <div
            className="container-fluid min-h-screen w-screen"
            style={{ backgroundColor: "#dfbea9" }}
        >
            <div className="" style={{ backgroundColor: "#B98B73" }}>
				<VendorHeader />
			</div>
            {/*
            <Toaster />
            <div id="page-wrap">
                <div className="" style={{ backgroundColor: "#B98B73" }}>
                    <Header />
                    { <Banner /> }
                </div> */}
            <div className="container-sm my-4" style={card}>
                <h1>Reports Summary</h1>
                <hr />
                <div className="row">
                    <div className="col">
                        <LowInventoryNotices />
                        <PublisherSalesReport />
                        <EndOfDaySales />
                        <BookSalesReports />
                    </div>
                </div>
            </div>
        </div>
 

    );
}

export default Reports;