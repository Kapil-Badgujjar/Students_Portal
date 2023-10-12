import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects",
    description:
      "csworld is the official website for the computer science students to find study materials.",
  };

export default function ProjectLayout({ children }: { children: React.ReactNode }){
    return <>
        <div className="text-white text-3xl lg:text-4xl text-center p-4 lg:p-8">
            Projects
        </div>
        {children}
    </>
}