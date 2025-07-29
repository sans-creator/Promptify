import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-24 px-6 md:px-20 xl:px-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 rounded-xl shadow-md'
    >
      <motion.h1
        className='text-3xl sm:text-4xl font-semibold mb-2 text-center text-gray-800'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Create AI Images
      </motion.h1>

      <motion.p
        className='text-gray-500 mb-8 text-center text-sm sm:text-base'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Turn your imagination into art
      </motion.p>

      <div className='flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14'>
        <motion.div
          className='max-w-xl'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className='text-2xl sm:text-3xl font-medium mb-4 text-gray-800'>
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className='text-gray-600 mb-4 text-base sm:text-lg leading-relaxed'>
            Bring your ideas to life with our free AI image generator. Just type a prompt, and watch as your words turn into stunning, high-quality visuals — from unique art to realistic product shots and beyond.
          </p>
          <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
            Whether you're imagining characters, scenes, or things that don't even exist yet, our cutting-edge AI makes it possible in seconds. Describe it, click generate, and explore endless creative possibilities.
          </p>
        </motion.div>

        <motion.img
          src={assets.sample_img_1}
          alt="AI-Powered Text to Image Generator"
          className="w-80 xl:w-96 rounded-xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </div>
    </motion.div>
  )
}

export default Description
