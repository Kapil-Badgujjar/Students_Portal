
import Image from "next/image"
import projectImage from '.@/public/Keyboard.jpg';
export default function ProjectCard() {
  return (
    <div>
        <div className="flex flex-col items-center rounded-sm border-2 border-white cursor-pointer hover:border-[#E63946] p-4 rounded-xl w-full sm:w-72 2xl:w-96">
            <Image className="w-full" src={projectImage} alt='Project image' />
            <div className="text-lg w-full px-4 animate-pulse">Offers: Free setup on your machine</div>
            <div className="w-full p-4">
                <p className="text-xl font-bold">SuperMart</p>
                <p>Complexity: 6/10</p>
                <p>Type: Web application</p>
            </div>
            <div className="flex flex-col gap-2 py-2 text-center">
                <div className="bg-[#1D3557] rounded-3xl px-4 py-2 hover:bg-[#A8DADC] hover:text-black">Buy Now</div>
                <div className="bg-[#E63946] rounded-3xl px-4 py-2 hover:bg-[#F1FAEE] hover:text-black">Book a session</div>
            </div>
        </div>
    </div>
  )
}
