import Logo from './Logo';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-stone-800 shadow">
      <div className="container mx-8 pr-4 py-2 flex justify-between items-center space-x-2">
      <div className="text-xl font-bold">
      <Link href="/" legacyBehavior>
        < Logo />
    </Link>
    </div>
    <div className="space-x-4">
    <Link href="/" legacyBehavior>
        <a className="text-white border-b-2 border-transparent hover:border-white transition-colors">
        Home
        </a>
    </Link>
    <Link href="/service" legacyBehavior>
        <a className="text-white border-b-2 border-transparent hover:border-white transition-colors">
        Servicios
        </a>
    </Link>
    <Link href="/contact" legacyBehavior>
        <a className="text-white border-b-2 border-transparent hover:border-white transition-colors">
        Contactanos
        </a>
    </Link>
    </div>

      </div>
    </nav>
  );
}
