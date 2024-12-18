import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-6 mt-12">
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-gray-300 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors">
          <Twitter size={24} />
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors">
          <Facebook size={24} />
        </a>
      </div>
    </footer>
  )
}

