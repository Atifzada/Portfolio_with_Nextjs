import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import MustFintect from './works/MustFintect'
import Microverse from './works/Microverse';
import BajCo from './works/BajCo';

const Experience = () => {
    const [workMustfintect , setWorkMustfintect]=useState(false);
    const [workMicroverse,setWorkMicroverse]=useState(true);
    const [workBajco,setWorkBajco]=useState(false);

    const handleMustfintect = () => {
        setWorkMustfintect(true);
        setWorkMicroverse(false);
        setWorkBajco(false);
    };

    const handleMicroverse= () => {
        setWorkMustfintect(false);
        setWorkMicroverse(true);
        setWorkBajco(false);
    };

    const handleBajCo = () => {
        setWorkMustfintect(false);
        setWorkMicroverse(false);
        setWorkBajco(true);
    };

  return (
    <section 
    id='experience'
    className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
         <SectionTitle title='where I have worked'/>
         <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                                
            <li onClick={handleMicroverse}
                className={`${workMicroverse ? 'border-l-textGreen text-textGreen':'border-l-hoverColor text-textDark'}
                border-l-2 bg:transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}>
                    Microverse
                </li>

                <li onClick={handleMustfintect}
                className={`${workMustfintect ? 'border-l-textGreen text-textGreen':'border-l-hoverColor text-textDark'}
                border-l-2 bg:transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}>
                    Must Fintect
                </li>

                <li onClick={handleBajCo}
                className={`${workBajco ? 'border-l-textGreen text-textGreen':'border-l-hoverColor text-textDark'}
                border-l-2 bg:transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}>
                    SIGNITIVE LOGICS
                </li>

            </ul>
            {workMustfintect && <MustFintect/>}
            {workMicroverse && <Microverse/>}
            {workBajco && <BajCo/>}
         </div>
    </section>
  )
}

export default Experience