import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioCard = ({ img, title, dateRange }) => {
    return (
        <div className='w-full bg-zinc-800 rounded-lg space-y-4'>
            <img src={img} alt={title} className="w-full aspect-[16/11] rounded-lg object-cover object-center" />

            <div className="space-y-2 px-1">
                <Link to="/portfolio" className='text-base text-zinc-50 block leading-6 font-semibold'>
                    {title}
                </Link>
                <p className="w-fit px-2 py-1 rounded text-xs border border-zinc-700/60 font-normal text-zinc-300 bg-zinc-700/40">
                    {dateRange}
                </p>
            </div>

        </div>
    )
}

export default PortfolioCard