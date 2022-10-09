function filterOrigin (data, type) {
	if(!type.length) return data;
	if(!data.length) return data;
	let confirm = data.filter( pokemon => pokemon.api.toString() === type);
	return confirm;
}

module.exports = filterOrigin;