import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react';
const reasonsToChooseReiStudio = [
  {
    name: "Customized Solutions",
    desc: "Tailoring our services to meet the unique requirements of each client, ensuring a perfect fit for your specific needs."
  },
  {
    name: "Technological Expertise",
    desc: "A team of professionals highly skilled in the latest technologies, dedicated to providing cutting-edge solutions."
  },
  {
    name: "Innovative Approach",
    desc: "Constantly exploring new technologies and methodologies to deliver innovative and forward-thinking solutions."
  },
  {
    name: "Client-Centric Focus",
    desc: "Commitment to understanding and prioritizing the goals and vision of our clients in every project."
  },
  {
    name: "Quality Assurance",
    desc: "Rigorous testing and quality control measures to ensure the highest standards of reliability and performance."
  },
  {
    name: "Scalable and Sustainable Solutions",
    desc: "Designing solutions that not only meet current needs but are also scalable for future growth and change."
  },
  {
    name: "Agile Methodologies",
    desc: "Employing agile development practices for efficient and flexible project management."
  },
  {
    name: "Effective Communication",
    desc: "Maintaining clear, transparent, and consistent communication with clients throughout the project lifecycle."
  },
  {
    name: "Comprehensive Support",
    desc: "Offering thorough post-deployment support and maintenance to ensure ongoing efficiency and effectiveness."
  },
  {
    name: "Industry Experience",
    desc: "A rich portfolio showcasing diverse projects across various industries, reflecting our versatility and adaptability."
  },
  {
    name: "User-Centric Design",
    desc: "Focusing on user experience and interface design to create intuitive and engaging products."
  },
  {
    name: "Collaborative Environment",
    desc: "Encouraging collaboration between our team and clients, fostering a shared vision and stronger outcomes."
  },
  {
    name: "Continuous Learning and Improvement",
    desc: "Committed to continuous professional development, keeping our team updated with the latest industry trends and best practices."
  },
  {
    name: "Ethical and Responsible Practices",
    desc: "Adherence to the highest standards of professional ethics and responsibility, ensuring trust and integrity in all our dealings."
  },
  {
    name: "Global Mindset",
    desc: "Serving a diverse global clientele, understanding and meeting the needs of businesses operating in various cultural and economic landscapes."
  }
];
const WhyUs = () => {
  return (
    <Grid
      gap={{ base: 6, lg: 10 }}
      templateColumns={{ sm: 'repeat(1, 1fr)' }}
      maxWidth="container.xl"
      mx="auto"
      // px={{ base: 4, md: 10, lg: 0 }}
      placeItems="center"
    >

      <Heading
        as="h2"
        fontSize={{ base: 18, md: 20, lg: 42 }}
        fontWeight="extrabold"
        mb={{ base: 5, lg: 10 }}
      >
        WHY Rei Studio ?
      </Heading>
      <Stack gap={{ base: 4, lg: 9 }}>
        <Grid
          columnGap={{ base: 6, lg: 10 }}
          templateColumns={{ sm: 'repeat(2, 1fr)' }}
          maxWidth="container.xl"
          mx="auto"
          // my={{ base: 6, lg: 60 }}
          px={{ base: 4, lg: 0 }}
        >
          {
            reasonsToChooseReiStudio.map((res, index) => <Item key={index} name={res.name} desc={res.desc} />)
          }
        </Grid>
      </Stack>
    </Grid >
  )
}

export default WhyUs




const Item = ({ name, desc }: {
  name: string;
  desc: string;
}) => {

  return (
    <Box my={5}>
      <Heading as="h3" fontSize={{ base: 18, lg: 32 }} mb={{ base: 2, lg: 4 }}>
        <span style={{ marginRight: 16 }}>✅
        </span>
        {name}
      </Heading>
      <Text fontSize={{ base: 12, lg: 24 }} letterSpacing="wide">
        {desc}
      </Text>
    </Box>
  )
}
