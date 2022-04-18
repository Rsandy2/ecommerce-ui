import React from "react";
import {BsPersonCircle, BsSearch, BsCart3} from "react-icons/bs";
import ShoppingCart from "./ShoppingCart";

const header = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return(
        <div className="flex flex-row items-center justify-center h-20 mx-3">
                <h1 className="text-coffee text-3xl ml-20">Bookstore</h1>
            {/* search bar */}
            <div className="flex-grow mx-2">
                <div className="wrapper">
                    <div className=" bg-white rounded flex items-center w-full p-2 shadow-sm border border-gray-200">
                      <input type="search" placeholder="search..." x-model="q" className="w-full px-4 text-sm outline-none focus:outline-none bg-transparent"></input>
                      <button className="flex items-center justify-center pl-3 pr-2 border-l border-slate-300"> <BsSearch size="1rem" color="gray"/></button>
                    </div>
                </div>
            </div>

            {/* icon row */}
            <div className="flex flex-row items-center mx-2">
                <button className="text-coffee flex flex-row items-center mr-2"><BsPersonCircle size="2rem" className="pr-2"/>Sign In</button>
                <button onClick={() => setIsOpen(!isOpen)} className="text-coffee flex flex-row items-center mr-2"><BsCart3 size="2rem" className="pr-2"/>Cart</button>
                <ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </div>
    );
};
export default header;