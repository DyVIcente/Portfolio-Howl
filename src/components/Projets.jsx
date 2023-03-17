import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { projects } from '../constants';
import { githubBlack } from '../assets';

const Cards = ({
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-gray-200 p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover  rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={githubBlack}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-black font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-black text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    );
  };


const  Projets = () => {
  return (
    <>
    <div id='work' className='sm:scroll-mt-40 scroll-mt-20'>
        <div className='flex flex-wrap top-[120px] max-w-7xl mx-auto sm:px-16 px-6 items-end gap-10 mt-10'>
            <div>
            <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1}}
                >
                <h2 className='text-black font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-4'>
                    Portfolio.
                </h2>
                </motion.div>
                <p className='mt-6 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]' >
                    Voici quelques projets qui montrent mes compétences et mon expérience sur des 
                    exemples concrets. 
                </p>
            </div>
        </div>

        <div className=' flex flex-wrap gap-7 max-w-7xl mx-auto sm:px-16 px-6 items-end mt-10'>
        {projects.map((project, index) => (
          <Cards key={`project-${index}`} index={index} {...project} />
        ))}
        </div>
      </div>
    </>
  )
}

export default Projets