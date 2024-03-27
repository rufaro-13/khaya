import React from 'react'
import KS4Curriculum from '../components/KS4Curriculum'
function KS4Info() {
  return (
    <div>
        <div>
            <div className="md:container md:mr-16 md:ml-16 pt-2">
                <div className="sm:flex sm:items-center sm:justify-center mx-12 mt-0">
                    <div>
                        <div className="text-center font-semibold py-4 text-3xl">
                            <p className="relative inline-block pb-3">
                            KS4 Curriculum 
                                <span className="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                            </p>
                        </div>

                    </div> 
                </div>

                <p>
                    <KS4Curriculum/>
                </p>

            </div>         
        </div>
    </div>
  )
}

export default KS4Info