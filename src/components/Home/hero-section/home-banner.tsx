"use client";
import React, { useState } from "react";

import Image from "next/image";
import { bannerImages } from "./bannerData";
import { Carousel } from "antd";


const HomeBannner = () => {
    const [isLoading, setLoading] = useState(true)
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    console.log('banner', bannerImages[0])

    return (

        <Carousel
            afterChange={onChange}
            autoplay={true}
            arrows={false}
            infinite={true}
            dots={false}
            autoplaySpeed={3000}
            effect="fade" // Adds fade transition
        >
            {bannerImages.map((pic, index) => (
                <div key={index} className="relative h-[520px] ">


                    {

                        isLoading && <div className="bg-gray-600 h-full w-full">
                        </div>
                    }
                    <Image
                        src={pic.image}
                        alt={pic.name}
                        height={1000}
                        width={1000}
                        onLoad={() => setLoading(false)}
                        priority={index == 0}
                        layout="responsive"
                        className="object-cover brightness-50 "
                    />

                    {/* Text overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
                        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">

                            Pure water, <span className="text-primaryColor">sustainable future
                            </span> — for every drop, a better tomorrow.

                        </h1>
                        <p className="text-white text-lg md:text-xl mb-6">
                            Ensuring clean and reliable water for a healthier, thriving community in Tilottama
                        </p>

                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default HomeBannner;
