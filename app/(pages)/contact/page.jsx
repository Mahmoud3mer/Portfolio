"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'motion/react';

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    description: '+201113394811',
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    description: 'm.amer0440@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: 'Address',
    description: 'Cairo, Egypt',
  },
];

const Contact = () => {
  return (
    <section className=''>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay:2,
          duration:0.4,
          ease:'easeInOut'
        }}
        className='py-6'
      >
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-[30px] w-full xl:justify-center'>
            {/* form */}
            <div className='order-2 xl:order-none'>
              <form className='bg-[#27272c] rounded-md p-10 flex flex-col gap-6'>
                <h3 className='text-accentDefault text-4xl'>Let's work together</h3>
                <p className='text-white/60'>
                  Feel free to reach out with your project ideas, questions, or collaboration requests.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'> 
                  <Input type="firstName" placeholder="First Name"/>
                  <Input type="lastName" placeholder="Last Name"/>
                  <Input type="email" placeholder="Email"/>
                  <Input type="phone" placeholder="Phone"/>
                </div>

                 <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="frontend-development">Frontend Development</SelectItem>
                      <SelectItem value="backend-development">Backend Development</SelectItem>
                      <SelectItem value="fullstack-development">Fullstack Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea placeholder="Type your message here." />

                <Button size='md' className='max-w-40 cursor-pointer'>
                  Send message
                </Button>
              </form>
            </div>

            {/* info */}
            <div className='order-1 xl:order-none flex items-center'>
              <ul>
                {
                  info.map((item, i) => 
                    <li key={i} className='flex items-center gap-6 mb-4'>
                      <div className='h-[52px] w-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] rounded-md text-accentDefault flex items-center justify-center text-[28px]'>
                        {item.icon}
                      </div>
                      <div className='flex flex-col'>
                        <span>{item.title}</span>
                        <span>{item.description}</span>
                      </div>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact