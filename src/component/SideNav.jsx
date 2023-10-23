import Link from 'next/link'
import React from 'react'

const SideNav = () => {
  return (
    <div id='side-nav' className='text-white absolute w-[70%] left-[-70%] flex flex-col items-center justify-center'>
       <Link href="/" className='sidebar-nav-link'>Home</Link>
       <Link href="/#event-section" className='sidebar-nav-link'>Event</Link>
       <Link href="/team" className='sidebar-nav-link'>Team</Link>
       <Link href="/#sponsors"  className='sidebar-nav-link'>Sponsors</Link>
       <Link href="#footer" className='sidebar-nav-link'>Contact</Link>
    </div>
  )
}

export default SideNav