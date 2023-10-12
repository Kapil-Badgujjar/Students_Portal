import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Notes",
  description:
    "Computer Science Syllabus",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        {children}
    </div>
  );
}
