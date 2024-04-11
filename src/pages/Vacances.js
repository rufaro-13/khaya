import React from 'react'
//import { useState } from 'react';
import VacancesSection from '../components/VacancesSection';
import applform from '../vacancies/Application form.docx'
import SEO from '../components/SEO'
function Vacances() {

/*     const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }; */
  return (
    <div className="md:container md:mr-5 md:ml-5 pt-2">

<SEO
        title="Vacancies"
        description='Check our job opportunities '
        name='Khaya Home Limited'
        type='website' />
        <div className="sm:flex sm:items-center sm:justify-center mx-6 mt-0">
            <span className="text-black md:text-3xl text-2xl font-bold">Find your perfect job with one of our vacancies</span>
            
        </div>

        <div className=" sm:items-center sm:justify-center mx-8 mt-2 px-5">
            <p className="text-1xl">
            At Khaya Home, we aim to be one dedicated team that works together to ensure our young people have the best possible outcomes and life experiences. We recognise that to achieve this we need the most committed people to join us.<br/><br/>

            You will be part of a diverse and vibrant community of professionals who are outcomes focussed and operate with a strong team ethos.<br/><br/>

            Khaya offers regular training and support to all of its staff and will work closely with individuals to improve their professional career portfolios. <br/><br/>
            Our job descriptions are all written with the following four key points about Khaya in mind:<br/><br/>
            <span className=" font-bold">1. Our Vision</span><br/>
            Our vision is to empower children to build confidence, resilience, and positive relationships, equipping them with the skills they need to succeed in life. We aim to provide a warm and welcoming home where children feel loved, valued, and supported every step of the way.<br/><br/>

            <span className=" font-bold">2. Our Mission</span><br/>
            We are dedicated to providing a nurturing and family-oriented environment for children in need of care and support. Our mission is to create a safe and loving 
            home where children can thrive emotionally, socially, and academically.<br/><br/>

             <span className=" font-bold">3. Our purpose</span><br/>
             To achieve excellence in everything we do.
              Khaya’s “primary purpose” is to make a positive contribution to the lives of children and adults with disabilities. We make this contribution by ensuring that all our interactions are great, that our knowledge and skills represent excellence and that we support people to develop purposeful and warm relationships. Our “secondary purpose” is to have a positive influence in our local communities and on our sector by connecting well, nurturing partnerships and demonstrating best practice.<br/><br/>

              <span className=" font-bold">4. Our DNA</span><br/>
              Khaya has a particular way of working with people and because it is so important to all our activities we call it our ethos. It is a combination of our values and the way that we put those values into actions that is unique to Khaya. Through our Promises and Value Base, the promotion of Great Interactions and Person Centred Approaches, we aim to support every person to live a life that makes sense to them, with a level and style of support of their choosing.
            </p>
            <br/><br/>


            <div className=" sm:items-center sm:justify-center md:mr-16 md:ml-16 mt-2 px-5">

            <div className="text-center font-semibold py-4 text-3xl">
                  <p className="relative inline-block pb-3">
                  Vacancies
                      <span className="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                  </p>
              </div>
            <p className="text-1xl">
            Please find below a search tool for finding current job vacancies we are recruiting for. 
Please be aware that due to the nature of our work, for some services we cannot publish the exact physical location on our careers site. 
These will be given a broader area location on the advert and will be displayed on the map at the centre of your search area with any regional roles that might be returning in your search as ''Regional and/or Non-Disclosable Location Vacancies'

If you can't find what you're looking for at this time but would like to send info your details and they will be in touch. 
 <a className="text-blue-700" href="mailto:info@khayahome.com." >info@khayahome.com.</a>
            </p>
            <br/>
           </div>

           <div className="">
           
            <VacancesSection/>
            <div className='text-center py-4'>
            <p  className="relative font-semibold inline-block pb-3">
              Please download an <a href={applform} className="text-blue-700 hover:underline" download="Application form">application form</a> and send to info@khayahome.com 
            </p></div>
           </div> 



        </div>

    </div>
  )
}

export default Vacances