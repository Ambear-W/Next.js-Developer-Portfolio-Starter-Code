import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubIcon } from './Icons'
import {motion} from "framer-motion"

const FramerImage = motion(Image);

const Project = ({title, type, img, link, github}) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
                        dark:bg-dark dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'/>
        <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}} />
        </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between dark:text-light'>
                <Link href={link} target="_blank" className='font-semibold underline'> Visit </Link>
                <Link href={github} target="_blank" className='w-8'> <GithubIcon /> </Link>
            </div>
        </div>
    </article>
  )
}

export default Project
