import React from "react";
import { MdOutlinePhoneInTalk, MdMailOutline } from "react-icons/md";


import Link from "next/link";

import Image from "next/image";
import { socialMedia } from "./navlinks";
type Media = {
    image: string;
    name: string;
    link: string;
};

const TopHeader = () => {
    return (
        <div className="bg-primaryColor   text-white flex justify-between ">
            <div className="flex ml-8 gap-4 items-center  ">
                <div className="flex gap-2 text-sm justify-center items-center py-4 ">
                    <div className="text-xl font-semibold">
                        <MdOutlinePhoneInTalk />
                    </div>
                    <div> 9779745432207</div>
                </div>
                <div className="flex gap-2 text-sm justify-center items-center py-4 ">
                    <div className="text-xl font-semibold">
                        <MdMailOutline />
                    </div>
                    <div>info@khanepani.com</div>
                </div>
            </div>
            <div className=" flex gap-4 mr-8 justify-center items-center">
                {socialMedia.map((media: Media, i) => {
                    return (
                        <Link href={media.link} key={i}>
                            <Image
                                src={media.image}
                                alt={media.name}
                                height={30}
                                width={30}
                                quality={80}
                                className="rounded-lg"
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default TopHeader;
