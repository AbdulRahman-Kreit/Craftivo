import React, { useState } from 'react';
import Heading from '../components/Heading';
import PortfolioCard from '../components/PortfolioCard';
import ImagePopup from '../components/ImagePopup';

// Images
import portfolioImage1 from '../assets/Imgs/portfolio-1.webp';
import portfolioImage2 from '../assets/Imgs/portfolio-2.webp';
import portfolioImage3 from '../assets/Imgs/portfolio-3.webp';
import portfolioImage4 from '../assets/Imgs/portfolio-4.webp';
import portfolioImage5 from '../assets/Imgs/portfolio-5.webp';
import portfolioImage6 from '../assets/Imgs/portfolio-6.webp';

// Cards Data
const projectsData = [
    { id: 1, category: 'Creative', tags: ['BRANDING', 'IDENTITY'], year: 2024, imgUrl: portfolioImage1, link: '#', popupImg: portfolioImage1 },
    { id: 2, category: 'Digital', tags: ['WEB DESIGN', 'DEVELOPMENT'], year: 2024, imgUrl: portfolioImage2, link: '#', popupImg: portfolioImage2 },
    { id: 3, category: 'Strategy', tags: ['STRATEGY', 'CONSULTING'], year: 2023, imgUrl: portfolioImage3, link: '#', popupImg: portfolioImage3 },
    { id: 4, category: 'Development', tags: ['REACT', 'NODE.JS'], year: 2024, imgUrl: portfolioImage4, link: '#', popupImg: portfolioImage4 },
    { id: 5, category: 'Creative', tags: ['CREATIVE', 'CAMPAIGN'], year: 2024, imgUrl: portfolioImage5, link: '#', popupImg: portfolioImage5 },
    { id: 6, category: 'Digital', tags: ['MOBILE', 'UI&UX'], year: 2023, imgUrl: portfolioImage6, link: '#', popupImg: portfolioImage6 },
];

const categories = ['All Work', 'Creative', 'Digital', 'Strategy', 'Development'];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All Work');
    const [popupOpen, setPopupOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredProjects = projectsData.filter(project => 
        activeFilter === 'All Work' || project.category === activeFilter
    );

    const openPopup = (id) => {
        const index = projectsData.findIndex(p => p.id === id);
        setCurrentImageIndex(index);
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <section id='portfolio' className='pt-20 pb-20'>
            <Heading
                subTitle="PORTFOLIO"
                title="Portfolio"
                description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
            />
            
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12'>
                
                <div className='flex justify-center flex-wrap gap-3 mb-12'>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition duration-300
                                ${activeFilter === category 
                                    ? 'bg-red-500 text-white' 
                                    : 'bg-gray-800 text-white hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {filteredProjects.map(project => (
                        <PortfolioCard 
                            key={project.id} 
                            project={project}
                            onOpenPopup={openPopup}
                        />
                    ))}
                </div>
                
                <div className='mt-20 border-t border-gray-700 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='text-white text-center md:text-left mb-4 md:mb-0'>
                            <h3 className='text-xl font-semibold mb-1'>
                                Like what you see?
                            </h3>
                            <p className='text-sm text-gray-400'>
                                Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                            </p>
                        </div>
                        <a href='#contact' 
                        className='px-6 py-3 bg-red-500 text-white 
                        font-semibold rounded hover:bg-red-600 transition 
                        duration-300'>
                            Let's Work Together
                        </a>
                    </div>
                </div>
            </div>
            

            {popupOpen && (
                <ImagePopup 
                    projects={projectsData}
                    currentIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                    onClose={closePopup}
                />
            )}
        </section>
    );
}