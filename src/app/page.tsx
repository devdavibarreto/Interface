import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight,Play} from "lucide-react";
import Image from 'next/image';

export default function Home() {
  return (
<div className="h-screen flex flex-col">
  <div className="flex flex-1">
    <aside className="w-72 bg-zinc-950 p-6">
    <div className="flex items-center gap-2 ">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
       
        </div>
      <nav className="space-y-5 mt-10">
        
        <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200 "> 
            <HomeIcon/>
          Home
          </a>
        <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200 ">
          <Search/> 
          Search
          </a>
        <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200 ">
          <Library/>
          Your Library
          </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3 ">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Hino ❤ </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Louvores do ❤ </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Deus é perfeito </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">This is Fernandinho </a>
    

      </nav>

    </aside>
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4 ">
        <button className=" rounded-full bg-black/50 p-1 ">
          <ChevronLeft/>
        </button>
        <button className="  rounded-full bg-black/50 p-1 ">
          <ChevronRight/>
        </button>
      </div>
      <h1 className="font-semibold text-3xl mt-10">Good Night</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a href=""className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors shadow shadow-transparent hover:shadow-white/10  "> 
        <Image src="/Colosssenses.jpg" width={104} height={104} alt="Colossenses é suas linhas de amor" />
        <strong>Colossenses</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
        </a>
        <a href=""className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors shadow shadow-transparent hover:shadow-white/10  "> 
        <Image src="/Colosssenses.jpg" width={104} height={104} alt="Colossenses é suas linhas de amor" />
        <strong>Colossenses</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
        </a>
        <a href=""className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors shadow shadow-transparent hover:shadow-white/10  "> 
        <Image src="/Colosssenses.jpg" width={104} height={104} alt="Colossenses é suas linhas de amor" />
        <strong>Colossenses</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
        </a>
        <a href=""className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors shadow shadow-transparent hover:shadow-white/10  "> 
        <Image src="/Colosssenses.jpg" width={104} height={104} alt="Colossenses é suas linhas de amor" />
        <strong>Colossenses</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
        </a>
        <a href=""className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors shadow shadow-transparent hover:shadow-white/10  "> 
        <Image src="/Colosssenses.jpg" width={104} height={104} alt="Colossenses é suas linhas de amor" />
        <strong>Colossenses</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
        </a>
        <a href=""className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors shadow shadow-transparent hover:shadow-white/10  "> 
        <Image src="/Colosssenses.jpg" width={104} height={104} alt="Colossenses é suas linhas de amor" />
        <strong>Colossenses</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
        </a>

      </div>

      <h2 className="font-semibold text-2xl mt-10">Made for Davi Barreto</h2>

      <div className="grid grid-cols-8 gap-4 mt-4"> 
<a href="" className="bg-white/5  p-3   rounded-md flex flex-col gap-2 hover:bg-white/10">
<Image src="/Colosssenses.jpg" className="w-full " width={1920} height={1080} alt="Colossenses é suas linhas de amor" />
<strong className="font-semibold">Colossenses</strong>
<span className="text-sm text-zinc-400">Marcos Teles</span>

</a>
<a href="" className="bg-white/5  p-3   rounded-md flex flex-col gap-2 hover:bg-white/10">
<Image src="/Colosssenses.jpg" className="w-full " width={1920} height={1080} alt="Colossenses é suas linhas de amor" />
<strong>Colossenses</strong>
<span className="text-sm text-zinc-400">Marcos Teles</span>
</a>
<a href="" className="bg-white/5  p-3   rounded-md flex flex-col gap-2 hover:bg-white/10">
<Image src="/Colosssenses.jpg" className="w-full " width={1920} height={1080} alt="Colossenses é suas linhas de amor" />
<strong>Colossenses</strong>
<span className="text-sm text-zinc-400">Marcos Teles</span>
</a>
<a href="" className="bg-white/5  p-3   rounded-md flex flex-col gap-2 hover:bg-white/10">
<Image src="/Colosssenses.jpg" className="w-full " width={1920} height={1080} alt="Colossenses é suas linhas de amor" />
<strong>Colossenses</strong>
<span className="text-sm text-zinc-400">Marcos Teles</span>
</a>
<a  href="" className="bg-white/5  p-3   rounded-md flex flex-col gap-2 hover:bg-white/10">
<Image src="/Colosssenses.jpg" className="w-full" width={1920} height={1080} alt="Colossenses é suas linhas de amor" />
<strong>Colossenses</strong>
<span className="text-sm text-zinc-400">Marcos Teles</span>
</a>

      </div>
    </main>
  </div>
  <footer className=" bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
   <div className="flex items-center gap-2">
   <Image src="/Colosssenses.jpg"  width={48} height={48} alt="Colossenses é suas linhas de amor" />
 
   <div className="flex flex-col ">
    <strong className="font-normal">Colossenses é suas linhas de amor</strong>
    <span className="text-xs text-zinc-500">Marcos theles</span>
   </div>
   </div>
   <div>

   </div>
   <div>

   </div>
  </footer>
</div>
  );
}
