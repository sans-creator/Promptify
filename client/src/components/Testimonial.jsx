// import React from 'react';
// import { assets, testimonialsData } from '../assets/assets';
// import { motion } from 'framer-motion';

// const Testimonial = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//       className='flex flex-col items-center justify-center my-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white py-16'
//     >
//       <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-2'>
//         Customer Testimonials
//       </h1>
//       <p className='text-gray-500 text-center mb-12'>
//         What Our Users Are Saying
//       </p>

//       <div className='flex flex-wrap justify-center gap-8'>
//         {testimonialsData.map((testimonial, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.03 }}
//             className='bg-white/40 backdrop-blur-lg border border-gray-200 shadow-md p-8 rounded-xl w-80 transition-all duration-300'
//           >
//             <div className='flex flex-col items-center text-center'>
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className='rounded-full w-16 h-16 mb-3 object-cover border border-gray-300'
//               />
//               <h2 className='text-lg font-semibold text-gray-800'>
//                 {testimonial.name}
//               </h2>
//               <p className='text-sm text-gray-500 mb-3'>{testimonial.role}</p>
//               <div className='flex mb-3'>
//                 {Array(testimonial.stars)
//                   .fill()
//                   .map((_, i) => (
//                     <img
//                       src={assets.rating_star}
//                       alt="star"
//                       key={i}
//                       className='w-4 h-4'
//                     />
//                   ))}
//               </div>
//               <p className='text-gray-600 text-sm leading-relaxed'>
//                 “{testimonial.text}”
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Testimonial;
