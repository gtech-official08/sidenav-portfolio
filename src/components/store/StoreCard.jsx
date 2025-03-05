import React from 'react'
import { FaAnglesRight, FaEye, FaGithub } from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const StoreCard = ({ thumbnail, title, price, description, tag }) => {
    return (
        <div className='w-full rounded-lg space-y-6 overflow-hidden'>
            <img src={thumbnail} alt={title} className="w-full aspect-[16/10] object-center object-cover rounded-lg" />

            <div className="space-y-8 px-1">
                <div className="space-y-2.5">
                    <div className="w-full flex items-center justify-between gap-4">
                        <Link to="/stores" className='flex-1 text-lg font-semibold leading-6 text-zinc-50 line-clamp-1'>
                            {title}
                        </Link>
                        <p className="w-fit px-2 py-1 rounded text-base border border-zinc-700/60 font-normal text-zinc-100 bg-zinc-700/40">
                            ${price}
                        </p>
                    </div>

                    <p className="text-sm font-normal line-clamp-2">
                        {description}
                    </p>
                </div>

                <div className="w-full flex items-center justify-between !mt-6 gap-4 flex-wrap">
                    <p className="w-fit px-2 py-1 rounded text-xs border border-zinc-700/60 font-normal text-zinc-100 bg-zinc-700/40">
                        {tag}
                    </p>
                    <div className="flex items-center gap-3">
                        <Link to="/demo" className='w-fit px-2 py-1 rounded text-base border border-zinc-700/60 font-normal text-zinc-100 bg-zinc-700/40'>
                            <FaEye size={16} />
                        </Link>
                        <Link to="/gtech-github/projects" className='w-fit px-2 py-1 rounded text-base border border-zinc-700/60 font-normal text-zinc-100 bg-zinc-700/40'>
                            <FaGithub size={16} />
                        </Link>
                        <Link to="/gtech-github/projects" className='w-fit px-2 py-1 rounded text-sm font-medium text-zinc-100 group ease-in-out duration-300 flex items-center gap-x-0.5'>
                            Get Template <FiArrowUpRight className='pt-1 text-lg group-hover:rotate-45 ease-in-out duration-300' />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StoreCard