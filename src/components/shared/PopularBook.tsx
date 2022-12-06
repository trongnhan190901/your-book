import BookCard from './BookCard';
import { FeaturedBookItems } from '~/constants';

const PopularBook = () => {
    return (
        <>
            <div className="absolute-center my-20 h-fit min-h-screen w-full flex-col">
                <h1 className="mb-6 text-center font-tertiary text-7xl lg:mb-10 lg:text-8xl">
                    Sách nổi tiếng
                </h1>
                <div className="absolute-center mb-8 w-4/5 flex-row">
                    <div className="mx-4 font-secondary text-3xl font-medium text-gray-400 md:mx-0 md:flex">
                        <button className="mx-6 my-4 underline-offset-2 hover:underline md:w-36">
                            Tất cả
                        </button>
                        <button className="mx-6 my-4 underline-offset-2 hover:underline md:w-36">
                            Kinh doanh
                        </button>
                        <button className="mx-6 my-4 underline-offset-2 hover:underline md:w-36">
                            Công nghệ
                        </button>
                    </div>
                    <div className="mx-4 font-secondary text-3xl font-medium text-gray-400 md:mx-0 md:flex">
                        <button className="mx-6 my-4 underline-offset-2 hover:underline md:w-36">
                            Phiêu lưu
                        </button>
                        <button className="mx-6 my-4 underline-offset-2 hover:underline md:w-36">
                            Lãng mạn
                        </button>
                        <button className="mx-6 my-4 underline-offset-2 hover:underline md:w-36">
                            Viễn tưởng
                        </button>
                    </div>
                </div>

                <div className="absolute-center flex h-fit w-[90%] flex-col lg:flex-row">
                    <div className="absolute-center flex h-fit flex-col md:flex-row">
                        {FeaturedBookItems.slice(0, 2).map((item, index) => {
                            return (
                                <div
                                    className="absolute-center mx-6 mb-12 h-fit"
                                    key={index}
                                >
                                    <BookCard product={item} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute-center flex h-fit flex-col md:flex-row">
                        {FeaturedBookItems.slice(2, 4).map((item, index) => {
                            return (
                                <div
                                    className="absolute-center mx-6 mb-12 h-fit"
                                    key={index}
                                >
                                    <BookCard product={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="absolute-center flex h-fit flex-col lg:flex-row">
                    <div className="absolute-center flex h-fit flex-col md:flex-row">
                        {FeaturedBookItems.slice(4, 6).map((item, index) => {
                            return (
                                <div
                                    className="absolute-center mx-6 mb-12 h-fit"
                                    key={index}
                                >
                                    <BookCard product={item} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute-center flex h-fit flex-col md:flex-row">
                        {FeaturedBookItems.slice(6, 8).map((item, index) => {
                            return (
                                <div
                                    className="absolute-center mx-6 mb-12 h-fit"
                                    key={index}
                                >
                                    <BookCard product={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
export default PopularBook;
