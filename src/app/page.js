"use client";

import { useState, useEffect } from "react";
import { Inter, Archivo } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});  

const archivo = Archivo({
  weight: "900",   
  subsets: ['latin'],
});

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [manualScroll, setManualScroll] = useState(false); // Track if scrolling is manual 
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.6 }; 

    const observer = new IntersectionObserver((entries) => {
      if (!manualScroll) {
        // Only update when not manually scrolling
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [manualScroll]); 

  const handleClick = (section) => {
    setManualScroll(true); 
    setActiveSection(section); 
    setTimeout(() => setManualScroll(false), 1000); 
  }; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-9" 
    style={{
      background: "var(--gradient)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)", // Safari support
      border: `1px solid var(--glass-border)`,
      borderRadius: "10px",
      boxShadow: "var(--box-shadow)",
    }}>
      {/* Navbar */}
        <nav
          className={`-mt-20 sticky top-1 z-50 flex justify-between items-center w-full p-4 max-w-screen-xl mx-auto transition-all duration-300${
            isScrolled
              ? "bg-white/30 backdrop-blur-lg border border-white/20 shadow-md rounded-[5px]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home">
              <Image
                src="/logo.png"
                alt="Grace Portfolio Logo"
                width={70}
                height={70}
              />
            </a>
          </div>

          {/* Navigation links */}
          <div className="flex space-x-8 text-s font-normal tracking-wide">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => handleClick(section)}
                className={`${inter.className} ${
                  activeSection === section
                    ? "text-[#FF6500] border-b-2 border-[#ffffff]"
                    : "text-white hover:text-[#FF6500] border-b-2 border-transparent"
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
          className="-mt-28 w-full max-w-screen-xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between p-8 rounded-[5px] pt-20"
        >
          {/* Right Side: Image */}
          <div className="flex-shrink-0 mb-4 lg:mb-0 lg:w-1/2">
            <Image
              src="/me.jpg"
              alt="Grace Image"
              width={600}
              height={600}
              className="rounded-[5px] shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Left Side: Text Content */}
          <div className="flex flex-col space-y-6 max-w-xl text-center lg:text-left lg:w-1/2">
            <p
              className={`text-2xl font-bold text-[#ffffff] tracking-wider ${archivo.className}`}
            >
              Hello, I’m
            </p>
            <p className={`text-4xl font-bold text-[#ffffff] tracking-wider ${archivo.className}`}>
              Grace Anne Garchitorena
            </p>
            <p className={`text-3xl tracking-wider ${archivo.className}`}>
              <span className="text-white">Aspiring </span>
              <span className="text-[#FF6500]">Web Developer</span>
            </p>

            <p className={`text-md text-[#ffffff] tracking-wider ${inter.className}`}>
            I’m a 4th-year Computer Science student focused on creating user-friendly, innovative web solutions.</p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-9">
              <a
                href="#contact"
                className="px-6 py-4 bg-[#FF6500] text-white font-bold rounded-[5px] shadow-md hover:scale-95 active:scale-95 transition-transform duration-300"
              >
                Contact Me
              </a>
              <a
                href="/Resume-Garchitorena, Grace Anne C.pdf"
                download
                className="px-6 py-4 bg-transparent text-white border-2 border-[#FF6500] font-bold rounded-[5px] shadow-md hover:scale-95 active:scale-95 transition-transform duration-300"
              >
                Download Resume
              </a>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between p-8 rounded-[5px]"
        >
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p
              className={`text-4xl font-bold text-[#ffffff] tracking-wider ${archivo.className} border-b-4 border-[#FF6500] pb-2`}
            >
              About Me
            </p> 

            <p className={`mt-6 text-[#ffffff] tracking-wider ${inter.className}`}>
              Hello, I’m Grace Anne Garchitorena, an aspiring Web Developer and a 4th-year Computer Science student.  
              I’m passionate about creating simple, user-friendly web solutions that make a difference.  
              I enjoy turning ideas into functional digital experiences and am always looking for ways to learn and grow in the field.
            </p> 

            <p className="mt-4">Education <span className="text-[#FF6500] ml-8">Technological University of the Philippines - Manila</span></p> 

            <p className="mt-4 ml-28">BS in Computer Science (Sept 2021 - Sept 2025)</p>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/me.jpg"
              alt="Grace Image"
              width={600}
              height={600}
              className="rounded-[5px] shadow-lg object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col items-center justify-center p-8 rounded-[5px]"
        >
          <p
            className={`text-4xl font-bold text-[#ffffff] tracking-wider ${archivo.className} border-b-4 border-[#FF6500] pb-2`}
          >
            Skills
          </p>

          {/* Icon with Name */}
          <div className="flex flex-col items-center mt-6">
            {/* Wrapper for Responsive Layouts */}
            <div
              className="grid justify-items-center items-center gap-6 
                lg:grid-cols-[repeat(6,_1fr)] lg:gap-x-8 lg:gap-y-10 
                md:grid-cols-3 grid-cols-2"
            >
              {/* HTML */}
              <div className="flex flex-col items-center">
                <img src="/html.svg" alt="HTML Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>HTML</p>
              </div>

              {/* CSS3 */}
              <div className="flex flex-col items-center">
                <img src="/css3.svg" alt="CSS3 Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>CSS3</p>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center">
                <img src="/javascript.svg" alt="JavaScript Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>JavaScript</p>
              </div>

              {/* TypeScript */}
              <div className="flex flex-col items-center">
                <img src="/typescript.svg" alt="TypeScript Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>TypeScript</p>
              </div>

              {/* React */}
              <div className="flex flex-col items-center">
                <img src="/react.svg" alt="React Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>React</p>
              </div>

              {/* Python */}
              <div className="flex flex-col items-center">
                <img src="/python.svg" alt="Python Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>Python</p>
              </div>

              {/* C */}
              <div className="flex flex-col items-center">
                <img src="/c.svg" alt="C Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>C</p>
              </div>

              {/* C++ */}
              <div className="flex flex-col items-center">
                <img src="/cpp.svg" alt="C++ Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>C++</p>
              </div>

              {/* Tailwind */}
              <div className="flex flex-col items-center">
                <img src="/tailwindcss.svg" alt="Tailwind CSS Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>Tailwind</p>
              </div> 

              {/* Figma */}
              <div className="flex flex-col items-center">
                <img src="/figma.svg" alt="GitHub Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>Figma</p>
              </div>

              {/* Vercel */}
              <div className="flex flex-col items-center">
                <img src="/vercel.svg" alt="Vercel Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>Vercel</p>
              </div>

              {/* GitHub */}
              <div className="flex flex-col items-center">
                <img src="/github.svg" alt="GitHub Icon" className="w-14 h-14" />
                <p className={`text-[#ffffff] mt-2 tracking-wider ${inter.className}`}>GitHub</p>
              </div>  

            </div>
          </div>
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
