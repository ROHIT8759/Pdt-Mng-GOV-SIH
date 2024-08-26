import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="h-[100px] bg-blue-400 flex items-center justify-between px-12 shadow-md">
            <h1 className="text-3xl font-bold text-gray-800">Coal India Contractor Portal</h1>
            <div className="flex space-x-10 text-lxl text-gray-700">
                <Link to="/" className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    Home
                </Link>
                <Link to="/about" className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    About
                </Link>
                <Link to="/contact-admin" className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    Contact Admin
                </Link>
                <Link to="/login" className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
