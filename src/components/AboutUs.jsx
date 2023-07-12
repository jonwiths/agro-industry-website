import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { PiPlant } from 'react-icons/pi';

const AboutUs = () => {
  return (
    <>
      <Box as="section" bg="white" maxW="100vw" p="16px" id="about-us">
        <Container maxW={'90vw'} color="#009A4F">
          <Flex>
            <Box w={'60%'}>
              <Heading as={'h4'} fontSize={'40px'} marginTop={'30px'}>
                About Us
              </Heading>
              <Flex
                direction={'column'}
                gap={'20px'}
                fontSize={'20px'}
                color={'#024731'}
                marginTop={'30px'}
                textAlign={'justify'}
              >
                <Text>
                  IAI began its activities in Papua New Guinea (PNG)
                  agricultural sector in 2011. IAI’s projects in PNG encompass a
                  wide range of activities such as farming, greenhouses,
                  poultry, processing and dairy. All projects integrate and
                  implement Israeli knowledge and expertise leading to enhanced
                  production capabilities and profitability.
                </Text>
                <Text>
                  Our projects generated over 1,000 new direct job opportunities
                  employing Papua New Guineans of all walks of life, from
                  university graduates, professionals to general staff.
                </Text>
                Our projects further engage hundreds of small scale farmers that
                supply our Agro Industrial Centres (AIC), turning subsistence
                farmers into cash cropping farmers.
                <Text>
                  Each Agro Industrial Centre (AIC) is tailored for its location
                  and the market demand, and together they create a value and
                  supply chain providing food security, import replacement and
                  local capacity building.
                </Text>
              </Flex>
              <Button
                style={{
                  display: 'flex',
                  gap: '10px',
                  backgroundColor: '#F67B00',
                  color: '#fff',
                  fontWeight: 'normal',
                  padding: '25px',
                  marginTop: '20px'
                }}
              >
                Read More <BsFillArrowRightCircleFill size={'20px'} />{' '}
              </Button>
            </Box>

            <Box
              w={'40%'}
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
                  top="0"
                  left="0"
                  zIndex={2}
                  boxShadow="inner"
                >
                  <Box
                    w={'100%'}
                    h={'100%'}
                    p={2}
                    color={'#fff'}
                    rounded={'2xl'}
                    backgroundColor={'#009A4F'}
                  >
                    <Box
                      w={'100%'}
                      h={'100%'}
                      rounded={'2xl'}
                      p={2}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <PiPlant size={'60px'} />
                      <Text fontSize={'15px'}>
                        1,000 new direct job opportunities
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  boxShadow="md"
                  rounded="full"
                  p={1}
                  w="400px"
                  h="400px"
                  zIndex={1}
                >
                  <Image src="/about-img-1.png" w="100%" h="100%" />
                </Box>
                <Box
                  p={1}
                  w={'160px'}
                  h={'160px'}
                  position="absolute"
                  bottom="0"
                  right="0"
                  zIndex={1}
                >
                  <Image src="/about-img-2.png" w="100%" h="100%" />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
