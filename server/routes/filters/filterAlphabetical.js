function filterAlphabetical(data, type) {
	if(!type.length) return data;
	let confirm = data.sort((a, b) => {
		if(type === 'A-Z') {
			if(a.name < b.name) return -1;
			if(b.name < a.name) return 1;
			return 0;
		} else if (type === 'Z-A') {
			if(b.name < a.name) return -1;
			if(a.name < b.name) return 1;
			return 0;
		} else {
			throw new Error('Invalid parameter')
		}
	})
	return confirm;
};

module.exports = filterAlphabetical;