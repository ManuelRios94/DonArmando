import { useEffect, useState } from 'react'
import { buildWhatsAppLink } from '../config/whatsapp'
import { MenuIcon, CloseIcon } from './icons'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-sand-50/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            className={`font-display font-bold text-xl md:text-2xl tracking-tight transition-colors ${
              scrolled ? 'text-forest-800' : 'text-white drop-shadow-md'
            }`}
          >
            Don Armando <span className="text-wood-300">Cabañas</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-sm transition-colors hover:text-wood-400 ${
                  scrolled ? 'text-forest-800' : 'text-white drop-shadow-md'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest-600 hover:bg-forest-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Reservar
            </a>
          </nav>

          <button
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-forest-800' : 'text-white'}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-sand-50 border-t border-sand-200 shadow-lg">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-forest-800 font-medium py-3 border-b border-sand-200 last:border-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-3 text-center bg-forest-600 hover:bg-forest-700 text-white font-semibold px-5 py-3 rounded-full transition-colors"
            >
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
