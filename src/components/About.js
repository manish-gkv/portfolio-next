import { FiUser } from "react-icons/fi";

export default function Aboutme() {
    return (
        <div id="about" className="bg-gray-50 py-20 p-8 ">
            <div className=" flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
                <div className="flex flex-col gap-8">
                    <div className="flex text-3xl gap-2 font-extrabold items-center">
                        <div>
                            <div><FiUser /></div>
                        </div>
                        <div>About Me</div>
                    </div>
                    <h3>
                        {"Hello! I'm a passionate FullStack developer focused on building scalable and efficient web applications. Proficient in JavaScript, React, Node.js, and Express, I love crafting clean and functional code."}
                        <br /><br />
                        {"I've developed projects involving RESTful APIs, authentication, and database integration. Always eager to learn, collaborate, and deliver impactful digital solutions."}
                    </h3>
                </div>
                <div className="flex flex-col col-span-1 w-full px-8 bg-white border border-gray-200 p-4 rounded-lg shadow-2xl text-black font-medium">
                    <div className="mb-6">Quick Info</div>
                    <div className="grid grid-cols-2 items-start ">
                        <div >Exprience : </div>
                        <div className="text-gray-500" > 6+Months</div>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <div >Location : </div>
                        <div className="text-gray-500" >Haridwar</div>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <div>Education : </div>
                        <div className="text-gray-500">B.Tech Computer Science</div>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <div>Language : </div>
                        <div className="text-gray-500">English, Hindi</div>
                    </div>
                </div>
            </div>
        </div>
    );
}