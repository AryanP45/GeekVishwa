"use client"
import Link from 'next/link'
import React from 'react'
import {TfiMenuAlt} from "react-icons/tfi"
import { useState } from 'react'
const Nav = () => {
    const [toggle, settoggle] = useState(false)
    const handleClick  =()=>{
        if(!toggle){
            document.getElementById("side-nav").style.left="0%"
        }
        else{
            
            document.getElementById("side-nav").style.left="-70%"
        }
        settoggle(!toggle)
    }
    return (
        <div id='home' className=' nav-wrapper '>
            <div className='sticky top-0 h-full'>
                <img src="../assets/gfg_logo_small.png" alt="logo" width="70px" className='h-[80%] pt-[8px] mx-[2rem] nav-logo' />
            </div>
        <div  className=' items-center nav-wrapper bg-[*]  flex justify-center  '>
            <div className='lg:text-[20px] text-white md:text-[16px]'>
                <Link href="/" className='mx-[3rem] nav-link'>Home</Link>
                <Link href="/#event-section"className='mx-[3rem] nav-link'>Events</Link>
                <Link href="/team"className='mx-[3rem] nav-link'>Team</Link>
                <Link href="/#sponsors"className='mx-[3rem] nav-link'>Sponsors</Link>
                <Link href="#footer"className='mx-[3rem] nav-link'>Contact</Link>
            </div>
            <div className='flex justify-center items-center text-white menu-icon hidden' onClick={handleClick} >
            <TfiMenuAlt/>
            </div>
        </div>

        </div>
    )
}

export default Nav