import { Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Flex>
      <Text bg="primary">CalmWeather</Text>
      <Spacer></Spacer>
      <Text bg="secondary">Home</Text>
      <Text bg="black">Random</Text>
      <Text bg="highlight">City Picker</Text>
    </Flex>
  );
};

export default Navbar;
