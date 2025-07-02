import { FiCode } from "react-icons/fi";

export default function Skills() {
    return (
        <>
            <div id="skills" className="py-20 p-8 md:px-0 flex flex-col gap-4 max-w-3xl mx-auto">
                <div className="text-3xl font-extrabold flex gap-2 items-center">
                    <FiCode />
                    <div>Skills & Technologies</div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center font-medium text-black text-sm">
                    <div className="border border-gray-200 rounded-md py-2">HTML</div>
                    <div className="border border-gray-200 rounded-md py-2">CSS</div>
                    <div className="border border-gray-200 rounded-md py-2">JavaScript</div>
                    <div className="border border-gray-200 rounded-md py-2">TypeScript</div>
                    <div className="border border-gray-200 rounded-md py-2">Tailwind CSS</div>
                    <div className="border border-gray-200 rounded-md py-2">React</div>
                    <div className="border border-gray-200 rounded-md py-2">NextJs</div>
                    <div className="border border-gray-200 rounded-md py-2">NodeJs</div>
                    <div className="border border-gray-200 rounded-md py-2">ExpressJs</div>
                    <div className="border border-gray-200 rounded-md py-2">Git</div>
                    <div className="border border-gray-200 rounded-md py-2">Java</div>
                    <div className="border border-gray-200 rounded-md py-2">Spring Boot</div>
                </div>
            </div>
        </>
    );
}