"use client";

import { motion, useScroll } from 'motion/react';

import { RESUME_LINK, MENU_LIST } from '@/utility/constant';

export default function Nav() {
    const {scrollYProgress} = useScroll();
    function handleClick(id){
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <nav className="sticky top-0 border-b border-gray-200 bg-white/75 backdrop-blur-sm">
            <motion.div
                className='bg-black w-full h-1 origin-left '
                style={{
                    scaleX:scrollYProgress
                }}
            ></motion.div>
            <div className='flex justify-between items-center py-4 px-8'>
                <div className="text-xl font-bold">Manish</div>
                <div className="hidden md:flex gap-4 text-sm">
                    {MENU_LIST.map((item) => (
                        <div
                            key={item.id}
                            className="cursor-pointer"
                            onClick={() => handleClick(item.id)}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
                <div className='flex items-center'>
                    <a
                        href={RESUME_LINK}
                        target='_blank'
                        className="border border-gray-200 rounded px-3 py-1 text-sm font-medium"
                        
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}