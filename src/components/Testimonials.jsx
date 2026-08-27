import Reveal from './Reveal'
import { StarIcon } from './icons'

// Reseñas de ejemplo (placeholder). Reemplazar por testimonios reales de huéspedes.
const TESTIMONIALS = [
  {
    name: 'Marina G.',
    origin: 'Bahía Blanca',
    text: 'Pasamos un fin de semana hermoso, la cabaña súper equipada y a un paso de la playa. Volvemos seguro.',
  },
  {
    name: 'Fede L.',
    origin: 'La Plata',
    text: 'Muy tranquilo y limpio, ideal para desconectar. La pileta compartida fue un plus para los chicos.',
  },
  {
    name: 'Romina y Pablo',
    origin: 'CABA',
    text: 'Excelente atención y la ubicación es inmejorable, cerca de todo pero en un ambiente muy tranquilo.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-forest-500 text-xs font-semibold mb-3">
            Testimonios
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest-900">
            Lo que dicen nuestros huéspedes
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="h-full bg-sand-50 rounded-2xl p-6 border border-sand-200">
                <div className="flex gap-1 text-wood-400 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <StarIcon key={idx} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-forest-800/80 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-semibold text-forest-900 text-sm">{t.name}</p>
                <p className="text-xs text-forest-800/60">{t.origin}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
