import React from 'react';
import Heading from '../components/Heading';
import Experience from '../components/Experience';
import Education from '../components/Education';

export default function Resume({ id }) {
    return (
        <section id={id || 'resume'} className="min-h-screen pt-20 pb-20"> 
            <Heading
                subTitle="RESUME"
                title="Resume"
                description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white mt-12">
                    <div 
                        className="lg:col-span-1"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <Experience /> 
                    </div>
                    <div 
                        className="lg:col-span-1"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <Education />
                    </div>
                </div>
            </div>
        </section>
    );
}