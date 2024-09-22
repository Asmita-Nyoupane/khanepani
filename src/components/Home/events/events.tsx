import React from 'react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { eventsData } from './event-data'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

const Events = () => {
    return (
        <div className='space-y-12 w-11/12 mx-auto'>
            {/* Header Section */}
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h2 className="text-center  font-medium text-secondaryColor uppercase tracking-wide">
                    Discover Our Featured Events
                </h2>
                <h1 className='title capitalize  text-gray-800 text-center'>
                    Shaping the Future with <span className='text-primaryColor'>Water Initiatives</span>
                </h1>
                <p className='text-sm text-gray-600 text-center'>
                    Join us in making a positive impact through innovative programs and community-driven efforts.
                </p>
            </div>

            {/* Events Grid */}
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {eventsData.map((event) => (
                    <Link href="/" key={event.id}>
                        <Card className='group cursor-pointer  h-[350px] space-y-4 overflow-hidden shadow-lg rounded-lg transition-transform duration-300 md:hover:scale-105 md:hover:shadow-2xl'>
                            {/* Image Section */}
                            <div className='relative'>
                                <Image
                                    src={event.image}
                                    alt={event.name}
                                    height={500}
                                    width={500}
                                    quality={100}
                                    priority={true}
                                    className='object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-110 w-full h-[250px] rounded-t-lg'
                                />
                                <span className='bg-primaryColor py-1 px-2 rounded-br-lg text-xs text-white font-medium absolute top-0 left-0'>
                                    {event.date}
                                </span>
                            </div>
                            {/* Event Info Section */}
                            <section className='flex flex-col gap-4 p-4'>
                                <h2 className='text-center  text-secondaryColor font-semibold'>
                                    {event.name}
                                </h2>



                            </section>
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
        </div>
    )
}

export default Events
