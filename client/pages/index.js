import Head from 'next/head';
import Link from 'next/link';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Landing from '../components/Landing/Landing.js';

export default function LandingPage () {
  return (
    <Landing />
  );
};

// export default function LandingPage() {
//   return (
//     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
//       <Flex p={8} flex={1} align={'center'} justify={'center'}>
//         <Stack spacing={6} w={'full'} maxW={'lg'}>
//           <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
//             <Text
//               as={'span'}
//               position={'relative'}
//               _after={{
//                 content: "''",
//                 width: 'full',
//                 height: useBreakpointValue({ base: '20%', md: '30%' }),
//                 position: 'absolute',
//                 bottom: 1,
//                 left: 0,
//                 bg: 'red.600',
//                 zIndex: -1,
//               }}>
//               Pokemon
//             </Text>
//             <br />{' '}
//             <Text color={'red.600'} as={'span'}>
//               Gotta catch them all!!
//             </Text>{' '}
//           </Heading>
//           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
//             The Kanto region is home to over 150 types of Pokémon, and one eager young Trainer who can't wait to see them all!
//           </Text>
//           <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
//             <Button
//               rounded={'full'}
//               bg={'red.600'}
//               color={'white'}
//               _hover={{
//                 bg: 'red.500',
//               }}>
//               <Link href='/home'>
//                 <a>Get started</a>
//               </Link>
//             </Button>
//           </Stack>
//         </Stack>
//       </Flex>
//       <Flex flex={1}>
//         <Image
//           alt={'Login Image'}
//           objectFit={'cover'}
//           src={
//             'https://pm1.narvii.com/6217/c20f798e4c5829503e2827350df3a55be31110a8_hq.jpg'
//           }
//         />
//       </Flex>
//     </Stack>
//   );
// }
