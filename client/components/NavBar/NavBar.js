import React from 'react';
import axios from 'axios';
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
  Select,
  InputGroup,
  InputRightElement,
  FormControl
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
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

export default function NavBar({setError}) {
  const [value, setValue] = React.useState('');
  const [order, setOrder] = React.useState('');
  const [typesOptions, setTypesOptions] = React.useState([]);

  React.useEffect(() => {
    if(!typesOptions.length) {
      axios('http://localhost:3001/types')
      .then(d => setTypesOptions(d.data))
      .catch(e => setError(e.message))
    };
    return () => {
      setTypesOptions([]);
      setError('');
    };
  }, []);

  const handleChange = (event) => setValue(event.target.value);
  const handleOrder = (event) => setOrder(event.target.value);
  const searchClick = (event) => {
    event.preventDefault();
    window.location.assign(`/search?name=${value}`);
  };

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
                REGIONS<ChevronDownIcon />
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
            <form onSubmit={searchClick}>
              <Flex >
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="Search pokemon..."
                    _placeholder={{ color: 'black'}}
                    border={'1px'} 
                    borderColor={'black'}
                    bg={'rgba(255, 255, 255, 0.7)'}
                    onChange={handleChange}
                    mr={4}
                    h={9}
                    _focus={{backgroundColor:"rgba(195, 194, 195, 0.7)"}}
                  />
                  <InputRightElement
                    children={<SearchIcon/>}
                    color={"black"}
                    pr={'25px'}
                    cursor={"pointer"}
                    onClick={searchClick}
                  />
                </InputGroup>
              </Flex>
            </form>
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
            <Select 
              placeholder={'Types'}
              bg={'withe'}
              w={'110px'}
              border={'1px'} 
              borderColor={'black'}
              onChange={handleOrder}
            >
              {typesOptions.map((type, index) => {
                return <option value={type} key={index}>{type.name.toUpperCase()}</option>
              })}
            </Select>
            <Button><CloseIcon /></Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}