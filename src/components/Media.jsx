import {
  Box,
  Heading,
  Flex,
  Grid,
  GridItem,
  HStack,
  VStack
} from '@chakra-ui/react';
import React from 'react';

const Media = () => {
  return (
    <Box
      as="section"
      display={'flex'}
      justifyContent={'center'}
      id="media"
      marginBottom={'50px'}
    >
      <Flex
        w={'1239px'}
        // h={'100vh'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        gap={'49px'}
      >
        <Box>
          <Heading color={'#024731'} fontSize={'50px'} fontWeight={'400'}>
            MEDIA
          </Heading>
          <Box bg={'#93CE20'} h={'8px'} w={'86px'} />
        </Box>
        <Grid templateColumns={'3, 1fr'}>
          <HStack>
            <GridItem colSpan={1}>
              <VStack>
                <iframe
                  width="397px"
                  height="228.095px"
                  src="https://www.youtube.com/embed/8ddMwIE4sqI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    borderRadius: '14.436px',
                    boxShadow:
                      '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                  }}
                ></iframe>
                <iframe
                  width="397px"
                  height="228.095px"
                  src="https://www.youtube.com/embed/sRx-OJg0rVU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    borderRadius: '14.436px',
                    boxShadow:
                      '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                  }}
                ></iframe>
              </VStack>
            </GridItem>
            <GridItem colSpan={1}>
              <VStack>
                <iframe
                  width="397px"
                  height="228.095px"
                  src="https://www.youtube.com/embed/9Fm5cBmlu7Y"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    borderRadius: '14.436px',
                    boxShadow:
                      '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                  }}
                ></iframe>
                <iframe
                  width="397px"
                  height="228.095px"
                  src="https://www.youtube.com/embed/C-d5_qLX6FE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    borderRadius: '14.436px',
                    boxShadow:
                      '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                  }}
                ></iframe>
              </VStack>
            </GridItem>
            <GridItem colSpan={1}>
              <VStack>
                <iframe
                  width="397px"
                  height="228.095px"
                  src="https://www.youtube.com/embed/T0P8V3Ndbrs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    borderRadius: '14.436px',
                    boxShadow:
                      '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                  }}
                ></iframe>
                <iframe
                  width="397px"
                  height="228.095px"
                  src="https://www.youtube.com/embed/Dn_iik3M5_Y"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    borderRadius: '14.436px',
                    boxShadow:
                      '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                  }}
                ></iframe>
              </VStack>
            </GridItem>
          </HStack>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Media;
