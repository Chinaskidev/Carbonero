import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" legacyBehavior>
      <a className="relative top-2 flex items-center">
        <Image
          src="/carboneroletras.png"
          alt="Carbornero Logo"
          width={300}
          height={300}
          className="object-contain"
        />
      </a>
    </Link>
  )
}
