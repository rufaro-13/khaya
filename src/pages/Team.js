import React from 'react'
import society from '../images/society.gif'
import { IconContext } from "react-icons";
import { FaEnvelopeOpenText  } from 'react-icons/fa6';


function Team() {
  return (
    <div className="md:container md:auto mt-2">
        <div className="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <span className="text-black text-3xl md:text-3xl lg:text-4xl font-bold">Khaya Team</span>
            <img src={society} alt="route icon" className="w-24 h-20"></img>
        </div>

        <div className=" sm:items-center sm:justify-center border rounded-lg bg-gray-100 mx-6 mt-2 ">

            <div className="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <span className="text-black text-xl md:text-2xl lg:text-3xl font-bold">Meet our founding directors</span>
                
            </div>

            <div className="  grid  lg:grid-cols-3 justify-items-center m-auto md:grid-cols-2 md:gap-x-4 grid-col-1 md:px-auto item-stretch ">

                <div className="justify-items-center shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  rounded-lg bg-gray-300  md:w-2/3 mt-8 ">
    
                    <h5 className="md:text-2xl text-justify text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                        <p className='text-center'>
                        Dr Aïda lockton
                        </p>
                    </h5>
                    <p className=" text-sm md:text-lg text-darkbluetheme dark:text-blue-500 pt-4">
                        <p className='text-center'>
                        <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                                    <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                                    <FaEnvelopeOpenText className="sm:items-center sm:justify-center mx-6 my-6"/>
                                    </div>
                                </IconContext.Provider>
                                <div className="  sm:items-center sm:justify-center  mt-1">
                                    <p className=" text-base font-normal">
                                    <div>
                                        <span className="text-black text-base font-bold">
                                            <a href="mailto:aida@khayahome.com" className="block py-2 pl-3 pr-4 underline 
                                            text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                                            md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white 
                                            md:dark:hover:bg-transparent dark:border-gray-700">aida@khayahome.com
                                            </a>
                                        </span>
                                    </div>
                                
                                    </p>
                                </div>
                        </p>

                        
                    </p>
                </div>


                <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6  hover:scale-110 duration-300 hover:bg-cards col-span-1 rounded-lg bg-gray-300  md:w-2/3 mt-8 sm:items-center sm:justify-center">

                    
                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                        <p className='text-center'>
                        Mrs Thando Mguni 

                        </p>
                    </h5>
                    <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                        <p className='text-center'>
                        <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                                    <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                                    <FaEnvelopeOpenText className="sm:items-center sm:justify-center mx-6 my-6"/>
                                    </div>
                                </IconContext.Provider>
                                <div className="  sm:items-center sm:justify-center  mt-1">
                                    <p className=" text-1xl font-normal">
                                    <div>
                                        <span className="text-black text-base font-bold">
                                            <a href="mailto:thando@khayahome.com" className="block py-2 pl-3 pr-4 underline 
                                            text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                                            md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white 
                                            md:dark:hover:bg-transparent dark:border-gray-700">thando@khayahome.com
                                            </a>
                                        </span>
                                    </div>
                                
                                    </p>
                                </div>
                        </p>

                    
                    </p>
                    
                </div>

                <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1  rounded-lg bg-gray-300 md:w-2/3 mt-8 sm:items-center sm:justify-center">
                    
                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                        <p className='text-center'>
                        Mr Netho Fuzane
                        </p>
                    </h5>
                    <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                        <p className='text-center'>
                        <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                                    <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                                    <FaEnvelopeOpenText className="sm:items-center sm:justify-center mx-6 my-6"/>
                                    </div>
                                </IconContext.Provider>
                                <div className="  sm:items-center sm:justify-center  mt-1">
                                    <p className=" text-1xl font-normal">
                                    <div>
                                        <span className="text-black text-base font-bold">
                                            <a href="mailto:netho@khayahome.com" className="block py-2 pl-3 pr-4 underline 
                                            text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                                            md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white 
                                            md:dark:hover:bg-transparent dark:border-gray-700">netho@khayahome.com
                                            </a>
                                        </span>
                                    </div>
                                
                                    </p>
                                </div>
                        </p>

                    </p>
                </div>

            </div>

        
            <div className="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <span className="text-black text-2xl font-normal">Khaya team is full of diverse and fully qualified :</span>  
            </div><br/>

            <div className="md:flex sm:items-center sm:justify-center mx-6  ">

                <p className=" text-1xl font-normal px-4">
                    <ul className="list-disc mx-6">
                        <li>Mental Health Practitioner</li>
                        <li> Psychotherapist</li>
                        <li>SEMH Practitioner</li>
                        <li>SCERT Practitioner</li> 
                        <li>Residential Support Worker</li>
                        <li>ELSA</li>
                        <li>Well-being Practitioner</li>
                    </ul>
                </p>

                <p className=" text-1xl font-normal px-4">
                    <ul className="list-disc mx-6">
                    
                    
                    
                    <li>Lego Therapist</li>
                    <li> SEND & SEMH Assessor</li>
                    <li>Career's Advisor & Guidance Officer</li>
                    <li>Regional Home Manager</li>
                    <li>Home Manager</li>
                    <li>Responsible Individual</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Team