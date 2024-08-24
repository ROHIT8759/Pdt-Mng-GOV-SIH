import React from "react";
const Navbar = () => {
    return (
        <div className="h-[100px] bg-blue-400 flex items-center justify-between px-12 shadow-md">

            <h1 className="text-3xl font-bold text-gray-800">Coal India Contractor Portal</h1>


            <div className="flex space-x-10 text-1xl text-gray-700">
                <div className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    Home
                </div>
                <div className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    About
                </div>
                <div className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    Contact Admin
                </div>
                <div className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    Login
                </div>
            </div>
        </div>
    );
};

export default Navbar;
