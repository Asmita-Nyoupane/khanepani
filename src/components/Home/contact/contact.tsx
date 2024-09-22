import React from 'react';
import { ContactForm } from './contact-form';
import { Card } from '@/components/ui/card';

const Contact = () => {
    return (
        <section className='space-y-8 w-11/12 mx-auto '>
            <div className='flex flex-col gap-3 items-center justify-center'>

                <h2 className=" text-center   uppercase font-medium text-secondaryColor">Connect</h2>
                <h1 className='title capitalize text-center max-w-4xl'>
                    Get In   <span className='text-primaryColor leading-9'>Touch</span> with Us
                </h1>
                <p className='text-sm text-gray-500 text-center max-w-4xl'>
                    Have any questions or concerns? Please feel free to contact us by filling out the form below, and we&apos;ll get back to you as soon as possible
                </p>

            </div>
            <div className=" flex flex-col lg:flex-row gap-10 py-10">
                {/* Google Map Section */}
                <section className="lg:w-[48%] h-[400px] lg:h-auto">
                    <Card className="w-full h-full shadow-lg overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28271.893475376677!2d83.44684273629332!3d27.655883677542395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996842d4406e2ad%3A0x6f1aad0740bec15a!2sShankar%20Nagar%20Drinking%20Water%20Consumer%20and%20Sanitization!5e0!3m2!1sen!2snp!4v1727001519982!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </Card>
                </section>

                {/* Contact Form Section */}
                <section className="flex-1">
                    <Card className="px-6 py-10 shadow-lg rounded-lg">

                        <ContactForm />
                    </Card>
                </section>
            </div>
        </section>
    );
};

export default Contact;
