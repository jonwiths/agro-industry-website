import { Box, Container, Heading } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import React from 'react';
import { BiSolidCaretDownCircle } from 'react-icons/bi';

const accordionList = [
  {
    name: 'isr-png 9 mile vegetable farm',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'hela hydro feasibility study ( FS )',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'enga agro industrial center',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'ilimo daury farm ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'koroba agro industrial center ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'tari - piwa agro industrial center ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'mount fubilan agro industry poultry integration ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: '‘kuk’ frozen vegetables and french fries ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'sepik agro industrial center ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'hela coffee feasibility study ( fs ) ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'south fly agro industrial center ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'fly vailla - samagus, kiunga agro industrial center ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'solar power irrigation systems ( spfs ) - in the philippines ',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  }
];

const AccordionList = () => {
  return (
    <>
      <Box
        as="section"
        maxW="100vw"
        minH={'100vh'}
        marginTop={'60px'}
        id="accordion-list"
      >
        <Box
          p={'200px 16px'}
          w="100%"
          h="100%"
          backgroundImage="linear-gradient(rgba(0, 154, 79, .7),  rgba(0, 154, 79, .7) 100%), url('/accordion-bg.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundColor="rgba(0, 0, 0, 0.37);"
        >
          <Container maxW={'80vw'}>
            <Accordion rounded={'xl'}>
              {accordionList.map((content, index) => (
                <AccordionItem
                  rounded={'xl'}
                  key={index}
                  bg={'#fff'}
                  marginBottom={'5px'}
                >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Heading color="#024731">{content.name}</Heading>
                      </Box>
                      <BiSolidCaretDownCircle size={'30px'} color="#93CE20" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#024731">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AccordionList;
