const { Router } = require("express");
const { check } = require('express-validator');
const { login } = require("../controller/auth");
const { validarCampos } = require("../middlewares/validarCampos");
const router = Router();


router.post("/login",[
    check('correo','El correo es obligatorio!').isEmail(),
    check('password','El password es obligatorio').notEmpty(),
    validarCampos
],login);


module.exports = router;