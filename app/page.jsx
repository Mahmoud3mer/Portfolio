import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl mb-4">Frontend Developer</span>
            <h1 className='h1 mb-5'>
              Hello, I'm <br />
              <span className='text-accentDefault'>Mahmoud Amer</span>
            </h1>
            <p className="max-w-[500px] text-white/80 mb-9">
              Frontend Developer with hands-on experience in developing responsive and user-centric web applications using
              HTML, CSS, JavaScript, and modern frameworks like React. Proficient in translating design wireframes into highquality
              product and implementing visual elements that enhance user experience.
            </p>

            {/* Button Download cv & social */}
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Link href={'https://drive.google.com/file/d/1mhgfrhVX8dOfpaPF2bycyCKZSWICOiqM/view?usp=drive_link'} target="blank">
                <Button variant='outline' size='lg' className='flex items-center gap-2 cursor-pointer uppercase'>
                Download CV
                <FiDownload/>
              </Button>
              </Link>

              <div className='mb-8 xl:mb-0'>
                <Social/>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>

        <Stats/>
      </div>
    </section>
  );
}
