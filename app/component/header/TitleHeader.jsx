import React, { Children } from 'react';

function TitleHeader({title,children}) {
    return (
        <div className='flex justify-between items-center w-full'>
            <h2 className='text-[22px] font-bold text-slate-900 dark:text-slate-100'>{title}</h2>
            {children}
            {/* <button className='w-[120px] bg-[#5cbe00] cursor-pointer p-2 rounded-md text-white text-[14px] font-semibold hover:bg-[#64cf00]'>See All</button> */}
        </div>
    );
}

export default TitleHeader;