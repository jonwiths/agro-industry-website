import {
    Box,
    Button,
    Flex,
    Heading,
    Spacer,
    Image,
    Text,
    VStack,
    HStack
  } from '@chakra-ui/react';
import { color } from 'framer-motion';
  import React from 'react';

  const OurSectorPop = ({ open, onClose, sector }) => {
    if (!open) return null;
    return (
      <Flex
        id="popup"
        as={'section'}
        height={'100%'}
        width={'100%'}
        position={'absolute'}
        top={'0'}
        left={'0'}
        right={'0'}
        bottom={'0'}
        justifyContent={'center'}
        backdropFilter={'blur(1px)'}
        zIndex={'9999999999'}
      >
        <Box
          h={'501px'}
          w={'1237px'}
          bg={'#FFF'}
          borderRadius={'20px'}
          mt={'120px'}
        >
          <Flex justifyContent={'flex-end'}>
            <Image 
              src={'icon-close-black.svg'} 
              w={'30px'}
              h={'30px'}
              mt={'18px'}
              mr={'18px'}
              cursor={'pointer'}
              onClick={()=>onClose()}
            />
          </Flex>
          <Box
            mx={'53px'}
            h={'100%'}
          >
            <Heading
              size={'md'}
              color={'#009A4F'}
              fontSize={'50px'}
              fontWeight={'400'}
            >
              {sector.name}
            </Heading>
            <Flex
            mt={'20px'} 
              >
              <HStack 
                spacing={8}
                alignItems={'flex-start'}
              >
                <Box 
                  w={'676px'}
                  color={'#024731'}
                >
                  <Text
                    textAlign={'justify'}
                    fontSize={'18px'}
                    fontWeight={'400'}
                  >
                    Lorem ipsum dolor sit amet consectetur. Blandit dolor sit varius aliquam purus eu ac dictum ut. Diam nulla amet sit nulla sed lectus vestibulum. Fringilla sit rhoncus egestas libero ultrices in blandit. Lectus donec sed donec ut id. Id aliquam sed ultricies sollicitudin curabitur. Aliquam suspendisse dignissim viverra viverra at vestibulum neque. Aliquet pharetra quis eu pulvinar sapien bibendum quam. Lorem ridiculus arcu nisi molestie nunc sed. Vitae nunc risus malesuada sed diam congue pretium vel.
                  </Text>
                </Box>
                <Image
                  src={sector.img} 
                  w={'423px'}
                  h={'257px'}
                  borderRadius={'10px'}
                ></Image>
              </HStack>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  };
  
  export default OurSectorPop;
  