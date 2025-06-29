import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp  } from "react-icons/fa";

const social = [
    {
      icon: <FaLinkedin/>,
      path: 'https://www.linkedin.com/in/mahmoud-amer-ali/',
    },
    {
      icon: <FaGithub/>,
      path: 'https://github.com/Mahmoud3mer',
    },
    {
      icon: <FaWhatsapp/>,
      path: 'https://wa.me/201113394811',
    },
]

const Social = () => {
  return (
    <div>
      <ul className='flex items-center gap-6'>
        {
          social.map((s, i) => 
            <Link key={i} href={s.path} target="blank" className='text-accentHover w-9 h-9 border border-accentDefault hover:bg-accentDefault hover:text-primary text-base transition-all duration-500 rounded-full flex justify-center items-center'>
              {s.icon}
            </Link>
          )
        }
      </ul>
    </div>
  )
}

export default Social