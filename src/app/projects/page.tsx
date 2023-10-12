import ProjectCard from "@/components/ProjectCard";

// const getData = async () => {
//     const res = await fetch(process.env.APP_URL+`/api/projects`, {
//       cache: "no-store",
//     });
  
//     if (!res.ok) {
//       throw new Error("Failed");
//     }
  
//     return res.json();
//   };
  
  export default async function page() {
    // const data = await getData();
    return (
      <div>
        <div className="grid gap-4 justify-content-center justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-white p-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        </div>
        <div>

        </div>
      </div>
    )
  }
  