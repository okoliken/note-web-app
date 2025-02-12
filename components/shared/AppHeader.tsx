import { Input } from "../ui/input"
import { Settings } from "lucide-react";
export const AppHeader = () => {
    return (
       <>
        <header className="h-[81px] p-[2rem] border-b border-base-200 flex items-center justify-between sticky top-0 bg-white z-10">
           <h3 className="text-2xl font-bold leading-[28.8px] tracking-[-0.5px]">All Notes</h3>

           <div className="flex items-center gap-7">
             <Input hasSearchIcon className="w-[300px]" placeholder="Search by title, content, or tags…" />
             <div>
               <Settings size={20} color="#717784"  />
             </div>
           </div>
        </header>
       </>
    )
}