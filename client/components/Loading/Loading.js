import { Box } from '@chakra-ui/react';
import style from './Loading.module.css';


export default function Loading () {
	return (
		<>
			<Box
				w={'100vw'}
				h={'100vh'}
				className={style.loading}
			>
			</Box>
		</>
	);
};