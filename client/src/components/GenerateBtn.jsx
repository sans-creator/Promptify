import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='pb-16 text-center bg-gradient-to-b from-white to-gray-50 rounded-xl px-4 md:px-8'
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-800 py-6'
      >
        See the Magic. Try Now ✨
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClickHandler}
        className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300'
      >
        Generate Images
        <img src={assets.star_group} alt="sparkle" className='h-5 sm:h-6' />
      </motion.button>
    </motion.div>
  )
}

export default GenerateBtn
