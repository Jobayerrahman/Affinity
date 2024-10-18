import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/logo/logo2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTelegram  } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    return (
        <div className='w-full bg-gray-100 py-5 lg:py-8'>
            <footer className="w-11/12 lg:w-10/12 max-w-7xl mx-auto flex flex-wrap items-start justify-between px-5 py-4 lg:py-10">
                <div className=" mb-5 px-5 py-2  flex flex-col justify-start items-start">
                    <Link href="/">
                        <Image 
                            className="w-[10rem] object-fit mb-2"
                            src={logo}
                            alt=""
                        />
                    </Link>
                    <span className="text-[18px] text-slate-500 font-semibold tracking-wide">Fashion For EveryOne</span>
                </div>
                <div className=" mb-5 px-5 md:px-10 py-2 flex flex-col justify-start items-start">
                    <p className='text-slate-900 dark:text-slate-100 text-[18px] font-semibold'>About Affinity</p>
                    <button className="block mt-2 text-[16px] hover:font-semibold">Help/FAQ</button>
                    <button className="block mt-2 text-[16px] hover:font-semibold">Returns & Exchanges</button>
                    <button className="block mt-2 text-[16px] hover:font-semibold">Sizing</button>
                    <button className="block mt-2 text-[16px] hover:font-semibold">Gift Cards</button>
                    <button className="block mt-2 text-[16px] hover:font-semibold">Contact Us</button>
                </div>
                <div className=" mb-5 px-5 md:px-10 py-2 flex flex-col justify-start items-start">
                    <p className='text-slate-900 dark:text-slate-100 text-[18px] font-semibold'>Account Info</p>
                    <button className="block mt-2 text-[16px] hover:font-semibold">My Account</button>
                    <button className="block mt-2 text-[16px] hover:font-semibold">Orders</button>
                    <button className="block mt-2 text-[16px] hover:font-semibold">My Wishlist</button>
                    <button className="block mt-2 text-[16px] hover:font-semibold">Track Order</button>
                </div>
                <div className="mb-5 pl-5 md:pl-10 py-2 flex flex-col justify-start items-start">
                    <p className='text-slate-900 dark:text-slate-100 text-[18px] font-semibold'>Follow Us</p>
                    <div className='flex mt-2'>
                        <Link href=''>
                            <FontAwesomeIcon className="w-[25px] h-[25px] mr-10 text-[#4267B2]" icon={faSquareFacebook} />
                        </Link>
                        <Link href='https://wa.me/+8801405811201'>
                            <FontAwesomeIcon className="w-[25px] h-[25px] mr-10 text-[#5cbe00]" icon={faSquareWhatsapp} />
                        </Link>
                        <Link href=''>
                            <FontAwesomeIcon className="w-[25px] h-[25px] mr-10 text-[#0088cc]" icon={faTelegram} />
                        </Link>
                        <Link href=''>
                            <FontAwesomeIcon className="w-[25px] h-[25px] mr-10 text-[#dc2626]" icon={faInstagram} />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;