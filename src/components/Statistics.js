import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000})
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const Statistics = ({number, title}) => {
  return (
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl font-bold'>
        <AnimatedNumbers value={number} /> +
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>
        {title}
      </h2>
    </div>
  )
}

export default Statistics
