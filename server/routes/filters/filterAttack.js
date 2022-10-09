function filterAttack (data, type) {
	if(!type.length) return data;
	let confirm = data.sort((a, b) => {
		if(type === 'min') {
			if(a.attack < b.attack) return -1;
			if(b.attack < a.attack) return 1;
			return 0;
		} else if (type === 'max') {
			if(b.attack < a.attack) return -1;
			if(a.attack < b.attack) return 1;
			return 0;
		} else {
			throw new Error('Invalid parameter')
		}
	})
	return confirm;
}

module.exports = filterAttack;