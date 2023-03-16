import React from 'react';
import { motion } from 'framer-motion';

import { Recomendations } from '../constants/index';
import { fadeIn, staggerContainer } from '../utils/motion';



const RecoCard = ({
    index,
    reco,
    name,
    designation,
    company,
    image,}) => {
    return (
        <div
    className='bg-black p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white  tracking-wider text-[18px]'>{reco}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='text-blue-400'>@</span> {name}
          </p>
          <p className='mt-1 text-gray-200 text-[12px]'>
            {designation} - {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </div>
    )
}



const Reco = () => {
    return (
        <div className="mt-12 bg-white rounded-[20px] flex flex-wrap top-[120px] max-w-7xl mx-auto  gap-10">
          <div
            className=" rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]"
          >
            <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        >
            <motion.div
                variants={fadeIn('left', 'spring', 0.2, 1 )}
            >
              <h2 className="text-black font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-4">FeedBack.</h2>
            </motion.div>
            </motion.div>
            
          </div>
          <div className="-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7">
            {Recomendations.map((reco, index) => (
              <RecoCard key={reco.name} index={index} {...reco} />
            ))}
          </div>
        </div>
      );
    };

export default Reco