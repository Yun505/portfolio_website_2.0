import { motion } from "framer-motion";
import { projectImages } from "../assets/images/index.js";

const container = {
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function CuteEgg({ project, onClick }) {
  const imageUrl = project.image ? projectImages[project.image] : null;

  return (
    <div
      onClick={onClick}
      className="relative w-64 h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer border-2 border-gray-200 flex flex-col items-center justify-center p-6"
    >
      <div className="absolute top-8 left-12 w-20 h-24 bg-white opacity-30 rounded-full blur-2xl" />
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-amber-300 shadow-md mb-4 bg-white z-10 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm text-center px-2">
            No Image
          </span>
        )}
      </div>

      <h3 className="relative text-lg font-semibold text-gray-800 text-center mb-2 z-10 px-4">
        {project.title}
      </h3>

      <div className="flex flex-wrap justify-center gap-1 mb-3 z-10">
        {project.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs bg-amber-200 text-amber-800 rounded-full shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 px-5 py-2 bg-gradient-to-r from-amber-200 to-yellow-200 border-2 border-amber-400 rounded-full text-sm font-medium text-amber-800 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-sm flex items-center justify-center gap-2"
        >
          Repository
          {project.video && (
            <span className="w-3 h-3 bg-red-500 rounded-full inline-block" />
          )}
        </a>
      )}

      <div className="absolute bottom-8 w-6 h-8 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full opacity-60 blur-sm" />
    </div>
  );
}

export default function EggGrid({ projects, onSelect }) {
  if (!projects || projects.length === 0) {
    return <p className="text-gray-500">Loading projects...</p>;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center"
    >
      {projects.map((p) => (
        <motion.div key={p.id} variants={item}>
          <CuteEgg project={p} onClick={() => onSelect?.(p)} />
        </motion.div>
      ))}
    </motion.div>
  );
}
