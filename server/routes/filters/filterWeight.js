function filterWeight (data, type) {
	if(!type.length) return data;
	let confirm = data.sort((a, b) => {
		if(type === 'min') {
			if(a.weight < b.weight) return -1;
			if(b.weight < a.weight) return 1;
			return 0;
		} else if (type === 'max') {
			if(b.weight < a.weight) return -1;
			if(a.weight < b.weight) return 1;
			return 0;
		} else {
			throw new Error('Invalid parameter')
		}
	})
	return confirm;
}

module.exports = filterWeight;