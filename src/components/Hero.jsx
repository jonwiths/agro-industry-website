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
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const content = [
  { name: 'Agriculture and Agro-Industry', icon: <LuLeaf /> },
  { name: 'Power and Energy Sector', icon: <FaPlug /> },
  { name: 'Housing and Constructions', icon: <PiBuildings /> },
  { name: 'Water', icon: <MdOutlineWaterDrop /> },
  { name: 'Education and Training', icon: <GrGroup /> }
];

const Hero = () => {
  return (
    <>
      <Stack
        as="section"
        bg="white"
        maxW="100vw"
        minH={'100vh'}
        direction={'row'}
        gap={'0'}
      >
        <Flex
          backgroundImage={'url("./public/hero-bg-L.png")'}
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
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    color: '#024731',
                    fontWeight: 'bold'
                  }}
                  marginBottom={'15px'}
                  fontSize={'lg'}
                >
                  <Box
                    // marginLeft={'0px'}
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
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}
            >
              <Button
                style={{
                  display: 'flex',
                  gap: '10px',
                  backgroundColor: '#F67B00',
                  color: '#fff',
                  fontWeight: 'normal',
                  padding: '25px'
                }}
              >
                About Us <BsFillArrowDownCircleFill />{' '}
              </Button>
            </Box>
          </Box>
        </Flex>
        <Flex
          backgroundImage={'url("./public/hero-bg-R.png")'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'bottom'}
          backgroundSize={'cover'}
          // backgroundAttachment={'fixed'}
          minH={'100vh'}
          maxW={'50vw'}
          w={'full'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box color="#FFF">
            <Button rounded={'full'} w={'80px'} h={'80px'} color="white">
              <FaPlay size={'30px'} color="#009A4F" />
            </Button>
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Hero;
