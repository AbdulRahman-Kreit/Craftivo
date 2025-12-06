import React from 'react';

const educationData = [
    {
        id: 1,
        type: "MASTERS",
        title: "Master of Design Innovation",
        institution: "Institute of Creative Arts",
        duration: "2015 - 2017",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
        iconClass: "fa-solid fa-pen-ruler",
    },
    {
        id: 2,
        type: "BACHELOR",
        title: "Bachelor of Fine Arts",
        institution: "Creative Arts University",
        duration: "2011 - 2015",
        details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        iconClass: "fa-solid fa-book-open",
    },
    {
        id: 3,
        type: "CERTIFICATES",
        title: "Professional Certifications",
        institution: "Advanced UX Research",
        duration: "2016 - 2023",
        details: "Digital Strategy (2021), Design Leadership (2022)",
        iconClass: "fa-solid fa-certificate",
    },
];

function EducationTimelineItem({ type, title, institution, duration, details, iconClass }) {
    return (
        <div className="relative border-l-2 border-gray-700 ml-4 pl-8 pb-12">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center bg-gray-900 border border-red-500 z-10">
                <i className={`${iconClass} text-xs text-red-500`}></i>
            </div>
            <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 relative transition duration-300 hover:border-red-500/50">
                <span className="absolute right-4 top-4 text-red-500 text-xs font-semibold px-3 py-1 rounded uppercase border border-red-500/50">
                    {type}
                </span>

                <p className="text-red-500 text-sm mb-1">{duration}</p>
                <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                <p className="text-red-500 text-sm mb-3">{institution}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{details}</p>
            </div>
        </div>
    );
}

export default function Education() {
    return (
        <div className="mt-8">
            <h2 className="text-3xl font-bold text-white mb-2">
                Academic Background
            </h2>
            <span className="bg-rose-950 text-red-500 text-xs font-semibold 
            px-3 py-1 rounded-3xl uppercase">
                EDUCATION
            </span>
            <p className="text-gray-400 mt-4 mb-10 text-sm">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.
            </p>
            
            <div className="space-y-6">
                {educationData.map(item => (
                    <EducationTimelineItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}