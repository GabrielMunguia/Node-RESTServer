const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      productos: "/api/productos",
    };

    //MIDDLEWARES
    this.middleware();
    //RUTAS
    this.routes();
  }

  routes() {
    this.app.use(this.paths.productos, require("../routes/productos"));
  }

  middleware() {
    //Directorio publico
    this.app.use(express.static("public"));
    //CORS
    this.app.use(cors());
    //Lectura y parseo del body en JSON
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("localhost:", process.env.PORT);
    });
  }
}

module.exports = Server;
