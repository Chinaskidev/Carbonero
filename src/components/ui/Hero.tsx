"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center h-screen bg-stone-800"
    >
      <motion.h1
        className="text-5xl font-bold text-white"
        // Empieza visible y se desvanece (opacity: 0), en loop infinito
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Link href="/" legacyBehavior>
      <a className="relative top-2 flex items-center">
        <Image
          src="/carbonera2.png"
          alt="Carbornero Logo"
          width={600}
          height={600}
          className="object-contain"
        />
      </a>
      </Link>
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={{
            hidden: { opacity: 0 },
            visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // Controla la velocidad letra por letra
            },
            },
        }}
        className="mt-4 text-4xl font-extrabold text-white text-center"
        >
        {"Transformamos ideas en soluciones a través del Open Source.".split("").map(
            (char, index) => (
            <motion.span
                key={index}
                variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
                }}
            >
                {char}
            </motion.span>
            )
        )}
        </motion.p>


    </motion.section>
  );
}
