import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.black_on_trans} alt="" width={150} />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
          <a href="https://www.linkedin.com/in/sanskar-jaiswal-b49a90352/">
           Made By Sanskar
          </a>
           </p>

        <div className='flex gap-2.5'>
          <a href="https://github.com/sans-creator/Promptify">
            <img src={assets.github} alt="" width={35} />
            </a>
        
        <a href="https://www.linkedin.com/in/sanskar-jaiswal-b49a90352/">
            <img src={assets.linkedIn} alt="" width={35} />
            </a>

        <a href="mailto:sanskarj163@gmail.com">
            <img src={assets.email } alt=""  width={35}/>
            </a>
        </div>
    </div>
  )
}

export default Footer
