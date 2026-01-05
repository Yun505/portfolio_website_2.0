import Tray from "../components/Tray"; 
import projects from "../data/portfolio.json"; 
import { useNavigate } from 'react-router-dom';
import EggGrid from "../components/EggGrid";


export default function Portfolio() {
  const handleSelect = (project) => {
    console.log("Selected project:", project.title);
  };
const navigate = useNavigate();
  return (
    <Tray>
      <h2 className="text-3xl font-semibold mb-8 text-amber-700 ">Portfolio</h2>
      <EggGrid projects={projects} onSelect={handleSelect} />
      <div className="flex justify-center gap-12 mt-8">
        <button
          onClick={() => navigate("/about")}
          className="px-8 py-4 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full text-gray-800 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Yolk · About
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
