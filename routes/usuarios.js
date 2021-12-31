const {Router}= require('express');
const { usuariosDAOGet, usuariosDAOPut, usuariosDAOPost, usuariosDAODelete } = require('../controller/usuariosDAO');
const router=Router();
router.get("/", usuariosDAOGet);

  router.put("/:id", usuariosDAOPut);

    router.post("/", usuariosDAOPost);

    router.delete("/", usuariosDAODelete);

    module.exports=router;