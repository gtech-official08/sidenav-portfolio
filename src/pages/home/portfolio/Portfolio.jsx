import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import portfolioData from '../../../constants/portfolioData'
import PortfolioCard from '../../../components/portfolio/PortfolioCard'

const Portfolio = () => {
    return (
        <div className='space-y-8'>

            <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl text-zinc-50 font-bold tracking-wider">
                    Portfolio
                </h1>
                <Link to="/portfolio" className='flex items-center gap-x-2 text-sm text-zinc-400 hover:text-zinc-200 ease-in-out duration-300'>
                    View All
                    <FaAnglesRight size={12} />
                </Link>
            </div>

            {/* Portfolio card */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* We are going to show only 3 items in the home page */}

                {portfolioData.slice(0, 3).map((portfolio) => (
                    <PortfolioCard key={portfolio.id} {...portfolio} />
                ))}
            </div>


        </div>
    )
}

export default Portfolio