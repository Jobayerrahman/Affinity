import { getDictionary } from "../../dictionaries";

export default async function Admin({params: {lang}}) {
  const dictionaries = await getDictionary(lang)
  
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <h2 className="text-3xl text-red-500 font-semibold">Admin Home</h2>
    </div>
  );
}