"use client"
import { useState } from "react";
import { Transition } from "@headlessui/react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import LanguageSwitcher from "@/feature/LanguageSwitcher";

function NavigationBar({dict}) {
    const [isOpen, setIsOpen] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);


    return (
        <nav className="bg-slate-100 dark:bg-slate-700">
            <div className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-2 lg:px-2 lg:py-2 mx-auto">
                <div className="mr-4 w-[200px] h-[100%] relative">
                    <button 
                        className="py-2 px-4 w-[13.5rem]
                        flex items-center justify-center gap-2
                        bg-[#101010] text-white hover:bg-[#101010]"
                        onClick={() => setShowCategory(!showCategory)}
                    >
                        <span className="text-[14px] font-bold uppercase">{dict.all_categories}</span>
                        <FontAwesomeIcon className="hidden lg:block w-[20px] h-[12px] font-bold" icon={faAngleDown} />
                    </button>

                    {showCategory && (
                        <div className="absolute left-0 top-full w-[13.5rem] bg-white dark:bg-[#101010] p-2 z-10 shadow-lg z-20">
                                <Link href={`/category/Men`}>
                                    <li 
                                        className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 hover:text-slate-900 text-slate-900 dark:text-slate-100"
                                    >
                                        Men
                                    </li>
                                </Link>
                                <Link href={`/category/Female`}>
                                    <li 
                                        className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 hover:text-slate-900 text-slate-900 dark:text-slate-100"
                                    >
                                        Female       
                                    </li>
                                </Link>
                                <Link href={`/category/Accessory`}>
                                    <li 
                                        className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 hover:text-slate-900 text-slate-900 dark:text-slate-100"
                                    >
                                        Accesosory
                                    </li>
                                </Link>
                        </div>
                    )}
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center 
                        p-2 w-10 h-10 justify-center 
                        text-sm text-gray-500 rounded-lg 
                        md:hidden hover:bg-gray-100 
                        focus:outline-none focus:ring-2 focus:ring-gray-200 
                        dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        )}
                    </button>
                </div>
                <div class="flex justify-around items-center hidden w-full md:flex md:w-full md:order-1 text-slate-900 dark:text-slate-100" >                    
                    <div className="flex items-center justify-center md:w-1/2 md:gap-2 lg:gap-5 lg:w-10/12 text-slate-900 dark:text-slate-100">
                        <div className="flex items-center gap-4">
                            <Link href='/'>
                                <h2 className="md:text-[12px] lg:text-[14px] font-semibold hover:text-[#ffde59] hover:font-bold">{dict.home}</h2>
                            </Link>
                            <Link href='/shop'>
                                <h2 className="md:text-[12px] lg:text-[14px] font-semibold hover:text-[#ffde59] hover:font-bold">{dict.shop}</h2>
                            </Link>
                            <Link href='/contact'>
                                <h2 className="md:text-[12px] lg:text-[14px] font-semibold hover:text-[#ffde59] hover:font-bold">{dict.contact}</h2>
                            </Link>
                            <Link href='/about'>
                                <h2 className="md:text-[12px] lg:text-[14px] font-semibold hover:text-[#ffde59] hover:font-bold">{dict.about}</h2>
                            </Link>
                                
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-full gap-2 md:w-1/2 lg:gap-5 lg:w-2/12">
                        <div className="flex items-center justify-between py-2 cursor-pointer">
                            <div className="relative">
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon className="w-[12px] h-[12px] md:w-[12px] md:h-[12px] lg:block" icon={faPhone} />
                                    <h2 className="md:text-[12px] lg:text-[14px] lg:hidden xl:block font-semibold">+88014-05811201</h2>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex items-center justify-center cursor-pointer">
                            <div className="relative">
                                <LanguageSwitcher dict={dict}/>
                            </div>
                        </div> */}
                    </div>
                </div>


            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-6 pt-2 pb-3 space-y-1 sm:px-8">
                            <Link href='/'>
                                <h2 className="mb-3 md:text-[12px] lg:text-[14px] font-semibold hover:text-[#ffde59] hover:font-bold">Home</h2>
                            </Link>
                            <Link href='/'>
                                <h2 className="mb-3 md:text-[12px] lg:text-[14px] font-semibold hover:text-[#ffde59] hover:font-bold">Products</h2>
                            </Link>
                            <Link href='/'>
                                <h2 className="mb-3 md:text-[12px] lg:text-[14px] font-semibold hover:text-[#ffde59] hover:font-bold">Shop</h2>
                            </Link>
                            <Link href='/'>
                                <h2 className="mb-3 md:text-[12px] lg:text-[14px] font-semibold hover:text-[#ffde59] hover:font-bold">Contact Us</h2>
                            </Link>
                            <Link href='/'>
                                <h2 className="mb-3 md:text-[12px] lg:text-[14px] font-semibold hover:text-[#ffde59] hover:font-bold">About Us</h2>
                            </Link>

                            <div className="flex justify-between items-center my-5 py-3">
                                <div className="flex items-center justify-start cursor-pointer">
                                    <div className="relative">
                                        <button className="flex items-center" onClick={() => setShowLanguage(!showLanguage)}>
                                            <FontAwesomeIcon className="md:w-[16px] md:h-[16px] lg:block lg:w-[20px] lg:h-[20px] mr-2" icon={faLanguage} />
                                            <h2 className="md:text-[12px] lg:text-[14px] font-medium">Language</h2>
                                        </button>
                                        {showLanguage && (
                                            <div className="absolute left-0 top-full mt-2 w-[200px] rounded-md bg-white p-2 z-10 shadow-lg">

                                                    <li 
                                                        className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                                                    >
                                                        Bangla
                                                    </li>
                                                    <li 
                                                        className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                                                    >
                                                        English
                                                    </li>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center justify-start cursor-pointer">
                                    <FontAwesomeIcon className="w-[14px] h-[14px] lg:block md:w-[16px] md:h-[16px] w-[20px] h-[20px] mr-2" icon={faPhone} />
                                    <div>
                                        <h2 className="md:text-[12px] lg:text-[14px] font-medium">+880-1233521213</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default NavigationBar;