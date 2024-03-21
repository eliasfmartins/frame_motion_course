'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <main>
      <motion.h1 initial={{ x: -1000 }} animate={{ x: [0, 900, 0] }} transition={{ duration: 3, }} whileHover={{ scale: 0.5, opacity: 0.5 }} drag className="inline-flex bg-red-500 text-4xl cursor-pointer">
        It is h1 for animation using framer motion
      </motion.h1>
      {/* animation two */}
      <div className="flex flex-col gap-4 items-center">
        <h2 className="mt-8">Exit and enter animation</h2>
        <AnimatePresence>
          {show &&
            <motion.div className="w-[100px] h-[100px] bg-blue-600"
              initial={{ opacity: 0.1, x: 50 }}
              animate={{ opacity: 1, x: -100 }}
              exit={{ opacity: 0, x: -150 }}
              transition={{
                duration: 3
              }}
            >

            </motion.div>
          }

        </AnimatePresence>
        <button onClick={() => setShow(e => !e)}>{show ? 'remover div' : 'montar div'}</button>


      </div>
    </main>
  );
}
