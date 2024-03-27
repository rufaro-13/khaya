/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import Hero from "../components/Hero";
import { Link } from 'react-router-dom';
import residentialprov from "../images/friends-having-fun-together.jpg"

function Home() {
  return (
    <div className="p-0">
        <Hero/>
      
{/*         <div className="flex items-center justify-center p-12">
            <div>
            <p className="text-2xl font-bold"><span className="text-purpletheme ">Khaya Specialised Care and Home </span>
            are here to make a lifelong and lasting difference to young people's lives.</p>
            <br/>  

            <p className="text-xl"><span className="font-bold">Mission Statement - </span> our mission is to enrich the lives of young people in our care by helping them to overcome their difficulties,
             fulfil their potential and achieve the very best outcomes. <span className="text-purpletheme font-bold"><Link to="/about">Learn more about us.</Link></span></p>
            <br/>  
        </div>
        </div> */}




<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="flex flex-col w-full lg:w-3/4 p-8 overflow-hidden lg:flex-row">
    <div className="bg-gradient-to-br from-purple-600 to-purpletheme rounded-l-lg p-6 text-white lg:w-1/2">
      <h1 className="text-3xl font-semibold mb-4">Home Residential Care Provision</h1>
      <p className="mb-4">
        We support our young people in small, family-style homes, meeting the needs of the
        different experiences that our young people bring with them.
      </p>
      <p className="mb-4">
        Our care homes vary between solo placement to 4 bedded homes.

      </p>
      <p className="mb-4">
      All of our properties are commissioned with our children in mind where the main focus is local amenities, 
      an interest which will create community links.

      </p>
      
      <br/>
      <Link to="/residential_provision"><button type="button" className="border border-white rounded p-3 font-bold hover:bg-bluetheme">Learn more</button></Link>
    </div>
    <div className="bg-blue-300 rounded-r-lg overflow-hidden lg:w-1/2 mt-6 sm:mt-0">
      <img src={residentialprov} alt="Residential Care" className="w-full h-full object-cover" />
    </div>
  </div>


  
{/*   <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-6 right-6 bg-purpletheme text-white p-2 rounded-lg shadow-md"
>
  Back to Top
</button> */}
</div>
<p className="flex items-center justify-center p-16 text-2xl bg-gray-100">
    At Khaya, we provide a nurturing pathway to overcome adversity. We believe that the heart of this starts with
     relationships, in order to build growth, trust and development in all the young people we are fortunate enough
      to care for and educate.
</p>
<marquee className="font-cursive text-3xl font-semibold pt-8 text-olive">We are here to make you feel that you are not alone ...</marquee>
</div>
 

  )
}

export default Home