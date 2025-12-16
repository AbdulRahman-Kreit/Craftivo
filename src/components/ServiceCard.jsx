/* eslint-disable react-refresh/only-export-components */
export const servicesData = [
    {
        id: 1,
        iconClass: "fa-solid fa-rocket",
        title: "Brand Identity",
        description: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus vivamus magna.",
    },
    {
        id: 2,
        iconClass: "fa-solid fa-list-check",
        title: "UI/UX Design",
        description: "Vestibulum et diam sit amet quam vehicula elementum sed sit amet diam donec rutrum.",
    },
    {
        id: 3,
        iconClass: "fa-solid fa-code",
        title: "Development",
        description: "Praesent sapien massa convallis a pellentesque nec egestas non nisi cras ornare arcu.",
    },
    {
        id: 4,
        iconClass: "fa-solid fa-mobile-screen-button",
        title: "Mobile Apps",
        description: "Vivamus suscipit tortor eget felis porttitor volutpat quisque velit nisi pretium ut lacinia.",
    },
    {
        id: 5,
        iconClass: "fa-solid fa-bullhorn",
        title: "Digital Marketing",
        description: "Nulla porttitor accumsan tincidunt curabitur aliquet quam id dui posuere blandit mauris.",
    },
    {
        id: 6,
        iconClass: "fa-solid fa-magnifying-glass",
        title: "SEO Services",
        description: "Pellentesque in ipsum id orci porta dapibus donec sollicitudin molestie malesuada proin.",
    },
    {
        id: 7,
        iconClass: "fa-solid fa-chart-line",
        title: "Analytics",
        description: "Sed porttitor lectus nibh curabitur arcu erat accumsan id imperdiet et porttitor at sem.",
    },
    {
        id: 8,
        iconClass: "fa-solid fa-shield-halved",
        title: "Security",
        description: "Vivamus magna justo lacinia eget consectetur sed at tellus mauris porttitor.",
    },
];

function ServiceItem({ id, iconClass, title, description, onSelectService }) {
    
    return (
        <div className="flex flex-col justify-center items-center p-8 
        bg-gray-950 rounded-lg border-2 border-gray-800 transition
        duration-400 hover:border-red-500 group">

            <div className='w-12 h-12 rounded-lg bg-rose-900 flex items-center
            justify-center mb-6 group-hover:rotate-12 duration-400'>
                <i className={`${iconClass} text-xl text-red-500`}></i>
            </div>
            
            <h3 className='text-xl font-bold text-white mb-3'>{title}</h3>
            <p className='text-sm text-gray-400 mb-4'>{description}</p>
            
            <button 
                onClick={() => onSelectService(id)}
                className='text-red-500 font-semibold text-sm flex items-center hover:text-red-400 transition duration-150'
            >
                Explore →
            </button>
        </div>
    );
}

export default function ServiceCard({ onServiceSelect }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map((service) => (
                    <ServiceItem 
                        key={service.id} 
                        {...service} 
                        onSelectService={onServiceSelect} 
                    />
                ))}
            </div>
        </div>
    );
}