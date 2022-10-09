function filterHeight (data, type) {
	if(!type.length) return data;
	let confirm = data.sort((a, b) => {
		if(type === 'min') {
			if(a.height < b.height) return -1;
			if(b.height < a.height) return 1;
			return 0;
		} else if (type === 'max') {
			if(b.height < a.height) return -1;
			if(a.height < b.height) return 1;
			return 0;
		} else {
			throw new Error('Invalid parameter')
		}
	})
	return confirm;
}

module.exports = filterHeight;