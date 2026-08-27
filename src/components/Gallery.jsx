import Reveal from './Reveal'
import { GALLERY_IMAGES } from '../config/images'

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-forest-500 text-xs font-semibold mb-3">
            Galería
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
            Un vistazo a Don Armando
          </h2>
          <p className="text-forest-800/70">
            Fotos ilustrativas del complejo y sus alrededores.
          </p>
        </Reveal>

        {/* Reemplazar GALLERY_IMAGES en src/config/images.js por fotos reales del complejo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 70} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
              <div className="rounded-xl overflow-hidden h-full group">
                <img
                  src={src}
                  alt={`Don Armando Cabañas - foto ${i + 1}`}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? 'h-full min-h-[220px] sm:min-h-[320px]' : 'h-full min-h-[140px] sm:min-h-[150px]'
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
