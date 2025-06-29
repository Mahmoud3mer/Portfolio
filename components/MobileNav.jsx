"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";


const MobileNav = () => {
    const pathName = usePathname();

    return (
        <nav>
            <Sheet>
                <SheetTrigger className='flex justify-center items-center'>
                    <CiMenuFries className="text-[32px] text-accentDefault hover:text-accentHover cursor-pointer" />
                </SheetTrigger>

                <SheetContent className='flex flex-col'>
                    {/* Logo */}
                    <div className='mt-32 mb-16 text-center'>
                        <Link href={'/'}>
                            <h1 className='text-4xl font-semibold'>
                                3mer
                                <span className='text-accentDefault hover:text-accentHover'>.</span>
                            </h1>
                        </Link>
                    </div>

                    {/* nav */}
                    <nav>
                        <ul className="flex flex-col items-center gap-8">
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
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav