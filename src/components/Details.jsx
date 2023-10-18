import React from 'react'
import { useLazyGetDetailsQuery } from '../redux/api'
import Button from './Button'

const Details = () => {

    
    const [getDetails, {error, isFetching}] = useLazyGetDetailsQuery()
    const [showForm, setShowForm] = React.useState(false)
    const [num, setNum] = React.useState()
    const [details, setDetails] = React.useState()
    const [businessInfo, setBusinessInfo ] = React.useState();
    const [isBusiness, setIsBusiness] = React.useState()
    const [picture, setPicture] = React.useState()
    const [availability, setAvailability] = React.useState()

    const getAbout = async (e) => {
        e.preventDefault(); 
        const {data} = await getDetails({type:'about', phone:num});
        if (isFetching) {setDetails('loading')}
        if (data) {setDetails(data), console.log(data)}
    }

    const getAvailability = async (e) => {
        e.preventDefault(); 
      const {data} = await getDetails({type:'wchk', phone:num});
      if (isFetching) {setAvailability('loading')}
      if (data) {setAvailability(data), console.log(data)}
    }

    const getBusinessInfo = async (e) => {
        e.preventDefault(); 
      const {data} = await getDetails({type:'bizinfo', phone:num});
      if (isFetching) {setBusinessInfo('loading')}
      if (data) {setBusinessInfo(data), console.log(data)}
    }

    const getIsBusiness = async (e) => {
        e.preventDefault(); 
      const {data} = await getDetails({type:'isbiz', phone:num});
      if (isFetching) {setIsBusiness('loading')}
      if (data) {setIsBusiness(data), console.log(data)}
      }
  
    const getProfilePic = async (e) => {
        e.preventDefault(); 
      const {data} = await getDetails({type:'wspicture', phone:num});
      if (isFetching) {setPicture('loading')}
      if (data) {setPicture(data), console.log(data)}
    }


    return (
     <section className='mt-8 py-10 px-[5%] lg:px-[12.5%] bg-indigo-200'>
       <div className='flex flex-col md:flex-row items-center justify-between gap-4 px-[10%] lg:[px-0]'>
         <h3 className='hidden text-center text-2xl md:text-4xl'>Get Quick Info About Any WhatsApp Number</h3>
         <Button styles="text-blue-800 border-blue-800 font-semibold self-right" onClick={()=>setShowForm(prev => !prev)}> Get Started</Button>
         <div className={showForm? 'flex bg-slate-200 p-4 rounded-full' : 'hidden'}>
             <input
              type='number'
              placeholder='please input a number...'
              className='text-black bg-transparent w-full py-2 px-4'
              value={num}
              onChange={(e)=>setNum(e.target.value)}
           />  
           <Button styles="text-white bg-indigo-400 border-white font-semibold self-right px-6 py-1" > Get Details</Button>    
         </div>
      </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 px-[10%] lg:px-0'>
         <div className='bg-slate-200 py-12 px-6 flex flex-col items-center gap-4'>
           {availability && availability === 'loading' && <h3 className='bg-lime-200 p-2 rounded'> ...loading, please wait</h3>}
           {availability && availability === true && <h3 className='bg-lime-200 border border-lime-900 p-3 rounded'> The number +{num} is available on WhatsApp</h3>}
           {availability && availability === false && <h3 className='bg-lime-200 p-2 rounded'> The number +{num} is not available on WhatsApp</h3>}
           <h4>Check Whether Number is Available on WhatSApp</h4>
           <Button styles=" text-blue-800 border-blue-800 font-semibold self-right" onClick={getAvailability}> Check</Button>
         </div>

         <div className='bg-slate-200 py-12 px-6 flex flex-col items-center gap-4'>
           {isBusiness && isBusiness === 'loading' && <h3 className='bg-lime-200 border border-lime-900 p-3 rounded'> ...loading, please wait</h3>}
           {isBusiness && isBusiness === true && <h3 className='bg-lime-200 border border-lime-900 p-3 rounded'> The number +{num} is a business account</h3>}
           {isBusiness && isBusiness === false && <h3 className='bg-lime-200 p-3 border border-lime-900 rounded'> The number +{num} is not a business account</h3>}
           <h4>Check Whether Number is a Business Account</h4>
           <Button styles=" text-blue-800 border-blue-800 font-semibold self-right" onClick={getIsBusiness}> Check</Button>
         </div>

         <div className='bg-slate-200 py-12 px-6 flex flex-col items-center gap-4'>
           {details && details === 'loading' && <h3 className='bg-lime-200 border border-lime-900 p-3 rounded'> ...loading, please wait</h3>}
           {details && details !== 'loading' && <h3 className='bg-lime-200 border border-lime-900 p-3 rounded'> The number +{num}'s about: {details.about}</h3>}
             <h4>Check The About Section Of The Number</h4>
           <Button styles=" text-blue-800 border-blue-800 font-semibold self-right" onClick={getAbout}> Check</Button>
         </div>

         <div className='bg-slate-200 py-12 px-6 flex flex-col items-center gap-4'>
           {businessInfo && businessInfo === 'loading' && <h3 className='bg-lime-200 border border-lime-900 p-3 rounded'> ...loading, please wait</h3>}
           {businessInfo && businessInfo !== 'loading' && <h3 className='bg-lime-200 border border-lime-900 p-3 rounded'> The number +{num}'s info: {businessInfo}</h3>}
          <h4>Check WhatSApp Business Info</h4>
           <Button styles=" text-blue-800 border-blue-800 font-semibold self-right" onClick={getBusinessInfo}> Check</Button>
         </div>

         <div className='bg-slate-200 py-12 px-6 flex flex-col items-center gap-4'>
        {picture && picture === 'loading' && <h3 className='bg-lime-200 border border-lime-900 p-3 rounded'> ...loading, please wait</h3>}
        {picture && picture !== 'loading' && <img src={picture}/>}
          <h4>Check The Profile Picture</h4>
           <Button styles=" text-blue-800 border-blue-800 font-semibold self-right" onClick={getProfilePic}> Check</Button>
         </div>

              
     </div>
          
      
      </section>
  )
}

export default Details