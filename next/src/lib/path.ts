import { LinkWithImageProps } from '@/types/link'
import { NextRouter } from 'next/router'
import { Subdirectory, path, Path } from '@/types/path'

export const categoryLinks: Record<Subdirectory, LinkWithImageProps> = {
  home: {
    href: path.home,
    title: 'Top',
    image: '',
  },
  gallery: {
    href: path.gallery.index,
    title: 'Gallery',
    image: '/gallery.jpg',
  },
  motion: {
    href: path.motion.index,
    title: 'Motion',
    image: '/motion.jpg',
  },
  integration: {
    href: path.integration.index,
    title: 'Integration',
    image: '/integration.jpg',
  },
  login: {
    href: path.login,
    title: 'Login',
    image: '',
  },
  signup: {
    href: path.signup,
    title: 'SignUp',
    image: '',
  },
}

export function isPathInCategory(path: Path, router: NextRouter) {
  return path === router.pathname.split(/(?=\/)/g)[0]
}
