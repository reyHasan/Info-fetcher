import React from 'react'

const Hero = () => {
  return (
    <section className='bg-slate-200 px-[5%] lg:px-[12.5%] py-4 flex flex-col items-center'>
        
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            
            <div className=' flex flex-col items-center lg:items-start gap-8'>
                <div className='bg-white py-1 md:py-2 px-2 md:px-6 flex flex-row items-center gap-2 rounded'>
                    <div className='bg-indigo-400 rounded  p-2 text-white'> New Update</div>
                    <p className='text-slate-600 font-poppins'>check out the latest features</p>
                </div>
                <div className='flex flex-col text-center lg:text-left items-center lg:items-start gap-4'>
                    <h1 className='text-6xl'>Get Into Business.</h1>
                    <p className='text-lg lg:max-w-[70%]'>Take control over your business by deploying an all in one business data monitoring solution.</p>
                </div>
                <div className='bg-white px-2 py-2 flex flex-row items-center gap-2 rounded-full'>
                    <input 
                     className='text-slate-600 font-semibold font-poppins px-2 md:px-6' 
                     placeholder='Your email adress' 
                    />
                    <div className='bg-indigo-400 rounded-full p-2 px-2 md:px-8 text-white'> Sign Up</div>               
                </div>
            </div>

            <div className='rounded-full overflow-hidden h-[300px] md:h-[460px] lg:self-start'>
               <img src='https://bulkit.cssninja.io/assets/img/demo/hero/3.jpg' className='object-cover h-full w-[300px] md:w-[460px]'/>
            </div>
        </div>

        <div className='flex flex-row items-center gap-4 md:gap-12 mt-4 md:mt-0 pl-[20%] lg:pl-0'>
            <img alt='partners' src='https://bulkit.cssninja.io/assets/img/logos/custom/gutwork.svg' className='w-[15%]'/>
            <img alt='partners' src='https://bulkit.cssninja.io/assets/img/logos/custom/grubspot.svg' className='w-[15%]'/>
            <img alt='partners' src='https://bulkit.cssninja.io/assets/img/logos/custom/phasekit.svg' className='w-[15%]'/>
            <img alt='partners' src='https://bulkit.cssninja.io/assets/img/logos/custom//infinite.svg' className='w-[15%]'/>
        </div>
   
    </section>
  )
}

export default Hero