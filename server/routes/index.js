const { Router } = require('express');
const pokemon = require('./pokemon.js');
const type = require('./type.js');
const filter = require('./filter.js');
const router = Router();

router.use('/pokemons', pokemon);
router.use('/types', type);
router.use('/filters', filter)

module.exports = router;
