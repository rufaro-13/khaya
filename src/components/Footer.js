import React from 'react'
import logo from '../images/ortu_png.png';
import social from '../images/social-care-network-logo.png.webp';
import careskills from '../images/careskills-academy-logo.png.webp';
import elsa from '../images/elsa-logo.png.webp';
import nurture from '../images/nurture-group-logo.png.webp';
import asdan from '../images/asdan-logo.png.webp'

function Footer() {
  return (
    <div>
        
<footer className="bg-navcolour  shadow dark:bg-navcolour mx-0 mt-20">
    <div className="w-full max-w-screen-xl mx-auto p-1 md:py-8">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" rel="noreferrer" className="flex items-center mb-4 sm:mb-0">
                    <img src={logo}className="h-16 md:h-24 mr-3" alt="Khaya Logo" />
                </a>

                <a href="https://careskillsacademy.co.uk/" rel="noreferrer" className="flex items-center mb-4 sm:mb-0">
                    <img src={careskills}className="md:h-12 h-9 mr-3" alt="careskillsacademy Logo" />     
                </a>

                <a href="/" rel="noreferrer" className="flex items-center mb-4 sm:mb-0">
                    <img src={nurture}className="md:h-12 h-9 mr-3" alt="Flowbite Logo" />   
                </a>

                <a href="https://www.elsanetwork.org/" rel="noreferrer" className="flex items-center mb-4 sm:mb-0">
                    <img src={elsa}className="md:h-12 h-9 mr-3" alt="elsanetwork Logo" />    
                </a>

                    <a href="https://www.socialcarenetwork.com/" rel="noreferrer" className="flex items-center mb-4 sm:mb-0">
                    <img src={social}className="h-12 mr-3" alt="socialcarenetwork Logo" />   
                </a>

                <a href="https://www.asdan.org.uk/" rel="noreferrer" className="flex items-center mb-4 sm:mb-0">
                    <img src={asdan}className="md:h-12 h-9 mr-3" alt="asdan.org.uk Logo" />   
                </a>

            </div>

            <div className="sm:flex sm:items-center sm:justify-center mx-12 mt-5">
                <ul className=" mt-8 mx-8 flex flex-wrap items-center mb-6 text-lg md:text-xl font-medium text-gray-300 sm:mb-0 dark:text-white">
                    <li>
                        <a href="/about" rel="noreferrer" className="mr-4 hover:underline md:mr-6 md:font-large">About</a>
                    </li>
                    <li>
                        <a href="/policies"  rel="noreferrer"className="mr-4 hover:underline md:mr-6 font-large">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/" rel="noreferrer" className="mr-4 hover:underline md:mr-6 font-large">Licensing</a>
                    </li>
                    <li>
                        <a href="/contact" rel="noreferrer" className="hover:underline font-large ">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr className="my-6 border-goldenyellow sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <span className="block text-sm text-goldenyellow sm:text-center dark:text-white">© 2024 <a href="/" className="hover:underline">Khaya Home Ltd™</a>. All Rights Reserved.</span>
            <span className="mx-12 block text-sm text-goldenyellow sm:text-center dark:text-white">Designed by <a href="/" className="hover:underline">Dr Aida Lockton</a> </span>
            <span className="mx-12 block text-sm text-goldenyellow sm:text-center dark:text-white">Developed by <a href="mailto:rufarochiuta@gmail.com" className="hover:underline">Chiuta</a> </span>
           
        </div>
    </div>
</footer>


    </div>
  )
}

export default Footer