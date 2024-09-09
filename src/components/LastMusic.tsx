import Image from 'next/image';
import { Play} from "lucide-react";
export default function LastMusic(){
    return(
    <a href=""className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors shadow shadow-transparent hover:shadow-white/10  "> 
        <Image src="/Colosssenses.jpg" width={104} height={104} alt="Colossenses é suas linhas de amor" />
        <strong>Colossenses</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
        </a>
        )
}