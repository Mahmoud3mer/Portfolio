"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Stairs from './Stairs';

const StairsTransition = () => {
    const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
        <div key={pathname}>
            <div className='w-screen h-screen fixed top-0 left-0 right-0 z-40 flex flex-col pointer-events-none'>
                <Stairs/>
            </div>

            <motion.div
              initial={{opacity: 1}}
              animate={{opacity: 0}}
              transition={{delay: 1, duration: 0.4, ease: 'easeInOut'}}
              className="h-screen w-screen fixed top-0 pointer-events-none bg-primary"
              />
        </div>
    </AnimatePresence>
  )
}

export default StairsTransition