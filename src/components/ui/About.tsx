import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold">Lo que hacemos!</h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        Nuestro enfoque une la fuerza de la inteligencia artificial con la transparencia
        de blockchain para forjar un futuro lleno de posibilidades.
      </p>

      {/* Grid de 3 columnas (en pantallas medianas hacia arriba) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Skinner
          </h3>
          <Image
            src="/skinner2.png"
            alt="GNOSS Knowledge Graph Builder"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <p className="mt-4 text-gray-600">
          Sistemas Inteligentes de Reclutamiento de Empleados
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Torogoz 3
          </h3>
          <Image
            src="/torogozgris.png"
            alt="GNOSS Semantic Application Server"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <p className="mt-4 text-gray-600">
            Descubre e investiga cualquier tema de una forma más profunda e intuitiva,
            disfrutando de una web más semánticamente consciente.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Sivar ETH
          </h3>
          <Image
            src="/images/imagen3.png"
            alt="GNOSS Sherlock"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <p className="mt-4 text-gray-600">
            Hacemos fácil lo difícil.
          </p>
        </div>
      </div>
    </section>
  );
}
