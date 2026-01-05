import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Tray from "../components/Tray";
import linkedin from "../assets/images/linkedin.jpeg"

function Highlight({ children, onClick, active }) {
  return (
    <span
      onClick={onClick}
      className={`cursor-pointer underline text-amber-600 hover:text-amber-800 font-semibold ${active ? "underline" : ""}`}
    >
      {children}
    </span>
  );
}

function EggThemedProfileCard() {
  const [activeTab, setActiveTab] = useState(null);

  const details = {
    Bookworm: (
      <p>
        Currently I'm devouring Fredrik Backman's novels. I enjoy stories
        that explore memory and bring meaning into the small
        things.
      </p>
    ),
    Cybersecurity: (
      <p>
        President of{" "}
        <a
          href="https://www.instagram.com/wicysumass/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-amber-600 hover:text-amber-800 font-semibold"
        >
          Women in Cybersecurity @ UMass Amherst
        </a>
        . Exploring pentesting, forensics, and pursuing my OSCP.
      </p>
    ),
    Foodie: (
      <p>
        I'm a total foodie who believes the best conversations happen over great
        meals. I love trying new restaurants, cooking, and sharing recipes with
        friends. HMU if you want to try any new restaurants together or have a
        recommendation!
      </p>
    ),
  };

  return (
    <div className="shadow-xl w-full border-2 border-amber-300 rounded-3xl font-sans p-8 relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Decorative egg shapes in background */}
      <div className="absolute top-4 right-8 w-24 h-32 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-full opacity-30 transform rotate-12"></div>
      <div className="absolute bottom-8 left-12 w-32 h-40 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-full opacity-20 transform -rotate-12"></div>
      <div className="absolute top-1/2 right-16 w-20 h-28 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full opacity-25"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 relative z-10">

        {/* Profile Image - styled like an egg in a carton */}
        <div className="relative mx-auto md:mx-0">
          <div className="w-[320px] h-[250px] rounded-full overflow-hidden border-4 border-amber-300 shadow-lg bg-gradient-to-br from-yellow-50 to-amber-100 p-2">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
              <img 
                src={linkedin} 
                alt="Hayun Jung" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Yolk-like signature */}
          <div className="absolute -bottom-3 right-8 bg-gradient-to-br from-yellow-300 to-amber-400 px-5 py-2 rounded-full border-2 border-amber-400 shadow-md">
            <span className="text-xl font-semibold text-white" style={{ fontFamily: "cursive" }}>
              Hayun
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between text-[16px] font-medium relative">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4">
            <div className="text-2xl md:text-3xl font-bold px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 shadow-sm">
              <span className="text-amber-800">
                HAYUN <span className="italic text-amber-600">[haha + yoon]</span> JUNG
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                { label: "GitHub", href: "https://github.com/Yun505" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/hayun-jung-4b8b49244/" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-amber-300 rounded-full bg-white hover:bg-amber-50 transition text-sm shadow-sm font-medium text-amber-700 hover:text-amber-800"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Soft divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>

          <div className="mt-4 mb-3 text-lg font-semibold tracking-wide text-amber-700 bg-yellow-50 inline-block px-4 py-2 rounded-full border border-amber-200">
            a little about me
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 bg-white bg-opacity-60 p-5 rounded-2xl border border-amber-200 shadow-sm">
            <p><span className="font-semibold text-amber-700">DOB:</span> <span className="text-gray-700">Gemini</span></p>
            <p><span className="font-semibold text-amber-700">EXP:</span> <span className="text-gray-700">05/2027</span></p>
            <p><span className="font-semibold text-amber-700">ADDR:</span> <span className="text-gray-700">UMass Amherst</span></p>
            <p><span className="font-semibold text-amber-700">MAJOR:</span> <span className="text-gray-700">CS + MATH</span></p>
            <p>
              <span className="font-semibold text-amber-700">CLASS:</span>{" "}
              <Highlight onClick={() => setActiveTab(activeTab === "Foodie" ? null : "Foodie")} active={activeTab === "Foodie"}>Foodie</Highlight>
            </p>
            <p>
              <span className="font-semibold text-amber-700">ID:</span>{" "}
              <>
                <Highlight onClick={() => setActiveTab(activeTab === "Bookworm" ? null : "Bookworm")} active={activeTab === "Bookworm"}>Bookworm</Highlight>{" + "}
                <Highlight onClick={() => setActiveTab(activeTab === "Cybersecurity" ? null : "Cybersecurity")} active={activeTab === "Cybersecurity"}>Cyber</Highlight>
              </>
            </p>
          </div>

          {!activeTab ? (
            <div className="mt-6 p-4 italic text-center bg-gradient-to-r from-yellow-50 to-amber-50 rounded-full border border-amber-200 shadow-sm">
              <span className="text-gray-600">Favorite Book:</span> <span className="font-semibold text-amber-800">The History of Love by Nicole Krauss</span>
            </div>
          ) : (
            <div className="mt-6 p-6 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-amber-300 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-8 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full border border-amber-300 shadow-sm"></div>
                <h3 className="font-semibold text-lg text-amber-800">{activeTab}</h3>
              </div>
              <div className="text-gray-700 leading-relaxed">
                {details[activeTab]}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();
  return (
    
    <Tray>
      <h2 className="text-3xl font-semibold mb-8 text-amber-700">About Me</h2>
      <EggThemedProfileCard />
             {/* Buttons */}
      <div className="flex justify-center gap-12 mt-8">
        <button
          onClick={() => navigate("/portfolio")}
          className="px-8 py-4 bg-white rounded-full text-gray-800 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-300"
        >
          Egg Whites · Portfolio
        </button>
        <button
          onClick={() => navigate("https://yun505.github.io/blog_2.0/")}
          className="w-40 h-32 bg-gradient-to-br from-amber-700 via-yellow-800 to-amber-900 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center text-white font-semibold"
        >
          Shell · Blog
        </button>
      </div>
    </Tray>
  );
}