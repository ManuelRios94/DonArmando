import Reveal from './Reveal'
import { buildWhatsAppLink, CONTACT_PHONE_DISPLAY, CONTACT_EMAIL } from '../config/whatsapp'
import { WhatsAppIcon, PhoneIcon, MailIcon } from './icons'

export default function ContactCTA() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-forest-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-sand-200 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-sky-300 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para tu escapada a Pehuen-co?
          </h2>
          <p className="text-sand-100/90 mb-10">
            Escribinos por WhatsApp y te contamos disponibilidad, precios y todo lo
            que necesites saber para tu estadía en Don Armando Cabañas.
          </p>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-forest-800 font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            <WhatsAppIcon className="w-6 h-6 text-forest-600" />
            Consultar por WhatsApp
          </a>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sand-100/90 text-sm">
            <a
              href={`tel:${CONTACT_PHONE_DISPLAY.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MailIcon className="w-4 h-4" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
