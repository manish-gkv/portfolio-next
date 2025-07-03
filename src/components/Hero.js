"use client";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
    function handleClick(id){
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <div id="home" className="flex flex-col h-screen px-8 items-center justify-center gap-2 sm:gap-6 font-medium w-full">
                <div className=""><span className="bg-gray-200 rounded-full text-sm py-1 px-3">FullStack Developer</span></div>
                <h2 className="text-black font-bold text-4xl md:text-6xl text-center tracking-tighter text-balance">
                    Building Scalable Web Solutions from Frontend to Backend
                </h2>
                <h2 className="text-lg text-gray-500 text-center text-balance">
                    I create modern, responsive, and high-performance web applications using technologies like NextJs, ReactJs, ExpressJs and NodeJs.
                </h2>
                <div className="flex flex-wrap sm:flex-row gap-4">
                    <div className="bg-black text-white text-center px-6 py-2 rounded text-nowrap w-full md:w-fit cursor-pointer" onClick={()=>handleClick('projects')}>
                        View My Work
                    </div>
                    <div className="text-center border border-gray-400 px-6 py-2 rounded text-nowrap w-full md:w-fit cursor-pointer" onClick={()=>handleClick('contact')}>
                        Get In Touch
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-6">
                    <div className="text-gray-400 text-sm tracking-wider">Scroll to explore</div>
                    <div>
                        <FiArrowDown className="text-2xl text-black mx-auto animate-bounce" />
                    </div>
                </div>
            </div>

        </>
    );
}