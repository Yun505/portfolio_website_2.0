import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tray from "../components/Tray";

const EggIllustration = () => {
  return (
    <div className="relative w-full h-96 mb-16">
      {/* Container for the egg parts */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        {/* Whole egg on the left */}
        <div className="absolute left-20 top-16">
          <div className="w-32 h-40 bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-400 rounded-full shadow-lg transform rotate-12"></div>
        </div>

        {/* Cracked egg in the center */}
        <div className="absolute left-1/2 top-20 transform -translate-x-1/2">
          {/* Egg white */}
          <div className="relative w-56 h-44 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full shadow-xl">
            {/* Yolk inside */}
            <div className="absolute top-12 left-16 w-24 h-24 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full shadow-md">
              {/* Yolk highlight */}
              <div className="absolute top-2 right-4 w-6 h-6 bg-white opacity-50 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Shell piece on the right - brown oval */}
        <div className="absolute right-20 bottom-12">
          <div className="w-32 h-40 bg-gradient-to-br from-amber-700 via-yellow-800 to-amber-900 rounded-full transform -rotate-12 shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Tray>
      <h1 className="text-3xl font-semibold mb-8">Hayun Jung</h1>

      <div className="flex items-center justify-center gap-8 mb-16">
        <span onClick={() => navigate("/about")} className="text-sm font-semibold">Yolk: About Me + Experience</span>
        <span onClick={() => navigate("/portfolio")} className="text-sm font-semibold">Egg Whites: Portfolio</span>
        <span  onClick={() => navigate("https://yun505.github.io/blog_2.0/")} className="text-sm font-semibold">Shell: Blog</span>
      </div>
      <EggIllustration />
      <div className="flex justify-center gap-12 mt-8">
        <button
          onClick={() => navigate("/about")}
          className="px-8 py-4 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full text-gray-800 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Yolk · About
        </button>
        
        <button
          onClick={() => navigate("/portfolio")}
          className="px-8 py-4 bg-white rounded-full text-gray-800 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-300"
        >
          Egg Whites · Portfolio
        </button>
      </div>

      <div className="flex justify-center mt-8">
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