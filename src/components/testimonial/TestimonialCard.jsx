import React from 'react'

const TestimonialCard = ({ img, name, company, description }) => {
    return (
        <div className='w-full p-6 rounded-lg space-y-4 bg-zinc-700/40'>
            <div className="flex items-center gap-x-4">
                <img src={img} alt={name} className="w-12 h-12 object-cover object-center rounded-full" />

                <div className="space-y-0">
                    <h2 className="text-base text-zinc-50 font-semibold leading-6">
                        {name}
                    </h2>
                    <p className="text-sm font-normal">
                        {company}
                    </p>
                </div>
            </div>

            <p className="text-sm font-normal text-zinc-200">
                {description}
            </p>
        </div>
    )
}

export default TestimonialCard