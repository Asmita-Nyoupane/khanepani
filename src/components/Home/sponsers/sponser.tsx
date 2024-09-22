
"use client"
import React from 'react';

import Image from 'next/image';
import { sponserImage } from './sponserData';


const Sponser = () => {


    return (
        <div className="flex flex-wrap justify-center space-x-8 px-6 py-10">
            <div className="flex overflow-hidden space-x-16 group   mx-auto">
                <div className="flex space-x-16 animate-loop-scroll  group-hover:paused"   >
                    {
                        sponserImage.map((sponser, index) => (

                            <Image
                                key={index}
                                src={sponser.image}
                                alt={sponser.name}
                                width={100}
                                height={100}
                                loading='lazy'
                                className="max-w-none"
                            />

                        ))
                    }

                </div>
                <div

                    className="flex space-x-16 animate-loop-scroll  group-hover:paused" aria-hidden="true"  >
                    {
                        sponserImage.map((sponser, index) => (

                            <Image
                                key={index}
                                src={sponser.image}
                                alt={sponser.name}
                                width={100}
                                height={100}
                                loading='lazy'
                                className="max-w-none"
                            />

                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default Sponser;
