"use client";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState<boolean>(false);
  const [showCard, setShowCard] = useState<boolean>(false);
  return (
    <main>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          background: "purple",
          height: 10,
          transformOrigin: "0%",
        }}
      ></motion.div>
      <motion.h1
        animate={{ x: [0, 900, 0] }}
        transition={{ duration: 3 }}
        whileHover={{ scale: 0.5, opacity: 0.5 }}
        drag
        className="inline-flex bg-red-500 text-4xl cursor-pointer"
      >
        It is h1 for animation using framer motion
      </motion.h1>
      {/* animation two */}
      <div className="flex flex-col gap-4 items-center">
        <h2 className="mt-8">Exit and enter animation</h2>
        <AnimatePresence>
          {show && (
            <motion.div
              className="w-[100px] h-[100px] bg-blue-600"
              drag
              initial={{ opacity: 0.1, x: 50 }}
              animate={{ opacity: 1, x: 500 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{
                duration: 3,
              }}
            ></motion.div>
          )}
        </AnimatePresence>
        <button onClick={() => setShow((e) => !e)}>
          {show ? "remover div" : "montar div"}
        </button>
      </div>
      <div>
        <h2>Draggable object with frame motion</h2>
      </div>
      <div className="flex gap-[200px] items-center mt-[120] flex-row">
        <div>
          <p>No Constraint</p>
          <motion.div
            className="w-[100px] h-[100px] bg-blue-600"
            drag
            dragElastic
          ></motion.div>
        </div>
        <div>
          <p>y only drag</p>
          <motion.div
            className="w-[100px] h-[100px] bg-blue-600"
            drag="y"
            dragElastic
          ></motion.div>
        </div>
        <div>
          <p>drag Constraint</p>
          <motion.div
            className="w-[100px] h-[100px] bg-blue-600"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic
          ></motion.div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[30vh] bg-green-400">
        <motion.div
          className="bg-slate-400 p-12 rounded-xl "
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            layout: {
              duration: 2,
              type: "spring",
            },
          }}
          layout
          onClick={() => setShowCard((e) => !e)}
        >
          <motion.h3>Hover or Click</motion.h3>
          {showCard && (
            <motion.p
              className="w-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem
              in voluptatibus, sint atque numquam nemo culpa? Autem officiis
              architecto libero. Delectus eveniet illum obcaecati tempore
              suscipit tempora quis at.
            </motion.p>
          )}
        </motion.div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore
        quaerat, pariatur nulla quasi recusandae impedit incidunt modi veritatis
        soluta. Illum sequi quam, repellat alias officiis adipisci veniam
        explicabo autem.
      </p>
    </main>
  );
}
