import React from 'react'
import RootLayout from '../../layout/RootLayout'
import serviceData from '../../constants/serviceData'
import ServiceCard from '../../components/service/ServiceCard'
import storeData from '../../constants/storeData'
import StoreCard from '../../components/store/StoreCard'

const Services = () => {
    return (
        <RootLayout className={'space-y-24'}>

            {/* services content */}
            <div className="space-y-10">
                <div className="space-y-2">
                    <h1 className="text-2xl text-zinc-50 font-bold tracking-wider">
                        What can I do for you?
                    </h1>
                    <p className="text-sm font-medium">
                        I can help you with the following:
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                    {serviceData.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>

            {/* store contents */}
            <div className="space-y-10">
                <div className="space-y-2">
                    <h1 className="text-2xl text-zinc-50 font-bold tracking-wider">
                        Templates Store
                    </h1>
                    <p className="text-sm font-medium">
                        I have a large collection of templates that I can help you with.
                    </p>
                </div>

                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
                    {storeData.map((store) => (
                        <StoreCard key={store.id} {...store} />
                    ))}
                </div>

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

export default Services