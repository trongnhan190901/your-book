import Link from 'next/link';
import { BookPreview } from '~/types';

interface BookCardProps {
    product: BookPreview;
}
const BookCard = ({ product }: BookCardProps) => {
    return (
        <>
            <Link href="#">
                <div className="h-[500px] w-[285px] rounded-xl bg-white">
                    <img
                        src={product.img}
                        className="z-0 mt-12 h-auto max-h-[450px] w-full"
                    />
                    <div className="mt-6 flex flex-col px-6 text-center font-tertiary">
                        <h2 className="h-[80px] text-5xl leading-tight line-clamp-2">
                            {product.title}
                        </h2>
                        <span className="text-2xl text-gray-500">
                            {product.author}
                        </span>
                        <span className="my-6 text-4xl leading-tight ">
                            ₫ {product.price}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
};
export default BookCard;
