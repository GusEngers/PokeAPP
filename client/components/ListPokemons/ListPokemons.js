import CardPokemon from '../CardPokemon/CardPokemon.js';

export default function ListPokemons ({list}) {
	return (
		<div>
			{list.map((pokemon, index) => {
				return (
					<CardPokemon
						name={pokemon.name}
						image={pokemon.image}
						hp={pokemon.hp}
						key={index}
					/>
				);
			})}
		</div>
	);
};