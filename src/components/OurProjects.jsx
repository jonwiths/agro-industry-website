import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Card
} from '@chakra-ui/react';

const intlProjects = [
  {
    logo: '/public/projects/1.png',
    name: 'koroba agro industrial center ( aic )',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio exercitationem nisi, corporis, hic blanditiis voluptate fuga sit assumenda ex saepe, debitis dignissimos eligendi non.'
  },
  {
    logo: '/public/projects/2.png',
    name: 'tari piwa agro industrial centre ( aic)',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio exercitationem nisi, corporis, hic blanditiis voluptate fuga sit assumenda ex saepe, debitis dignissimos eligendi non.'
  },
  {
    logo: '/public/projects/3.png',
    name: 'tabubil (ok tedi) poultry integration',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio exercitationem nisi, corporis, hic blanditiis voluptate fuga sit assumenda ex saepe, debitis dignissimos eligendi non.'
  },
  {
    logo: '/public/projects/4.png',
    name: 'sanagus, kiunga agro industrial center ( aic )',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio exercitationem nisi, corporis, hic blanditiis voluptate fuga sit assumenda ex saepe, debitis dignissimos eligendi non.'
  }
];

const OurProjects = () => {
  return (
    <>
      <Box
        as="section"
        bg="white"
        maxW="100vw"
        backgroundColor="#fff"
        p="16px"
        marginTop={'60px'}
      >
        <Container maxW={'80vw'}>
          <Flex
            style={{
              alignItems: 'flex-start',
              justifyContent: 'space-around',
              gap: '50px'
            }}
          >
            <Box w={'50%'}>
              <Heading textColor={'#009A4F'} fontSize={'3xl'}>
                Our Projects
              </Heading>
              <Heading as="h3" fontSize={'45px'} margin={'10px 0 40px'}>
                LOCAL
              </Heading>
              <Card>
                <Accordion
                  allowToggle="false"
                  marginTop={'30px'}
                  position={'relative'}
                  p={'16px'}
                >
                  <AccordionItem>
                    <Box
                      position={'absolute'}
                      zIndex={2}
                      backgroundColor="#009A4F"
                      borderRadius="16px 0 16px 0"
                      w="43px"
                      h="51px"
                    >
                      <Heading
                        textAlign="center"
                        color="#fff"
                        fontSize={'42px'}
                      >
                        1
                      </Heading>
                    </Box>
                    <AccordionButton>
                      <Flex
                        padding={'20px 0 0 30px'}
                        as="span"
                        flex="1"
                        alignItems={'center'}
                        textAlign="left"
                        gap={'16px'}
                      >
                        <Avatar w={'70px'} h="70px" />
                        <Heading as={'h4'} fontSize={'30px'}>
                          MIPC
                        </Heading>
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Text color="#024731">
                        Lorem ipsum dolor sit amet consectetur. Pharetra auctor
                        nunc pulvinar pretium posuere mi mauris purus fringilla.
                        Risus faucibus quisque eu nec nulla mauris cras metus
                        risus. Lorem ipsum dolor sit amet consectetur. Pharetra
                        auctor nunc pulvinar pretium posuere mi mauris purus
                        fringilla. Risus faucibus quisque eu nec nulla mauris
                        cras metus risus.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Card>
            </Box>
            <Box w={'50%'}>
              <Heading textColor={'#009A4F'} fontSize={'3xl'}>
                Our Projects
              </Heading>
              <Heading as="h3" fontSize={'45px'} margin={'10px 0 40px'}>
                International
              </Heading>

              <Card>
                <Accordion
                  allowToggle="false"
                  marginTop={'30px'}
                  position={'relative'}
                >
                  {intlProjects.map((project, index) => (
                    <AccordionItem key={index} p={'16px'}>
                      <Box
                        position={'absolute'}
                        zIndex={2}
                        backgroundColor="#009A4F"
                        borderRadius="16px 0 16px 0"
                        w="43px"
                        h="51px"
                      >
                        <Heading
                          textAlign="center"
                          color="#fff"
                          fontSize={'42px'}
                        >
                          {index + 1}
                        </Heading>
                      </Box>
                      <AccordionButton>
                        <Flex
                          padding={'20px 0 0 30px'}
                          as="span"
                          flex="1"
                          alignItems={'center'}
                          textAlign="left"
                          gap={'16px'}
                        >
                          <Avatar
                            w={'70px'}
                            h="70px"
                            src={project.logo}
                            name={project.name}
                          />
                          <Heading as={'h4'} fontSize={'30px'}>
                            {project.name}
                          </Heading>
                        </Flex>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel pb={4}>
                        <Text color="#024731">{project.content}</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default OurProjects;
