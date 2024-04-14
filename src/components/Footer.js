import React from 'react'
import {Link} from 'react-router-dom'
 import logo from '../images/KhayaHomeLimitedSquare_png.png'; 
/* import social from '../images/social-care-network-logo.png.webp';
import careskills from '../images/careskills-academy-logo.png.webp';
import elsa from '../images/elsa-logo.png.webp';
import nurture from '../images/nurture-group-logo.png.webp';
import asdan from '../images/asdan-logo.png.webp' */

function Footer() {
  return (
    <div>
        
        <footer className="bg-navcolour mt-3 dark:bg-gray-900">
    <div className="mx-4 w-full max-w-screen-xl pt-4 py-6 lg:py-8">
       <div className="grid grid-cols-3 gap-3 sm:gap-2 sm:grid-cols-3">
          <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                  <img src={logo}  className="h-32 " alt="Khaya Home Ltd Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-navcolour dark:text-white">Khaya Home</span>
              </Link>
          </div>
          
              <div>
                  <h2 className="mb-6 text-base font-semibold text-goldenyellow uppercase dark:text-white">Content</h2>
                  <ul className="ml-2 text-sm mt-3 text-goldenyellow dark:text-gray-400 font-medium">
                      <li className="mb-1">
                          <Link to="/learning_provision" className="hover:underline">Learning Provision</Link>
                      </li>
                      <li className="mb-1">
                      <Link to="/residential_provision" className="hover:underline">Residential Provision</Link>
                      </li>
                      <li className="mb-1">
                      <Link to="/vacances" className="hover:underline">Vacancies</Link>
                      </li>
                      
                  </ul>
              </div>

              

              <div>
              <h2 className="mb-6 text-base font-semibold text-goldenyellow uppercase dark:text-white">Company</h2>
                  <ul className="mt-3 ml-2 text-sm text-goldenyellow dark:text-gray-400 font-medium">
                      
                     
                      <li className="mb-1">
                      <Link to="/about" className="hover:underline">About us</Link>
                      </li>
                      <li className="mb-1">
                      <Link to="/our_team" className="hover:underline">Our team</Link>
                      </li>
                      <li className="mb-1">
                      <Link to="/policies" className="hover:underline">Policies</Link>
                      </li>
                      <li>
                      <Link to="/contact" className="hover:underline">Contact us</Link>
                      </li>

                  </ul>
              </div>
        </div>
    </div>

    <div>
              
                  <ul className="mt-3 flex pb-2  ml-2 text-sm text-goldenyellow dark:text-gray-400 font-medium">
                      
                     
                      <li className="mb-1 px-4">
                      <Link to="/terms_and_conditions" className="hover:underline">Terms and conditions </Link>
                      </li>
                      <li className="mb-1 px-4">
                      <Link to="https://policies.google.com/privacy" className="hover:underline">Privacy policy </Link>
                      </li>
                     

                  </ul>
              </div>
    <div>
      <hr className=" border-goldenyellow sm:mx-0 dark:border-gray-700 " />
      <div className="sm:flex sm:items-center p-3 sm:justify-between">
          <span className="text-sm text-goldenyellow sm:text-center dark:text-gray-400">© 2024 
          <Link to="/" className="hover:underline"> Khaya Home™</Link>. All Rights Reserved.
          </span>

          <span className="text-sm px-5 text-goldenyellow sm:text-center dark:text-gray-400"> 
          <a href="aida@khayahome.com"target="blank" className="hover:underline">Designed by Dr Aida Lockton </a> <a href="netho@khayahome.com"target="blank" className="hover:underline">& Mr Netho Fuzane</a>
          </span>

         
      </div>
    </div>
</footer>

    </div>
  )
}

export default Footer