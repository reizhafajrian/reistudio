import Button from '@/components/Button';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface WorkItem {
  image: string;
  name: string;
  detail_app: string;
  type: string;
  short_desc: string;
  desc: string;
  tech: {
    deliverables: Array<string>;
    technologies: Array<string>;
  }
}
export interface IWorks {
  kultra: WorkItem;
  alojiwa: WorkItem;
}

export const works: IWorks = {
  kultra: {
    image: "/assets/images/kultra.png",
    type: "Mobile App",
    name: "Kultra",
    detail_app: "Restaurant review app", short_desc: "An app to review restaurant",
    tech: {
      deliverables: [
        "UI/UX Design",
        "Figma",
      ],
      technologies: [
        "Expo",
        "React Native",
        "Firebase",
        "Auth 0",
        "MongoDB"
      ]
    },
    desc: "we're excited to introduce Kultra, a comprehensive restaurant review application designed to transform how food enthusiasts discover and rate dining experiences. This state-of-the-art app combines user-friendly design with powerful functionality to cater to the needs of both casual diners and gourmet aficionados"
  },
  alojiwa: {
    image: "/assets/images/alojiwa.png",
    type: "Mobile App",
    name: "Alojiwa",
    detail_app: "Psychologist and Relaxation App",
    short_desc: "an app for your gateway to mental wellness and serenity",
    tech: {
      deliverables: [
        "UI/UX Design",
        "Figma",
      ],
      technologies: [
        "Expo",
        "React Native",
        "Firebase",
        "Auth 0",
        "MongoDB"
      ]
    },
    desc: "Alojiwa is a transformative app designed to nurture your mental and emotional wellbeing. This unique platform seamlessly merges professional psychological support with effective relaxation techniques. Engage in confidential consultations with experienced psychologists, access a plethora of self-help tools, and immerse yourself in soothing relaxation practices. Whether you're seeking guidance through life's challenges or a peaceful escape from daily stress, our app offers a sanctuary for your mind and soul. Empower yourself with guided meditations, insightful articles, and personalized relaxation experiences. With Alojiwa,embark on a journey to tranquility and self-discovery, anytime, anywhere."
  }
}
const Hero = () => {
  const router = useRouter()
  const slug = router.query.slug as keyof IWorks;
  const project = works?.[slug]
  console.log(project)


  return (
    <Box
      bgImage={project?.image}
      h={{ base: '40vh', sm: '75vh', md: '50vh', lg: '90vh' }}
      bgSize="cover"
      bgPos="top"
      pos="relative"
    >
      <Box pos="absolute" w="full" h="full" bgColor="brand.400" opacity="30%" />
      <Box h="full" w="full" pos="absolute">
        <Stack
          maxW="container.xl"
          mx="auto"
          h="full"
          justifyContent="end"
          pb={{ base: 6, md: 24, lg: 36, xl: 56 }}
          spacing={{ base: 2, lg: 5 }}
          px="4"
          color="brand.100"
        >
          <Text fontSize={{ base: 12, md: 32 }} fontWeight={{ md: 500 }}>
            {project?.type}
          </Text>
          <Heading
            fontSize={{ base: 18, md: 28, lg: 40, '2xl': 64 }}
            fontWeight="900"
          >
            {project?.name}:
            <br />
            {project?.detail_app}
          </Heading>
          <Button
            onClick={() => router.replace('/')}
            title="Read more"
            variant="primary"
            arrow
            big
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero
