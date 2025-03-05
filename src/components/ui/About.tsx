import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold">Lo que hacemos!</h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Nuestros clientes unen la fuerza de la inteligencia artificial con la transparencia
        de blockchain para forjar un futuro lleno de posibilidades.
      </p> 

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-start">
        
        {/* Card 1 */}
        <div className="
          flex flex-col items-center p-6 
          bg-white rounded-lg shadow-md
          transition-transform transform 
          hover:shadow-xl hover:-translate-y-1 hover:scale-105
        ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Skinner
          </h3>
          <Image
            src="/skinner2.png"
            alt="Skinner"
            width={400}
            height={300}
            className="h-auto object-cover rounded-md"
          />
          <div className="mt-4 text-gray-600 text-base leading-relaxed max-w-prose">
            <p>
              <strong>Sistemas Inteligentes de Reclutamiento de Empleados.</strong>
            </p>
            <p className="mt-2">
              Nuestro sistema de reclutamiento, potenciado por 
              inteligencia artificial, 
              identifica y selecciona a los candidatos idóneos, optimizando el proceso 
              y los tiempos de contratación.

              Aprovechamos la inteligencia artificial avanzada para revolucionar 
              el proceso de contratación y ayudar a las empresas a encontrar la 
              opción perfecta para sus equipos.
              </p>

              <p><strong>Skinner</strong> combina tecnología de punta con profundos conocimientos en gestión de talento para brindar un servicio preciso y eficiente.</p>
            
          </div>
        </div>

        {/* Card 2 */}
        <div className="
          flex flex-col items-center p-6 
          bg-white rounded-lg shadow-md
          transition-transform transform 
          hover:shadow-xl hover:-translate-y-1 hover:scale-105
        ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Torogoz 3
          </h3>
          <Image
            src="/torogozgris.png"
            alt="torogoz"
            width={300}
            height={300}
            className="h-auto object-cover rounded-md"
          />
          <div className="mt-4 text-gray-600 text-base leading-relaxed max-w-prose">
            <p>
              <strong>Credenciales académicas y profesionales de forma segura y transparente.</strong>
            </p>
            <p className="mt-2">
              Una DApp de identidad descentralizada (DID) que permite a las
              instituciones y profesionales emitir, gestionar y verificar
              credenciales académicas y profesionales de forma segura y transparente 
              utilizando tecnología blockchain.
            </p>
            <p className="mt-2">
              Con una interfaz moderna e intuitiva, Torogoz 3 conecta a los usuarios 
              a través de sus billeteras Web3 y registra las certificaciones 
              directamente en la blockchain, 
              lo que garantiza la autenticidad y la inmutabilidad.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="
          flex flex-col items-center p-6 
          bg-white rounded-lg shadow-md
          transition-transform transform 
          hover:shadow-xl hover:-translate-y-1 hover:scale-105
        ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Sivar ETH
          </h3>
          <Image
            src="/sivarethlogo.png"
            alt="sivar"
            width={600}
            height={400}
            className="h-auto object-cover rounded-md"
          />
          <div className="mt-4 text-gray-600 text-base leading-relaxed max-w-prose">
            <p>
            <strong>SivarETH empodera a pequeños emprendedores y fundaciones en Web3.</strong>
            </p>

            <p>
            El objetivo principal de SivarETH es apoyar a emprendedores y 
            pequeñas fundaciones con el fin de beneficiar a personas necesitadas.

            El modelo SivarETH busca crear un ciclo de impacto mutuo: los 
            emprendedores (“a”) se capacitan en Web3, mejoran sus negocios y, 
            gracias a las ventas de NFTs y donaciones, se generan fondos para ayudar
             a los beneficiarios (“b”). Estos beneficiarios, además de recibir 
             asistencia financiera, consumen productos o servicios de los 
             emprendedores participantes, lo que fortalece las economías 
             locales y genera sinergia entre ambos grupos. A la larga, 
             tanto “a” como “b” se benefician, no solo económicamente, sino 
             también a través del aprendizaje y la adopción de nuevas tecnologías.

            Este enfoque garantiza que la tecnología Web3 se utilice 
            no solo como un medio para recaudar fondos, sino como una 
            herramienta educativa que empodera a todos los involucrados, 
            creando así un ecosistema inclusivo y sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
