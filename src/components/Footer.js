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
                  <img src={logo}  className="h-32 " alt="FlowBite Logo" />
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

          {/* <span className="text-sm px-5 text-goldenyellow sm:text-center dark:text-gray-400"> 
          <a href="mailto:"target="blank" className="hover:underline">Developed by Rufaro Chiuta</a>.
          </span> */}

          {/* <div className="flex  mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/profile.php?id=61552407106811"target="blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://wa.me/447507913398"target="blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-6 h-6 bi bi-whatsapp" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green"  viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  <span className="sr-only">Whatsapp account</span>
              </a>
              <a href="https://x.com/stainmastersltd?s=11&t=ksJmMFAEzPdupCkRpF5qIA"target="blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 512 512">
                    
                    <path fill-rule="evenodd" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter handle</span>
              </a>
              <a href="https://instagram.com/stainmasters_limited?igshid=NGVhN2U2NjQ0Yg=="target="blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-6 h-6 bi bi-instagram" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red"  viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">Instagram account</span>
              </a>
              
          </div> */}
      </div>
    </div>
</footer>

    </div>
  )
}

export default Footer