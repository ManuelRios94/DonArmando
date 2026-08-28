import { CONTACT_PHONE_DISPLAY, CONTACT_EMAIL } from '../config/whatsapp'
import { InstagramIcon, FacebookIcon, MapPinIcon } from './icons'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Normas', href: '#normas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 text-sand-100/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-3">
            Don Armando Cabañas
          </h3>
          <p className="text-sm leading-relaxed">
            Cabañas equipadas en Pehuen-co, Buenos Aires. A 2 cuadras de la playa,
            con pileta compartida y todo lo necesario para tu estadía.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 shrink-0" /> Pehuen-co, Buenos Aires
            </li>
            <li>{CONTACT_PHONE_DISPLAY}</li>
            <li>{CONTACT_EMAIL}</li>
          </ul>

          {/* Redes sociales: reemplazar el href de Facebook por la cuenta real */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.instagram.com/cabanasdonarmando.pehuenco/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 px-5 sm:px-8 max-w-6xl mx-auto text-center text-xs text-sand-100/50">
        © {year} Don Armando Cabañas. Todos los derechos reservados.
      </div>
    </footer>
  )
}
