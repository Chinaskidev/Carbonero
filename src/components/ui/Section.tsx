"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section() {
  return (
    <section className="w-full">
      {/* Franja superior con fondo degradado y animación */}
      <div className="relative h-40 bg-gradient-to-r from-stone-800 to-stone-900 overflow-hidden flex items-center justify-center">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear"
        }}
        className="absolute flex"
        >
        <Image
            src="/carboneroletras.png"
            alt="Logo"
            width={500}
            height={500}
            className="object-contain"
        />
        {/* Segundo logo para el efecto continuo */}
        <Image
            src="/carboneroletras.png"
            alt="Logo"
            width={500}
            height={500}
            className="object-contain"
        />
        {/* Tercero logo para el efecto continuo */}
        <Image
            src="/carboneroletras.png"
            alt="Logo"
            width={500}
            height={500}
            className="object-contain"
        />

        {/* Cuarto logo para el efecto continuo */}

        <Image
            src="/carboneroletras.png"
            alt="Logo"
            width={500}
            height={500}
            className="object-contain"
        />

        {/* Quinto logo para el efecto continuo */}

        <Image
            src="/carboneroletras.png"
            alt="Logo"
            width={500}
            height={500}
            className="object-contain"
        />

        {/* Sexto logo para el efecto continuo */}

        <Image
            src="/carboneroletras.png"
            alt="Logo"
            width={500}
            height={500}
            className="object-contain"
        />

        {/* Septimo logo para el efecto continuo */}

        <Image
            src="/carboneroletras.png"
            alt="Logo"
            width={500}
            height={500}
            className="object-contain"
        />
        </motion.div>
      </div>

      {/* Sección informativa debajo de la franja */}
      <div className="bg-white py-10 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Sobre Nosotros
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Somos una empresa enfocada en soluciones Web3, IA y blockchain.
          Nuestra misión es fusionar la innovación tecnológica con la
          transparencia y el empoderamiento de los usuarios, impulsando un
          futuro más abierto y colaborativo.
        </p>

        {/* Bloque adicional con estilo moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Misión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Facilitar la adopción de tecnologías de vanguardia para 
              transformar ideas en realidades concretas, potenciando 
              el crecimiento de individuos y organizaciones.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Visión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Convertirnos en referente global de soluciones integrales 
              en Web3 y blockchain, liderando la innovación y 
              democratizando el acceso a la tecnología.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
