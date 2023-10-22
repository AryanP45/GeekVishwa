import TeamCards from '../../component/TeamCards.jsx';
const Page = () => {
    return (
    <div className="cont flex justify-center items-center flex-col pt-[4.5%]">

        <div className="mb-4 text-3xl font-extrabold   md:text-5xl lg:text-6xl maintitle text-[35px] text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Our Team 
        </div>
        <TeamCards/>  
       </div>

      
    );
  };

  export default Page;