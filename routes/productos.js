
const {Router} = require('express');
const { getProducto } = require('../controller/producto');

const router = new Router();

router.post('/',getProducto)

module.exports= router;
