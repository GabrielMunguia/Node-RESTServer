const { response } = require("express");
const Usuario= require('../models/usuario')

const bcryptjs = require('bcryptjs');
const generarJWT = require("../helpers/generar-jwt");
const login =  async  (req,res=response)=>{
const {correo,password}=req.body;
    try{
//Verificar si el usuario existe
const usuario= await  Usuario.findOne({correo})

if(!usuario){
return  res.status(400).json({
     msj:'Correo/Password no son correcto - Correo'
 })
}

//  Verificar si usuario esta activo

 if(!usuario.estado){
    return  res.status(400).json({
         msj:'Correo/Password no son correcto - NO esta activo'
     })
 }
 
 //Verificar password

 if(!bcryptjs.compareSync(password,usuario.password)){
     return  res.status(400).json({
          msj:'Correo/Password no son correcto - Password Invalido'
      })
  }



 //Generar JWT
 const token = await generarJWT(usuario.id)
 console.log(token)


 res.json({
     usuario,
     token
     
 })
    }catch(e){

        res.status(500)({
            msj:'Comuniquese con el administrador'
        })

    }

}

module.exports = {
    login
}