import React from 'react'
import testimonalData from '../../../constants/testimonialData'
import TestimonialCard from '../../../components/testimonial/TestimonialCard'

const Testimonials = () => {
    return (
        <div className='space-y-8'>

            <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl text-zinc-50 font-bold tracking-wider">
                    What client say
                </h1>
            </div>

            {/* Testimonial card */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* We are going to show only 3 items in the home page */}

                {testimonalData.slice(0, 2).map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}

            </div>


        </div>
    )
}

export default Testimonials