
import Nav from '@/component/Nav'
import Hero from '@/component/Hero'
import AboutGFG from '@/component/AboutGFG'
import Footer from '@/component/Footer'
import Sponsors from '@/component/Sponsors'
import golddata from '../../public/assets/gold_data'
import silverdata from '../../public/assets/silver_data'
import Banner from '@/component/Banner'
import TimeLine from '@/component/TimeLine'
import Prize from '@/component/Prize'


export default function Home() {

  const gfghead="About us"
  const gfgdesc= "GeeksforGeeks Student Chapters are university-based community chapters creating a coding culture for students interested in Computer Science and other core technical competencies. By joining the GeeksforGeeks student Chapters, students will have the opportunity to:Get an internship at GeeksforGeeks. Grow their knowledge in a peer-to-peer learning environment.Learn to build effective and optimized solutions for local businesses and their community as per the latest technology trends.Great learning and networking experience."

  const gwhead="what is geekVishwa"
  const gwgdesc= "GeekVishwa Hackathon is planned to be one of the largest hybrid (Offline-Online) hackathons in Pune, Organized by GeeksForGeeks Student Chapter VIIT.It is event of unprecedented scale, opportunity, and rewards, where we intent to attract and showcase the brightest talents across the plethora of engineering colleges in Pune.This event is designed to foster creativity, collaboration, and innovation among participants. It offers an excellent opportunity for participants to showcase their skills, network with peers, and potentially win prizes and recognition for their work.During the event, participants will work in teams to develop innovative ideas that can solve real-world problems. They will be encouraged to use their creativity, technical skills, and critical thinking abilities to develop solutions that are both practical and effective."

  return (
    <div className='content'>
      {/* <Nav /> */}
      <Hero />
      <AboutGFG head={gfghead} desc={gfgdesc} />
      <div id="event-section">
      <AboutGFG head={gwhead} desc={gwgdesc} />
      </div>
      <Banner/>
      <Prize/>
      <TimeLine/>
      <div id='sponsors' className='flex justify-center align-center gfg-gradient text-[50px] mb-[3rem] sponsor-main-title font-black'>
        <span>Organizations who </span><span> &nbsp;helped us in our Lift Off</span>
      </div>
      <Sponsors type="Gold Sponsors" data={golddata}/>
      <Sponsors type="Silver Sponsors" data={silverdata}/>
      <Footer/>

    </div>

  )
}
