import CardPokemon from '../CardPokemon/CardPokemon.js';
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
  Wrap
} from '@chakra-ui/react';

export default function ListPokemons ({list}) {
	return (
		<>
			<Wrap
				bg={'gray'}
				justify={'center'}
				spacing={'20px'}
			>
				{list.map((pokemon, index) => {
					return (
						<CardPokemon
							id={pokemon.id}
							name={pokemon.name}
							image={pokemon.image}
							types={pokemon.types}
							key={index}
						/>
					);
				})}
			</Wrap>
		</>
	);
};