import React from 'react'

const ServiceCard = ({ img, title, price }) => {
    return (
        <div className='w-full p-4 bg-zinc-800 rounded-lg flex items-center gap-x-4 ease-in-out duration-300 hover:bg-zinc-900/40'>

            <img src={img} alt={title} className="w-12 h-12 rounded-lg object-cover object-center" />

            <div className="space-y-2">
                <h2 className="text-base text-zinc-50 font-semibold leading-6">
                    {title}
                </h2>
                <p className="text-sm text-zinc-400 font-normal">
                    From <span className="font-medium px-1 text-zinc-200">${price}</span>/ hour
                </p>
            </div>

        </div>
    )
}

export default ServiceCard