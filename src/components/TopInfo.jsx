import { Box, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import '@fontsource/reem-kufi';

const labelAndIcon = [
  { name: 'Office@iaipng.com', icon: <RiMailSendLine /> },
  { name: '(+675) 7294 5305', icon: <BiPhoneCall /> },
  {
    name: 'PO Box 1462, Boroko, NCD, Papua New Guinea',
    icon: <MdOutlineLocationOn />
  },
  {
    name: 'PORTION 2529, 9 MILE National Capital District Papua New Guinea',
    icon: <HiOutlineBuildingOffice2 />
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

const TopInfo = () => {
  return (
    <>
      <Box as="section" bg="white" maxW="100vw" p="16px">
        <Container maxW={'90vw'} color="#009A4F">
          <Flex gap={'2'} fontWeight={'bold'}>
            {labelAndIcon.map((info) => (
              <Box
                key={info.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '5px',
                  marginRight: '15px'
                }}
              >
                <Heading as="h6" size="md">
                  {' '}
                  {info.icon}
                </Heading>

                <Text as="h6" fontSize={'xs'}>
                  {info.name}
                </Text>
              </Box>
            ))}

            <Spacer />

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
      </Box>
    </>
  );
};

export default TopInfo;
