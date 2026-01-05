import { motion } from "framer-motion";

export default function Tray({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-300">
      <div className="relative">
        {/* Top line */}
        <div className="absolute -top-4 left-0 right-0 h-0.5 bg-neutral-400" />
        
        {/* Bottom line */}
        <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-neutral-400" />
        
        {/* Left line */}
        <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-neutral-400" />
        
        {/* Right line */}
        <div className="absolute -right-4 top-0 bottom-0 w-0.5 bg-neutral-400" />
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-neutral-200 rounded-2xl shadow-lg p-12 max-w-6xl"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
