function filterDefense (data, type) {
	if(!type.length) return data;
	let confirm = data.sort((a, b) => {
		if(type === 'min') {
			if(a.defense < b.defense) return -1;
			if(b.defense < a.defense) return 1;
			return 0;
		} else if (type === 'max') {
			if(b.defense < a.defense) return -1;
			if(a.defense < b.defense) return 1;
			return 0;
		} else {
			throw new Error('Invalid parameter')
		}
	})
	return confirm;
}

module.exports = filterDefense;