export default function ServiceDetails({ service, onBack, onContactClick }) {

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 
        backdrop-blur-sm flex justify-center overflow-y-auto">
            
            <section className="pt-20 pb-20 text-white w-full max-w-4xl min-h-screen"> 
                <div className="mx-auto px-4 sm:px-6 lg:px-8">

                    <button 
                        onClick={onBack} 
                        className="flex items-center text-red-500 hover:text-red-400 mb-6"
                    >
                        ← Back to Services
                    </button>

                    <div className="bg-gray-950 p-10 rounded-xl border border-gray-800 shadow-2xl">
                        
                        <div className='w-16 h-16 rounded-lg bg-rose-950 flex items-center justify-center mb-6'>
                            <i className={`${service.iconClass} text-3xl text-red-500`}></i>
                        </div>

                        <h1 className="text-4xl font-bold mb-4 text-white">{service.title}</h1>
                        <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                        
                        <hr className="border-gray-800 mb-8" />

                        <h2 className="text-2xl font-semibold mb-4 text-red-500">Service Overview</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et diam sit amet quam vehicula elementum sed sit amet diam donec rutrum. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        
                        <ul className="mt-8 space-y-3 text-gray-400">
                            <li className='flex items-center'><i className="fa-solid fa-check text-red-500 mr-3"></i> Comprehensive Strategy Planning</li>
                            <li className='flex items-center'><i className="fa-solid fa-check text-red-500 mr-3"></i> Dedicated Expert Support</li>
                            <li className='flex items-center'><i className="fa-solid fa-check text-red-500 mr-3"></i> Guaranteed Results & Metrics</li>
                        </ul>

                        <div className="flex flex-col justify-center items-center
                        mt-10">
                            <p className="text-lg">Want to start your own project?</p>
                            
                            <a 
                                href="#contact" 
                                onClick={onContactClick} 
                                className="mt-6 py-2 px-3 bg-rose-900 text-white
                                rounded border border-red-500 font-medium hover:bg-red-500 transition duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}