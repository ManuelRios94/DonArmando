import { buildWhatsAppLink } from '../config/whatsapp'
import { WhatsAppIcon } from './icons'

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-slow"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  )
}
