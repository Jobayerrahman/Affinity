"use client";
import Image from "next/image";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const LanguageSwitcher = ({dict}) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathArray = pathname.split('/');

  
  const languages = [
    {
      'code': 'en',
      'image': 'https://cdn.muzz.com/website-v4/img/shared/flags/us.svg',
      'language': `${dict.english}`
    },
    {
      'code': 'bn',
      'image': 'https://cdn.muzz.com/website-v4/img/shared/flags/bd.svg',
      'language': `${dict.bangla}`
    }
  ]
  
  const found = languages.find(lang => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(found ?? languages[0]);
  const [showLanguage, setShowLanguage] = useState(false);




  const handleLanguageChange = lang => {
    setSelectedLanguage(
        {
            ...selectedLanguage, 
            code: lang, 
            image: lang === 'en' ? 'https://cdn.muzz.com/website-v4/img/shared/flags/us.svg' : 'https://cdn.muzz.com/website-v4/img/shared/flags/bd.svg',
            language: lang === 'en' ? 'english' : 'bangla'
        }
    );
    setShowLanguage(false);

    if(pathname.includes("movie")){
        window.location.replace(`/${lang}/movies/${pathArray[pathArray.length-1]}`)
    }else{
        router.push(`/${lang}`)
    }

  }

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button 
            className={`flex items-center gap-2 p-2 
            ${showLanguage ? 'bg-[#101010]' : 'bg-transparent text-slate-900 dark:text-slate-100'}
            dark:text-slate-100 hover:text-slate-100 hover:bg-[#101010]`} 
            onClick={() => setShowLanguage(!showLanguage)}>
                <FontAwesomeIcon className="md:w-[16px] md:h-[16px] lg:block lg:w-[20px] lg:h-[20px] mx-2" icon={faLanguage} />
                <h2 className="md:text-[12px] lg:text-[14px] font-medium">{dict.language}</h2>
        </button>
        {showLanguage && (
          <div className="absolute top-full bg-white dark:bg-[#101010] p-2 z-10 shadow-lg">
            {
              languages.map(entry => (
                <li key={entry.code} onClick={() => handleLanguageChange(entry.code)}
                  className="flex items-center 
                  gap-2 p-2 rounded-md cursor-pointer 
                  hover:bg-gray-100 hover:text-slate-900
                  text-slate-900 dark:text-slate-100">
                  <Image
                    className="w-3 h-2"
                    src={entry.image}
                    alt="bangla"
                    height={60}
                    width={35}
                  />
                  <h2 className="md:text-[12px] lg:text-[14px] font-medium">{entry.language}</h2>
                </li>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;