function filterType (data, name) {
	if(!name.length) return data;
	if(!data.length) return data;
	let confirm = data.filter( pokemon => pokemon.types.includes(name));
	return confirm;
}

module.exports = filterType;