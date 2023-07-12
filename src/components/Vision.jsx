import { Image } from '@chakra-ui/image';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text
} from '@chakra-ui/layout';
import React from 'react';
import { PiPlant } from 'react-icons/pi';

const listItems = [
  { name: 'Proven track record in high-growth economies' },
  {
    name: 'Creative tailor-made solutions and multi-disciplinary capabilities'
  },
  {
    name: 'Innovative technology and a deep understanding of local market dynamics'
  },
  {
    name: 'End-to-end solution capabilities in executing greenfield projects, including experience in initiating, launching, executing and managing a range of ventures'
  },
  { name: 'Proven ability in raising funds and investments' },
  {
    name: 'Knowledge transfer – establish an array of local professionals that will continue to tdeliver and implement their acquired skills throughout and beyond project life'
  },
  {
    name: 'Knowledge transfer – establish an array of local professionals that will continue to tdeliver and implement their acquired skills throughout and beyond project life'
  }
];

const Vision = () => {
  return (
    <>
      <Box
        as="section"
        bg="white"
        maxW="100vw"
        backgroundColor="#fff"
        p="16px"
        marginTop={'50px'}
        id="vision"
      >
        <Container maxW={'90vw'}>
          <Heading as={'h3'} fontSize={'40px'} color={'#024731'}>
            Our vision
          </Heading>
          <Box
            width={'70px'}
            h={'7px'}
            bg={'green'}
            bgColor={'#93CE20'}
            marginTop={'10px'}
            marginBottom={'50px'}
          />
          <Flex>
            <Flex w={'50%'} flexDirection={'column'}>
              <Box lineHeight={'1.10'}>
                <Text fontSize={'40px'} color={'#024731'}>
                  Developing sustainable and profitable agriculture projects
                </Text>
                <Text color={'#024731'} marginTop={'10px'}>
                  improve standard of living by creating employment, investing
                  in downstream processing, capacity building and training;
                  leading to better access to market (both domestic &
                  international) turning subsistence farmers into cash-cropping
                  farmers.
                </Text>
              </Box>
              <Box>
                <Text
                  color={'#024731'}
                  fontWeight={'semibold'}
                  fontSize={'17px'}
                  margin={'15px 0'}
                >
                  What makes us Unique:
                </Text>
                <List>
                  {listItems.map((item, i) => (
                    <ListItem
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                      flexWrap={'nowrap'}
                      gap={'16px'}
                      key={i}
                    >
                      <Box>
                        <PiPlant min={'36px'} size={'36px'} color="#93CE20" />
                      </Box>
                      <Text>{item.name}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Flex>
            <Flex
              w={'50%'}
              display={'flex'}
              justifyContent="center"
              alignItems="center"
            >
              <Flex position="relative">
                <Box
                  p={1}
                  w={'160px'}
                  h={'160px'}
                  position="absolute"
                  top="100"
                  left="-55"
                  zIndex={2}
                  boxShadow="inner"
                >
                  <Box
                    p={1}
                    w={'160px'}
                    h={'160px'}
                    position="absolute"
                    zIndex={1}
                  >
                    <Image
                      src="https://images.pexels.com/photos/1562389/pexels-photo-1562389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      w="100%"
                      h="100%"
                      rounded={'2xl'}
                    />
                  </Box>
                </Box>
                <Box
                  boxShadow="md"
                  rounded="2xl"
                  p={1}
                  w="400px"
                  h="400px"
                  zIndex={1}
                >
                  <Image
                    objectFit={'fit'}
                    rounded="2xl"
                    src="https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    w="100%"
                    h="100%"
                  />
                </Box>
                <Box
                  p={1}
                  w={'200'}
                  h={'210px'}
                  position="absolute"
                  bottom="-55"
                  right="0"
                  zIndex={1}
                >
                  <Image
                    src="/about-img-2.png"
                    w="100%"
                    h="100%"
                    objectFit={'fit'}
                  />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Vision;
