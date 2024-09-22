"use client"
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from '../../ui/card';
import Image from 'next/image';
import Slider from 'react-slick';
import { publicationsData } from './publicationData';
import Link from 'next/link';

const OurPublication = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        centerPadding: "30px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    return (
        <section className="w-11/12 mx-auto space-y-12">
            {/* Top Section */}
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="uppercase font-semibold text-secondaryColor ">Latest Publications</h2>
                <h1 className="title text-gray-800">
                    Shankharnagar Water Supply <span className="text-primaryColor">Research & Reports</span>
                </h1>
                <p className="text-md md:w-[70%] text-gray-500">
                    Stay informed with our latest publications on water management, sustainability, and quality control. Discover how we ensure clean and reliable water supply for the community.
                </p>
            </div>

            {/* Slider Section */}
            <div className="slider-container">
                <Slider {...settings}>
                    {publicationsData.map((publication, i) => (
                        <Link href={`/`} key={i} className="px-4">
                            <Card className="flex flex-col gap-4 p-6  h-[510px] shadow-lg rounded-xl bg-white">
                                <div className="flex items-center justify-center   ">
                                    <Image
                                        src={publication.image}
                                        height={400}
                                        width={300}
                                        alt={publication.title}
                                        className="object-cover h-[240px] rounded-lg"
                                    />
                                </div>
                                <h2 className="font-semibold text-lg  text-gray-800">{publication.title}</h2>
                                <p className="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-4">
                                    {publication.description}
                                </p>
                                <p className="text-sm text-primaryColor mt-4font-semibold">
                                    By {publication.author}
                                </p>
                            </Card>
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default OurPublication;
