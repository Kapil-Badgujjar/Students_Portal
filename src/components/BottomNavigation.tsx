import Link from "next/link"
export default function BottomNavigation() {
  return (
    <div>
      <div className="flex justify-around text-2xl bg-[#E63946] text-white lg:hidden">
        {/* <Link href='/' className="flex-1 text-center hover:bg-[#457B9D] p-2 rounded-md">Home</Link> */}
        <Link href='/about' className="flex-1 text-center hover:bg-[#457B9D] p-2 rounded-md">About</Link>
        <Link href='/syllabus' className="flex-1 text-center hover:bg-[#457B9D] p-2 rounded-md">Syllabus</Link>
        <Link href='/notes' className="flex-1 text-center hover:bg-[#457B9D] p-2 rounded-md">Notes</Link>
      </div>
    </div>
  )
}
