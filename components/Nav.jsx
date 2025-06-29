"use client"

import { navLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Nav = () => {
    const pathName = usePathname();

    return (
        <nav>
            <ul className="flex items-center gap-8">
                {
                    navLinks.map((link, i) =>
                        <Link
                            key={i}
                            href={link.path}
                            className={`${pathName === link.path && 'text-accentDefault border-b-2 border-accentDefault'} hover:text-accentHover transition-all duration-200 capitalize font-medium`}
                        >
                            {link.name}
                        </Link>
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav