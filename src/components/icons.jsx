// Set de íconos SVG livianos, sin dependencias externas.
// Todos aceptan className para poder tipear tamaño/color desde Tailwind.

const base = 'w-6 h-6'

export const WifiIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const TvIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="6" width="20" height="13" rx="2" />
    <path d="M8 22h8M12 19v3" />
  </svg>
)

export const SnowflakeIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M4.5 6l15 12M19.5 6l-15 12" />
    <path d="M2 12h20" />
  </svg>
)

export const FlameIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.3-2-1-3 1.5 1 2.5 3 2.5 5a6.5 6.5 0 0 1-13 0C6.5 7 9 5 12 2Z" />
  </svg>
)

export const MicrowaveIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <rect x="5" y="8" width="10" height="8" rx="1" />
    <path d="M18 9v.01M18 12v.01M18 15v.01" />
  </svg>
)

export const FridgeIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M5 10h14M9 5v3M9 14v3" />
  </svg>
)

export const BedIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" />
    <path d="M2 18v2M22 18v2M2 12V8a2 2 0 0 1 2-2h4v6" />
  </svg>
)

export const SofaIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
    <path d="M2 12h20v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
    <path d="M4 18v2M20 18v2" />
  </svg>
)

export const BathIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.5 1V12" />
    <path d="M4 12h18v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
    <path d="M7 19v2M17 19v2" />
  </svg>
)

export const WavesIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 6c1.5 1.5 3 1.5 4.5 0S9 4.5 10.5 6s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
    <path d="M2 12c1.5 1.5 3 1.5 4.5 0S9 10.5 10.5 12s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
    <path d="M2 18c1.5 1.5 3 1.5 4.5 0S9 16.5 10.5 18s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
  </svg>
)

export const NoPawIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="15" r="3.2" />
    <circle cx="6" cy="9" r="1.6" />
    <circle cx="18" cy="9" r="1.6" />
    <circle cx="9" cy="5.5" r="1.4" />
    <circle cx="15" cy="5.5" r="1.4" />
    <path d="M3 3l18 18" />
  </svg>
)

export const StoveIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8.5" cy="10" r="2" />
    <circle cx="15.5" cy="10" r="2" />
    <path d="M6 17h12" />
  </svg>
)

export const KettleIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12a7 7 0 0 1 14 0c0 4-2 8-3 9H8c-1-1-3-5-3-9Z" />
    <path d="M12 5V3M18 10h3M5 8 3 7" />
  </svg>
)

export const DishesIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 10a9 9 0 0 0 18 0Z" />
    <path d="M12 14v6M9 20h6" />
  </svg>
)

export const ParkingIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M9 16V8h4a3 3 0 0 1 0 6H9" />
  </svg>
)

export const MapPinIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const PhoneIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.2a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z" />
  </svg>
)

export const MailIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
)

export const InstagramIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const FacebookIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
  </svg>
)

export const WhatsAppIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10 9 9.5 7.7 9.2 7.2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4Z" />
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
  </svg>
)

export const MenuIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

export const CloseIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export const CheckIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m20 6-11 11-5-5" />
  </svg>
)

export const UsersIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
  </svg>
)

export const StarIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" />
  </svg>
)

export const TreesIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 10v10M10 10 7 5l3-3 3 3-3 5ZM17 15v5M17 15l-2.5-4 2.5-3 2.5 3-2.5 4Z" />
  </svg>
)

export const ClockIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

export const NoPartyIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 21 14 11" />
    <path d="M14 6 12 4M17 9l-2-2M17.5 5.5 16 4M20 8l-2-2" />
    <path d="m4 21 3-9 6 6z" />
    <circle cx="18.5" cy="14.5" r="3" fill="none" />
    <path d="m17 13 3 3M20 13l-3 3" />
  </svg>
)

export const NoSmokingIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 16h11a2 2 0 1 0 0-4" />
    <path d="M3 16v3h13v-3M18 16v3M21 16v3" />
    <path d="M3 3l18 18" />
  </svg>
)

export const NoGroupIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 21v-1.6a3.6 3.6 0 0 0-3.6-3.6H6.6A3.6 3.6 0 0 0 3 19.4V21" />
    <circle cx="9" cy="8" r="3.2" />
    <path d="M17 14.5a3.2 3.2 0 1 0-2.2-5.5" />
    <path d="M3 3l18 18" />
  </svg>
)

export const BroomIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 4 10 14" />
    <path d="M9 13c-2 0-5 1-6.5 4.5C5 18 8 19 10 17c1-1 1.5-2.2 1-3.5" />
    <path d="m10 14 3 3" />
  </svg>
)

export const WarningTriangleIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3 2 20h20L12 3Z" />
    <path d="M12 10v4M12 17v.01" />
  </svg>
)

export const ChildIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="6" r="3" />
    <path d="M9 21v-5.5L7 13v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2l-2 2.5V21" />
  </svg>
)

export const BulbCheckIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2h5.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
  </svg>
)

export const CameraIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13" r="3.2" />
  </svg>
)

export const ShieldAlertIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3 4 6v6c0 4.5 3 8 8 9 5-1 8-4.5 8-9V6Z" />
    <path d="M12 8v5M12 16v.01" />
  </svg>
)

export const HeartIcon = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21s-7-4.35-9.5-8.5C.7 9 2 5 5.5 5c2 0 3.5 1.2 4.5 2.6C11 6.2 12.5 5 14.5 5 18 5 19.3 9 21.5 12.5 19 16.65 12 21 12 21Z" />
  </svg>
)
