/* eslint-disable jsx-a11y/anchor-is-valid */
//import About from "../pages/About"
import residential from "../images/home.gif"
import care from "../images/care.gif"
import education from "../images/books.gif"
import love from "../images/love.gif"
const Hero = () => {
  return (
    


<section className="bg-center  bg-no-repeat bg-hero_pattern bg-gray-500 bg-blend-multiply bg-cover mt-0">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-44">
        <p className=" text-lime-400 text-6xl mb-6 font-cursive">Welcome to <span className="font-extrabold">Khaya</span></p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl font-sans">A new beginning for children and young people</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">To develop, grow and nurture.</p>
        <div className="flex flex-col space-y-4 pt-6 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            
            
            <a href="#" className="flex  flex-col items-center  border bg-blend-multiply  border-goldenyellow rounded-lg shadow lg:flex-row md:max-w-fit sm:max-w-fit hover:bg-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover sm:w-20 opacity-50  rounded-lg h-16 md:h-28 md:w-40 " src={care} alt="therapeutic care"/>
                <div className="flex flex-col justify-between px-2 leading-normal">
                    <h5 className=" text-lg md:text-xl font-bold tracking-tight text-lime-400 dark:text-white">Therapy Care and Mental Health Support</h5>
                    <p className="mb-1 font-normal text-goldenyellow dark:text-gray-400">Carers who are understanding and compassionate.</p>
                </div>
            </a>

            <a href="#" className="flex flex-col items-center  border border-goldenyellow  rounded-lg shadow lg:flex-row md:max-w-xl hover:bg-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover sm:w-20 opacity-50  rounded-lg h-16 md:h-28 md:w-40 " src={residential} alt="residential"/>
                <div className="flex flex-col justify-between px-2 leading-normal">
                    <h5 className=" text-lg md:text-xl  font-bold tracking-tight text-lime-400 dark:text-white">Residential and Supported Care</h5>
                    <p className="mb-1 font-normal text-goldenyellow  dark:text-gray-400">A care environment that is safe, stable, nurturing and non-judgmental.</p>
                </div>
            </a>

            <a href="#" className="flex flex-col items-center  border border-goldenyellow  rounded-lg shadow lg:flex-row md:max-w-xl hover:bg-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover sm:w-20 opacity-50  rounded-lg h-16 md:h-28 md:w-40 " src={education} alt="education"/>
                <div className="flex flex-col justify-between px-2 leading-normal">
                    <h5 className=" text-lg md:text-xl font-bold tracking-tight text-lime-400  dark:text-white">Education and Independence</h5>
                    <p className="mb-1 font-normal text-goldenyellow  dark:text-gray-400">Therapeutic care programmes to meet individual needs.</p>
                </div>
            </a>
           
            <a href="#" className="flex flex-col items-center  border border-goldenyellow  rounded-lg shadow lg:flex-row md:max-w-xl hover:bg-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover sm:w-20 opacity-50  rounded-lg h-16 md:h-28 md:w-40 " src={love} alt="education"/>
                <div className="flex flex-col justify-between px-2 leading-normal">
                    <h5 className=" text-lg md:text-xl font-bold tracking-tight text-lime-400  dark:text-white">Supporting behaviour that challenges</h5>
                    <p className="mb-1 font-normal text-goldenyellow  dark:text-gray-400">Behaviour is understood as a form of communication to support.</p>
                </div>
            </a>
        </div>

        
    </div>
</section>



  )
}

export default Hero