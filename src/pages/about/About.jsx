import React from 'react'
import RootLayout from '../../layout/RootLayout'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

const About = () => {
    return (
        <RootLayout className={'space-y-8'}>

            {/* Intro section */}
            <h1 className="text-4xl text-zinc-200 font-bold">
                About Me
            </h1>

            <div className="space-y-8">
                <div className="w-full flex items-center gap-10 flex-wrap">
                    <div className="md:w-64 w-full h-auto flex items-center justify-center border border-zinc-900/40 bg-zinc-900/20 rounded-lg">
                        <img src="https://cdn.pixabay.com/photo/2018/08/16/18/44/model-3611078_1280.jpg" alt="about img" className="w-full aspect-square rounded-lg object-cover object-center" />
                    </div>
                    <div className="flex-1 space-y-5">
                        <p className="text-base text-zinc-300 font-normal">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem atque ipsum ducimus aspernatur quam voluptas nobis vitae, blanditiis unde quae consequatur inventore, voluptates vero. Temporibus necessitatibus sint officia officiis a eum harum aspernatur ex tempore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem atque ipsum ducimus aspernatur quam voluptas nobis vitae, blanditiis unde quae consequatur inventore, voluptates vero.
                        </p>
                        <p className="text-base text-zinc-300 font-normal">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem atque ipsum ducimus aspernatur quam voluptas nobis vitae, blanditiis unde quae consequatur inventore, voluptates vero. Temporibus necessitatibus sint officia officiis a eum harum aspernatur ex tempore?
                        </p>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between bg-blue-500/5 border border-blue-500/60 hover:border-500/80 md:px-6 px-3 py-3 rounded-lg group cursor-pointer ease-in-out duration-300">
                    <p className="text-sm md:text-base font-normal">
                        I am available for freelance work.
                    </p>
                    <Link to="mailto:gtech.official08@gmail.com" className="flex items-center gap-2 text-sm md:text-base font-semibold text-zinc-50 group-hover:text-zinc-200 ease-in-out duration-300">
                        Hire me <FaArrowRightLong className='group-hover:translate-x-1 ease-in-out duration-300' />
                    </Link>
                </div>
                <p className="text-base text-zinc-300 font-normal">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem atque ipsum ducimus aspernatur quam voluptas nobis vitae, blanditiis unde quae consequatur inventore, voluptates vero. Temporibus necessitatibus sint officia officiis a eum harum aspernatur ex tempore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem atque ipsum ducimus aspernatur quam voluptas nobis vitae, blanditiis unde quae consequatur inventore, voluptates vero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quaerat expedita neque adipisci earum maiores.
                </p>

            </div>


        </RootLayout>
    )
}

export default About