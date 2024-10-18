import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/logo2.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import ProductSearch from "../products/ProductSearch";


function TopHeader(props) {
    return (
        <div className="bg-white dark:bg-slate-800">
            <div className="flex justify-between items-center w-11/12 lg:w-10/12 max-w-7xl py-3 lg:px-2 lg:py-3 mx-auto">
                <div>
                    <Link href="/">
                        <Image 
                            className="max-w-[8rem] object-fit"
                            src={logo}
                            width="120px"
                            height="120px"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="w-3/6 sm:w-2/6">
                    <ProductSearch/>
                </div>
                <div className="flex justify-between items-center gap-4 text-slate-900 dark:text-slate-100">
                    <FontAwesomeIcon className="hidden sm:block w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] cursor-pointer" icon={faUser} />
                    <FontAwesomeIcon className="hidden sm:block w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] cursor-pointer" icon={faHeart} />
                    <FontAwesomeIcon className="hidden sm:block w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] cursor-pointer" icon={faBagShopping} />
                </div>
            </div>
        </div>
    );
}

export default TopHeader;