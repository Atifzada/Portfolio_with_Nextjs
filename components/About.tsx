import React from 'react';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
        <SectionTitle title="About Me"/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                Hello! My name is Atif Zada and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p>
                I have successfully completed the rigorous
                <span className='text-textGreen'> Full Stack Web Development program at Microverse.</span> 
                This transformative experience has equipped me with a deep understanding of front-end and back-end technologies, as well as the ability to build robust, dynamic web applications.,{" "},
                </p>
                <p>
                I am excited to bring my expertise in web development to the digital world, and I am eager to embark on new projects and challenges. Lets work together to create innovative and user-friendly web solutions that leave a lasting impression.
                </p>
                <p>Here are the technologies I have been working with recently:</p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        JavaScript (ES6+)
                    </li>
                    
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        React Redux
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Ruby
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Ruby on Rails
                    </li>
                                        
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        SQL
                    </li>

                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Next.js
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        TypeScript
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Tailwind
                    </li>

                </ul>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default About