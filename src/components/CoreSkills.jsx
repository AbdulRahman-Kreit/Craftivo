import React, { useState, useEffect } from 'react';

const skillsData = [
    { name: 'React & Next.js', percentage: 95 },
    { name: 'Node.js & Express', percentage: 90 },
    { name: 'UI/UX & Figma', percentage: 88 },
    { name: 'MongoDB & PostgreSQL', percentage: 81 },
    { name: 'Docker & AWS', percentage: 85 },
];

function ProgressBar({ name, percentage }) {
    const [isVisibleWidth, setIsVisibleWidth] = useState(0);

    useEffect(() => {
        setIsVisibleWidth(percentage);
    }, [percentage]); 

    return (
        <div>
            <div className="flex justify-between items-center mb-1">
                <p className="text-base text-gray-300">{name}</p>
                <p className="text-red-500 font-semibold">{percentage}%</p>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div 
                    className="bg-linear-to-r from-red-600 to-red-300 h-2.5 rounded-full transition-all 
                    duration-2000 ease-out" 
                    style={{ width: `${isVisibleWidth}%` }} 
                ></div>
            </div>
        </div>
    );
}


export default function CoreSkills() {
    return (
        <div className='p-6 text-white'>
            <h4 className="text-sm font-semibold uppercase
            inline-block py-2 px-3 mb-8 rounded-3xl bg-pink-950 text-red-500 ">
                CORE SKILLS
            </h4>

            <h3 className="text-3xl font-semibold mb-8">
                Technical Proficiency
            </h3>

            <div className="space-y-6">
                {skillsData.map((skill) => (
                    <ProgressBar 
                        key={skill.name} 
                        name={skill.name} 
                        percentage={skill.percentage} 
                    />
                ))}
            </div>
        </div>
    );
}