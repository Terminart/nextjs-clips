import { Path } from '@/types/path'

export type LinkProps = {
  href: Path
  title: string
}

export type LinkWithImageProps = LinkProps & {
  image?: string
}
