import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion'


const Testimonial = () => {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}} 
      transition={{duration:1}} 
      whileInView={{opacity:1, y:0}} 
      viewport={{once:true}}
    className='flex flex-col items-center justify-center my-20 py-12'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
      <p className='text-gray-500 mb-12'>What Our Users Are Saying</p>

      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} 
          className='bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>
            <div className='flex flex-col items-center text-center'>
              <img src={testimonial.image} alt="" className='rounded-full w-14 h-14 mb-2' />
              <h2 className='text-xl mt-3 font-semibold'>{testimonial.name}</h2>
              <p className='mb-4 text-gray-500'>{testimonial.role}</p>
              <div className='flex mb-2'>
                {Array(testimonial.stars).fill().map((_, i) => (
                  <img src={assets.rating_star} alt="star" key={i} className='w-4 h-4' />
                ))}
              </div>
              <p className='text-gray-600  text-center text-sm'>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
