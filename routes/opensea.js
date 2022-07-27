const Router = require('express').Router;
const { getSlugs } = require('../controller/opensea');
const router = new Router();
router.get('/', getSlugs);
module.exports = router;
