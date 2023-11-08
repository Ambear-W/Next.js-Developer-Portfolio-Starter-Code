import AnimatedText from '@/components/AnimatedText'
import FeatureProject from '@/components/FeatureProject'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import project2 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import Project from '@/components/Project'

const projects = () => {
  return (
    <>
        <Head>
            <title>CodeBucks | Projects Page</title>
            <meta name="description" content="This is the projects page :)" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' text="Imagination Trumps Knowledge!" />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeatureProject 
                        title="Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/"
                        github="/"
                        type="Featured Project"
                        img={project1}                        
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title="React Portfolio Website"
                        link="/"
                        github="/"
                        type="Project"
                        img={project2}
                        />
                    </div>
                    <div className='col-span-6 cu'>
                        <Project
                        title="React Portfolio Website"
                        link="/"
                        github="/"
                        type="Project"
                        img={project2}
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeatureProject 
                        title="Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/"
                        github="/"
                        type="Featured Project"
                        img={project1}                        
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title="React Portfolio Website"
                        link="/"
                        github="/"
                        type="Project"
                        img={project2}
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title="React Portfolio Website"
                        link="/"
                        github="/"
                        type="Project"
                        img={project2}
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects
