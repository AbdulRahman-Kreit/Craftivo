import React from 'react';
import Heading from '../components/Heading';
import ProfileCard from '../components/ProfileCard';
import AboutMe from '../components/AboutMe';
import CoreSkills from '../components/CoreSkills';

export default function About({ id }) {
    return (
        <section id={id || 'about'} className="min-h-screen pt-20 pb-20"> 
            <Heading
                subTitle="ABOUT ME"
                title="About Me"
                description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-white mt-12">
                    <div 
                        className="lg:col-span-1"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <ProfileCard /> 
                    </div>
                    <div 
                        className="lg:col-span-2 space-y-10"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <AboutMe /> 
                        <CoreSkills /> 
                    </div>
                </div>
            </div>
        </section>
    );
}