import React from 'react';

import { chouetteSolo } from '../assets';


const Footer = () => {
  return (
    <div className='bg-black w-full h-auto p-10 mt-20'>
        <div className='flex flex-row sm:justify-between justify-center mx-8'>
            <a href="https://www.youtube.com/watch?v=8waDCuyS7tA" target="_blank"> 
                <img src={chouetteSolo} alt="logo" className='w-[40%] hidden sm:block'/>
            </a>
            <div className='flex flex-col flex-wrap justify-center items-center'>
                <div className= "flex flex-row flew-wrap gap-8 uppercase">
                    <a href="https://github.com/DyVIcente" target="_blank" className='hover:text-gray-500'>GitHub</a>
                    <a href="https://www.linkedin.com/in/dylan-vicente/" target="_blank" className='hover:text-gray-500'>LinkedIn</a>
                    <a href="mailto:dyl.vicente@gmail.com" className='hover:text-gray-500'>Mail</a>
                </div>
                    <p>© 2023 Dylan Vicente | Tous Droits Réservées |</p>
            </div>
        </div>
    </div>
  )
}

export default Footer