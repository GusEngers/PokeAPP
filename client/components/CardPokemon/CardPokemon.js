export default function CardPokemon ({name, image, hp}) {
	return (
		<div>
			<h1>{name}</h1>
			<img src={image} alt={name} />
			<h3>{hp}</h3>
		</div>
	);
};