"use client";

import { motion } from "motion/react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Front-End Development',
    description: 'Frontend Engineer with hands-on experience in developing responsive and user-centric web applications using HTML, CSS, JavaScript, and modern frameworks like React',
    href: '#',
  },
  {
    num: '02',
    title: 'Back-End Development',
    description: 'Backend Developer with a strong foundation in building server-side applications using Node.js, Express.js, and MongoDB.',
    href: '#',
  },
  {
    num: '03',
    title: 'Full-Stack Development',
    description: 'Full Stack Developer with a strong foundation in building full-stack web applications using MongoDB, Express.js, React, and Node.js',
    href: '#',
  },
]

const Services = () => {
  return (
    <section className='flex justify-center flex-col min-h-[80vh] py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 0.4,
            delay: 1,
            ease: 'easeInOut'
          }}
          className='grid xl:grid-cols-2 gap-[60px]'
        >
          {
            services.map((item, i) => 
              <div key={i} className='flex-1 flex flex-col gap-6 group'>
                <div className="flex justify-between items-center">
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover duration-500 transition-all'>
                    {item.num}
                  </div> 
                  <Link href={item.href} className='h-[70px] w-[70px] bg-white rounded-full flex justify-center items-center group-hover:bg-accentDefault transition-all duration-500 hover:-rotate-45 cursor-pointer'>
                    <BsArrowDownRight className="text-3xl text-primary"/>
                  </Link>
                </div>
                
                <h3 className="text-[42px] font-bold hover:text-accentDefault transition-all duration-500">
                  {item.title}
                </h3>
                <p className='text-white/60'>
                  {
                    item.description
                  }
                </p>

                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services