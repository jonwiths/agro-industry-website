import { Box, Flex, Image, Heading, Container, VStack, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

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
  style={{
    backgroundImage: "linear-gradient(90deg, #024731 11.10%, rgba(2, 71, 49, 0.00) 100%), url('footer-tractor.jpg')",
    backgroundSize: 'cover',
    display: 'flex',
    flexShrink: '0',
    flexDirection: 'column'
  }} 
  width='100%' height='503px' >
    <Flex>

    <Box width='67%' pt={100} px={50}>
      <Flex justifyContent={'left'} mb={20}>
        <VStack spacing={8} align='flex-start'>
          <Heading 
            style={{
              display: 'flex',
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              fontSize:'30px',
              justifyContent: 'left'
            }}
          >
            INNOVATIVE AGRICULTURE [AGRO] INDUSTRY LIMITED
          </Heading>
          <Heading style={{
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
          </Heading>
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
            <Heading sx={footerTheme1}>Site Map</Heading>
            {siteMap.map((info) => (
              <Heading sx={footerTheme2}>{info}</Heading>
            ))}
          </Flex>
          <Flex gap={5}>
            <Heading sx={footerTheme1}>External Links</Heading>
            {externalLinks.map((info) => (
              <Heading sx={footerTheme2}>{info}</Heading>
            ))}
          </Flex>
        </VStack>
      </Flex>
    </Box>

    <Box width='33%' display={'flex'} justifyContent={'end'} py={50} px={100}>
      <Image src='IAI+++LR+Logo.png' alt='Innovative Agri Andustry, Member of LR Group'
      style={{
        width: '185px',
        height: '44.975px',
        flexShrink: '0',
      }}
      ></Image>
    </Box>
    </Flex>

    <Heading mt={14}
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
    </Heading>
  </Box>
)
};

export default Footer;
