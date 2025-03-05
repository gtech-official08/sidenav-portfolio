import React from 'react'
import RootLayout from '../../layout/RootLayout'
import Hero from './hero/Hero'
import Services from './services/Services'
import Portfolio from './portfolio/Portfolio'
import Testimonials from './testimonial/Testimonials'
import Contact from './contact/Contact'

const Home = () => {
    return (
        <RootLayout className={'space-y-24'}>

            {/* HEro section */}
            <Hero />

            {/* Services */}
            <Services />

            {/* Portofolio */}
            <Portfolio />

            {/* Testimonials */}
            <Testimonials />

            {/* Contact */}
            <Contact />

        </RootLayout>
    )
}

export default Home