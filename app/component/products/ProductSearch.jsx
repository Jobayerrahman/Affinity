import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ProductSearch(props) {
    return (
        <div 
            className='flex items-center justify-between 
                border-[1.75px] border-[#475569] rounded-md'
        >
            <input 
                className="w-full py-2 px-4 
                    text-[11px] md:text-[14px] 
                    focus:outline-none rounded-md
                    dark:bg-slate-800 text-slate-900 dark:text-slate-100" 
                placeholder="Search products..." 
            />
            <button>
                <FontAwesomeIcon 
                    className="w-[11px] :h-[11px] 
                        md:w-[14px] md:h-[14px] 
                        lg:w-[18px] lg:h-[18px] 
                        mx-4 text-[#27272a] dark:text-slate-100" 
                    icon={faSearch} 
                />
            </button>
        </div>
    );
}

export default ProductSearch;