import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row items-center gap-12'>
            {/* Image Section */}
            <div className='md:w-[44%] transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in'>
                <Image
                    src={'/assets/about.jpg'}
                    alt='Shankarnagar Water Supply'
                    height={500}
                    width={500}
                    priority={true}
                    quality={100}
                    className='rounded-lg object-cover h-[400px] shadow-lg w-full'
                />
            </div>

            {/* Text Section */}
            <section className='flex-1 transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in-right'>
                <div className='space-y-3 mb-5'>
                    <p className='text-secondaryColor uppercase tracking-wide font-medium'>About Us</p>
                    <h2 className='title text-gray-800'>Welcome to <span className='text-primaryColor'>Shankarnagar Water Supply</span></h2>
                </div>
                <p className='text-gray-600 leading-relaxed'>
                    Shankarnagar Water Supply, located in Tilotama-2, Rupandehi, is committed to providing reliable and
                    clean drinking water to our community. We have been serving the people of Tilotama with the utmost dedication,
                    continuously working to improve our water distribution network and ensure that every household has access to safe
                    and sufficient water.
                </p>
                <p className='text-gray-600 leading-relaxed mt-4'>
                    Our goal is to create a sustainable water system that can meet the growing demands of our community while
                    protecting our natural resources. Through innovation and continuous development, we aim to make water scarcity
                    a thing of the past. We invite all members of the community to join us in these efforts to build a brighter future
                    for generations to come.
                </p>
                <p className='mt-4 text-gray-700 font-medium'>
                    Together, let&apos;s ensure that clean water flows in every home.
                </p>
            </section>
        </div>
    );
};

export default AboutSection;
