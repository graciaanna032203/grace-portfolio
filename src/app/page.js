"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.6 }; 

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Navbar */}
      <nav className="-mt-20 sticky top-0 z-50 flex justify-between items-center w-full max-w-screen-xl mx-auto shadow-lg p-4 rounded-[5px] bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home">
            <Image
              src="/logo.png"
              alt="Grace Portfolio Logo"
              width={55}
              height={55}
            />
          </a>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-8 text-s font-normal">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`${inter.className} ${
                activeSection === section
                  ? "text-[#FF6500] border-b-2 border-[#1A1A1D]"
                  : "hover:text-[#FF6500] text-[#1A1A1D] border-b-2 border-transparent"
              } transition-all pb-[2px]`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-screen-xl mx-auto">
        {/* Home Section */}
        <section
          id="home"
          className="-mt-44 w-full max-w-screen-xl mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 rounded-[5px]"
        >
          <h2 className="text-4xl">Home Section</h2>
          <p>Welcome to the Home section. Here you'll find a brief intro about me.</p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 rounded-[5px]"
        >
          <h2 className="text-4xl">About Me</h2>
          <p>This is the About section where I talk about my background and experience.</p>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 rounded-[5px]"
        >
          <h2 className="text-4xl">Skills</h2>
          <p>Here, I list my technical skills, tools, and technologies I am proficient in.</p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 rounded-[5px]"
        >
          <h2 className="text-4xl">Projects</h2>
          <p>Check out the Projects section for details on the work I’ve done.</p>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 rounded-[5px]"
        >
          <h2 className="text-4xl">Contact</h2>
          <p>Feel free to reach out to me through the Contact section.</p>
        </section>
      </main>
    </div>
  );
}
