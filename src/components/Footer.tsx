import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black py-8 px-4 mb-8">
        <hr/>
        <div className="grid md:grid-cols-3 gap-4 md:justify-items-center text-white mt-8">
            <div className="flex flex-col gap-2">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/">Contact Us</Link>
                <Link href="/">Info</Link>
                <hr/>
            </div>
            <div className="flex flex-col gap-2">
                <Link href="/syllabus">Syllabus</Link>
                <Link href="/notes">Notes</Link>
                <Link href="/">Question papers</Link>
                <Link href="/projects">Projects</Link>
                <hr/>
            </div>
            <div className="flex flex-col gap-2 mb-8">
                <Link href="/">FAQs</Link>
                <Link href="/">Help</Link>
                <Link href="/">Report</Link>
                <Link href="/">I am an Admin</Link>
                <hr/>
            </div>
        </div>
        <hr/>
        <div className="text-white text-center my-4">
            Developed by Kapil Badgujjar | All rights reserved | CSMATERIALS is Trademark of the company
        </div>
        <hr/>
    </div>
  )
}
