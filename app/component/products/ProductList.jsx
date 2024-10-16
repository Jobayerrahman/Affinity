import React from 'react';
import ProductCard from './ProductCard';

function ProductList(props) {
    return (
        <ul className="relative flex flex-wrap justify-start items-stretch list-none">
            <li className='self-auto w-full px-[0px] mb-[20px] md:w-6/12 md:px-[10px] lg:w-3/12 lg:px-[5px] xxl:px-[10px]'>
                <ProductCard photo="http://localhost:3000/Image/female.jpg" name='Female Fashion'/>
            </li>
            <li className='self-auto w-full px-[0px] mb-[20px] md:w-6/12 md:px-[10px] lg:w-3/12 lg:px-[5px] xxl:px-[10px]'>
                <ProductCard photo="http://localhost:3000/Image/female-3piece.jpg" name='Female 3 part'/>
            </li>
            <li className='self-auto w-full px-[0px] mb-[20px] md:w-6/12 md:px-[10px] lg:w-3/12 lg:px-[5px] xxl:px-[10px]'>
                <ProductCard photo="http://localhost:3000/Image/man-jacket.jpg" name='Man Jacket'/>
            </li>
            <li className='self-auto w-full px-[0px] mb-[20px] md:w-6/12 md:px-[10px] lg:w-3/12 lg:px-[5px] xxl:px-[10px]'>
                <ProductCard photo="http://localhost:3000/Image/man-pant.jpg" name='Man Pant'/>
            </li>
            <li className='self-auto w-full px-[0px] mb-[20px] md:w-6/12 md:px-[10px] lg:w-3/12 lg:px-[5px] xxl:px-[10px]'>
                <ProductCard photo="http://localhost:3000/Image/female.jpg" name='Female Fashion'/>
            </li>
        </ul>
    );
}

export default ProductList;