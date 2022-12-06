import type { NextPage } from 'next';
import Banner from '~/components/shared/Banner';
import FeaturedBook from '~/components/shared/FeaturedBook';
import PopularBook from '~/components/shared/PopularBook';
import Quote from '~/components/shared/Quote';

const Home: NextPage = () => {
    return (
        <>
            <div className="smooth-effect mt-24 flex h-fit min-h-screen flex-col md:mt-28">
                <div className=" lg:max-h-screen">
                    <div className="absolute-center w-full bg-[#F3F2EC] lg:h-[95vh]">
                        <Banner />
                    </div>
                </div>

                <div className="absolute-center h-screen bg-[#EFEBE4]">
                    <FeaturedBook />
                </div>

                <div className="absolute-center h-full min-h-screen bg-[#F3F2EC]">
                    <PopularBook />
                </div>

                <div className="absolute-center h-72 bg-[#EFEBE4]">
                    <Quote />
                </div>
            </div>
        </>
    );
};

export default Home;
