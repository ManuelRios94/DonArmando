import Reveal from './Reveal'
import { MapPinIcon } from './icons'

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-forest-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <p className="uppercase tracking-[0.25em] text-forest-500 text-xs font-semibold mb-3">
            Ubicación
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest-900 mb-5">
            Pehuen-co, Buenos Aires
          </h2>
          <p className="text-forest-800/80 leading-relaxed mb-6">
            Don Armando Cabañas está ubicado en Pehuen-co, a 2 cuadras de la playa
            y a 4 cuadras del centro del pueblo. Un lugar tranquilo, ideal como
            punto de partida para disfrutar el mar, los médanos y el bosque.
          </p>

          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sand-200">
            <MapPinIcon className="w-5 h-5 text-forest-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-forest-900">Pehuen-co, Partido de Coronel Rosales</p>
              <p className="text-sm text-forest-800/70">Buenos Aires, Argentina</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-sand-200 h-[350px] sm:h-[420px]">
            <iframe
              title="Ubicación de Don Armando Cabañas en Pehuen-co"
              src="https://www.google.com/maps?q=Pehuen-co,+Buenos+Aires,+Argentina&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
