import { LinkWithImageProps } from '@/types/link'
import { NextRouter } from 'next/router'
import _ from 'lodash'

type Categories =
  | 'home'
  | 'gallery'
  | 'motion'
  | 'integration'
  | 'login'
  | 'signup'
export const links: Record<Categories, LinkWithImageProps> = {
  home: {
    href: '/',
    title: 'Top',
    image: '',
  },
  gallery: {
    href: '/gallery',
    title: 'Gallery',
    image: '/gallery.jpg',
  },
  motion: {
    href: '/motion',
    title: 'Motion',
    image: '/motion.jpg',
  },
  integration: {
    href: '/integration',
    title: 'Integration',
    image: '/integration.jpg',
  },
  login: {
    href: '/login',
    title: 'Login',
    image: '',
  },
  signup: {
    href: '/signup',
    title: 'SignUp',
    image: '',
  },
}

export const headerLinks = _.chain(links)
  .pick(['home', 'gallery', 'motion', 'integration'])
  .values()
  .value()
export const menuLinks = _.chain(links).values().value()

export function isHrefInCategory(href: string, router: NextRouter) {
  return href === router.pathname.split(/(?=\/)/g)[0]
}
