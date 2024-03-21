'use client'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.h1 initial={{ x: -1000 }} animate={{ x: [0, 900, 0] }} transition={{ duration: 3, }} whileHover={{ scale: 0.5, opacity: 0.5}} drag className="inline-flex bg-red-500 text-4xl cursor-pointer">
        It is h1 for animation using framer motion
      </motion.h1>
    </main>
  );
}
