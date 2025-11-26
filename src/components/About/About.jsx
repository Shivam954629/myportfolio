import React from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/photo.png";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section
      id="about"
      className="py-6 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-20 md:mt-28 lg:mt-36"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">

          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2 leading-tight">
            Shivam Kumar
          </h2>

          {/* Typewriter */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-purple-400 leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "Frontend Developer",
                "MERN Developer",
               
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>

          {/* About Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mt-8 leading-relaxed">
            I am a full-stack developer with strong experience in building scalable web applications. 
            Skilled in both front-end and back-end development, I specialize in the MERN stack, 
            UI design, animations, and creating smooth user experiences.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1O1XbPF6MQmOd7aGilPLyHegWqBFnN0gb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-8 text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
            aria-label="Download Shivam Kumar Resume"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Shivam Kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
