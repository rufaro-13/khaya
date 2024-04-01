import React from 'react'
import PoliciesSection from '../components/PoliciesSection'
import SEO from "../components/SEO"
function Policies() {
  return (
    <div className="md:container  pt-2">

<SEO
        title="Policies"
        description='Our company policies '
        name='Khaya Home Limited'
        type='website' />
        <div className="sm:flex sm:items-center sm:justify-center mx-12 mt-0">
           <div>
              <div className="text-center font-semibold py-4 text-3xl">
                  <p className="relative inline-block pb-3">
                  Khaya  Home Policies
                      <span className="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                  </p>
              </div>
            </div>
         </div>

         <div className=" sm:items-center sm:justify-center md:mr-16 md:ml-16 mt-2 px-5">
            <p className="text-1xl">
            Please find below a copy of our current policies for Khaya, if you require any of them
             to be provided in a different format or you have any queries please contact us at <a className="text-blue-700" href="info@khayahome.com" >info@khayahome.com .</a>
            </p>
            <br/>
           </div>

           <div className="">
           
              <PoliciesSection /> 
            
           </div> 
    </div>
    
  )
}

export default Policies