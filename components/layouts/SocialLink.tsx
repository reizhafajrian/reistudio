import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface Props {
  href: string
  icon: IconType
}




const SocialLink = (props: Props) => {
  const Icon = props?.icon
  return (
    <Link href={props.href} target="_blank">
      <Button variant="unstyled" size={{ base: 'xs', lg: 'md', '2xl': 'lg' }}>
        {
          <Icon size={45} /> ?? null
        }
      </Button>
    </Link>
  )
}


export default SocialLink
