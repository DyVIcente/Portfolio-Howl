import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../utils/motion';

const Apropos = () => {
  return (
    <div id='about' className='sm:scroll-mt-36 scroll-mt-20'>
        <div className='inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-wrap items-start gap-10'>
            <div>
                <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: 'false', amount: 0.25 }}
                >
                <motion.div
                    variants={fadeIn('left', 'spring', 0.2, 1 )}
                >
                    <h2 className='text-black font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-4'>
                        Présentation.
                    </h2>
                </motion.div>
                </motion.div>

                <p className='mt-6 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]' >Enchanté,
                    Je suis un développeur web passionné qui aime créer des sites et des applications web.
                    Comme Harry Potter j'utilise ma magie (mon clavier et mon code) pour créer des sites
                    web élégants et performants qui vous feront tomber sous leur charme.</p>

                <p className='mt-6 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'>Si vous êtes intéressé par mon travail, j'ai créé ce portfolio pour vous donner un aperçu
                    de mes projets précédents et de mes compétences en développement web.</p>

                <p className='mt-6 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'>Je suis toujours prêt à relever de nouveaux défis et à explorer de nouveaux territoires et technologies.</p>

                <p className='mt-6 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'>Merci d'avoir pris le temps de visiter mon portfolio.</p>
            </div>
        </div>
    </div>
  )
}

export default Apropos