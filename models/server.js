const express = require("express");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath='/api/usuarios'

     //MIDDLEWARES
     this.middleware();
    //RUTAS
    this.routes();
  }

  routes() {


    this.app.use(this.usuariosPath,require('../routes/usuarios') )
  }

  middleware() {
      //Directorio publico
      this.app.use(express.static('public'))
      //CORS
      this.app.use(cors())
      //Lectura y parseo del body en JSON
      this.app.use(express.json())
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("localhost:", process.env.PORT);
    });
  }
}

module.exports = Server;
