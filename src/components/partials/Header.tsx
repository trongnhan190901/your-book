import Logo from '~/components/icons/Logo';
import SearchInput from '~/components/shared/SearchInput';
import Link from 'next/link';

import {
    Bars3Icon,
    ShoppingBagIcon,
    UserCircleIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
    return (
        <>
            <header className="absolute-center fixed z-10 h-24 w-full border-b-[1px] border-gray-300 bg-[#EFEBE4] font-primary md:h-28">
                <nav className="absolute-center w-full lg:flex lg:w-5/6">
                    {/* Logo */}
                    <Link href="/">
                        <div className="mx-4 -mt-4 flex h-28 justify-center md:mt-0 lg:mx-0">
                            <Logo style="md:w-64 w-48 cursor-pointer" />
                        </div>
                    </Link>

                    <div className="absolute-center flex h-24 w-full bg-[#EFEBE4]">
                        {/* Category */}
                        <div className="lg:absolute-center mx-3 hidden cursor-pointer justify-end md:mx-8">
                            <Bars3Icon className="h-14 w-14" />
                        </div>

                        {/* Search bar */}
                        <div className="md:absolute-center hidden h-16 md:w-[150%] lg:w-[120%]">
                            <SearchInput />
                        </div>

                        {/* Right Side Button */}
                        <div className="flex w-full justify-end font-secondary text-3xl font-medium">
                            <span className="lg:absolute-center mx-8 hidden  cursor-pointer hover:underline hover:underline-offset-8">
                                Cửa hàng
                            </span>
                            <span className="lg:absolute-center mx-8 hidden cursor-pointer hover:underline hover:underline-offset-8">
                                Liên hệ
                            </span>
                            {/*Mobile Icon Search */}
                            <div className="absolute-center mr-8 cursor-pointer md:hidden">
                                <MagnifyingGlassIcon className="h-12 w-12" />
                            </div>
                            {/* Carts */}
                            <div className="md:absolute-center mr-8 hidden cursor-pointer lg:mx-8">
                                <ShoppingBagIcon className="h-12 w-12" />
                            </div>

                            {/* User Menu */}
                            <div className="md:absolute-center mr-8 hidden cursor-pointer lg:mx-8">
                                <UserCircleIcon className="h-14 w-14" />
                            </div>

                            <div className="absolute-center mr-8 cursor-pointer lg:hidden">
                                <Bars3Icon className="h-14 w-14" />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
