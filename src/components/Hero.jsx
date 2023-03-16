import React from 'react';
import { motion } from "framer-motion";

import { pp1 } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div className='absolute inset-0 sm:top-[220px] top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row flex-wrap items-start gap-5'>
          <div>
              <h1 className='text-white font-black  sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
                  Salut, je suis <span className='dylan-text-gradient'>Dylan</span></h1>
                  
              <p className=' mt-2 text-white-100 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
                  Je ne suis pas magicien, mais <br className='sm:block hidden'/>
                  je peux faire des merveilles avec du code.</p>
          </div>
            <img src={pp1} alt="portrait" className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] min-[867px]:mt-6  h-32 w-32 max-[867px]:-mt-40  rounded-full object-cover border-4 mx-auto border-white mt-4'/>
        </div>

        <div className='absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-white mb-1 '
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero



