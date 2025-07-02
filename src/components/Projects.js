import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

function ProjectCard({
    img,
    projectTitle,
    projetDescription,
    gitHubLink,
    demoLink,
    technologyUsed
}) {
    return (
        <div className="bg-white rounded-2xl border h-max border-gray-300">
            <div className="">
                <Image src={img} alt="project-thumbnail" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="rounded-t-2xl " />
            </div>
            <div className="flex flex-col gap-2 p-4">
                <div className="font-bold text-xl mt-4">{projectTitle}</div>
                <div className="text-gray-400 ">{projetDescription}</div>
                <div className="flex flex-wrap gap-2 text-sm">
                    {technologyUsed.map((tech, index) => {
                        return (<div key={index} className="px-2 rounded-lg bg-gray-300">{tech}</div>)
                    })}
                </div>
                <div className="flex gap-4 text-sm">
                    <div className="w-full rounded p-2 border border-gray-200 hover:bg-gray-100">
                        <a href={gitHubLink} target="_blank" className="flex justify-center gap-4 items-center">
                            <FaGithub />
                            Code
                        </a>
                    </div>
                    <div className="w-full rounded p-2 bg-black text-white">
                        <a href={demoLink} target="_blank" className="flex justify-center gap-4 items-center">
                            <FaExternalLinkAlt />
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default function Projects() {
    return (
        <>
            <div id="projects"  className=" bg-gray-50 py-20 p-8 gap-8">
                <div className="flex text-3xl gap-2 font-extrabold items-center max-w-3xl mx-auto">
                    <FaGithub />
                    <div>Featured Projects</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">

                    <ProjectCard 
                        img="/himanshu.png"
                        projectTitle="Portfolio Website" 
                        projetDescription="A clean and minimalist portfolio website built with Next.js to showcase projects and skills.
                        Optimized for performance, responsiveness, and a seamless user experience."      
                        gitHubLink="https://github.com/manish-gkv/Himanshu-Portfolio" 
                        demoLink="https://www.himanshusaini.xyz/" 
                        technologyUsed={["React", "NextJs", "Tailwind CSS"]} 
                    />

                    <ProjectCard
                        img="/telegramBotThumbnail.png"
                        projectTitle="Telegram Helper Bot"
                        projetDescription="A Telegram bot built using Node.js and the telegram-bot-sdk to automate tasks and respond to user commands." 
                        gitHubLink="https://github.com/manish-gkv/Helper-Bot"
                        demoLink="https://t.me/gkvhelpbot"
                        technologyUsed={["Node", "telegram-bot SDK",]} 
                    />

                    <ProjectCard 
                        img="/spms-tle.png"
                        projectTitle="Student Progress Management System" 
                        projetDescription="A Student Progress Management System (SPMS) that tracks Codeforces account performance, including contest history and rating changes.
                        Helps monitor growth, identify weak areas, and visualize progress over time." gitHubLink="https://github.com/manish-gkv/TLE-SPMS" 
                        demoLink="https://spms.manishdev.info/" 
                        technologyUsed={["React", "ExpressJs", "Tailwind CSS", "MongoDB"]} 
                    />
                    
                </div>
                <div className="flex justify-center mt-12 ">
                    <a href="https://github.com/manish-gkv?tab=repositories" target="_blank" className="flex gap-4 p-2 rounded items-center border border-gray-200 hover:bg-gray-50 bg-white"> 
                    <div>View All Projects</div>
                    <FaExternalLinkAlt />
                    </a>
                </div>
            </div>
        </>
    );
}