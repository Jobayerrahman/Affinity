'use client';
import Image from 'next/image';
import Slider from "react-slick";
import background from '@/public/banner/BannerBackground.png'
import bannerimage01 from '@/public/banner/BannerImage01.png'
import bannerimage02 from '@/public/banner/BannerImage02.png'
import bannerimage03 from '@/public/banner/BannerImage03.png'
import bannerimage04 from '@/public/banner/BannerImage04.png'

function TopBanner(props) {

    const CustomPrevArrow = (props) => (
        <div
            className="slick-arrow slick-prev"
            onClick={props.onClick}
            style={{ 
                zIndex: '10', 
                left: '30px', 
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
                zIndex: '10', 
                right: '30px', 
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
        autoplay: true,
        autoplaySpeed: 25000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };


    return (
        <Slider {...settings}>
            <div className={`w-full h-[50rem] px-1 mb-10 outline-none relative bg-[#f5eee7]`}>
                <div className='flex justify-between items-center w-11/12 lg:w-10/12 max-w-7xl h-full mx-auto lg:px-1 py-4'>
                    <div className='flex flex-col justiy-center items-start w-6/12'>
                        <h2 className='font-semibold text-[18px] text-slate-900 uppercase'>Sale! Up To 50% Off!</h2>
                        <h2 className='font-medium text-[70px] leading-[88px] text-slate-900 uppercase mb-5'>
                            Style Looks for <br/>
                            Every Season
                        </h2>
                        <button className='py-2 px-4 w-[7.5rem]
                        flex items-center justify-center gap-2 rounded-md
                        bg-[#101010] text-white hover:bg-[#101010]'>
                            Buy Now
                        </button>
                    </div>
                    <div className='w-6/12'>
                        <Image 
                            className="w-full h-full object-fit rounded-md"
                            src='https://anvogue.presslayouts.com/wp-content/uploads/2024/05/fashion6-slider-bg3.webp'
                            alt=""
                            width={1500}
                            height={1500}
                            style={{width:'600px', height:'700px'}}
                        />
                    </div>
                </div>
            </div>
            <div className={`w-full h-[50rem] px-1 mb-10 outline-none relative bg-[#f5eee7]`}>
                <div className='flex justify-between items-center w-11/12 lg:w-10/12 max-w-7xl h-full mx-auto lg:px-1 py-4'>
                    <div className='flex flex-col justiy-center items-start w-6/12'>
                        <h2 className='font-semibold text-[18px] text-slate-900 uppercase'>Sale! Up To 50% Off!</h2>
                        <h2 className='font-medium text-[70px] leading-[88px] text-slate-900 uppercase mb-5'>
                            Discover Your <br/>
                            Fashion Persona
                        </h2>
                        <button className='py-2 px-4 w-[7.5rem]
                        flex items-center justify-center gap-2 rounded-md
                        bg-[#101010] text-white hover:bg-[#101010]'>
                            Buy Now
                        </button>
                    </div>
                    <div className='w-6/12'>
                        <Image 
                            className="w-full h-full object-fit rounded-md"
                            src='https://anvogue.presslayouts.com/wp-content/uploads/2024/05/fashion6-slider-bg1.webp'
                            alt=""
                            width={1500}
                            height={1500}
                            style={{width:'600px', height:'700px'}}
                        />
                    </div>
                </div>
            </div>
            <div className={`w-full h-[50rem] px-1 mb-10 outline-none relative bg-[#f5eee7]`}>
                <div className='flex justify-between items-center w-11/12 lg:w-10/12 max-w-7xl h-full mx-auto lg:px-1 py-4'>
                    <div className='flex flex-col justiy-center items-start w-6/12'>
                        <h2 className='font-semibold text-[18px] text-slate-900 uppercase'>Sale! Up To 50% Off!</h2>
                        <h2 className='font-medium text-[70px] leading-[88px] text-slate-900 uppercase mb-5'>
                            Buy From Online <br/>
                            Get 20% Flat Discount
                        </h2>
                        <button className='py-2 px-4 w-[7.5rem]
                        flex items-center justify-center gap-2 rounded-md
                        bg-[#101010] text-white hover:bg-[#101010]'>
                            Buy Now
                        </button>
                    </div>
                    <div className='w-6/12'>
                        <Image 
                            className="w-full h-full object-fit rounded-md"
                            src='https://anvogue.presslayouts.com/wp-content/uploads/2024/05/fashion6-slider-bg2.webp'
                            alt=""
                            width={1500}
                            height={1500}
                            style={{width:'600px', height:'700px'}}
                        />
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default TopBanner;