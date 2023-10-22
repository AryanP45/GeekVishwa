import TeamCards from '../../component/TeamCards.jsx';
const Page = () => {
    return (
        <div>
            <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Our Team</span>
            </div>
            <div className='mt-[3rem]'>
                <TeamCards/>
            </div>
        </div>
    );
};

export default Page;