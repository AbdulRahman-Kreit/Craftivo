import React, { useState } from 'react';
import Heading from '../components/Heading';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: '',
        }));
        setSubmitMessage(null);
    };

    const validate = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required.';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!EMAIL_REGEX.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitMessage(null);

        if (validate()) {
            setIsSubmitting(true);
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                console.log('Form submitted successfully:', formData);
                
                setSubmitMessage({ 
                    type: 'success', 
                    text: 'Your message has been sent successfully! Thank you.' 
                });
                
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });

            } catch (error) {
                console.error('Submission error:', error);
                setSubmitMessage({ 
                    type: 'error', 
                    text: 'There was an error sending your message. Please try again.' 
                });
            } finally {
                setIsSubmitting(false);
            }

        } else {
            setSubmitMessage({ type: 'error', text: 'Please correct the highlighted fields.' });
        }
    };

    return (
        <section id='contact' className="min-h-screen pt-20 pb-20"> 
            <Heading
                subTitle="CONTACT"
                title="Get In Touch"
                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-white mt-12">
                    
                    <div className='space-y-8'>
                        
                        <div className='flex items-start space-x-4 p-6 
                        rounded-xl border-2 border-gray-700 bg-gray-950 
                        duration-300 hover:border-red-500 group'>
                            <div className="text-red-500 bg-rose-900 p-2 
                            text-2xl mt-1 rounded-full duration-300 
                            group-hover:text-white group-hover:bg-red-500">
                                <i className="fa-solid fa-location-dot "></i>
                            </div>
                            
                            <div>
                                <p className='text-xs text-gray-400 uppercase'>Location:</p>
                                <p className='font-medium text-lg text-white'>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        
                        <div className='flex items-start space-x-4 p-6 rounded-xl
                        border-2 border-gray-700 bg-gray-950 duration-200 
                        hover:border-red-500 group'>
                            <div className="text-red-500 bg-rose-900 p-2 
                            text-2xl mt-1 rounded-full duration-300 
                            group-hover:text-white group-hover:bg-red-500">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <p className='text-xs text-gray-400 uppercase'>Email:</p>
                                <a href="mailto:info@example.com" className='font-medium text-lg text-red-500 hover:text-red-400 duration-300'>info@example.com</a>
                            </div>
                        </div>

                        <div className='flex items-start space-x-4 p-6 rounded-xl 
                        border-2 border-gray-700 bg-gray-950 duration-200 
                        hover:border-red-500 group'>
                            <div className="text-red-500 bg-rose-900 p-2 
                            text-2xl mt-1 rounded-full duration-300 
                            group-hover:text-white group-hover:bg-red-500">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <p className='text-xs text-gray-400 uppercase'>Call:</p>
                                <a href="tel:+155895548855" className='font-medium text-lg text-red-500 hover:text-red-400 duration-400'>+1 5589 55488 55</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-gray-950 p-8 rounded-xl border border-gray-800'>
                        {submitMessage && (
                            <div className={`p-4 rounded-lg mb-6 ${submitMessage.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                                {submitMessage.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className='space-y-6'>
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label htmlFor='name' className='block text-sm font-medium mb-2 text-gray-300'>Your Name</label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full p-4 rounded-lg bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 transition border ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
                                    />
                                    {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor='email' className='block text-sm font-medium mb-2 text-gray-300'>Your Email</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full p-4 rounded-lg bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 transition border ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                                    />
                                    {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor='subject' className='block text-sm font-medium mb-2 text-gray-300'>Subject</label>
                                <input
                                    type='text'
                                    id='subject'
                                    name='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full p-4 rounded-lg bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 transition border ${errors.subject ? 'border-red-500' : 'border-gray-700'}`}
                                />
                                {errors.subject && <p className='text-red-500 text-sm mt-1'>{errors.subject}</p>}
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium mb-2 text-gray-300'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='5'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full p-4 rounded-lg bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 transition border ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
                                ></textarea>
                                {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
                            </div>

                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-8 py-4 bg-red-500 
                                    text-white font-semibold rounded-lg transition duration-300 
                                    ${isSubmitting 
                                        ? 'opacity-60 cursor-not-allowed' 
                                        : 'hover:bg-rose-900 cursor-pointer'}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}