import TeamCards from '../../component/TeamCards.jsx';
import Footer from '@/component/Footer.jsx';

const Page = () => {
    return (
        <div>
           
            <div className='mt-[3rem]'>
                <TeamCards/>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;