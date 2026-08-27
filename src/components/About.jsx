import Reveal from './Reveal'
import { ABOUT_IMAGE } from '../config/images'
import { TreesIcon, WavesIcon, MapPinIcon } from './icons'

const HIGHLIGHTS = [
  {
    icon: WavesIcon,
    title: 'Mar y playa cerca',
    text: 'A solo 2 cuadras de la playa, para disfrutar el mar cuando quieras.',
  },
  {
    icon: TreesIcon,
    title: 'Médanos y bosque',
    text: 'Pehuen-co combina costa, médanos y bosque en un mismo paisaje.',
  },
  {
    icon: MapPinIcon,
    title: 'Pueblo tranquilo',
    text: 'Un pueblo chico, ideal para desconectar del ritmo de la ciudad.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-sand-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            {/* Reemplazar ABOUT_IMAGE en src/config/images.js por una foto real del complejo */}
            <img
              src={ABOUT_IMAGE}
              alt="Vista del complejo Don Armando Cabañas"
              className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
            />
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-forest-700 text-white rounded-2xl px-6 py-5 shadow-lg">
              <p className="font-display text-3xl font-bold leading-none">2</p>
              <p className="text-xs uppercase tracking-wide text-sand-100 mt-1">Cabañas equipadas</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="uppercase tracking-[0.25em] text-forest-500 text-xs font-semibold mb-3">
            Sobre nosotros
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest-900 mb-5">
            Un refugio simple, cómodo y a metros del mar
          </h2>
          <p className="text-forest-800/80 leading-relaxed mb-4">
            Don Armando Cabañas es un pequeño complejo de dos cabañas en Pehuen-co,
            pensado para quienes buscan unos días de descanso real: playa, aire libre
            y silencio, sin resignar comodidad.
          </p>
          <p className="text-forest-800/80 leading-relaxed mb-8">
            Elegimos Pehuen-co porque todavía conserva lo que muchos balnearios
            perdieron: médanos, bosque de coníferas, playas extensas y esa calma
            de pueblo que invita a bajar un cambio.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="w-11 h-11 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-1">{title}</h3>
                <p className="text-sm text-forest-800/70 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
