import { Metadata } from "next"
export const metadata: Metadata = {
    "title": "CSMATERIAL | ABOUT",
}
export default function AboutLayout({children}:{children: React.ReactNode}){
    return (
        <>
        {children}
        </>
    )
}