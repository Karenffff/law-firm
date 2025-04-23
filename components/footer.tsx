import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-amber-500">Justice</span> Law
            </h3>
            <p className="text-gray-400 mb-6">
              Providing exceptional legal services with integrity and dedication since 2005.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Practice Areas", path: "/practice-areas" },
                { name: "Our Attorneys", path: "/attorneys" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-400 hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {[
                { name: "Corporate Law", path: "/practice-areas/corporate-law" },
                { name: "Litigation", path: "/practice-areas/litigation" },
                { name: "Family Law", path: "/practice-areas/family-law" },
                { name: "Real Estate Law", path: "/practice-areas/real-estate" },
                { name: "Intellectual Property", path: "/practice-areas/intellectual-property" },
                { name: "Tax Law", path: "/practice-areas/tax-law" },
              ].map((area, index) => (
                <li key={index}>
                  <Link href={area.path} className="text-gray-400 hover:text-amber-500 transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                Via Pietro Metastasio, 
                  <br />
                  5 20123 Milano italy
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                <a href="tel:+39239163652" className="text-gray-400 hover:text-amber-500 transition-colors">
                  +39 239163652
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                <a href="mailto:Avv@madinilegal.org" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Avv@madinilegal.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {currentYear} Madini Legal Firm. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-amber-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-amber-500 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-amber-500 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
