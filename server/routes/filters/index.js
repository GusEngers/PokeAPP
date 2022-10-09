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
	if(!al) al = '';
	let dataFilAl = await filterAlphabetical(data, al);
	if(!hp) hp = '';
	let dataFilHp = await filterHp(dataFilAl, hp);
	if(!at) at = '';
	let dataFilAt = await filterAttack(dataFilHp, at);
	if(!de) de = '';
	let dataFilDe = await filterDefense(dataFilAt, de);
	if(!sp) sp = '';
	let dataFilSp = await filterSpedd(dataFilDe, sp);
	if(!he) he = '';
	let dataFilHe = await filterHeight(dataFilSp, he);
	if(!we) we = '';
	let dataFilWe = await filterWeight(dataFilHe, we);
	if(!ty) ty = '';
	let dataFilTy = await filterType(dataFilWe, ty);
	if(!or) or = '';
	let dataFilOr = await filterOrigin(dataFilTy, or);
	return dataFilOr;
}

module.exports = filterData;