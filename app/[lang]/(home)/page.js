import { getDictionary } from "../dictionaries";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import ProductList from "@/app/component/products/ProductList";


import TopBanner from "@/app/component/banner/TopBanner/TopBanner";
import MidBanner from "@/app/component/banner/MidBanner/MidBanner";
import MenProduct from "@/app/component/products/men/MenProduct";
import WomenProduct from "@/app/component/products/women/WomenProduct";
import AccessoryProduct from "@/app/component/products/accessory/AccessoryProduct";

import female from '@/public/Image/female-3piece.jpg';
import male from '@/public/Image/man-pant.jpg';
import winter from '@/public/Image/man-jacket.jpg';
import Footer from "@/app/component/footer/Footer";

export default async function Home({params: {lang}}) {
  const dictionaries = await getDictionary(lang)

  return (
    <main>
      <div className="w-full">
        <TopBanner/>
        {/* <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-11/12 lg:w-10/12 max-w-7xl py-3 lg:px-2 lg:py-3 mx-auto">
          <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Affinity Home Page</h3>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
          <div className="flex justify-between items-center py-4 py-2">
            <FontAwesomeIcon className="hidden sm:block w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] cursor-pointer text-white" icon={faKey} />
            <FontAwesomeIcon className="hidden sm:block w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] cursor-pointer text-white" icon={faFacebook} />
          </div>
        </div> */}
        <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto lg:px-1 py-4">
          <MenProduct/>
        </div>
        <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto lg:px-1 py-4">
          <WomenProduct/>
        </div>
        <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto lg:px-1 py-4">
          <div className="flex justify-between items-center gap-2">
            <div className="">
              <MidBanner image={female} title='Must-Haves' heading='Female Fashion' link='/'/>
            </div>
            <div className="">
              <MidBanner image={male} title='Fashion Essentials' heading={`Latest Men's`} link='/'/>
            </div>
            <div className="">
              <MidBanner image={winter} title='collections' heading='Winter Sale' link='/'/>
            </div>
          </div>
        </div>
        <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto lg:px-1 py-4">
          <AccessoryProduct/>
        </div>
        <Footer/>
      </div>
    </main>
  );
}
