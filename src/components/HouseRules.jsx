import Reveal from './Reveal'
import {
  ClockIcon,
  NoPartyIcon,
  NoPawIcon,
  NoSmokingIcon,
  NoGroupIcon,
  UsersIcon,
  SofaIcon,
  BroomIcon,
  WarningTriangleIcon,
  ChildIcon,
  BulbCheckIcon,
  CameraIcon,
  ShieldAlertIcon,
  HeartIcon,
} from './icons'

const RULES = [
  {
    icon: ClockIcon,
    title: 'Horario de silencio',
    text: 'De 23:00 a 08:00 hs. Respetemos el descanso de todos.',
  },
  {
    icon: NoPartyIcon,
    title: 'No se permiten fiestas',
    text: 'Ni eventos que generen ruidos molestos.',
  },
  {
    icon: NoPawIcon,
    title: 'No se aceptan mascotas',
    text: 'Agradecemos tu comprensión.',
  },
  {
    icon: NoSmokingIcon,
    title: 'Prohibido fumar',
    text: 'Dentro de la cabaña.',
  },
  {
    icon: NoGroupIcon,
    title: 'No ingresar visitas',
    text: 'Solo pueden hospedarse las personas incluidas en la reserva.',
  },
  {
    icon: UsersIcon,
    title: 'Respetar la capacidad',
    text: 'Máxima de la cabaña.',
  },
  {
    icon: SofaIcon,
    title: 'Cuidar las instalaciones',
    text: 'Y el mobiliario, como si fueran propios.',
  },
  {
    icon: BroomIcon,
    title: 'Mantener orden',
    text: 'Y limpieza durante toda la estadía.',
  },
  {
    icon: WarningTriangleIcon,
    title: 'No realizar actividades',
    text: 'Que puedan poner en riesgo la seguridad de las personas o de la propiedad.',
  },
  {
    icon: ChildIcon,
    title: 'Menores de edad',
    text: 'Deben permanecer siempre bajo la supervisión de un adulto.',
  },
  {
    icon: BulbCheckIcon,
    title: 'Antes del check-out',
    text: 'Apagar luces, aire acondicionado, calefacción y cerrar puertas y ventanas.',
  },
  {
    icon: CameraIcon,
    title: 'Informar cualquier inconveniente',
    text: 'Rotura o inconveniente durante la estadía.',
  },
]

export default function HouseRules() {
  return (
    <section id="normas" className="py-20 md:py-28 bg-sand-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-forest-500 text-xs font-semibold mb-3">
            Normas de convivencia
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
            Para que todos disfrutemos la estadía
          </h2>
          <p className="text-forest-800/70">
            Te pedimos respetar estas normas para garantizar una estadía tranquila y
            segura para vos y para el resto de los huéspedes.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-6">
          {RULES.map(({ icon: Icon, title, text }, i) => (
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

        <Reveal>
          <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-5">
            <ShieldAlertIcon className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <p className="text-sm text-red-800/90 leading-relaxed">
              <span className="font-semibold">El incumplimiento de estas normas</span> podrá
              dar lugar a la cancelación de la estadía sin derecho a reembolso.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex items-center justify-center gap-2 mt-10 text-center text-forest-800/80">
            <HeartIcon className="w-4 h-4 text-forest-500 shrink-0" />
            <p className="text-sm">
              ¡Gracias por tu colaboración! Esperamos que disfrutes de tu estadía en{' '}
              <span className="font-semibold text-forest-900">Don Armando Cabañas</span>.
            </p>
            <HeartIcon className="w-4 h-4 text-forest-500 shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
