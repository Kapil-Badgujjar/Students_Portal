import SyllabusTuple from "@/components/SyllabusTuple";

export default function Syllabus() {
  return (
    <div className="p-4 text-white ">
        <div className="text-3xl text-center">Syllabus</div>
        <div className="flex flex-wrap justify-between items-center text-xl max-w-7xl py-4 mx-auto">
            <div className="">
                Filter Syllabus:
            </div>
            <div className="flex flex-wrap items-center">
                <p>Select Course: &nbsp;</p>
                <select className="bg-black">
                    <option value="all">--Select--</option>
                    <option value="mca">MCA</option>
                    <option value="msc">MSC</option>
                    <option value="ds">Data Science</option>
                </select>
                &nbsp; &nbsp;
                <input className="bg-black outline-none border-b-2 border-[#F1FAEE] py-2" placeholder="filter"/>
            </div>
        </div>
        <div className="flex flex-col gap-2 max-w-7xl mx-auto">
            <SyllabusTuple />
            <SyllabusTuple />
            <SyllabusTuple />
            <SyllabusTuple />
            <SyllabusTuple />
            <SyllabusTuple />
            <SyllabusTuple />
            <SyllabusTuple />
            <SyllabusTuple />
            <SyllabusTuple />
            <SyllabusTuple />
        </div>
    </div>
  )
}
