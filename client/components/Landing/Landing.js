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
import style from './Landing.module.css';

const regions_left = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh'];
const regions_right = ['Teselia', 'Kalos', 'Alola', 'Galar'];

const LinksRegions = ({region}) => (
  <Link
    href={region === 'Kanto' ? `/home?region=${region.toLowerCase()}` : '#'}
    _hover={{
      textDecoration: 'none'
    }}
  >
    <Button
      w={'125px'}
      h={'125px'}
      fontSize={'20px'}
      className={style.land_but}
      borderRadius={'100%'}
      borderWidth={'3px'}
      borderColor={'black'}
      disabled={region !== 'Kanto' ? true : false}
    >
      <p
        className={style.tex_but}
      >
        {region.toUpperCase()}
      </p>
    </Button>
  </Link>
);

export default function Landing () {
  return (
    <Flex
      direction='row'
      h={'100vh'}
      className={style.background}
    >
      <Box
        w={'50vw'}
        className={style.box_left}
        pl={'13vw'}
      >
        {regions_left.map((region, index) => {
          return <LinksRegions region={region} key={`${region}-${index}`} />
        })}
      </Box>
      <Box
        w={'50vw'}
        className={style.box_right}
        pr={'13vw'}
      >
        {regions_right.map((region, index) => {
          return <LinksRegions region={region} key={`${region}-${index}`} />
        })}
      </Box>
    </Flex>
  );
};

