import React, { useState } from "react";
import TypeIt from "typeit-react";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        emailto: "Ghifari",
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_6o774kk", // Ganti dengan Service ID dari EmailJS
                "template_bnv8u1l", // Ganti dengan Template ID dari EmailJS
                formData,
                "GqVOYhFpjcBlS7ZsT" // Ganti dengan User ID dari EmailJS
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Pesan berhasil dikirim!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (err) => {
                    console.log("FAILED...", err);
                    alert("Terjadi kesalahan, coba lagi.");
                }
            );
    };

    return (
        <div className="container mx-auto px-4 py-28 mt-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4">
                        <TypeIt
                            options={{ loop: false }}
                            getBeforeInit={(instance) => {
                                instance.type("Get in Touch");
                                return instance;
                            }}
                        />
                    </h1>
                    <p className="text-gray-400">
                        Feel free to reach out to me for any questions or
                        opportunities!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-cyan-500/30">
                            <h2 className="text-xl font-semibold mb-4">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <a
                                    href="mailto:ighifarii05@gmail.com"
                                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                                >
                                    <IoMdMail size={24} />
                                    <span>ighifarii05@gmail.com</span>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-cyan-500/30">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-black/30 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-black/30 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 bg-black/30 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all duration-300 text-white font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
