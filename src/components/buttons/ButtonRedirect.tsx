import Link from 'next/link';

interface ButtonProps {
    href: string;
    title: string;
}
const ButtonRedirect = ({ href, title }: ButtonProps) => {
    return (
        <>
            <Link href={href}>
                <button className="absolute-center h-[45px] w-56 overflow-hidden rounded-xl border-2 border-black text-[1.625rem] font-medium text-black hover:bg-black hover:text-white">
                    {title}
                </button>
            </Link>
        </>
    );
};

export default ButtonRedirect;
