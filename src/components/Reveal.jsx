import { useReveal } from '../hooks/useReveal'

// Envoltorio genérico para aplicar la animación fade-in-up a cualquier sección/bloque
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const { ref, isVisible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}
