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
import style from './CardPokemon.module.css';

export default function CardPokemon ({id, name, image, types}) {
	const typeColor = (type) => {
		switch (type) {
			case 'water':
			case 'ice':
			case 'dragon':
				return 'blue';
			case 'ghost':
			case 'normal':
			case 'flying':
			case 'steel':
			case 'fighting':
			case 'psychic':
				return 'grey';
			case 'poison':
				return 'violet';
			case 'ground':
			case 'rock':
				return 'brown';
			case 'bug':
			case 'grass':
				return 'green';
			case 'fire':
				return 'red';
			case 'electric':
				return 'yellow';
			case 'dark':
			case 'shadow':
				return 'black';
			case 'fairy':
				return 'pink';
			default:
				return 'white';
		};
	};

	return (
		<>
			<Link
				href={`/pokemon/${id}`}
				_hover={{
					textDecoration: 'none'
				}}
			>
				<Box
					h={'235px'}
					w={'235px'}
					m={'10px'}
					align={'center'}
					className={style.card}
				>
					<Image
						src={image}
						w={'100px'}
						h={'100px'}
					/>
					<Text
						h={'30px'}
						w={'140px'}
						className={style.text}
						fontSize={18}
					>
						{name.toUpperCase()}
					</Text>
					{types.map((type, index) => {
						return (
							<Text 
								key={index} 
								fontSize={13}
								w={'70px'}
								border={'2px'}
								borderColor={typeColor(type)}
								className={style.text_type}
							>
								{type}
							</Text>
						)
					})}
				</Box>
			</Link>
		</>
	);
};