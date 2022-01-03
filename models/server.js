const express = require("express");
const cors = require('cors');
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath='/api/usuarios'
    this.authPath='/api/auth'

    //Conectar a la base de datos
    this.connectarDB();

     //MIDDLEWARES
     this.middleware();
    //RUTAS
    this.routes();
  }

  routes() {


    this.app.use(this.usuariosPath,require('../routes/usuarios') )
    this.app.use(this.authPath,require('../routes/auth') )
  }

  middleware() {
      //Directorio publico
      this.app.use(express.static('public'))
      //CORS
      this.app.use(cors())
      //Lectura y parseo del body en JSON
      this.app.use(express.json())
  }

  async connectarDB(){
    await dbConnection()
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("localhost:", process.env.PORT);
    });
  }
}

module.exports = Server;
