import { motion } from "framer-motion";

export default function Egg({ title, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6, rotate: 1.5, scale: 1.03 }}
      whileTap={{ scale: 0.96, y: 2 }}
      animate={{ rotate: [-1, 1, -1] }}
      transition={{
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        default: { type: "spring", stiffness: 120, damping: 14 },
      }}
      className="cursor-pointer"
    >
      <div className="relative w-56 h-40">
        <div className="absolute inset-0 rounded-[50%] bg-white shadow-md" />
        <div className="absolute inset-6 rounded-full bg-yellow-400" />
        <div className="absolute inset-0 flex items-end justify-center pb-4 text-sm font-medium text-neutral-800">
          {title}
        </div>
      </div>
    </motion.div>
  );
}
