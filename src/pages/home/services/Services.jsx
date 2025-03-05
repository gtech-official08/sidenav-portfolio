import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import serviceData from '../../../constants/serviceData'
import ServiceCard from '../../../components/service/ServiceCard'

const Services = () => {
    return (
        <div className='space-y-8'>

            <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl text-zinc-50 font-bold tracking-wider">
                    Services
                </h1>
                <Link to="/servies" className='flex items-center gap-x-2 text-sm text-zinc-400 hover:text-zinc-200 ease-in-out duration-300'>
                    View All
                    <FaAnglesRight size={12} />
                </Link>
            </div>

            {/* Services card */}

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* We are going to show only 3 items in the home page */}

                {serviceData.slice(0, 3).map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>

        </div>
    )
}

export default Services