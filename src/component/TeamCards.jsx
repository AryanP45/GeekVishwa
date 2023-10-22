import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import CL from '../app/team/data'
import '../app/team/T-card.css'
const TeamCards = () => {
  return (
    
    // <div className="allcards flex-col gap-4">

    // <div className="row-cards1 flex gap-4 pd-[2rem]">

    //     <div class="w-[300px] bg-white  flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
                
    //         <div class="flex flex-col items-center  pb-10">
    //             <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/1.png" alt="Bonnie image"/>
    //             <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yash Anbhore</h5>
    //             <span class="text-sm text-gray-500 dark:text-gray-400">President</span>
    //             <div class="flex mt-4 space-x-3 md:mt-6">
    //                 <BsInstagram/>
    //                 <BsLinkedin/>

    //             </div>
    //         </div>
    //     </div>  
        
    //     <div class="w-[300px] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                
    //         <div class="flex flex-col items-center  pb-10">
    //             <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/1.png" alt="Bonnie image"/>
    //             <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yash Anbhore</h5>
    //             <span class="text-sm text-gray-500 dark:text-gray-400">Vice President</span>
    //             <div class="flex mt-4 space-x-3 md:mt-6">
    //                 <BsInstagram/>
    //                 <BsLinkedin/>

    //                 </div>
    //             </div>
    //         </div>  
    //         <div class="w-[300px] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                
    //             <div class="flex flex-col items-center  pb-10">
    //                 <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/1.png" alt="Bonnie image"/>
    //                 <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yash Anbhore</h5>
    //                 <span class="text-sm text-gray-500 dark:text-gray-400">Technical Head</span>
    //                 <div class="flex mt-4 space-x-3 md:mt-6">
    //                     <BsInstagram/>
    //                     <BsLinkedin/>
    
    //                     </div>
    //                 </div>
    //             </div>  
    //   </div>
    //   <div className="row-cards2 pt-[4rem] flex gap-4">

    //     <div class="w-[300px] bg-white  flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                
    //         <div class="flex flex-col items-center  pb-10">
    //             <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/1.png" alt="Bonnie image"/>
    //             <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yash Anbhore</h5>
    //             <span class="text-sm text-gray-500 dark:text-gray-400"></span>
    //             <div class="flex mt-4 space-x-3 md:mt-6">
    //                 <BsInstagram/>
    //                 <BsLinkedin/>

    //             </div>
    //         </div>
    //     </div>  
        
    //     <div class="w-[300px] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                
    //         <div class="flex flex-col items-center  pb-10">
    //             <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/1.png" alt="Bonnie image"/>
    //             <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yash Anbhore</h5>
    //             <span class="text-sm text-gray-500 dark:text-gray-400">Human</span>
    //             <div class="flex mt-4 space-x-3 md:mt-6">
    //                 <BsInstagram/>
    //                 <BsLinkedin/>

    //                 </div>
    //             </div>
    //         </div>  
    //         <div class="w-[300px] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                
    //             <div class="flex flex-col items-center  pb-10">
    //                 <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/1.png" alt="Bonnie image"/>
    //                 <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yash Anbhore</h5>
    //                 <span class="text-sm text-gray-500 dark:text-gray-400">Human</span>
    //                 <div class="flex mt-4 space-x-3 md:mt-6">
    //                     <BsInstagram/>
    //                     <BsLinkedin/>
    
    //                     </div>
    //                 </div>
    //             </div>  
    //   </div>
    //   <div className="row-cards3 pt-[4rem] flex gap-4">

    //     <div class="w-[300px] bg-white  flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                
    //         <div class="flex flex-col items-center  pb-10">
    //             <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/1.png" alt="Bonnie image"/>
    //             <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yash Anbhore</h5>
    //             <span class="text-sm text-gray-500 dark:text-gray-400">Human</span>
    //             <div class="flex mt-4 space-x-3 md:mt-6">
    //                 <BsInstagram/>
    //                 <BsLinkedin/>

    //             </div>
    //         </div>
    //     </div>  
        
    //     <div class="w-[300px] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                
    //         <div class="flex flex-col items-center  pb-10">
    //             <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/1.png" alt="Bonnie image"/>
    //             <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yash Anbhore</h5>
    //             <span class="text-sm text-gray-500 dark:text-gray-400">Human</span>
    //             <div class="flex mt-4 space-x-3 md:mt-6">
    //                 <BsInstagram/>
    //                 <BsLinkedin/>

    //                 </div>
    //             </div>
    //         </div>  
    //         <div class="w-[300px] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                
    //             <div class="flex flex-col items-center  pb-10">
    //                 <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/1.png" alt="Bonnie image"/>
    //                 <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yash Anbhore</h5>
    //                 <span class="text-sm text-gray-500 dark:text-gray-400">Human</span>
    //                 <div class="flex mt-4 space-x-3 md:mt-6">
    //                     <BsInstagram/>
    //                     <BsLinkedin/>
    
    //                     </div>
    //                 </div>
    //             </div>  
    //   </div>
    // </div>
    <div className="container-team mb-2px">
        <div className="grid lg:grid-cols-3 gap-14">

        {CL.map((cards,index)=>(
            <div  key={index} class="main w-[500px] h-[500px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700 ">
                     <div class="pw flex flex-col items-center pb-10">
                    
                         <img class="pic w-54 h-54 mb-3 rounded-full shadow-lg" src="/assets/1.png" alt="Bonnie image"/>
                         <h5 class="title mb-1 text-xl font-large text-gray-900 dark:text-white">{cards.title}</h5>
                         <span class="pos text-sm text-gray-500 dark:text-gray-400">President</span>
                         <div class="s-handles flex mt-4 space-x-3 md:mt-6">
                             <BsInstagram/>
                             <BsLinkedin/>
                         </div>
                     </div>
                 </div>  
        ))}
        </div>

    </div>
  )
}

export default TeamCards