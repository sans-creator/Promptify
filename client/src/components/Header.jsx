import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const [typedText, setTypedText] = useState('');
  const fullText = 'Turn text to image, in seconds.';

  useEffect(() => {
  let index = 0;

  const timer = setInterval(() => {
    if (index < fullText.length) {
      setTypedText(fullText.slice(0, index + 1)); 
      index++;
    } else {
      clearInterval(timer);
    }
  }, 50);

  return () => clearInterval(timer);
}, []);


  const onClickHandler = () => {
    if (user) navigate('/result');
    else setShowLogin(true);
  };

  return (
    <motion.div
      className='flex flex-col justify-center items-center text-center py-16 px-4 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className='text-stone-700 inline-flex gap-2 bg-white/30 px-5 py-1.5 rounded-full border border-neutral-400 backdrop-blur-sm shadow-sm'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className='text-xs sm:text-sm font-medium'>Best text to image generator</p>
      </motion.div>

      <motion.h1
        className='text-2xl sm:text-4xl md:text-5xl max-w-3xl mx-auto mt-8 font-bold leading-tight text-gray-800 min-h-[80px]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {typedText}
        <span className="animate-pulse">|</span>
      </motion.h1>

      <motion.p
        className='text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-5'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Bring ideas to life with AI. Describe your vision – our model turns words into stunning visuals instantly. Type, generate, be amazed.
      </motion.p>

      <motion.button
        onClick={onClickHandler}
        className='mt-8 px-10 py-3 sm:text-base text-sm text-white bg-black hover:bg-neutral-800 flex items-center gap-2 rounded-full shadow-md'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Generate Images
        <img className="h-5" src={assets.star_group} alt="star" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className='flex flex-wrap justify-center mt-14 gap-4'
      >
        {Array(6)
          .fill('')
          .map((_, index) => (
            <motion.img
              whileHover={{ scale: 1.08 }}
              className='rounded-lg cursor-pointer w-14 sm:w-20 shadow-md transition-all duration-300'
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt={`sample-${index}`}
              key={index}
            />
          ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className='mt-4 text-neutral-600 text-xs sm:text-sm'
      >
        Generated images from <span className='font-semibold'>Promptify</span>
      </motion.p>
    </motion.div>
  );
};

export default Header;
