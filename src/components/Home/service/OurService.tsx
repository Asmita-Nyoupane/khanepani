import React from 'react'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { servicesData } from './service-data'

const OurService = () => {
    return (
        <section className='space-y-8 w-11/12 mx-auto ' >
            <div className='flex flex-col gap-3 items-center justify-center'>

                <h2 className=" text-center   uppercase font-medium text-secondaryColor">Our Service</h2>
                <h1 className='title capitalize text-center max-w-4xl'>
                    Delivering <span className='text-primaryColor leading-9'>Essential Water Services</span> for a Healthy Community
                </h1>
                <p className='text-sm text-gray-500 text-center'>
                    Comprehensive solutions for clean water supply, efficient billing, and timely maintenance.
                </p>

            </div>
            <div
                className='flex flex-wrap gap-5 justify-center items-center '
            >

                {
                    servicesData.map((service, i) => (
                        <div key={i}>
                            <Card className='flex flex-col gap-4 items-center justify-center bg-white w-[300px] h-[300px] p-4 transition-transform duration-300 md:hover:scale-105 md:hover:shadow-2xl '>
                                <div className=' flex justify-between items-center'>

                                    <Image src={service.image} alt={service.name} height={200} width={200} className='size-20 rounded-md' />
                                </div>
                                <h1 className='text-sm font-semibold text-center'>{service.name}</h1>
                                <p className='text-sm text-gray-500 '>
                                    {service.description}
                                </p>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}

export default OurService