// Imágenes reales del complejo. Para reemplazar alguna, sumá el archivo en
// src/assets/images/ e importalo acá igual que las demás (no usar rutas
// string sueltas: Vite solo empaqueta y copia al build las que se importan).

import heroImage from '../assets/images/hero-image.jpeg'
import aboutImage from '../assets/images/about-image.jpeg'

import galleryImage18 from '../assets/images/gallery-image-18.jpeg'
import galleryImage01 from '../assets/images/gallery-image-01.jpeg'
import galleryImage02 from '../assets/images/gallery-image-02.jpeg'
import galleryImage03 from '../assets/images/gallery-image-03.jpeg'
import galleryImage04 from '../assets/images/gallery-image-04.jpeg'
import galleryImage05 from '../assets/images/gallery-image-05.jpeg'
import galleryImage07 from '../assets/images/gallery-image-07.jpeg'
import galleryImage08 from '../assets/images/gallery-image-08.jpeg'
import galleryImage09 from '../assets/images/gallery-image-09.jpeg'
import galleryImage10 from '../assets/images/gallery-image-10.jpeg'
import galleryImage11 from '../assets/images/gallery-image-11.jpeg'
import galleryImage12 from '../assets/images/gallery-image-12.jpeg'
import galleryImage13 from '../assets/images/gallery-image-13.jpeg'
import galleryImage14 from '../assets/images/gallery-image-14.jpeg'
import galleryImage15 from '../assets/images/gallery-image-15.jpeg'
import galleryImage16 from '../assets/images/gallery-image-16.jpeg'
import galleryImage17 from '../assets/images/gallery-image-17.jpeg'

export const HERO_IMAGE = heroImage

export const ABOUT_IMAGE = aboutImage

// TODO: reemplazar por fotos reales de cada cabaña (agregar el archivo en
// src/assets/images/ e importarlo como arriba)
export const CABIN_IMAGES = {
  cabana1: 'https://picsum.photos/seed/cabana-1/800/600',
  cabana2: 'https://picsum.photos/seed/cabana-2/800/600',
}

export const GALLERY_IMAGES = [
  galleryImage18,
  galleryImage01,
  galleryImage02,
  galleryImage03,
  galleryImage04,
  galleryImage05,
  galleryImage07,
  galleryImage08,
  galleryImage09,
  galleryImage10,
  galleryImage11,
  galleryImage12,
  galleryImage13,
  galleryImage14,
  galleryImage15,
  galleryImage16,
  galleryImage17,
]
