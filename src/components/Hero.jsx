import { buildWhatsAppLink } from '../config/whatsapp'
import { HERO_IMAGE } from '../config/images'

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Reemplazar HERO_IMAGE en src/config/images.js por una foto real del complejo/playa */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/50 to-forest-900/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <p className="uppercase tracking-[0.3em] text-sand-200 text-xs sm:text-sm font-semibold mb-4">
          Pehuen-co · Buenos Aires
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5 drop-shadow-lg">
          Tu descanso frente al mar, entre médanos y bosque
        </h1>
        <p className="text-sand-100 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Cabañas equipadas a pocas cuadras de la playa, pensadas para desconectar
          en familia o con amigos, con la tranquilidad de Pehuen-co.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Reservar por WhatsApp
          </a>
          <a
            href="#cabanas"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold px-8 py-3.5 rounded-full transition-all backdrop-blur-sm"
          >
            Ver cabañas
          </a>
        </div>
      </div>

      <a
        href="#nosotros"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
