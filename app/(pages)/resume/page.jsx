"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Link from 'next/link';

// about data
const about = {
  title: 'About me',
  description: 'Frontend Developer with hands-on experience in developing responsive and user-centric web applications using HTML, CSS, JavaScript, and modern frameworks like React. Proficient in translating design wireframes into highquality product and implementing visual elements that enhance user experience.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Mahmoud Amer',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+201113394811',
    },
    {
      fieldName: 'Experience',
      fieldValue: '1+ Year',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Egyptian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'm.amer0440@gmail.com',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Arabic, English(Good)',
    },
  ]
};

// Experience
const experience = {
  icon: '/resume/badge.svg',
  title: 'My experience',
  description: 'Professional experience building scalable web applications and delivering high-quality user interfaces.',
  items: [
    {
      company: 'Theqa',
      position: 'Frontend Developer',
      duration: 'Nov 2024 – Present',
      url: 'https://www.theqa.sa/',
    },
    {
      company: 'Freelance',
      position: 'Fullstack Developer',
      duration: 'Aug - Nov 2024',
    },
  ],
};

// education
const education = {
  icon: '/resume/badge.svg',
  title: 'My education',
  description: 'Educational background combining engineering fundamentals with advanced web development skills.',
  items: [
    {
      institution: 'Information technology institute (ITI)',
      degree: 'Fullstack web development using MERN',
      duration: 'Apr - Oct 2024',
    },
    {
      institution: 'Faculty of engineering',
      degree: 'Bachelor of Engineering',
      duration: '2018 - 2023',
    },
  ],
};

// skills
const skills = {
  title: 'My skills',
  description: 'Strong set of frontend and backend development skills using modern frameworks and technologies.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html-5'
    },
    {
      icon: <FaCss3 />,
      name: 'css'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <FaBootstrap />,
      name: 'bootstrap.css'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <FaReact />,
      name: 'react.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <FaNode />,
      name: 'node.js'
    },
    {
      icon: <SiExpress />,
      name: 'express.js'
    },
    {
      icon: <SiMongodb />,
      name: 'mongodb'
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "motion/react";



const Resume = () => {
  return (
    <section className='h-full'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
        delay: 2,
        duration: 0.4,
        ease: 'easeInOut'
      }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
      >
        <div className='container mx-auto'>
          <Tabs
            defaultValue="experience"
            className='flex flex-col xl:flex-row items-center justify-center xl:items-start gap-9'
          >
          <TabsList className='flex flex-col w-full min-w-[200px] max-w-[360px] gap-6 mx-auto xl:mx-0'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about-me">About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value="experience" className='w-full'>
              <div className='flex flex-col items-center justify-center xl:items-start gap-6'>
                <h3 className='text-4xl font-bold'>
                  {experience.title}
                </h3>
                <p className='text-white/50 text-center xl:text-start max-w-[600px]'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px] w-full'>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-full">
                    {
                      experience.items.map((item, i) =>
                        <li key={i} className="bg-[#27272c] py-4 px-5 w-full flex flex-col items-center xl:items-start gap-2 rounded-sm">
                          <span className='text-accentDefault'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl font-semibold'>
                            {item.position}
                          </h3>
                          <div className='mt-3 flex gap-1'>
                            <span className='text-accentDefault font-bold'>.</span>
                            {
                              item.url ? <Link href={item.url} target='blank' className='hover:text-accentHover transition-all duration-300'>{item.company}</Link> :
                                item.company
                            }
                          </div>
                        </li>
                      )
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className='w-full'>
              <div className='flex flex-col items-center justify-center xl:items-start gap-6'>
                <h3 className='text-4xl font-bold'>
                  {education.title}
                </h3>
                <p className='text-white/50 text-center xl:text-start max-w-[600px]'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px] w-full'>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-full">
                    {
                      education.items.map((item, i) =>
                        <li key={i} className="bg-[#27272c] py-4 px-5 w-full flex flex-col items-center xl:items-start gap-2 rounded-sm">
                          <span className='text-accentDefault'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl font-semibold'>
                            {item.degree}
                          </h3>
                          <div className='mt-3 flex gap-1'>
                            <span className='text-accentDefault font-bold'>.</span>
                            {
                              item.institution
                            }
                          </div>
                        </li>
                      )
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className='w-full'>
              <div className='flex flex-col items-center justify-center xl:items-start gap-6'>
                <h3 className='text-4xl font-bold'>
                  {skills.title}
                </h3>
                <p className='text-white/50 text-center xl:text-start max-w-[600px]'>
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[30px] w-full mb-4">
                  {
                    skills.skillList.map((item, i) =>
                      <li key={i} className="group">
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#27272c] rounded-xl flex justify-center items-center'>
                            <div className='text-6xl group-hover:text-accentHover transition-all duration-400'>
                              {
                                item.icon
                              }
                            </div>

                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    )
                  }
                </ul>
              </div>
            </TabsContent>

            {/* about-me */}
            <TabsContent value="about-me" className='w-full'>
              <div className='flex flex-col items-center justify-center xl:items-start gap-6'>
                <h3 className='text-4xl font-bold'>
                  {about.title}
                </h3>
                <p className='text-white/50 text-center xl:text-start max-w-[600px]'>
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[10px] w-full mb-4">
                  {
                    about.info.map((item, i) =>
                      <li key={i} className="flex items-center justify-center xl:justify-start">
                        <div className='flex gap-2'>
                          <span className='text-white/60'>{item.fieldName}</span>
                          <span className='text-xl'>{item.fieldValue}</span>
                        </div>
                      </li>
                    )
                  }
                </ul>
              </div>
            </TabsContent>
            </div>
        </Tabs>
        </div>
        
      </motion.div>
    </section>
  )
}

export default Resume