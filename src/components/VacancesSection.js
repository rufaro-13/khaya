import React from 'react'
import { IconContext } from "react-icons";
import { FaFilePdf } from 'react-icons/fa6';
import {polfiles} from '../pages/ObjectsVac'


function VacancesSection() {
  return (
    <div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 sm:items-center sm:justify-center mx-4 mt-2 px-2">
        
        {polfiles.map((file) => (
               
               <div className="col-span-1 flex lg:ml-8 mt-2 px-2 lg:px-8  items-start">
               <IconContext.Provider value={{ color: 'red', size: '25px', padding:'2px 2px' }}>
                    
                    <FaFilePdf className=" mx-1 my-1"/>
                
               </IconContext.Provider>
               <p className="md:text-1xl text-sm">
               
               <a href={file.file} className="text-blue-700 hover:underline" download={file.title}>{file.title}</a>
               </p>
               
             </div>
           ))}
       
   </div>
    </div>
  )
}

export default VacancesSection