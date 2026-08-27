import Reveal from './Reveal'
import { CABIN_IMAGES } from '../config/images'
import { buildWhatsAppLink } from '../config/whatsapp'
import { BedIcon, SofaIcon, BathIcon, WifiIcon, SnowflakeIcon, UsersIcon } from './icons'

const AMENITY_PREVIEW = [
  { icon: UsersIcon, label: '2 a 5 personas' },
  { icon: BedIcon, label: '1 cama doble + 2 individuales' },
  { icon: SofaIcon, label: 'Sofá cama en planta baja' },
  { icon: BathIcon, label: 'Baño completo' },
  { icon: WifiIcon, label: 'Wifi' },
  { icon: SnowflakeIcon, label: 'Aire acondicionado' },
]

const CABINS = [
  {
    id: 'medano',
    name: 'Cabaña Médano',
    image: CABIN_IMAGES.cabana1,
    description: 'Ambiente cálido en madera, ideal para familias o grupos de amigos.',
  },
  {
    id: 'bosque',
    name: 'Cabaña Bosque',
    image: CABIN_IMAGES.cabana2,
    description: 'Rodeada de verde, con la misma comodidad para tu estadía en Pehuen-co.',
  },
]

export default function Cabins() {
  return (
    <section id="cabanas" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-forest-500 text-xs font-semibold mb-3">
            Nuestras cabañas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
            Dos cabañas, todo lo necesario
          </h2>
          <p className="text-forest-800/70">
            Cada cabaña tiene capacidad para 2 a 5 personas y cuenta con el mismo
            equipamiento completo para que no te falte nada.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8">
          {CABINS.map((cabin, i) => (
            <Reveal key={cabin.id} delay={i * 120}>
              <article className="group rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-xl transition-shadow bg-sand-50 h-full flex flex-col">
                {/* Reemplazar CABIN_IMAGES en src/config/images.js por fotos reales de cada cabaña */}
                <div className="overflow-hidden h-64">
                  <img
                    src={cabin.image}
                    alt={cabin.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-bold text-forest-900 mb-2">
                    {cabin.name}
                  </h3>
                  <p className="text-sm text-forest-800/70 mb-5">{cabin.description}</p>

                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {AMENITY_PREVIEW.map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-center gap-2 text-sm text-forest-800/80">
                        <Icon className="w-4 h-4 text-forest-600 shrink-0" />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={buildWhatsAppLink(
                      `¡Hola! Quiero consultar disponibilidad para la ${cabin.name} en Don Armando Cabañas`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-center bg-forest-700 hover:bg-forest-800 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
