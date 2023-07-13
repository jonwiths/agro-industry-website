import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/layout';
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Image
} from '@chakra-ui/react';

const sectorCards = [
  {
    img: '/sectors/ilimo.png',
    name: 'ilimo dairy farm',
    desc: 'Real Milk! Real Local',
    link: '#'
  },
  {
    img: '/sectors/kuk.png',
    name: 'kuk farm',
    desc: 'Perfect Potato & KauKau for the perfect chip!',
    link: '#'
  },
  {
    img: '/sectors/jiwaka.png',
    name: 'jiwaka produce',
    desc: '',
    link: '#'
  },
  {
    img: '/sectors/wigman.png',
    name: 'wigman',
    desc: '',
    link: '#'
  },
  {
    img: '/sectors/joi.png',
    name: 'joi by ilimo',
    desc: 'Real Fruit, Natural Flavours',
    link: '#'
  },
  {
    img: '/sectors/sirunki.png',
    name: 'sirunki farm',
    desc: 'Enga Fresh Produce',
    link: '#'
  },
  {
    img: '/sectors/mt-fubilan.png',
    name: 'mount fubilan farm',
    desc: 'Quality Eggs',
    link: '#'
  },
  {
    img: '/sectors/fly-vanilla.png',
    name: 'fly vanilla',
    desc: '',
    link: '#'
  },
  {
    img: '/sectors/mile-farm1.png',
    name: '9 mile farm',
    desc: 'Quality Fresh Produce',
    link: '#'
  },
  {
    img: '/sectors/sepik-fresh.png',
    name: 'sepik fresh farm',
    desc: 'Kaikai bilong ol Oris PS!',
    link: '#'
  }
];

const OurSector = () => {
  return (
    <>
      <Box
        as="section"
        bg="white"
        maxW="100vw"
        backgroundColor="#fff"
        p="16px"
        margin={'50px 0'}
        id="our-sector"
      >
        <Container maxW={'90vw'}>
          <Heading as={'h3'} fontSize={'40px'} color={'#024731'}>
            Our Sector
          </Heading>
          <Box
            width={'70px'}
            h={'7px'}
            bg={'green'}
            bgColor={'#93CE20'}
            marginTop={'10px'}
            marginBottom={'50px'}
          ></Box>
          <Grid templateColumns={'repeat(5, 1fr)'} gap={4}>
            {sectorCards.map((content, i) => (
              <GridItem key={i}>
                <Card maxW="sm" w={'300px'} h={'420px'} position={'relative'}>
                  <Image
                    src={content.img}
                    alt={content.name}
                    borderRadius="2xl"
                  />
                  <CardBody>
                    <Stack mt="1" spacing="1">
                      <Heading size="md">{content.name}</Heading>
                      <Text>{content.desc}</Text>
                    </Stack>

                    <Box
                      w={'full'}
                      display={'flex'}
                      alignContent={'center'}
                      justifyContent={'center'}
                      marginTop={'16px'}
                      position={'absolute'}
                      bottom={'5'}
                      right={'0'}
                      left={'0'}
                    >
                      <Button
                        variant="solid"
                        backgroundColor="#024731"
                        colorScheme="#024731"
                        color={'#fff'}
                        rounded={'3xl'}
                        w={'200px'}
                        marginTop={'10px'}
                      >
                        <Text fontSize={'13px'}>
                          {' '}
                          <a href="#">Read More</a>{' '}
                        </Text>
                      </Button>
                    </Box>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OurSector;
