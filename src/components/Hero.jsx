import { Avatar } from '@chakra-ui/avatar';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import React from 'react';
import { LuLeaf } from 'react-icons/lu';
import { FaPlug, FaPlay } from 'react-icons/fa';
import { PiBuildings } from 'react-icons/pi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { GrGroup } from 'react-icons/gr';
import {
  BsFillArrowDownCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs';

const content = [
  { name: 'Agriculture and Agro-Industry', icon: <LuLeaf /> },
  { name: 'Power and Energy Sector', icon: <FaPlug /> },
  { name: 'Housing and Constructions', icon: <PiBuildings /> },
  { name: 'Water', icon: <MdOutlineWaterDrop /> },
  { name: 'Education and Training', icon: <GrGroup /> }
];

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Stack
        as="section"
        bg="white"
        maxW="100vw"
        minH={'100vh'}
        direction={'row'}
        gap={'0'}
        id="home"
      >
        <Flex
          backgroundImage={'url("/hero-bg-L.png")'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'bottom'}
          backgroundSize={'cover'}
          minH={'100vh'}
          w={'50vw'}
          align={'self-start'}
          p={16}
        >
          <Box p={10}>
            <Heading textColor={'#009A4F'} fontSize={'3xl'} mb={5}>
              Welcome to
            </Heading>
            <Heading textColor={'#000'} fontSize={'5xl'} mb={5}>
              WELCOME TO INNOVATIVE AGRICULTURE ( AGRO ) INDUSTRY LIMITED
            </Heading>
            <Text>
              Innovative Agriculture (Agro) Industry Ltd. (IAI) is a member of
              the LR Group, a leading Project Development Company, active
              worldwide since 1986. The Group completed over 400 profitable
              projects in Africa, Asia, Europe, Oceania and South America in the
              fields of:
            </Text>

            <List as="ul" marginTop={'30px'}>
              {content.map((name, i) => (
                <ListItem
                  key={i}
                  as="li"
                  display={'flex'}
                  alignItems={'center'}
                  gap={'20px'}
                  color={'#024731'}
                  fontWeight={'bold'}
                  marginBottom={'15px'}
                  fontSize={'lg'}
                >
                  <Box
                    style={
                      name.name === 'Power and Energy Sector' ||
                      name.name === 'Water'
                        ? { marginLeft: '50px' }
                        : { marginLeft: '0px' }
                    }
                    backgroundColor={'#B9DA75'}
                    rounded={'full'}
                    w={'60px'}
                    h={'60px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    p={2}
                    marginTop={'10px'}
                  >
                    <Box
                      backgroundColor={'#E2F0C7'}
                      rounded={'full'}
                      w={'35px'}
                      h={'35px'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Text fontSize={'20px'} color="#024731">
                        {name.icon}
                      </Text>
                      {/* <LuLeaf  /> */}
                    </Box>
                  </Box>
                  {name.name}
                </ListItem>
              ))}
            </List>
            <Box
              w={'full'}
              display={'flex'}
              alignItems={'flex-end'}
              justifyContent={'center'}
            >
              <Button
                display={'flex'}
                gap={'10px'}
                backgroundColor={'#F67B00'}
                color={'#fff'}
                fontWeight={'normal'}
                padding={'25px'}
                marginTop={'20px'}
              >
                <Flex alignItems={'center'} gap={4}>
                  <a
                    href="#about-us"
                    onClick={() => {
                      scrollToSection('#about-us');
                    }}
                  >
                    <Flex alignItems={'center'} gap={4}>
                      About us <BsFillArrowDownCircleFill size={'20px'} />
                    </Flex>
                  </a>{' '}
                </Flex>
              </Button>
            </Box>
          </Box>
        </Flex>
        <Flex
          backgroundImage={'url("/hero-bg-R.png")'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'bottom'}
          backgroundSize={'cover'}
          // backgroundAttachment={'fixed'}
          minH={'100vh'}
          maxW={'50vw'}
          w={'full'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box color="#FFF">
            <Button
              rounded={'full'}
              w={'80px'}
              h={'80px'}
              color="white"
              _hover={{ outline: '8px solid rgba(255, 255, 255, .7)' }}
            >
              <FaPlay size={'30px'} color="#009A4F" />
            </Button>
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Hero;
