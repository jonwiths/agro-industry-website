import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text
} from '@chakra-ui/layout';
import React from 'react';
import { PiPlant } from 'react-icons/pi';

const listItems = [
  { name: 'Proven track record in high-growth economies' },
  {
    name: 'Creative tailor-made solutions and multi-disciplinary capabilities'
  },
  {
    name: 'Innovative technology and a deep understanding of local market dynamics'
  },
  {
    name: 'End-to-end solution capabilities in executing greenfield projects, including experience in initiating, launching, executing and managing a range of ventures'
  },
  { name: 'Proven ability in raising funds and investments' },
  {
    name: 'Knowledge transfer – establish an array of local professionals that will continue to tdeliver and implement their acquired skills throughout and beyond project life'
  },
  {
    name: 'Knowledge transfer – establish an array of local professionals that will continue to tdeliver and implement their acquired skills throughout and beyond project life'
  }
];

const Vision = () => {
  return (
    <>
      <Box
        as="section"
        bg="white"
        maxW="100vw"
        backgroundColor="#fff"
        p="16px"
        marginTop={'50px'}
      >
        <Container maxW={'90vw'}>
          <Heading as={'h3'} fontSize={'40px'} color={'#024731'}>
            Our vision
          </Heading>
          <Box
            width={'70px'}
            h={'7px'}
            bg={'green'}
            bgColor={'#93CE20'}
            marginTop={'10px'}
            marginBottom={'50px'}
          />
          <Flex w={'50%'} flexDirection={'column'}>
            <Box lineHeight={'1.10'}>
              <Text fontSize={'40px'} color={'#024731'}>
                Developing sustainable and profitable agriculture projects
              </Text>
              <Text color={'#024731'} marginTop={'10px'}>
                improve standard of living by creating employment, investing in
                downstream processing, capacity building and training; leading
                to better access to market (both domestic & international)
                turning subsistence farmers into cash-cropping farmers.
              </Text>
            </Box>
            <Box>
              <Text
                color={'#024731'}
                fontWeight={'semibold'}
                fontSize={'17px'}
                margin={'15px 0'}
              >
                What makes us Unique:
              </Text>
              <List>
                {listItems.map((item, i) => (
                  <ListItem
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                    flexWrap={'nowrap'}
                    gap={'16px'}
                    key={i}
                  >
                    <Box>
                      <PiPlant min={'36px'} size={'36px'} color="#93CE20" />
                    </Box>
                    <Text>{item.name}</Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Flex>
          <Flex w={'50%'}></Flex>
        </Container>
      </Box>
    </>
  );
};

export default Vision;
