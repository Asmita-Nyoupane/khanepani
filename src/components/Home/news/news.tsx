"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Card } from "../../ui/card";
import { newsData } from "./news-data";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const NewsSection = () => {
    return (
        <section className="w-11/12 mx-auto space-y-12">
            {/* Top Section */}
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="uppercase font-semibold text-secondaryColor ">

                    Latest News
                </h2>
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
                    Shankarnagar Khanepani <span className="text-primaryColor">News & Updates</span>
                </h1>
                <p className="text-md md:w-[70%] text-gray-500">
                    Stay updated with the latest news and developments regarding the water supply projects, community initiatives, and service improvements at Shankarnagar Khanepani.
                </p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
                {newsData.map((news, i) => (
                    <Link href={`/`} key={i}>
                        <Card className="flex flex-col gap-4 shadow-lg rounded-xl bg-white hover:shadow-xl  h-[470px]   transition-transform duration-300 md:hover:scale-105 md:hover:shadow-2xl">
                            <div className="relative   w-full p-4">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    height={300}
                                    width={300}

                                    className="rounded-lg object-cover h-48 w-full"
                                />
                            </div>
                            <div className="space-y-3 px-6 pb-6  ">
                                <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
                                    {news.title}
                                </h2>
                                <p className="text-sm text-gray-500 line-clamp-3">{news.description}</p>
                                <p className="text-sm text-secondaryColor mt-2">
                                    {news.date} | By {news.author}
                                </p>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
            {/* View All Button */}
            <div className='flex justify-center items-center mt-8'>
                <Button
                    size={'lg'}
                    className='flex items-center text-primaryColor hover:text-white font-semibold hover:bg-primaryColor border-2 border-primaryColor bg-transparent py-2 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'
                >
                    View All <span className='ml-2'><MoveRight /></span>
                </Button>
            </div>
        </section>
    );
};

export default NewsSection;
