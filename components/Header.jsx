import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href={'/'}>
                <h1 className='text-4xl font-semibold'>
                    3mer
                    <span className='text-accentDefault hover:text-accentHover'>.</span>
                </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-8">
                <Nav />
                <Link href={'/contact'}>
                    <Button>
                        hire me
                    </Button>
                </Link>
            </div>

            {/* Mobile Nav */}
            <div className="flex items-center lg:hidden gap-8">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header;