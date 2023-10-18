import React from 'react'
import tools from '../assets/toolAssets'
import {AiFillSecurityScan, AiOutlineProject} from 'react-icons/ai'
import {IoMdAttach} from 'react-icons/io'
import {BsChatSquareText} from 'react-icons/bs'

const Tools = () => {
  return (
    <section className='pt-10 px-[5%] lg:px-[12.5%]'>
        <div className='text-left lg:text-center px-[10%] md:px-0'>
            <h1 className='text-4xl lg:text-6xl'>PM made Simple</h1>
            <p className=''>Discover a seamless experience in Project Management</p>
        </div>

        <div className='flex flex-col md:flex-row items-center space-between gap-16 mt-16'>
            
            <div className='lg:w-[75%] px-[10%] md:px-0'>
              <h3 className='text-5xl'>Some new tools</h3>
              <div className='bg-indigo-400 p-1 w-[25%] my-4'/>
              <p className='my-4'>Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax. Ei minim probatus mea. Vide movet ad vis, eum at percipitur temporibus signiferumque.  </p>
              <p className=''> Timeam adipisci mei ei, vis ut nulla urbanitas, mel ex tota laudem. Quo ne regione tritani placerat, labitur neglegentur ex vis, sale verterem perfecto an eum. </p>
           </div>

           <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 px-[10%] md:px-0'>
             <div className='flex flex-col items-start gap-2'>
               <AiOutlineProject className='text-6xl text-indigo-400'/>
               <h3 className='text-2xl font-semibold'> Project Workspaces</h3>
               <p className='text-lg'>Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>        
             </div>  

             <div className='flex flex-col items-start gap-2'>
               <BsChatSquareText className='text-6xl text-indigo-400'/>
               <h3 className='text-2xl font-semibold'> Team Chat</h3>
               <p className='text-lg'>Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>        
             </div>  

             <div className='flex flex-col items-start gap-2'>
               <IoMdAttach className='text-6xl text-indigo-400'/>
               <h3 className='text-2xl font-semibold'> Unlimited attachments</h3>
               <p className='text-lg'>Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>        
             </div>  

             <div className='flex flex-col items-start gap-2'>
               <AiFillSecurityScan className='text-6xl text-indigo-400'/>
               <h3 className='text-2xl font-semibold'> Strong security</h3>
               <p className='text-lg'>Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>        
             </div>     
           </div>
        
        </div>
    </section>
  )
}

export default Tools