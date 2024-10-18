import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function MidBanner({image,heading,title,link}) {
    return (
        <div className='mx-1 my-2 sm:mx-1 md:mx-2 md:my-2 relative'>
            <Image 
                className=" h-[15rem] object-cover rounded-md"
                src={image}
                alt=""
            />

            <div className='py-8 px-10 absolute top-0 w-[100%] h-[100%] flex flex-col justify-center items-start rounded-md'>
                <h5 className='text-[16px] font-bold text-slate-100 m-0'>{heading}</h5>
                <h2 className='text-[28px] font-bold text-white m-0 uppercase'>{title}</h2>
                <Link href={link} className='text-white font-semibold text-[14px] border-b-2 border-slate-50'>See More</Link>
            </div>
        </div>
    );
}

export default MidBanner;