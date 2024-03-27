import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';

import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaEnvelopeOpenText, FaMobileScreenButton,  } from 'react-icons/fa6';

function Contacts() {

   /*  const [formState,setFormState] =useState({});
   
    const config={
        Host : "smtp.elasticemail.com",
        Username : "rufarochiuta@gmail.com",
        Password : "2C0EBE7DF696B4E70A28CEB87D3F3E4E2952",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }

    const changeHandler =(event)=>{
        setFormState({...formState,[event.target.name]:event.target.value});
    } */
        
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gtryv9b', 'template_entpr7m', form.current, 'ZcC3PoKPGaFWLAjT0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    
    return (
    <div className="container mx-auto md:mr-16 md:ml-16 pt-2 overflow-hidden">

        <div className="sm:flex sm:items-center sm:justify-center mx-6 mt-">
            <span className="text-green text-2xl md:text-3xl font-bold underline decoration-bluetheme ">Contacting Khaya Home<br/><br/></span>
                
        </div>

        <div className="sm:flex sm:items-center sm:justify-center mx-8 mt-2 px-5">
            <p className="text-1xl">
                If you wish to contact Khaya please use the form on this page or send an email to the email address below.<br/><br/>

                If it is urgent or you would prefer to talk to a person please use the telephone number listed below.
            </p>
            <br/>
            
        </div>

        <center>
        <div className="max-w-full sm:82 rounded-lg md:flex items-center sm:items-center sm:justify-center   mx-8 mt-1">

            <div className="max-w-full  sm:82 rounded-lg   sm:items-center sm:justify-center    mt-8">

                <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                    <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                       <FaEnvelopeOpenText className="sm:items-center sm:justify-center mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div className="  sm:items-center sm:justify-center  mt-1">
                    <p className=" text-1xl font-normal">
                    <div><span className="text-black text-2xl font-bold"><a href="mailto:info@khayahome.com" className="block py-2 pl-3 pr-4 underline text-link rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                    info@khayahome.com
                    </p>
                  </div>
            </div>

            <div className="max-w-full  sm:82 rounded-lg  sm:items-center sm:justify-center  md:ml-48 mt-8">

                  <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                    <a href="tel:+447940456267"><div className="  sm:items-center sm:justify-center   mt-5 mb-5">
                       <FaMobileScreenButton className="sm:items-center sm:justify-center  my-6"/>
                    </div></a>
                  </IconContext.Provider>
                  <div className="  sm:items-center sm:justify-center   mt-1">
                    <p className=" text-1xl font-normal">
                    <div><span className="text-black text-2xl font-bold"><a href="tel:+447940456267" 
                    className="block py-2  underline text-link rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Call Us</a></span></div>
                    +44 7940 456 267
                    </p>
                  </div>

            </div>
        </div>

        </center>
        <div className="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <span className="text-green text-2xl md:text-3xl font-bold underline decoration-bluetheme ">Our online contact form<br/><br/></span>
                
        </div>

        <div className="sm:flex sm:items-center sm:justify-center mx-8 mt-2 px-5">
            <p className="text-1xl">
            Please use our online contact form to contact our Khaya team and we will contact you back as soon as possible.
            </p>
            <br/>
            
        </div>


        <div  className="md:w-full  sm:82 rounded-lg  sm:items-center justify-center  mx-4 mt-8">
            
            <form className=" md:px-60 " ref={form} onSubmit={sendEmail}>
                
                <div className="mb-6 ">
                    <label for="name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name <span className="text-red text-1xl italic font-normal">(Required)</span></label>
                    <input type="text" name="user_name" id="name" size="60" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-1/2 py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: John Smith" required/>
                </div>
                       
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email <span className="text-red text-1xl italic font-normal">(Required)</span></label>
                    <input type="email"name="user_email" id="email"size="60" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-1/2 py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: name@email.com" required/>
                </div> 
                <div className="mb-6 ml-0">
                    <label for="subject" className="ml-0 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Subject <span className="text-red text-1xl italic font-normal">(Required)</span></label>
                    <input type="text" name="subject" id="subject" size="60" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-1/2 py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>

                <div className="mb-6">
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Messsage <span className="text-red text-1xl italic font-normal">(Required)</span></label>
                    <textarea id="message" name="message"rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-1/2 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>

                <div className="mb-6 sm:w-full lg:w-full md-w-full">
                    <p>
                    <span className=" text-1xl font-semibold">Terms & Conditions
                    <span className="text-red text-1xl italic font-normal">(Required)</span><br/></span>
                    I agree to the Terms & Conditions and understand that khayahome.com has a legitimate interest to process the data that I have submitted.<Link
                    to="/terms_and_conditions"className=" underline text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    > See our Terms and Conditions and Privacy Policy </Link>for more information.
                    This site is protected by reCAPTCHA and the Google <a className="text-blue-700"href="https://policies.google.com/privacy">Privacy Policy </a>and <a className="text-blue-700" href="https://policies.google.com/terms">Terms of Service</a> apply.
                    
                    </p>
                </div>
                    <div className="max-w-full sm:82 rounded-lg sm:flex flex mx-6 mb-6">
                        <div className="ml-5 flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                        </div>
                        <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:black">Yes I agree to the terms, conditions and privacy & cookie policy</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                
            </form>
            
        </div>


    </div>
  )
}

export default Contacts