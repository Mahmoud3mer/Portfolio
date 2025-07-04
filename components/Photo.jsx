"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.4, ease: 'easeIn' }}
            >
                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.4, ease: 'easeInOut' }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full mix-blend-lighten absolute py-12 overflow-hidden"
                >
                    <Image
                        src={'/personal-image3.png'}
                        fill
                        priority
                        quality={100}
                        alt=''
                        className='object-contain'
                    />
                </motion.div>

                {/* Circle motion */}
                <motion.svg
                    className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]'
                    fill='transparent'
                    viewBox='0 0 506 506'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <motion.circle 
                        cx='253'
                        cy='253'
                        r='250'
                        stroke='#00ff99'
                        strokeWidth='4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        initial={{strokeDasharray: '24 10 0 0'}}
                        animate={{
                            strokeDasharray: ['15 120 25 25', '16 25 92 92', '4 250 22 22'],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo;

