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
import React from 'react';

const info = [
  {
    name: 'ADAMA',
    description:
      'Family farming clusters based on the Israeli moshav model generate efficient economic and community development.'
  },
  {
    name: 'AGRO - INDUSTRIAL TOWN ( AIT )',
    description:
      'Integrated projects combining agriculture, urbanand rural economic development, and municipal services.'
  },
  {
    name: 'AGRO - INDUSTRIAL CENTER ( AIC )',
    description:
      'Centralized services to support the activities of both local farmers and large scale agricultural productions.'
  },
  {
    name: 'AGRO - INDUSTRIAL SUPPORT AND TRAINING CENTER ( AISTC )',
    description:
      'Providing agricultural and technological education in a variety of projects settings.'
  },
  {
    name: 'CENTER OF EXCELLENCE',
    description:
      'Centers for research and development (R&D) , alongside advanced technological training and demonstrations.'
  }
];
const AgriculturePop = ({ open, onClose }) => {
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
        h={'1990px'}
        w={'1237px'}
        bg={'#FFF'}
        borderRadius={'20px'}
        mt={'120px'}
      >
        <Box
          w={'1237px'}
          h={'340px'}
          bgImage={"url('popup-img-1.png')"}
          backgroundSize={'cover'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'center'}
          borderTopLeftRadius={'20px'}
          borderTopRightRadius={'20px'}
          display={'flex'}
          justifyContent={'flex-end'}
        >
          <Image
            h={'30px'}
            w={'30px'}
            src={'icon-close.svg'}
            m={'30px'}
            cursor={'pointer'}
            onClick={() => onClose()}
          ></Image>
        </Box>
        <Box my={10} display={'flex'} justifyContent={'center'}>
          <Heading
            color={'#009A4F'}
            fontSize={'50px'}
            fontStyle={'normal'}
            fontWeight={'400'}
            lineHeight={'normal'}
          >
            AGRICULTURE
          </Heading>
        </Box>
        <Flex justifyContent={'center'}>
          <Box
            w={'1129px'}
            h={'197px'}
            borderRadius={'20px'}
            border={'3px solid #009A4F'}
            background={'#FFF'}
            display={'flex'}
            justifyContent={'center'}
            px={20}
            alignItems={'center'}
          >
            <VStack>
              <Text
                textAlign={'center'}
                color={'#000'}
                textalign={'center'}
                fontFamily={'Be Vietnam Pro'}
                fontSize={'20px'}
                fontStyle={'normal'}
                fontWeight={'400'}
                lineHeight={'normal'}
              >
                “Our experience around the world has proven time and again that
                the tools of agriculture are the tools of economic development.
                I never get tired of seeing how our projects{' '}
                <strong>set a whole value chain in motion</strong> and help
                entire regions grow and prosper. “
              </Text>
              <Text
                color={'#000'}
                textalign={'center'}
                fontFamily={'Be Vietnam Pro'}
                fontSize={'15px'}
                fontStyle={'normal'}
                fontWeight={'400'}
                lineHeight={'normal'}
                mt={5}
              >
                Doron Retter, Partner and Head of the Agriculture Division
              </Text>
            </VStack>
          </Box>
        </Flex>
        <Box overflow={'auto'} mx={'50px'} mt={'40px'}>
          <HStack>
            <Text
              float={'left'}
              overflow={'hidden'}
              color={'#024731'}
              fontSize={'18px'}
              fontStyle={'normal'}
              fontWeight={'400'}
              lineHeight={'normal'}
              textAlign={'justify'}
            >
              Known as the “Start-Up Nation,” Israel is famous for applying
              innovation and out-of-the-box thinking to revolutionize the
              agriculture field. LR brings that mindset and technology to rural
              areas around the world. Advanced, centralized farming offers the
              economic advantages of large-scale enterprises to those who have
              never had access to them before. By integrating technology,
              know-how, experience, and training with economies of scale,
              projects can become the catalyst for intensive economic growth.
              Their wide-reaching impact strengthens food security, livelihoods,
              and overall progress.
            </Text>
            <Image
              src={'popup-img-2.png'}
              float={'right'}
              w={'30%'}
              h={'257px'}
              borderRadius={'10px'}
            ></Image>
          </HStack>
          <Text
            float={'left'}
            color={'#024731'}
            fontSize={'18px'}
            fontStyle={'normal'}
            fontWeight={'400'}
            lineHeight={'normal'}
            textAlign={'justify'}
          >
            Known as the “Start-Up Nation,” Israel is famous for applying
            innovation and out-of-the- box thinking to revolutionize the
            agriculture field. LR brings that mindset and technology to rural
            areas around the world. Advanced, centralized farming offers the
            economic advantages of large-scale enterprises to those who have
            never had access to them before. By integrating technology,
            know-how, experience, and training with economies of scale, projects
            can become the catalyst for intensive economic growth. Their
            wide-reaching impact strengthens food security, livelihoods, and
            overall progress. Commercial farms with consolidated facilities
            offer the best chances for rapid and ongoing returns on investment.
            That is why we help to fortify agro-industry and far-ranging
            infrastructure, ensuring job creation throughout the community. By
            paying close attention to every detail, from training and
            micro-financing to high-quality seeds, we construct a network of
            economic, logistical, and human support. In order to build all this
            on a strong foundation, LR manages marketing and guarantees offtake,
            allowing farmers to begin their enterprises on a secure footing,
            ensuring their economic success.
          </Text>
        </Box>
        <Box
          w={'100%'}
          color={'#009A4F'}
          fontSize={'50px'}
          fontStyle={'normal'}
          fontWeight={'400'}
          lineHeight={'normal'}
          display={'flex'}
          justifyContent={'center'}
          my={100}
        >
          <VStack>
            <Heading>
              Investment And Involvement Throughout The Value Chain
            </Heading>
            <Flex flexWrap={'wrap'} padding={10} justifyContent={'center'}>
              {info.map((info) => (
                <Box
                  w={'305px'}
                  h={'179px'}
                  boxShadow={
                    '0px 4.758189678192139px 10.017241477966309px 0px rgba(0, 0, 0, 0.04), 0px 38px 80px 0px rgba(0, 0, 0, 0.07)'
                  }
                  borderRadius={'20px'}
                  bg={'#FFF'}
                  m={10}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  textAlign={'center'}
                >
                  <VStack>
                    <Heading
                      color={'#000'}
                      fontSize={'25px'}
                      fontStyle={'normal'}
                      fontWeight={'400'}
                      lineHeight={'normal'}
                    >
                      {info.name}
                    </Heading>
                    <Box w={'257px'} display={'flex'} flexDirection={'column'}>
                      <Text
                        color={'#000'}
                        textAlign={'center'}
                        fontFamily={'Readex Pro'}
                        fontSize={'12px'}
                        fontStyle={'normal'}
                        fontWeight={'400'}
                        lineHeight={'normal'}
                      >
                        {info.description}
                      </Text>
                    </Box>
                    <Button
                      w={'158px'}
                      h={'31.268px'}
                      boxShadow={'0px 5px 6px 0px rgba(2, 71, 49, 0.15)'}
                      borderRadius={'20px'}
                      background={'#024731'}
                      color={'#FFF'}
                      fontFamily={'Readex Pro'}
                      fontSize={'12px'}
                      fontStyle={'normal'}
                      fontWeight={'400'}
                      lineHeight={'normal'}
                    >
                      Read more
                    </Button>
                  </VStack>
                </Box>
              ))}
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default AgriculturePop;
