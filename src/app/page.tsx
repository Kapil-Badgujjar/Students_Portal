import Image from 'next/image'
import backgroundImage from '../../public/student.jpg'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className='lg:px-32'>
        <div className='flex flex-wrap gap-4 justify-center items-center py-8 p-4 w-full text-white animate-top-down'><input className='peer bg-transparent hover:bg-white focus:bg-white focus:text-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2 w-[100%] sm:w-[80%] shadow-lg backdrop-blur-sm'  placeholder='Search anything' /><div className='border-2 border-[#E63946] hover:bg-[#E63946] px-8 py-2 rounded-3xl peer-focus:bg-[#E63946] cursor-pointer'>Search</div></div>
        <div className="-z-2 animate-image-reveal md:px-32">
          <Image src={backgroundImage} alt='background image' />
        </div>
        <div className='lg:absolute top-[240px] left-[18%] text-white p-4 animate-text-reveal backdrop-blur-sm bg-black/30 shadow-2xl rounded-lg'>
          <p className='text-[10vw]'>CS Material</p>
          <p className='text-[2.5vw]'>The ultimate Hub for Computer Science students</p>
          <hr/>
        </div>
      </div>
      <div className='text-white px-4 flex flex-col lg:px-64'>
        <div className='text-lg lg:text-2xl'>
          Find your Study material, Previous year question papers, syllabus, notes, assignments and many more. Select from the below options:
        </div>
        <div className='flex flex-wrap gap-4 my-4'>
          <Link href="/syllabus" className='border-2 border-[#457B9D] py-2 px-4 rounded-3xl text-center hover:bg-[#457B9D]'>Syllabus</Link>
          <Link href="/notes" className='border-2 border-[#457B9D] py-2 px-4 rounded-3xl text-center hover:bg-[#457B9D]'>Notes</Link>
          <Link href="/" className='border-2 border-[#457B9D] py-2 px-4 rounded-3xl text-center hover:bg-[#457B9D]'>Previous Year question papers</Link>
          {/* <Link href="/"></Link> */}
        </div>
      </div>
      <div className='text-white px-4 flex flex-col lg:px-64'>
          <div className='flex flex-wrap gap-4 my-4'>If you have any document or material that can help other. Please make sure to contribute. Thanks</div>
      </div>
    </main>
  )
}
