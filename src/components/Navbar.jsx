import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';

const navPage = [
  { name: 'Home', link: '#home' },
  { name: 'About Us', link: '#about-us' },
  { name: 'Our Projects', link: '#our-projects' },
  { name: 'Our Sectors', link: '#our-sector' },
  { name: 'Contact Us', link: '#contact-us' },
  { name: 'Media', link: '#' }
];

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

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
            <Image src="/nav-logo.png" name="nav logo" alt="nav logo" />
            <Spacer />
            {navPage.map((page) => (
              <Box
                key={page.name}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Text fontSize={'xl'} fontWeight={'medium'} p={'16px'}>
                  <a
                    href={page.link}
                    onClick={() => scrollToSection(page.link)}
                  >
                    {page.name}
                  </a>
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
