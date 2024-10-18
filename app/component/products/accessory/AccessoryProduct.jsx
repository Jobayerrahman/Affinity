'use client';
import { useState } from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard";
import TitleHeader from "../../header/TitleHeader";

function AccessoryProduct(props) {
    const [category, setCategory] = useState('men');
    const CustomPrevArrow = (props) => (
        <div
            className="slick-arrow slick-prev"
            onClick={props.onClick}
            style={{ 
                zIndex: '99', 
                left: '-50px', 
                padding: '30px 20px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                borderRadius: '5px', 
                background:'#00000040' 
            }}
        >
        </div>
    );
    
    const CustomNextArrow = (props) => (
        <div
            className="slick-arrow slick-next"
            onClick={props.onClick}
            style={{ 
                zIndex: '99', 
                right: '-50px', 
                padding: '30px 20px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                borderRadius: '5px', 
                background:'#00000040' 
            }}
        >
        </div>
    );

    var settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
    };
    return (
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto lg:px-1 py-10">
                <TitleHeader title='Accessory Products'>
                  <div className="flex justify-between items-center bg-slate-100 p-1 rounded-lg gap-3">
                    <button onClick={()=>setCategory('men')} className={`py-2 px-4 cursor-pointer font-semibold text-slate-700 dark:text-slate-100 ${category ==='men' ? 'bg-[#cbd5e1]' : 'bg-transparent'} rounded-md uppercase`}>Men</button>
                    <button onClick={()=>setCategory('women')} className={`py-2 px-4 cursor-pointer font-semibold text-slate-700 dark:text-slate-100 ${category ==='women' ? 'bg-[#cbd5e1]' : 'bg-transparent'} rounded-md uppercase`}>Women</button>
                  </div>
                </TitleHeader>
                <div className="my-4">
                    <Slider {...settings}>
                        <ProductCard photo="http://localhost:3000/Image/female.jpg" name='MENS T-SHIRT T-shirt'/>
                        <ProductCard photo="http://localhost:3000/Image/female.jpg" name='MENS T-SHIRT T-shirt'/>
                        <ProductCard photo="http://localhost:3000/Image/female.jpg" name='MENS T-SHIRT'/>
                        <ProductCard photo="http://localhost:3000/Image/female.jpg" name='MENS T-SHIRT T-shirt'/>
                        <ProductCard photo="http://localhost:3000/Image/female.jpg" name='Female Fashion'/>
                        <ProductCard photo="http://localhost:3000/Image/female.jpg" name='MENS T-SHIRT T-shirt'/>
                    </Slider>
                </div>
        </section>
    );
}

export default AccessoryProduct;