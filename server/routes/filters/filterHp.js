function filterHp (data, type) {
	if(!type.length) return data;
	let confirm = data.sort((a, b) => {
		if(type === 'min') {
			if(a.hp < b.hp) return -1;
			if(b.hp < a.hp) return 1;
			return 0;
		} else if (type === 'max') {
			if(b.hp < a.hp) return -1;
			if(a.hp < b.hp) return 1;
			return 0;
		} else {
			throw new Error('Invalid parameter')
		}
	})
	return confirm;
};

module.exports = filterHp;