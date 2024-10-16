import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function ProductCard({photo,name}) {
    return (
        <div className='mx-2'>
            <div
                className={`relative delay-150 w-full
                h-[205px] lg:h-[310px] 
                bg-[#f8f8f8] bg-cover bg-center 
                transition hover:scale-110 duration-300
                ease-out transform rounded-md`}
                style={{backgroundImage:`url(${photo})`}}>

                <div className='absolute top-[18px] left-[8px] p-1 bg-[#f59e0b] flex justify-between items-center'>
                    <h2 className='text-[12px] font-semibold text-white'>30% Off</h2>
                    <FontAwesomeIcon className="hidden sm:block w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] cursor-pointer" icon={faHeart } />
                </div>
            </div>
            <div className="bg-[#ffde59] text-slate-900 mt-4 mb-2 w-min px-[6px] py-[4px] rounded-[3px]">
                <Link href={`category/Female`}>
                    <h2 className='text-[12px] font-semibold'>Female</h2>
                </Link>
            </div>
            <h2 className="text-sm lg:text-base mb-2">
                <Link className="text-base font-bold text-slate-900 dark:text-slate-100" href=''>
                    {name}
                </Link>
            </h2>
            <div className="text-slate-900 dark:text-slate-100 text-sm my-2">The garments labelled as Committed are products that have been produced using...</div>
            <p className="my-1 text-[15px] text-slate-600 dark:text-slate-300 font-semibold"><span className="text-[#ef4444] font-semibold line-through">$14</span> $5</p>
            
            <Link className="" href=''>
                <button className='w-full bg-[#ffde59] cursor-pointer p-2 mt-4 rounded-md hover:bg-[#ffde59]'>
                    <p className="text-slate-800 text-sm font-semibold">Buy Now</p>
                </button>
            </Link>
        </div>
    );
}

export default ProductCard;