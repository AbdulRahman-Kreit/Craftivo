import React from 'react';

const experienceData = [
    {
        id: 1,
        title: "Senior Creative Director",
        company: "Digital Innovation Labs",
        duration: "2023 - Present",
        isCurrent: true,
        iconClass: "fa-solid fa-briefcase",
        tags: ["Leadership", "Strategy", "Innovation"],
        description: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    },
    {
        id: 2,
        title: "Product Design Lead",
        company: "Tech-forward Solutions",
        duration: "2020 - 2023",
        isCurrent: false,
        iconClass: "fa-solid fa-cube",
        tags: [],
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
        id: 3,
        title: "UX Designer",
        company: "Creative Studio Inc",
        duration: "2017 - 2020",
        isCurrent: false,
        iconClass: "fa-solid fa-paintbrush",
        tags: [],
        description: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];

function TimelineItem({ title, company, duration, isCurrent, tags, description, iconClass }) {
    return (
        <div className="relative border-l-2 border-gray-700 ml-4 pl-8 pb-12">
            
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center 
            bg-gray-900 border border-red-500 z-10">
                <i className={`${iconClass} text-xs text-red-500`}></i>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 relative transition duration-300 hover:border-red-500/50">
                
                {isCurrent && (
                    <span className="absolute right-4 top-4 text-red-500 
                    bg-rose-950 text-xs font-semibold px-3 py-1 rounded-full 
                    uppercase">
                        CURRENT
                    </span>
                )}
                
                <p className="text-red-500 text-sm mb-1">{duration}</p>
                <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                <p className="text-red-500 text-sm mb-3">{company}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{description}</p>
                
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700 mt-3">
                        {tags.map((tag, index) => (
                            <span key={index} className="text-xs text-red-500 
                            bg-rose-950 px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <div className="mt-8">
            <h2 className="text-3xl font-bold text-white mb-2">
                Professional Journey
            </h2>
            <span className="text-red-500 bg-rose-950 text-xs font-semibold
            px-3 py-1 rounded-3xl uppercase">
                EXPERIENCE
            </span>
            <p className="text-gray-400 mt-4 mb-10 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="space-y-6">
                {experienceData.map(item => (
                    <TimelineItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}