import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-10 shadow-md shadow-white/30 w-screen">
        <div className='grid grid-cols-2 lg:grid-cols-3 lg:justify-items-center items-center py-2 px-5 bg-black text-white'>
          <div className="flex gap-4 text-2xl hidden lg:block">
            <Link href='/about' className="hover:bg-[#457B9D] p-2 rounded-md">About</Link>
            <Link href='/syllabus' className="hover:bg-[#457B9D] p-2 rounded-md">Syllabus</Link>
            <Link href='/notes' className="hover:bg-[#457B9D] p-2 rounded-md">Notes</Link>
          </div>
          <div className="text-3xl sm:text-6xl">
            <Link href='/'>CSMATERIAL</Link>
          </div>
          <div className="flex gap-3 text-md md:text-2xl justify-self-end lg:justify-self-center">
            <Link href='/'>Login</Link>
          </div>
        </div>
    </nav>
  )
}
