import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  href: string
  title: string
  onClose?: () => void
}

const NavItem = (props: Props) => {
  const { asPath } = useRouter()

  return (
    <NextLink href={props.href} passHref>
      <Link
        fontSize={{ base: 'sm', lg: 'md', '2xl': 'lg' }}
        _activeLink={{ fontWeight: 'bold' }}
        aria-current={props.href === asPath ? 'page' : undefined}
        textTransform="uppercase"
        letterSpacing="widest"
        onClick={props.onClose}
      >
        {props.title}
      </Link>
    </NextLink>
  )
}

export default NavItem
