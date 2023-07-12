import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';

const navPage = [
  { name: 'Home', link: '#' },
  { name: 'About Us', link: '#' },
  { name: 'Our Projects', link: '#' },
  { name: 'Our Sectors', link: '#' },
  { name: 'Contact Us', link: '#' },
  { name: 'Media', link: '#' }
];

const Navbar = () => {
  return (
    <>
      <Box
        as="section"
        bg="white"
        maxW="100vw"
        backgroundColor="#009A4F"
        p="16px"
      >
        <Container maxW={'90vw'} color="#FFF">
          <Flex>
            <Image src="./public/nav-logo.png" name="nav logo" alt="nav logo" />
            <Spacer />
            {navPage.map((page) => (
              <Box
                key={page.name}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Text fontSize={'xl'} fontWeight={'medium'} p={'16px'}>
                  <a href="">{page.name}</a>
                </Text>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
