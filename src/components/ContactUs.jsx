import React from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  VStack,
  Text,
  Grid,
  GridItem,
  FormControl,
  Input,
  Textarea,
  Button
} from '@chakra-ui/react';

const infos = [
  {
    name: 'Email:',
    icon: 'mdi_email-fast-outline.svg',
    text: 'Office@iaipng.com'
  },
  {
    name: 'Phone: ',
    icon: 'ph_phone-call.svg',
    text: '(+675) 7294 5305'
  },
  {
    name: 'Postal Address:',
    icon: 'mdi_address-marker-outline.svg',
    text: 'Office@iaipng.com'
  },
  {
    name: 'Office Location:',
    icon: 'heroicons_building-office-2.svg',
    text: `PORTION 2529, 9 MILE National Capital District Papua New Guinea`
  }
];

const formTextStyle = {
  color: '#555',
  fontFamily: 'Readex Pro',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal'
};

const ContactUs = () => {
  return (
    <Box
      as="section"
      position="relative"
      h="715px"
      w="100%"
      bg="#146E41"
      display="flex"
      flexDirection="column"
      id="contact-us"
      marginTop={'50px'}
    >
      <Flex justifyContent="center">
        <Box
          position="absolute"
          top="-87px"
          w="1240px"
          h="174px"
          bg="white"
          px="40px"
          borderRadius="30px"
          boxShadow="0px 2.767256498336792px 2.2138051986694336px 0px rgba(0, 0, 0, 0.02), 0px 6.650102138519287px 5.32008171081543px 0px rgba(0, 0, 0, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(0, 0, 0, 0.04), 0px 22.3363094329834px 17.869047164916992px 0px rgba(0, 0, 0, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07);"
        >
          <Grid
            templateColumns="repeat(4, 1fr)"
            w="100%"
            h="100%"
            alignItems="center"
            gap={10}
          >
            {infos.map((info) => (
              <GridItem key={info.name} display="flex">
                <Image src={info.icon} m="0px" h="76px" w="76px"></Image>
                <VStack align="flex-start" ml="5px" gap={0}>
                  <Text>{info.name}</Text>
                  <Text>{info.text}</Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
      <Box h="160px" display="flex" alignItems="end" justifyContent="center">
        <Heading
          style={{
            color: '#FFF',
            fontSize: '50',
            fontWeight: '400',
            lineHeight: 'normal'
          }}
        >
          GET IN TOUCH
        </Heading>
      </Box>
      <Box my="50px" display="flex" flexDirection="column" align="center">
        <form>
          <Flex mb="40px" w="1240px" justifyContent="space-between">
            <FormControl mr="20px">
              <Input
                placeholder="Your Full Name"
                w="591px"
                h="79px"
                bg="#E9E9E9"
                borderRadius="45.5px"
                sx={formTextStyle}
              />
            </FormControl>
            <FormControl ml="20px">
              <Input
                placeholder="Your Email"
                w="591px"
                h="79px"
                bg="#E9E9E9"
                borderRadius="45.5px"
                sx={formTextStyle}
              />
            </FormControl>
          </Flex>
          <FormControl mb="40px">
            <Textarea
              placeholder="Write your message"
              w="1240px"
              h="194px"
              bg="#E9E9E9"
              borderRadius="25px"
              sx={formTextStyle}
            />
          </FormControl>
          <Button
            type="submit"
            w="1240px"
            h="79px"
            borderRadius="45.5px"
            bgColor="#93CE20"
            style={{
              color: '#FFF',
              fontFamily: 'Readex Pro',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}
          >
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
