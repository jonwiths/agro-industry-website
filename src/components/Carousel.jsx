import {
  AspectRatio,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image
} from '@chakra-ui/react';
import React from 'react';

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill
} from 'react-icons/bs';

const Carousel = () => {
  // const images = [
  //   { url: '/public/carousel/carousel-img-1.png', long: true },
  //   { url: '/public/carousel/carousel-img-8.png' },
  //   { url: '/public/carousel/carousel-img-4.png', long: true },
  //   { url: '/public/carousel/carousel-img-2.png' },
  //   { url: '/public/carousel/carousel-img-3.png', long: true },
  //   { url: '/public/carousel/carousel-img-6.png' },
  //   { url: '/public/carousel/carousel-img-7.png', long: true },
  //   { url: '/public/carousel/carousel-img-2.png' },
  //   { url: '/public/carousel/carousel-img-8.png', long: true },
  //   { url: '/public/carousel/carousel-img-3.png' },
  //   { url: '/public/carousel/carousel-img-4.png', long: true },
  //   { url: '/public/carousel/carousel-img-5.png' },
  //   { url: '/public/carousel/carousel-img-6.png', long: true },
  //   { url: '/public/carousel/carousel-img-7.png' }
  // ];

  const images = [
    {
      url: 'https://images.pexels.com/photos/1276237/pexels-photo-1276237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1562389/pexels-photo-1562389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/4919737/pexels-photo-4919737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1276237/pexels-photo-1276237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1562389/pexels-photo-1562389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/4919737/pexels-photo-4919737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  {
    /* <Grid
        templateColumns="repeat(7, 1fr)"
        sx={{ columnGap: '10px', rowGap: '10px' }}
        height="400px" // Set a fixed height for the grid container
      >
        {images.map((image, i) => (
          <GridItem
            key={i}
            bg={i % 2 === 0 ? 'gray' : 'green'}
            maxW={'250px'}
            height="100%" // Make grid items fill the entire container height
            sx={{ margin: '0' }}
            rounded={'xl'}
          >
            <Image
              src="https://images.pexels.com/photos/1276237/pexels-photo-1276237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cover Image"
              objectFit="cover"
              rounded={'xl'}
              width="100%"
              height="100%"
            />
          </GridItem>
        ))}
      </Grid> */
  }
  return (
    <Box position="relative" marginTop="50px" id="carousel">
      <Grid
        templateColumns="repeat(7, 1fr)"
        sx={{ columnGap: '10px', rowGap: '10px', flexWrap: 'wrap' }}
      >
        {images.map((image, i) => (
          <GridItem
            key={i}
            maxW={'250px'}
            sx={{
              margin: '0',
              height: i % 2 === 0 ? '300px' : '200px',
              maxWidth: '100%'
            }}
            rounded={'xl'}
          >
            <Image
              src={image.url}
              alt="Cover Image"
              objectFit="cover"
              rounded={'xl'}
              width="100%"
              height="100%"
            />
          </GridItem>
        ))}
      </Grid>

      <Box
        rounded={'full'}
        position={'absolute'}
        left={'50px'}
        top={'50%'}
        transform={'translateY(-50%)'}
        marginRight={'10px'}
        backgroundColor={'#fff'}
        border={'4px solid white'}
        cursor={'pointer'}
      >
        <BsFillArrowLeftCircleFill size={'40px'} color="#009A4F" />
      </Box>
      <Box
        rounded={'full'}
        position={'absolute'}
        right={'50px'}
        top={'50%'}
        transform={'translateY(-50%)'}
        marginLeft={'10px'}
        backgroundColor={'#fff'}
        border={'4px solid white'}
        cursor={'pointer'}
      >
        <BsFillArrowRightCircleFill size={'40px'} color="#009A4F" />
      </Box>
    </Box>
  );
};

export default Carousel;
