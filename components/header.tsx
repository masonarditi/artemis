import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold">ARTEMIS</Link>
        <ul className="flex space-x-6">
          <li><Link href="#" className="hover:text-gray-300 transition-colors">Shop</Link></li>
          <li><Link href="#" className="hover:text-gray-300 transition-colors">About</Link></li>
          <li><Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

