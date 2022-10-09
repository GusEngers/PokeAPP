function filterSpedd (data, type) {
	if(!type.length) return data;
	let confirm = data.sort((a, b) => {
		if(type === 'min') {
			if(a.spedd < b.spedd) return -1;
			if(b.spedd < a.spedd) return 1;
			return 0;
		} else if (type === 'max') {
			if(b.spedd < a.spedd) return -1;
			if(a.spedd < b.spedd) return 1;
			return 0;
		} else {
			throw new Error('Invalid parameter')
		}
	})
	return confirm;
}

module.exports = filterSpedd;