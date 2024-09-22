import Image from 'next/image';
import React from 'react';

const PresidentMessage = () => {
    return (
        <div className=' w-11/12 mx-auto flex flex-col md:flex-row items-center gap-12 '>

            <section className='md:w-[50%]'>
                <div className='space-y-3 mb-5'>
                    <p className='text-secondaryColor uppercase tracking-wide font-medium'>President&apos;s Message</p>
                    <h2 className='title text-gray-800'>A Word from Our <span className='text-primaryColor'>President</span></h2>
                </div>
                <p className='text-gray-600 leading-relaxed'>
                    As the president of Sankarnagar Water Supply, I am committed to ensuring that every household
                    in our community has access to clean, reliable drinking water. We have made significant strides
                    in improving our infrastructure, but our work is far from done. Together with the dedication of
                    our staff and the support of our community, we are working to build a sustainable future, where
                    water scarcity is a challenge of the past. I encourage every member of our community to engage
                    with our efforts as we continue to expand and improve the services that support our daily lives.
                </p>
                <p className='mt-4 text-gray-700 font-medium flex-end'>
                    — Nirmal Thapa
                </p>
            </section>
            <div className='flex-1 '>
                <Image
                    src={'/assets/president.jpg'}
                    alt='president image'
                    height={500}
                    width={500}
                    priority={true}
                    quality={100}
                    className='rounded-lg object-cover h-[400px] shadow-lg  w-full'
                />
            </div>
        </div>
    );
};

export default PresidentMessage;
