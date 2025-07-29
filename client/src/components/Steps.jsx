import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-28 px-4'
    >
      <motion.h1
        className='text-3xl sm:text-4xl font-bold mb-2 text-neutral-800'
      >
        How It Works
      </motion.h1>
      <p className='text-base sm:text-lg text-gray-600 mb-10 text-center'>
        Bring your text to life visually
      </p>

      <div className='grid gap-6 w-full max-w-4xl md:grid-cols-2'>
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className='flex items-start gap-4 p-5 bg-white border shadow-sm hover:shadow-lg rounded-xl transition-all duration-300'
          >
            <img width={40} src={item.icon} alt={`step-${index}`} />
            <div>
              <h2 className='text-lg font-semibold text-gray-800 mb-1'>
                {item.title}
              </h2>
              <p className='text-sm text-gray-500 leading-snug'>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
