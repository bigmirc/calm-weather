import { Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Flex>
      <Text>CalmWeather</Text>
      <Spacer></Spacer>
      <Text>Home</Text>
      <Text>Random</Text>
      <Text>City Picker</Text>
    </Flex>
  );
};

export default Navbar;
