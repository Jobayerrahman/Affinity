import NavigationBar from "@/app/component/header/NavigationBar";
import { getDictionary } from "../dictionaries";
import TopHeader from "@/app/component/header/TopHeader";

export const metadata = {
  title: "Affinity",
  description: "Fashion House",
};

export default async function HomeRootLayout({ children, params: {lang} }) {
    const dictionary = await getDictionary(lang)
    
    return (
        <>
            <TopHeader/>
            <NavigationBar dict={dictionary}/>
            {children}
        </>
    );
}