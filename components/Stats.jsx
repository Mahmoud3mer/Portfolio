 "use client";

import CountUp from 'react-countup';

const stats = [
    {
        num: 1,
        text: 'Years of experience'
    },
    {
        num: 8,
        text: 'Projects'
    },
    {
        num: 200,
        text: 'Code commits'
    },
];

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-5'>
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {
                stats.map((s, i) => 
                    <div key={i} className="flex flex-1 gap-4 items-center justify-center xl:justify-start">
                        <CountUp end={s.num} delay={2} duration={5} enableScrollSpy scrollSpyDelay={100} className='text-4xl xl:text-6xl font-semibold'/>
                        <p className={`${s.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}>
                            {
                                s.text
                            }
                        </p>
                    </div>
                )
            }
        </div>
    </section>
  )
}

export default Stats