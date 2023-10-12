import Link from "next/link"
export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 w-screen">
      <div className="flex justify-around text-2xl bg-[#E63946] text-white lg:hidden">
        <Link href='/' className="flex-1 text-center hover:bg-[#457B9D] p-2 rounded-md">H</Link>
        <Link href='/about' className="flex-1 text-center hover:bg-[#457B9D] p-2 rounded-md">A</Link>
        <Link href='/syllabus' className="flex-1 text-center hover:bg-[#457B9D] p-2 rounded-md">S</Link>
        <Link href='/notes' className="flex-1 text-center hover:bg-[#457B9D] p-2 rounded-md">N</Link>
      </div>
    </div>
  )
}
