import React from 'react'
import TermsAndConditionsAccordion from '../components/TermsAndConditionsAccordion'
import { Link } from 'react-router-dom'

function TermsAndConditions() {
  return (

<div>
    <div className="md:container md:mx-auto  pt-2">
        <div className="sm:flex sm:items-center sm:justify-center mx-12 mt-0">
            <div>
                <div className="text-center font-semibold py-4 text-2xl md:text-3xl">
                    <p className="relative text-green inline-block pb-3">
                         Purpose of our terms and conditions statement
                        <span className="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                    </p>
                </div>

                <p className="mb-4 ">
                    This statement tells you how Khaya will collect and process your personal data when you access this website.
                </p>
                <p className="mb-4 ">
                    Khaya is committed to protecting and respecting personal data and being transparent about how and why it collects and uses data. To learn more about how we manage your data please go to: <Link to="#" className='text-blue-600'>https://khayahome.com/privacy-policy/</Link>
                </p>
            </div>
        </div>

        <TermsAndConditionsAccordion/>
        <div className="sm:flex sm:items-center sm:justify-center mx-12 ">
            <div>
        <div className="text-center font-semibold py-4 text-3xl">
            <p className="relative inline-block text-red pb-3">
                Disclaimer
                <span className="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                </p>
        </div>

        <p className="mb-4 ">
        Every effort has been made to ensure that the information contained on our website is correct at the time
         of publication and when information becomes incorrect is amended within a reasonable period.
          Khaya makes no representation about the information contained in the documents and related graphics 
          published on this site. All such documents and related graphics are provided “as is,” without guarantee
           or warranty of any kind and all implied guarantees or warranties are excluded to the maximum extent
            permitted by applicable UK law. You must check any information on the site before taking any decisions 
            based on that information.
        </p>
        <p className="mb-4 ">
        To the maximum extent permitted by applicable UK law, the Institute shall not be liable, in any event,
         for any claims for damages or any other remedy in whatever jurisdiction whatsoever, whether in an action
          in contract, tort (including negligence and strict liability) or any other theory of liability, whether 
          in law or equity including, without limitation, claims for damages or any other remedy in whatever
           jurisdiction arising out of or in connection with the use or performance of software, documents or
            other information available from this server or the documents or pages that reside upon it.
        </p>
        </div>
    </div></div>
</div>
    
  )
}

export default TermsAndConditions