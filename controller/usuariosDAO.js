const {response,request}=require('express')

//la importacion de response se hace solo para tener el autocompletado, en typescript es inecesario
const usuariosDAOGet = (req=request, res=response) => {
  const{nombre="No name"}=req.query;
 
  res.json({
    status: true,
    msg: "GET API DESDE CONTROLADOR USUARIOS",
    nombre
  });
};

const usuariosDAOPost = (req, res) => {

    const body=req.body;
  res.json({
    status: true,
    msg: "POST API DESDE CONTROLADOR USUARIOS",
    body
  });
};
const usuariosDAOPut = (req, res) => {

    const id=req.params.id;
  res.json({
    status: true,
    msg: "PUT API DESDE CONTROLADOR USUARIOS",
    id
  });
};
const usuariosDAODelete = (req, res) => {
  res.json({
    status: true,
    msg: "DELETE API DESDE CONTROLADOR USUARIOS",
  });
};

module.exports = {
  usuariosDAOGet,
  usuariosDAODelete,
  usuariosDAOPost,
  usuariosDAOPut
};
