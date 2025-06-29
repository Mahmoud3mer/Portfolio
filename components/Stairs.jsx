
import { motion } from "motion/react";

const stairAnimation = {
    initial: {
        left: '0%'
    },
    animate: {
        left: '100%'
    },
    exit: {
        left: ['100%', '0%']
    }
};

const delayTimeForStair = (index) => {
    const totalSteps = 8;

    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {
                [...Array(8)].map((_, index) =>
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{
                            delay: delayTimeForStair(index) * 0.1,
                            duration: 0.4,
                            ease: 'easeInOut'
                        }}
                        className="bg-white w-full h-full relative"
                    />
                )
            }
        </>
    )
}

export default Stairs;