import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaXmark } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import sidenavbarData from '../../constants/sidenavbarData';

const Sidenavbar = () => {

    const [isOpen, setIsOpen] = useState(false); // to open and close the sidebar
    const location = useLocation(); // to detect the current location
    const pathname = location.pathname; // to get the current path

    const toggle = () => setIsOpen(!isOpen); // to toggle the sidebar

    const close = () => setIsOpen(false); // to close the sidebar

    return (
        <>
            {/* Mobile toggle menu button */}
            {
                !isOpen &&
                <button
                    onClick={toggle}
                    className='md:hidden fixed top-4 right-4 z-50 p-2 bg-zinc-700 rounded-lg text-zinc-50'>
                    <FiMenu size={24} />
                </button>
            }

            {/* Sidebar contents */}
            <div className={`absolute left-0 top-0 md:relative z-40 w-full md:w-64 space-y-6 md:h-[calc(100vh-3rem)] h-screen border-r border-zinc-700/40 transform transition-transform ease-in-out dura overflow-hidden ${isOpen ? 'translate-x-0 p-6 bg-zinc-800' : '-translate-x-full md:translate-x-0 md:pr-6 pr-0'}`}>

                {/* Close icon for mobile */}
                <div className="md:hidden absolute top-4 right-4">
                    <button
                        onClick={close}
                        className='text-zinc-300 hover:text-zinc-50'
                    >
                        <FaXmark size={24} />
                    </button>
                </div>

                {/* user profile, name, and designation */}
                <div className="w-full flex items-center gap-x-3">
                    <img src="https://cdn.pixabay.com/photo/2018/08/16/18/44/model-3611078_1280.jpg" alt="profile img" className="w-12 h-12 rounded-full object-cover object-center" />

                    <div className="space-y-0">
                        <p className="text-base font-semibold leading-6 text-zinc-50">
                            Seema Thapa Chhetri
                        </p>
                        <p className="text-sm leading-5">
                            Frontend Developer
                        </p>
                    </div>
                </div>

                {/* navitems links */}
                <div className="w-full space-y-3">
                    <h1 className="text-sm text-zinc-400 font-medium">
                        General
                    </h1>

                    {sidenavbarData.map((item) => (
                        <Link
                            to={item.path}
                            onClick={close}
                            className={`w-full flex items-center gap-x-2 text-base ${pathname === item.path ? 'bg-zinc-800/80 text-zinc-100' : 'hover:text-zinc-100 hover:bg-zinc-800/40'} px-3 py-2 rounded-lg ease-in-out duration-300`}
                        >
                            {item.icon && <item.icon size={22} />}
                            <span>{item.label}</span>
                        </Link>
                    ))}

                </div>

                {/* social media links */}
                <div className="w-full space-y-2">
                    <h1 className="text-sm text-zinc-400 font-medium">
                        Social
                    </h1>

                    <Link to="/" className='w-fit italic flex items-center gap-x-2 text-base text-zinc-300 hover:text-fuchsia-500 px-3 py-2 ease-in-out duration-300'>
                        <FaInstagram size={18} />
                        <span>@instagram</span>
                    </Link>
                    <Link to="/" className='w-fit italic flex items-center gap-x-2 text-base text-zinc-300 hover:text-blue-500 px-3 py-2 ease-in-out duration-300'>
                        <FaLinkedin size={18} />
                        <span>@linkedin</span>
                    </Link>
                    <Link to="/" className='w-fit italic flex items-center gap-x-2 text-base text-zinc-300 hover:text-neutral-500 px-3 py-2 ease-in-out duration-300'>
                        <FaGithub size={18} />
                        <span>@github</span>
                    </Link>

                </div>

            </div>
        </>
    )
}

export default Sidenavbar