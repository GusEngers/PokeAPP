const { Router } = require('express');
const router = Router();
const Pokemon = require('../models/pokemon.js');
const filterData = require('./filters/index.js');

router.get('/', async (req, res) => {
	const { na, al, hp, at, de, sp, he, we, ty, or } = req.query;
	try {
		if(!na.length) {
			let data = await Pokemon.find();
			let confirm = await filterData(data, al, hp, at, de, sp, he, we, ty, or);
			if(!confirm.length) throw new Error('No pokemon found');
			return res.json(confirm);
		}

		let data = await Pokemon.find({name: new RegExp(na, 'i')});
		if(!data.length){
			throw new Error('No pokemon found');
		}
		let confirm = await filterData(data, al, hp, at, de, sp, he, we, ty, or);
		if(!confirm.length) throw new Error('No pokemon found');
		return res.json(confirm);

	} catch (error) {
		res.status(404).json({Error: error.message});
	}
});

module.exports = router;