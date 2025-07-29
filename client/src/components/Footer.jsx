import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-6 mt-20 px-4 sm:px-10'
    >
      <img src={assets.black_on_trans} alt="logo" className='w-36 sm:w-40' />

      <p className='text-sm text-gray-500 max-sm:text-center border-l sm:border-l border-gray-300 sm:pl-4 sm:flex-1 max-sm:pt-2'>
        <a
          href="https://www.linkedin.com/in/sanskar-jaiswal-b49a90352/"
          className='hover:text-black transition-colors'
          target='_blank' rel='noopener noreferrer'
        >
          Made by Sanskar
        </a>
      </p>

      <div className='flex gap-4'>
        <a
          href="https://github.com/sans-creator/Promptify"
          target='_blank' rel='noopener noreferrer'
          className='hover:scale-110 transition-transform duration-300'
        >
          <img src={assets.github} alt="GitHub" width={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/sanskar-jaiswal-b49a90352/"
          target='_blank' rel='noopener noreferrer'
          className='hover:scale-110 transition-transform duration-300'
        >
          <img src={assets.linkedIn} alt="LinkedIn" width={30} />
        </a>
        <a
          href="mailto:sanskarj163@gmail.com"
          className='hover:scale-110 transition-transform duration-300'
        >
          <img src={assets.email} alt="Email" width={30} />
        </a>
      </div>
    </motion.div>
  )
}

export default Footer
