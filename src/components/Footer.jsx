import { 
  Box, 
  Flex, 
  Image, 
  Heading, 
  Container, 
  VStack, 
  Text, 
  Grid, 
  GridItem,
  FormControl,
  Input, 
  Textarea,
  Button
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const infos = [
  {
    name: 'Email:',
    icon: 'mdi_email-fast-outline.svg',
    text: 'Office@iaipng.com'
  },
  {
    name: 'Phone: ',
    icon: 'ph_phone-call.svg',
    text: '(+675) 7294 5305'
  },
  {
    name: 'Postal Address:',
    icon: 'mdi_address-marker-outline.svg',
    text: 'Office@iaipng.com'
  },
  {
    name: 'Office Location:',
    icon: 'heroicons_building-office-2.svg',
    text: `PORTION 2529, 9 MILE National Capital District Papua New Guinea`
  }
];

const socialMediaLinks = [
  {
    icon: <FaLinkedin />,
    name: 'Linked in',
    link: '#'
  },
  {
    icon: <FaFacebookSquare />,
    name: 'Facebook',
    link: '#'
  },
  {
    icon: <FaYoutube />,
    name: 'Youtube',
    link: '#'
  },
  {
    icon: <SiGmail />,
    name: 'Email',
    link: '#'
  }
];

const siteMap = [ 
  'About us', 
  'Our Projects', 
  'Our Vision', 
  'Our Brands', 
  'Media', 
];

const externalLinks = [ 
  'LR Group'
];

const footerTheme1 = {
  color: '#FFF',
  fontFamily: 'Readex Pro',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: 'normal',
};

const footerTheme2 = {
  color: '#93CE20',
  fontFamily: 'Readex Pro',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: 'normal',
};

const Footer = () => {
  return(
    <Box 
      as='section'
      maxW={'100vw'}
      maxH={'100vh'}
    >
      <Box
        position='relative'
        h='715px' 
        w='100vw'
        bg='#146E41'
        display='flex'
        flexDirection='column'
      >
        <Flex justifyContent='center'>
          <Box
            position='absolute'
            top='-87px'
            w='1240px'
            h='174px'
            bg='white'
            px='40px'
            borderRadius='30px'
            boxShadow='0px 2.767256498336792px 2.2138051986694336px 0px rgba(0, 0, 0, 0.02), 0px 6.650102138519287px 5.32008171081543px 0px rgba(0, 0, 0, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(0, 0, 0, 0.04), 0px 22.3363094329834px 17.869047164916992px 0px rgba(0, 0, 0, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07);'
          >
            <Grid
              templateColumns='repeat(4, 1fr)'
              w='100%'
              h='100%' 
              alignItems='center' 
              gap={10}>
                {infos.map(info=>(
                  <GridItem key={info.name} display='flex'>
                    <Image src={info.icon} m='0px' h='76px' w='76px'></Image>
                    <VStack align='flex-start' ml='5px' gap={0}>
                      <Text>{info.name}</Text>
                      <Text>{info.text}</Text>
                    </VStack>
                  </GridItem>
                ))}
            </Grid>
          </Box>
        </Flex>
        <Box 
          h='160px' 
          display='flex' 
          alignItems='end' 
          justifyContent='center'
        >
          <Heading color='#FFF'>GET IN TOUCH</Heading>
        </Box>
        <Box my='50px' display='flex' flexDirection='column' align='center'>
          <form>
            <Flex mb='40px' w='1240px' justifyContent='space-between'>
              <FormControl mr='20px'>
                <Input 
                  placeholder='Your Full Name' 
                  w='591px' 
                  h='79px' 
                  bg='#E9E9E9' 
                  borderRadius='45.5px'
                />
              </FormControl>
              <FormControl ml='20px'>
                <Input 
                  placeholder='Your Email' 
                  w='591px' 
                  h='79px' 
                  bg='#E9E9E9' 
                  borderRadius='45.5px'
                />
              </FormControl>
            </Flex>
            <FormControl mb='40px'>
              <Textarea 
                placeholder='Write your message' 
                w='1240px' 
                h='194px' 
                bg='#E9E9E9' 
                borderRadius='25px'/>
            </FormControl>
            <Button 
              type='submit' 
              bg='#93CE20' 
              w='1240px' 
              h='79px' 
              borderRadius='45.5px'
            >
              Send
            </Button> 
          </form>
        </Box>
        </Box>    
      <Box 
        style={{
          backgroundImage: "linear-gradient(90deg, #024731 11.10%, rgba(2, 71, 49, 0.00) 100%), url('footer-tractor.jpg')",
          backgroundSize: 'cover',
          display: 'flex',
          flexShrink: '0',
          flexDirection: 'column'
        }} 
        w='100vw' h='503px'
      >
        <Flex>
          <Box width='67%' pt={100} px={50}>
            <Flex justifyContent={'left'} mb={20}>
              <VStack spacing={8} align='flex-start'>
                <Heading 
                  style={{
                    display: 'flex',
                    color: '#FFF',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    fontSize:'50px',
                    justifyContent: 'left'
                  }}
                >
                  INNOVATIVE AGRICULTURE (AGRO) INDUSTRY LIMITED
                </Heading>
                <Text style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Readex Pro',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  display: 'flex',
                  justifyContent: 'left'
                }} as="h6" size="md">
                  PO Box 1462, Boroko, NCD, Papua tNew Guinea | Office@iaipng.com
                </Text>
                <Container maxW={'90vw'} color='#FFF' padding={0}>
                  <Flex gap={'2'} fontWeight={'bold'}>
                    {socialMediaLinks.map((info) => (
                      <Box
                        key={info.name}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          columnGap: '5px',
                          cursor: 'pointer'
                        }}
                      >
                        <Heading as="h6" size="md">
                          {' '}
                          <a>{info.icon}</a>
                        </Heading>
                      </Box>
                    ))}
                  </Flex>
                </Container>
              </VStack>
            </Flex>
            <Flex justifyContent={'flex-start'}>
              <VStack spacing={8} align='flex-start'>
                <Flex gap={5}>
                  <Text sx={footerTheme1}>Site Map</Text>
                  {siteMap.map((info) => (
                    <Text sx={footerTheme2}>{info}</Text>
                  ))}
                </Flex>
                <Flex gap={5}>
                  <Text sx={footerTheme1}>External Links</Text>
                  {externalLinks.map((info) => (
                    <Text sx={footerTheme2}>{info}</Text>
                  ))}
                </Flex>
              </VStack>
            </Flex>
          </Box>

          <Box width='33%' display={'flex'} justifyContent={'end'} py={50} px={100}>
            <Image src='nav-logo.png' alt='Innovative Agri Andustry, Member of LR Group'
            style={{
              width: '185px',
              height: '44.975px',
              flexShrink: '0',
            }}
            ></Image>
          </Box>
        </Flex>

        <Text mt={14}
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Readex Pro',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
          }}>
          ©2022 Innovative Agriculture(Agro) Industry Limited. All Rights Reserved
        </Text>
      </Box>
    </Box>
  )
};

export default Footer;
