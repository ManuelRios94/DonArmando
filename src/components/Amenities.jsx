import Reveal from './Reveal'
import {
  WifiIcon,
  TvIcon,
  SnowflakeIcon,
  FlameIcon,
  MicrowaveIcon,
  FridgeIcon,
  StoveIcon,
  KettleIcon,
  DishesIcon,
  BathIcon,
  WavesIcon,
  NoPawIcon,
} from './icons'

const AMENITIES = [
  { icon: WifiIcon, title: 'Wifi', text: 'Conexión disponible en toda la cabaña.' },
  { icon: TvIcon, title: 'TV', text: 'Televisión en el living.' },
  { icon: SnowflakeIcon, title: 'Aire acondicionado', text: 'Para los días de más calor.' },
  { icon: WavesIcon, title: 'Piscina de 11 metros', text: 'Pileta compartida entre las cabañas.' },
  { icon: FlameIcon, title: 'Fogones', text: 'Espacio para compartir una noche al aire libre.' },
  { icon: StoveIcon, title: 'Anafe 2 hornallas', text: 'Cocina equipada para el día a día.' },
  { icon: KettleIcon, title: 'Pava y horno eléctrico', text: 'Para desayunos y comidas simples.' },
  { icon: MicrowaveIcon, title: 'Microondas', text: 'Incluido en la cocina.' },
  { icon: FridgeIcon, title: 'Heladera con freezer', text: 'Espacio de sobra para tus compras.' },
  { icon: DishesIcon, title: 'Vajilla completa', text: 'Todo lo necesario para cocinar y comer.' },
  { icon: BathIcon, title: 'Baño completo', text: 'Un baño completo por cabaña.' },
  { icon: NoPawIcon, title: 'No admite mascotas', text: 'El complejo no acepta mascotas.' },
]

export default function Amenities() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-forest-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-forest-500 text-xs font-semibold mb-3">
            Servicios y comodidades
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
            Todo lo que necesitás para tu estadía
          </h2>
          <p className="text-forest-800/70">
            A 2 cuadras de la playa y a 4 del centro, con acceso a nuestra piscina compartida de 11 metros.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {AMENITIES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 4) * 80}>
              <div className="h-full bg-white rounded-xl p-5 border border-sand-200 hover:border-forest-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-1 text-sm sm:text-base">{title}</h3>
                <p className="text-xs sm:text-sm text-forest-800/65 leading-snug">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
