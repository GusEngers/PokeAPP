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
import style from './Paginated.module.css';

export default function Paginated ({pokemons, page, setPage, paginated}) {
	const numPages = [];
	let maxPages = Math.ceil((pokemons.length) / 12);

	for (let i = 0; i < maxPages; i++) {
		numPages.push(i + 1);
	};

	const prevPage = () => {
		setPage(page - 1);
	};

	const nextPage = () => {
		setPage(page + 1);
	};

	return (
		<Flex
			justify={'center'}
			align={'center'}
			className={style.bg_flex}
		>
			<Wrap>
				<Button
					onClick={prevPage}
					disabled={page <= 1}
				>
					{'<'}
				</Button>
				{numPages && numPages.map(num => {
					return (
						<Button
							key={num}
							onClick={() => paginated(num)}
							isActive={page === num}
						>
							{num}
						</Button>
					)
				})}
				<Button
					onClick={nextPage}
					disabled={page >= maxPages}
				>
					{'>'}
				</Button>
			</Wrap>
		</Flex>
	);
};