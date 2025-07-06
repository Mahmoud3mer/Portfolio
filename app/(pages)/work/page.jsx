"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import WorkSliderButtons from '@/components/WorkSliderButtons'

const projects = [
  {
    num: '01',
    category: 'Fullstack',
    title: 'Online Library',
    description: 'An online platform for browsing, reviewing, and purchasing books with fullstack functionalities.',
    stack: [{ name: 'Html 5' }, { name: 'CSS' }, { name: 'Javascript' }, { name: 'TailwindCSS' }, { name: 'Angular.js' }, { name: 'React.js' }, { name: 'Node.js' }, { name: 'Nest.js' }, { name: 'Mongodb' },],
    image: '/work/online-library2.png',
    live: 'https://andalosia.vercel.app/home',
    github: 'https://github.com/Mahmoud3mer/Online-Library',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Rawafed Demo',
    description: 'It is a smart system that connects domestic workers directly with government, private, and foreign institutions and clients, ensuring accurate and smooth monitoring of all stages of recruitment.',
    stack: [{ name: 'Html 5' }, { name: 'CSS' }, { name: 'JQuery' }, { name: 'Laravel' }],
    image: '/work/rawafed.png',
    live: 'https://rawfed.sa/ar',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Amer E-Commerce',
    description: 'A responsive e-commerce web application with product management and shopping cart features.',
    stack: [{ name: 'Html 5' }, { name: 'CSS' }, { name: 'Typescript' }, { name: 'React-Bootstrap' }, { name: 'React.js' }, { name: 'React-hook-form' }, { name: 'Redux' }, { name: 'Redux-persist' }, { name: 'JSON-Server' },],
    image: '/work/e-commerce-amer2.png',
    live: 'https://amer-e-com-web-app.vercel.app/',
    github: 'https://github.com/Mahmoud3mer/Amer-ECom-Web-App',
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'Portfolio',
    description: 'A personal portfolio website showcasing projects, skills, and contact information.',
    stack: [{ name: 'Html 5' }, { name: 'CSS' }, { name: 'Javascript' }, { name: 'TailwindCSS' }, { name: 'Next.js' }, { name: 'React-hook-form' },],
    image: '/work/portfolio2.png',
    live: 'https://amer-e-com-web-app.vercel.app/',
    github: 'https://github.com/Mahmoud3mer/Amer-ECom-Web-App',
  },
  {
    num: '05',
    category: 'Frontend',
    title: 'To Do List',
    description: 'A simple and clean to-do list app for managing daily tasks with a modern UI.',
    stack: [{ name: 'Html 5' }, { name: 'CSS' }, { name: 'Typescript' }, { name: 'MUI' }, { name: 'React.js' },],
    image: '/work/todo-list.png',
    live: 'https://todo-list-amer.netlify.app/',
    github: 'https://github.com/Mahmoud3mer/TODO-LIST',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (e) => {
    const activeIndex = e.activeIndex;

    setProject(projects[activeIndex]);
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 2,
          ease: 'easeInOut'
        }}
      >
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row xl:justify-start gap-4'>
            {/* content */}
            <div className='order-2 xl:order-none w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between group gap-3 xl:gap-0'>
              <h1 className='text-8xl text-outline text-transparent'>
                {project.num}
              </h1>
              <h3 className='text-[42px] text-white font-bold leading-none group-hover:text-accentHover duration-400 transition-all'>
                {
                  project.category
                }
              </h3>
              <p className='text-white/60'>
                {
                  project.description
                }
              </p>
              <ul className='flex flex-wrap gap-4'>
                {
                  project?.stack?.map((st, i) =>
                    <li key={i} className='text-accentDefault hover:text-accentHover'>
                      {
                        st?.name
                      }{","}
                    </li>
                  )
                }
              </ul>
              <div className='border-b border-white/20 w-full'></div>

              <div className='flex gap-4'>
                <Link href={project.live} target='blank'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className='h-[70px] w-[70px] rounded-full bg-white/5 flex justify-center items-center cursor-pointer'>
                        <BsArrowUpRight className='text-3xl hover:text-accentHover duration-400 transition-all hover:rotate-45' />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {
                  project.github ?
                    <Link href={project.github} target='blank'>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='h-[70px] w-[70px] rounded-full bg-white/5 flex justify-center items-center cursor-pointer'>
                            <BsGithub className='text-3xl hover:text-accentHover duration-400 transition-all' />
                          </TooltipTrigger>

                          <TooltipContent>
                            <p>Github Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link> : null
                }
              </div>
            </div>

            {/* slider */}
            <div className='order-1 xl:order-none w-full xl:w-[50%]'>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={(e) => handleSlideChange(e)}
                className='xl:h-[520px] mb-12 relative'
              >
                {
                  projects.map((p, i) =>
                    <SwiperSlide key={i} className='w-full'>
                      <div className='bg-pink-50/20 w-full h-[460px] relative group'>
                        {/* overlay */}
                        <div className='bg-black/10 absolute top-0 bottom-0 z-10 w-full h-full'></div>
                        {/* Image */}
                        <div className='w-full h-full'>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            quality={100}
                            className='object-cover'
                          />
                        </div>

                      </div>
                    </SwiperSlide>
                  )
                }

                {/* buttons */}
                <WorkSliderButtons
                  containerStyle='absolute bottom-[calc(50%_-_22px)] xl:bottom-0 right-0 z-20 flex gap-2 justify-between xl:justify-none w-full xl:w-max'
                  btnStyle='text-[22px] w-[44px] h-[44px] bg-accentDefault hover:bg-accentHover cursor-pointer flex justify-center items-center text-primary transition-all duration-400'
                />
              </Swiper>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Work