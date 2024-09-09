import AlbumC from "@/components/AlbumC";
import Footer from "@/components/Footer";
import LastMusic from "@/components/LastMusic";
import SideBar from "@/components/SideBar";
import { ChevronLeft, ChevronRight} from "lucide-react";

export default function Home() {
  return (
<div className="h-screen flex flex-col">
  <div className="flex flex-1">
    <SideBar/>
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
        <LastMusic/>
        <LastMusic/>
        <LastMusic/>
        <LastMusic/>
        <LastMusic/>
        <LastMusic/>
        
      </div>

      <h2 className="font-semibold text-2xl mt-10">Made for Davi Barreto</h2>

      <div className="grid grid-cols-8 gap-4 mt-4"> 
<AlbumC/>
<AlbumC/>
<AlbumC/>
<AlbumC/>
<AlbumC/>
<AlbumC/>
<AlbumC/>
<AlbumC/>
      </div>
    </main>
  </div>
 <Footer/>
</div>
  );
}
