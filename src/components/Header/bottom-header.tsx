

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navlinks";
import Image from "next/image";
import GoogleTranslate from "@/GoogleTranslate";

export type LinkItem = {
    name: string;
    link: string;
};

const BottomHeader = () => {

    const path = usePathname();

    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md transition-colors duration-300 text-black">
            <div className="hidden md:flex justify-between items-center w-11/12 mx-auto h-[68px] px-2 py-2 lg:px-4">
                {/* Logo */}
                <Link href={"/"} className="flex items-center py-4">
                    <Image
                        src={"/assets/logo.png"}

                        alt="Khanepani logo"
                        height={300}
                        width={300}
                        quality={100}
                        priority
                        className="h-[60px] w-auto object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                    />

                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center justify-end gap-6">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            className={`font-medium text-sm lg:text-md transition-all duration-300 ease-in-out transform hover:scale-110 ${path === link.link
                                ? "text-primaryColor font-semibold"
                                : " hover:text-primaryColor"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <GoogleTranslate />
                </nav>

            </div>
        </header>
    );
};

export default BottomHeader;
