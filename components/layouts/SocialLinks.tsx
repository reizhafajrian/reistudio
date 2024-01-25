import { HStack } from '@chakra-ui/react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import SocialLink from './SocialLink';

interface Props {
  center?: boolean
  black?: boolean
}

const SocialLinks = (props: Props) => {
  return (
    <HStack
      justifyContent={props.center ? 'center' : 'start'}
      spacing={{ base: 2, lg: 4 }}
    >
      {/* <SocialLink href="/" icon={props.black ? 'facebook-black' : 'facebook'} /> */}
      <SocialLink
        href="mailto:information@reistudio.co"
        icon={MdOutlineMailOutline}
      />
      <SocialLink
        href="https://api.whatsapp.com/send?phone=+6281213465905&text=Hello%20saya%20ingin%20menanyakan%20perihal%20reistudio"
        icon={FaWhatsapp}
      />
      <SocialLink
        href="https://www.instagram.com/rei._studio/"
        icon={FaInstagram}
      />
      {/* <SocialLink href="/" icon={props.black ? 'linkedin-black' : 'linkedin'} /> */}
      {/* <SocialLink href="/" icon={props.black ? 'twitter-black' : 'twitter'} /> */}
    </HStack>
  )
}

export default SocialLinks
