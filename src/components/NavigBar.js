'use client';

import { Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
 import logo from '../images/KhayaHomeLimitedSquare_png.png' 
export default function NavigBar() {
  return (
    <Navbar
      fluid
      
      className=" bg-navcolour "
    >
      <Navbar.Brand href="/">
       <img
          className="mr-3 h-8 md:h-16 sm:h-9 "
           src={logo} alt="Khaya Home Ltd Logo"
        /> 
        <span className="self-center whitespace-nowrap text-goldenyellow text-xl font-semibold dark:text-white">
        Khaya Home Ltd
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-goldenyellow">

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-goldenyellow py-2 hover:bg-goldenyellow hover:text-black'>
            Home
          </p>
        </Link>

        <Link to="/about" className='text-goldenyellow hover:bg-goldenyellow hover:text-black py-2 '>
          About
        </Link>

        <Link to="/learning_provision" className='text-goldenyellow  hover:bg-goldenyellow hover:text-black py-2 '>
          Learning Provision
        </Link>

        <Link to="/residential_provision" className='text-goldenyellow  hover:bg-goldenyellow hover:text-black py-2 '>
          Residential Provision
        </Link>

        <Link to="/contact" className='text-goldenyellow  hover:bg-goldenyellow hover:text-black py-2 '>
          Contact
        </Link>
        <div>
              
                <Link
                  to="#"
                  className=" text-goldenyellow peer block py-2   hover:bg-goldenyellow hover:text-black  lg:p-2 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Quick Links
                </Link>
                <div
                  className="absolute hidden peer-hover:flex hover:flex
                  w-[200px]
                  flex-col bg-white drop-shadow-lg
                  z-50"
                >
                  <Link
                  to="our_team"
                  className=" px-5 py-3  hover:bg-navcolour hover:text-goldenyellow"
                >
                  Our team
                </Link>
                <Link
                  to="policies"
                  className=" px-5 py-3 hover:bg-navcolour hover:text-goldenyellow"
                >
                  Policies
                </Link>
                <Link
                  to="vacances"
                  className=" px-5 py-3  hover:bg-navcolour hover:text-goldenyellow"
                >
                  Vacancies
                </Link>
                  
                </div>
              
            </div>
      </Navbar.Collapse>
    </Navbar>
  )
}