import React from 'react'
import RootLayout from '../../layout/RootLayout'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'
import { LiaPhoneVolumeSolid } from 'react-icons/lia'

const Contact = () => {
    return (
        <RootLayout className={'space-y-24'}>

            {/* contact info */}
            <div className='space-y-12 border border-zinc-700 md:p-12 sm:p-8 p-6 rounded-lg'>

                <div className="w-full flex items-start justify-between gap-10 md:flex-nowrap flex-wrap">
                    <div className="space-y-2">
                        <h1 className="text-2xl text-zinc-50 font-bold tracking-wider">
                            Have a project in mind?
                        </h1>
                        <p className="text-sm font-normal">
                            Let's collaborate and create something amazing together!
                        </p>
                    </div>

                    <button className="w-fit px-4 py-3 border border-zinc-600 hover:bg-zinc-700/60 text-zinc-50 rounded-lg flex items-center gap-x-3 cursor-pointer ease-in-out duration-300">

                        <span class="relative flex size-4">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                            <LiaPhoneVolumeSolid />
                        </span>

                        Schedule a meeting
                    </button>

                </div>

                <div className="w-full flex items-center gap-x-2">
                    <div className="flex-1 h-px w-full bg-zinc-700" />
                    <p className="text-base font-medium text-zinc-300 uppercase">
                        or contact me on
                    </p>
                    <div className="flex-1 h-px w-full bg-zinc-700" />
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex items-center gap-x-4">
                        <div className="w-12 h-12 rounded-md border border-zinc-700 bg-zinc-700/10 flex items-center justify-center">
                            <FaEnvelope size={24} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-medium text-zinc-300">
                                Email Address
                            </p>
                            <h2 className="text-base text-zinc-50 font-medium">
                                gtech.official08@gmail.com
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="w-12 h-12 rounded-md border border-zinc-700 bg-zinc-700/10 flex items-center justify-center">
                            <FaPhone size={24} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-medium text-zinc-300">
                                Phone Number
                            </p>
                            <h2 className="text-base text-zinc-50 font-medium">
                                +977-9810000000
                            </h2>
                        </div>
                    </div>
                </div>

            </div>

            {/* Contact form */}
            <div className="w-full space-y-8">
                <div className="space-y-2">
                    <h1 className="text-2xl text-zinc-50 font-bold">
                        Get in touch
                    </h1>
                    <p className="text-sm font-medium">
                        Feel free to ask about me.
                    </p>
                </div>

                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 bg-zinc-700/20 rounded-lg md:p-8 p-6 border border-zinc-700/80">

                    <div className="w-full space-y-2 md:col-span-1 col-span-2">
                        <label htmlFor="name" className="text-sm text-zinc-300 font-medium flex">Full Name</label>
                        <input type="text" placeholder='e.g. John Doe / Company Name' id='name' className="w-full rounded-lg p-3 border border-zinc-600 bg-zinc-700/10 text-zinc-50 outline-none focus:border-amber-400 ease-in-out duration-300" />
                    </div>

                    <div className="w-full space-y-2 md:col-span-1 col-span-2">
                        <label htmlFor="email" className="text-sm text-zinc-300 font-medium flex">Email Address</label>
                        <input type="email" placeholder='e.g. gtech.official08@gmail.com' id='email' className="w-full rounded-lg p-3 border border-zinc-600 bg-zinc-700/10 text-zinc-50 outline-none focus:border-amber-400 ease-in-out duration-300" />
                    </div>

                    <div className="w-full space-y-2 md:col-span-1 col-span-2">
                        <label htmlFor="phone" className="text-sm text-zinc-300 font-medium flex">Phone Nbr.</label>
                        <input type="number" placeholder='e.g. +977-9810000000' id='phone' className="w-full rounded-lg p-3 border border-zinc-600 bg-zinc-700/10 text-zinc-50 outline-none focus:border-amber-400 ease-in-out duration-300" />
                    </div>

                    <div className="w-full space-y-2 md:col-span-1 col-span-2">
                        <label htmlFor="subject" className="text-sm text-zinc-300 font-medium flex">Subject</label>
                        <input type="text" placeholder='e.g. Web Development' id='subject' className="w-full rounded-lg p-3 border border-zinc-600 bg-zinc-700/10 text-zinc-50 outline-none focus:border-amber-400 ease-in-out duration-300" />
                    </div>

                    <div className="w-full space-y-2 col-span-2">
                        <label htmlFor="message" className="text-sm text-zinc-300 font-medium flex">Project Description</label>
                        <textarea placeholder='e.g. I want to create a website for my company' id='message' className="w-full rounded-lg p-3 h-28 border border-zinc-600 bg-zinc-700/10 text-zinc-50 outline-none focus:border-amber-400 ease-in-out duration-300"></textarea>
                    </div>

                    <button className="w-fit px-6 py-2.5 border border-amber-600 bg-amber-600 text-zinc-50 rounded-lg flex items-center gap-x-2 cursor-pointer ease-in-out duration-300">
                        Send Message
                    </button>

                </div>


            </div>

        </RootLayout>
    )
}

export default Contact