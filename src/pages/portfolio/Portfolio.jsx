import React from 'react'
import RootLayout from '../../layout/RootLayout'
import portfolioData from '../../constants/portfolioData'
import PortfolioCard from '../../components/portfolio/PortfolioCard'

const Portfolio = () => {
    return (
        <RootLayout className={'space-y-10'}>

            <div className="space-y-2">
                <h1 className="text-2xl text-zinc-50 font-bold tracking-wider">
                    What I have done?
                </h1>
                <p className="text-sm font-medium">
                    I have worked on the following projects:
                </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolioData.map((portfolio) => (
                    <PortfolioCard key={portfolio.id} {...portfolio} />
                ))}
            </div>

            {/* Load more button */}
            <div className="w-full flex items-center justify-center !mt-6">
                <button className="w-fit px-4 py-2 rounded-lg border border-zinc-700 font-medium text-zinc-300 bg-zinc-700/20 hover:bg-zinc-700/60 hover:text-zinc-100 ease-in-out duration-300 cursor-pointer">
                    Load More
                </button>
            </div>

        </RootLayout>
    )
}

export default Portfolio