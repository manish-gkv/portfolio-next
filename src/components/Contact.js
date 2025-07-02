"use client";
import { FiMail } from "react-icons/fi";
import { useState } from "react";

import { EMAIL_ACCESS_KEY } from '@/utility/constant';

export default function Contact() {

    const [messageSending, setMessageSending] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    
    const onSubmit = async (event) => {
        event.preventDefault();
        setMessageSending(true);
        const formData = new FormData(event.target);
        formData.append("access_key", EMAIL_ACCESS_KEY);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                event.target.reset();
                setMessageSent(true);
            }
            else {
                console.log("Error", data);
            }
        }
        catch (error) {
            console.error("Error submitting form:", error);
        }
        finally {
            setMessageSending(false);
        }
    };

    return (
        <>
            <div id="contact" className="py-20 p-8 md:px-0 flex flex-col gap-4 max-w-3xl mx-auto">
                <div className="text-3xl font-extrabold flex gap-2 items-center">
                    <FiMail />
                    <div>Get In Touch</div>
                </div>
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full">
                            <label className="block font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="block font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="yourmail@gmail.com"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            type="textarea"
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    <input type="submit" value="Submit" className={` text-white py-2 rounded-md font-medium ${messageSending ? "cursor-not-allowed bg-gray-400":"bg-black cursor-pointer"}`} />
                </form>
            </div>
            {messageSent && (
                <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black opacity-90 z-10 scroll">
                    <div className="bg-white p-8 rounded-md shadow-lg text-center font-bold space-y-5 opacity-100">
                        <div>Message Sent Successfully</div>
                        <div className="bg-black text-white z-51 rounded p-1 cursor-pointer" onClick={()=>setMessageSent(false)}>Ok</div>
                    </div>
                </div>
            )}
        </>
    );
}