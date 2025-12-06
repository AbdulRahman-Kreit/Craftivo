import React from 'react';
import ProfileImg from '../assets/Imgs/profile-square-3.webp'; 

export default function ProfileCard() {
    const achievements = [
        { id: 1, amount: "156", description: "PROJECTS" },
        { id: 2, amount: "8+", description: "YEARS" },
        { id: 3, amount: "42", description: "AWARDS" }, 
    ];

    const socialIcons = [
        { id: 1, name: "fa-brands fa-linkedin-in", link: "#linkedin" },
        { id: 2, name: "fa-brands fa-github", link: "#github" },
        { id: 3, name: "fa-brands fa-twitter", link: "#twitter" },
        { id: 4, name: "fa-brands fa-instagram", link: "#instagram" },
    ];
    
    const buttonBaseClasses = "w-full py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center space-x-2";

    return (
        <div className='bg-gray-950 p-8 rounded-xl shadow-2xl max-w-md mx-auto text-white'>
            <div className='flex justify-center mb-8 pt-4'> 
                <div className='relative p-1.5 rounded-full ring-2 ring-red-500'>
                    <img 
                        src={ProfileImg} 
                        alt="Profile Image" 
                        className='w-30 h-30 rounded-full object-cover'
                    />
                    <span className='absolute bottom-2.5 right-2.5 w-4 h-4 
                    bg-green-400 rounded-full border-2 border-gray-950'></span>
                </div>
            </div>

            <div className="text-center pb-4 border-b border-gray-800">
                <h3 className="text-2xl font-medium mb-1 text-white">
                    Jordan Mitchell
                </h3>
                <p className="text-sm font-light text-red-500 mb-3">
                    Full Stack Developer
                </p>
                
                <div className="flex justify-center items-center space-x-2 text-yellow-500">
                    <span className="flex space-x-0.5 text-sm">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke text-gray-400"></i>
                    </span>
                    <span className="text-sm text-gray-400">
                        4.8
                    </span>
                </div>
            </div>
            
            <div className="flex justify-between py-6 border-b border-gray-800">
                {achievements.map((achievement) => {
                    return(
                        <span key={achievement.id} className="text-center px-2">
                            <p className="text-2xl font-bold text-red-500 mb-0.5">
                                {achievement.amount}
                            </p>
                            <p className="text-xs text-gray-400 font-medium tracking-wider">
                                {achievement.description}
                            </p>
                        </span>
                    ) 
                })}
            </div>
            
            <div className="pt-6 space-y-4">
                <button className={`${buttonBaseClasses} 
                bg-red-500 hover:bg-red-600 text-white shadow-lg 
                shadow-red-500/30 cursor-pointer`}>
                    <i className="fa-solid fa-cloud-arrow-down mx-2"></i>
                    Download CV
                </button>
                
                <button className={`${buttonBaseClasses} border border-gray-700 hover:border-red-500 text-gray-300 hover:text-red-500`}>
                    <a href="#contact" className="w-full h-full flex items-center justify-center space-x-2">
                        <i className="fa-regular fa-envelope"></i>
                        <span>Contact</span>
                    </a>
                </button>
                
                <div className="flex justify-center space-x-4 pt-4 pb-2">
                    {socialIcons.map((icon) => {
                        return(
                            <a 
                                key={icon.id} 
                                href={icon.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='text-gray-500 hover:text-red-500 transition duration-200 text-xl'
                            >
                                <i className={icon.name}></i>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}