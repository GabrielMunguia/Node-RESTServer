const Role=require('../models/rol');
const Usuario = require('../models/usuario');

const esRolValido=async (rol ="")=>{
    const exiteRol= await Role.findOne({rol});
    if(!exiteRol){
      throw new Error (` El rol '${rol}' no existe en la base de datos `)
    }
  }

  const emailExiste=  async (correo="")=>{
   const existeCorreo= await  Usuario.findOne({correo});
    if(existeCorreo){
      throw new Error (`El correo ya existe ${correo}`)
    }
  }

  const usuarioExiste=async (id)=>{
    const existeUsr= await  Usuario.findById(id);

    if(!existeUsr){
      throw new Error (`No existe ningun usuario con este id :  ${id}`)
    }
  }

  module.exports = {
      esRolValido,
      emailExiste,
      usuarioExiste
}