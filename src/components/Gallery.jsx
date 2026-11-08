import { useState } from 'react'
import Reveal from './Reveal'
import Lightbox from './Lightbox'
import { GALLERY_IMAGES } from '../config/images'
import { ZoomInIcon } from './icons'

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  const showPrev = () => setOpenIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
  const showNext = () => setOpenIndex((i) => (i + 1) % GALLERY_IMAGES.length)

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
            Fotos ilustrativas del complejo y sus alrededores. Hacé click para verlas en detalle.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 70} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Ver foto ${i + 1} en detalle`}
                className="relative rounded-xl overflow-hidden h-full w-full group cursor-zoom-in"
              >
                <img
                  src={src}
                  alt={`Don Armando Cabañas - foto ${i + 1}`}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? 'h-full min-h-[220px] sm:min-h-[320px]' : 'h-full min-h-[140px] sm:min-h-[150px]'
                  }`}
                />
                <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/20 transition-colors flex items-center justify-center">
                  <ZoomInIcon className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          src={GALLERY_IMAGES[openIndex]}
          alt={`Don Armando Cabañas - foto ${openIndex + 1}`}
          onClose={() => setOpenIndex(null)}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  )
}
