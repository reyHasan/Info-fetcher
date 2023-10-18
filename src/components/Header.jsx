import React from 'react'
import {FaBars} from 'react-icons/fa'
import Button from './Button'
import styles from '../styles'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between gap-4 py-10 px-[5%] md:px-[12.5%] bg-slate-200 hidden'>
        <div className='flex flex-row items-center gap-6'>
            <img src='https://bulkit.cssninja.io/assets/img/logos/logo/bulkit-core.svg' className='w-[20%]'/>
            <h3 className='text-lime-900'>SEARCH<span className='text-yellow-500'>IT</span></h3>
            <FaBars className='text-3xl text-indigo-400'/>
            <ul className='hidden flex flex-row gap-4 text-lg'>
               <li className={`${styles.liStyle}`}>Features</li> 
               <li className={`${styles.liStyle}`}>Pricing</li>
               <li className={`${styles.liStyle}`}>Contact</li>
               

            </ul>
        </div>
        
        <div>
            <Button styles="hidden text-blue-800 border-blue-800 font-semibold self-right"> Sign Up</Button>
        </div>
    </div>
  )
}

export default Header