const express = require("express");
const cors = require('cors');
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths={
      usuarios:'/api/usuarios',
      buscar:'/api/buscar',
      categorias:'/api/categorias',
      auth:'/api/auth',
      productos:'/api/productos',
    }
   

    //Conectar a la base de datos
    this.connectarDB();

     //MIDDLEWARES
     this.middleware();
    //RUTAS
    this.routes();
  }

  routes() {


    this.app.use(this.paths.usuarios,require('../routes/usuarios') )
    this.app.use(this.paths.auth,require('../routes/auth') )
    this.app.use(this.paths.categorias,require('../routes/categorias') )
    this.app.use(this.paths.productos,require('../routes/productos'))
    this.app.use(this.paths.buscar,require('../routes/buscar'))
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
