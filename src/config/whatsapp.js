// TODO: Reemplazar por el número real de WhatsApp del complejo (formato: código de país + área + número, sin espacios ni signos)
export const WHATSAPP_NUMBER = '5492916410601'

export const WHATSAPP_DEFAULT_MESSAGE =
  '¡Hola! Quiero consultar disponibilidad en Don Armando Cabañas'

export function buildWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export const CONTACT_PHONE_DISPLAY = '+54 9 2916 41-0601'
export const CONTACT_EMAIL = 'reservas@donarmandocabanas.com.ar'
