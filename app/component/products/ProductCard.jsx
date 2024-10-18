import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function ProductCard({photo,name}) {
    return (
        <div className='mx-2'>
            <div
                className={`relative delay-150 w-full
                h-[205px] lg:h-[310px] bg-[#f8f8f8] 
                bg-cover bg-center rounded-md`}
                style={{backgroundImage:`url(${photo})`}}>

                <div className='absolute top-[18px] left-[8px] p-1 bg-[#f59e0b]'>
                    <h2 className='text-[12px] font-semibold text-white'>30% Off</h2>
                </div>
                <div className='absolute top-[18px] right-[8px] p-1 text-slate-100'>
                    <FontAwesomeIcon className="hidden sm:block w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] cursor-pointer" icon={faHeart } />
                </div>
            </div>
            {/* <div className="bg-[#ffde59] text-slate-900 mt-4 mb-2 w-min px-[6px] py-[4px] rounded-[3px]">
                <Link href={`category/Female`}>
                    <h2 className='text-[12px] font-semibold'>Female</h2>
                </Link>
            </div> */}
            <div className='flex justify-between items-start'>
                <div className='w-9/12'>
                    <h2 className="my-1 text-sm lg:text-base">
                        <Link className="text-base font-bold text-slate-900 dark:text-slate-100" href=''>
                            {name}
                        </Link>
                    </h2>
                </div>
                <div className='w-3/12 text-end'>
                    <p className="my-1 text-[15px] text-slate-600 dark:text-slate-300 font-semibold"><span className="text-[#ef4444] font-semibold line-through">$14</span> $5</p>
                </div>
            </div>
            
            <Link className="" href=''>
                <button className='w-full bg-[#ffde59] cursor-pointer p-2 mt-2 rounded-md hover:bg-[#ffde59]'>
                    <p className="text-slate-800 text-sm font-semibold">Buy Now</p>
                </button>
            </Link>
        </div>
    );
}

export default ProductCard;