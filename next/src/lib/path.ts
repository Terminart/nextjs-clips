import { LinkWithImageProps } from '@/types/link'
import { NextRouter } from 'next/router'

export const homeLink: LinkWithImageProps = {
  href: '/',
  title: 'Top',
  image: '',
}
export const galleryLink: LinkWithImageProps = {
  href: '/gallery',
  title: 'Gallery',
  image: '/gallery.jpg',
}
export const motionLink: LinkWithImageProps = {
  href: '/motion',
  title: 'Motion',
  image: '/motion.jpg',
}
export const integrationLink: LinkWithImageProps = {
  href: '/integration',
  title: 'Integration',
  image: '/integration.jpg',
}
export const loginLink: LinkWithImageProps = {
  href: '/login',
  title: 'Login',
  image: '',
}
export const signupLink: LinkWithImageProps = {
  href: '/signup',
  title: 'SignUp',
  image: '',
}
export const headerLinks = [homeLink, galleryLink, motionLink, integrationLink]
export const menuLinks = [
  homeLink,
  galleryLink,
  motionLink,
  integrationLink,
  loginLink,
  signupLink,
]

export function isHrefInCategory(href: string, router: NextRouter) {
  return href === router.pathname.split(/(?=\/)/g)[0]
}
