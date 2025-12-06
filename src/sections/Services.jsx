import React, { useState } from 'react'; 
import Heading from '../components/Heading';
import ServiceCard, { servicesData } from '../components/ServiceCard'; 
import ServiceDetails from '../components/ServiceDetails'; 

export default function Services() {
    const [selectedServiceId, setSelectedServiceId] = useState(null);   
    const handleServiceSelect = (id) => {
        setSelectedServiceId(id);
    };

    const handleBack = () => {
        setSelectedServiceId(null);
    };

    const selectedService = servicesData.find(s => s.id === selectedServiceId);

    const renderContent = () => {
        if (selectedService) {

            return (
                <ServiceDetails 
                    service={selectedService} 
                    onBack={handleBack} 
                />
            );
        }

        return (
            <>
                <ServiceCard onServiceSelect={handleServiceSelect} />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="bg-linear-to-r from-red-500 to-pink-500 p-8 rounded-lg 
                        flex flex-col lg:flex-row justify-between items-center text-white">
                        
                        <div className='max-w-2xl text-center lg:text-left'>
                            <h3 className="text-2xl font-bold mb-1">
                                Transform Your Vision Into Reality
                            </h3>
                            <p className="text-sm opacity-90">
                                Partner with us to bring your ideas to life with innovative solutions tailored to your needs
                            </p>
                        </div>

                        <a href='#contact' className="mt-6 lg:mt-0 px-8 py-3 
                        bg-white text-red-600 font-semibold rounded-3xl 
                        cursor-pointer">
                            Start Your Project
                        </a>
                    </div>
                </div>
            </>
        );
    };

    return (
        <section id='services' className="min-h-screen pt-20 pb-20"> 
            
            {!selectedService && (
                <Heading
                    subTitle="SERVICES"
                    title="Services"
                    description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
                />
            )}
            
            {renderContent()}

        </section>
    );
}