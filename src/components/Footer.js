import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 p-8 py-8 border border-white border-t-gray-400 ">
                <div>
                    © {year} Manish. All rights reserved.
                </div>
                <div className="flex gap-6 text-lg">
                    <a href="https://x.com/manishh_dev" target="_blank">
                        <FaSquareXTwitter />
                    </a>
                    <a href="https://github.com/manish-gkv" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://in.linkedin.com/in/manish-kumar-akela-104731213" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/manish16.10/" target="_blank">
                        <FaInstagramSquare />
                    </a>
                </div>
            </div>
        </>
    );
}