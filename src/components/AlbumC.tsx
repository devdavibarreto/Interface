import Image from 'next/image';

export default function AlbumC(){
    return(
        <a  href="" className="bg-white/5  p-3   rounded-md flex flex-col gap-2 hover:bg-white/10">
<Image src="/Colosssenses.jpg" className="w-full" width={1920} height={1080} alt="Colossenses é suas linhas de amor" />
<strong>Colossenses</strong>
<span className="text-sm text-zinc-400">Marcos Telles</span>
</a>
    )
}