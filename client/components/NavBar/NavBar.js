import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Select
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import style from './NavBar.module.css';

const Links = ['Home', 'Create'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`/${children.toLowerCase()}`}>
    {children}
  </Link>
);

export default function NavBar() {
  const [value, setValue] = React.useState('');
  const [order, setOrder] = React.useState('');

  const handleChange = (event) => setValue(event.target.value);
  const handleOrder = (event) => setOrder(event.target.value);
  console.log(order)
  return (
    <>
      <Box className={style.bg_navbar} px={4}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              cursor={'pointer'}
              minW={0}
            >
              <Button
                _hover={{
                  textDecoration: 'none',
                  opacity: '0.5'
                }}
              >
                ↓ REGIONS
              </Button>
            </MenuButton>
            <MenuList>
              <MenuItem>Kanto</MenuItem>
              <MenuItem>Johto</MenuItem>
              <MenuItem>Hoenn</MenuItem>
              <MenuItem>Sinnoh</MenuItem>
              <MenuItem>Teselia</MenuItem>
              <MenuItem>Kalos</MenuItem>
              <MenuItem>Alola</MenuItem>
              <MenuItem>Galar</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex h={16} w={'70vw'} border={'1px'} alignItems={'center'} justifyContent={'center'}>
          <HStack spacing={3} alignItems={'center'}>
            <Box>
              <Input 
                value={value}
                bg={'withe'}
                onChange={handleChange}
                border={'1px'}
                borderColor={'black'}
                placeholder={'Search pokemon...'}
              />
            </Box>
            <Select 
              placeholder={'Order'}
              bg={'withe'}
              w={'110px'}
              border={'1px'} 
              borderColor={'black'}
              onChange={handleOrder}
            >
              <option value="AZ">A-Z</option>
              <option value="ZA">Z-A</option>
              <option value="HPu">HP+</option>
              <option value="HPd">HP-</option>
              <option value="ATKu">ATK+</option>
              <option value="ATKd">ATK-</option>
              <option value="DEFu">DEF+</option>
              <option value="DEFd">DEF-</option>
              <option value="SPDu">SPD+</option>
              <option value="SPDd">SPD-</option>
            </Select>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}