
const {Router} = require('express');
const { getProducto } = require('../controller/producto');
const { validarUrl } = require('../middlewares/validarUrl');

const router = new Router();

router.post('/',[validarUrl],getProducto)

module.exports= router;
