import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <Flex
      padding="1rem"
      align="center"
      justifyContent="space-between"
      color="highlight"
      bg="black"
    >
      <Flex align="center">
        <Image width="32px" height="32px" src={logo} marginRight="0.5rem" />
        <Text>CalmWeather</Text>
      </Flex>
      <Flex gap="1rem">
      <Link to="/">Home</Link>
      <Link to="/random">Random</Link>
      <Link to="/">City Picker</Link>

      </Flex>
    </Flex>
  );
};

export default Navbar;
