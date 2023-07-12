import { Box, Heading, Flex, Grid, GridItem, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

const Newsfeed = () => {
  return(
    <Box 
      as='section' 
      display={'flex'} 
      justifyContent={'center'}
      mb={'280px'}
    >
      <Flex
        w={'1239px'}
        h={'100vh'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        gap={'49px'}
      >
        <Box>
          <Heading
            color={'#024731'} 
            fontSize={'50px'} 
            fontWeight={'400'}
            textShadow={'0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'}
            >NEWSFEED
          </Heading>
          <Box bg={'#93CE20'} h={'8px'} w={'86px'}/>
        </Box>
      <Grid templateColumns={'2, 1fr'}>
        <HStack spacing={10}>
          <GridItem colSpan={1}>
            <iframe 
              width="770px" 
              height="634px" 
              src="https://www.youtube.com/embed/vXVSw7wTsso" 
              title="YouTube video player" 
              frameborder="0"
              style={{
                borderRadius: '14.436px', 
                boxShadow: '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            >
            </iframe>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack spacing={'19.7525px'}>
              <iframe 
                width="422px" 
                height="198.165px" 
                src="https://www.youtube.com/embed/cH1Q868APLg" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                style={{
                  borderRadius: '14.436px', 
                  boxShadow: '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                }}
              >
              </iframe>
              <iframe 
                width="422px" 
                height="198.165px"  
                src="https://www.youtube.com/embed/hC4lemk_YqE" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                style={{
                  borderRadius: '14.436px', 
                  boxShadow: '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                }}
              ></iframe>
              <iframe 
                width="422px" 
                height="198.165px"  
                src="https://www.youtube.com/embed/qKoJCT-EPCg" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                style={{
                  borderRadius: '14.436px', 
                  boxShadow: '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                }}
              >
              </iframe>
            </VStack>
          </GridItem>
        </HStack>
      </Grid>
      </Flex>
    </Box>
  );
};

export default Newsfeed;
