const filterAlphabetical = require('./filterAlphabetical.js');
const filterHp = require('./filterHp.js');
const filterAttack = require('./filterAttack.js');
const filterDefense = require('./filterDefense.js');
const filterSpedd = require('./filterSpedd.js');
const filterHeight = require('./filterHeight.js');
const filterWeight = require('./filterWeight.js');
const filterType = require('./filterType.js');
const filterOrigin = require('./filterOrigin.js');

async function filterData(data, al, hp, at, de, sp, he, we, ty, or) {
	let dataFilAl = await filterAlphabetical(data, al);
	let dataFilHp = await filterHp(dataFilAl, hp);
	let dataFilAt = await filterAttack(dataFilHp, at);
	let dataFilDe = await filterDefense(dataFilAt, de);
	let dataFilSp = await filterSpedd(dataFilDe, sp);
	let dataFilHe = await filterHeight(dataFilSp, he);
	let dataFilWe = await filterWeight(dataFilHe, we);
	let dataFilTy = await filterType(dataFilWe, ty);
	let dataFilOr = await filterOrigin(dataFilTy, or);
	return dataFilOr;
}

module.exports = filterData;