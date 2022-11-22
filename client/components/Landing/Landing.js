import Head from 'next/head';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Teselia', 'Kalos', 'Alola', 'Galar'];

const LinksRegions = ({region, index}) => (
  <Link
    href={index < 1 ? `/home?region=${region.toLowerCase()}` : '#'}
    _hover={{
      textDecoration: 'none'
    }}
  >
    <Button
      w={"50vh"}
      disabled={index >= 1 ? true : false}
    >
      {region}
    </Button>
  </Link>
);

export default function Landing () {
  return (
    <Flex
      direction='row'
      h={'100vh'}
    >
      <Flex
        w={'50%'}
        justifyContent="center"
        alignItems="center"
      >
        <Text>Hola</Text>
      </Flex>
      <Flex
        direction='column'
        justifyContent="space-around"
        alignItems="center"
        w={'50%'}
        border={"1px"}
      >
        <Text>Choose your region:</Text>
        {regions.map((reg, ind) => (
              <LinksRegions 
                key={ind}
                region={reg}
                index={ind}
              />
            )
          )}
      </Flex>
    </Flex>
  );
};

