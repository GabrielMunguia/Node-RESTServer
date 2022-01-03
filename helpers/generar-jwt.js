const jwt=require('jsonwebtoken')

const generarJWT= (uid="")=>{
    return new Promise((resolve, reject)=>{
        const payload={uid};
        jwt.sign(payload,process.env.SECRETOKEY,{
            expiresIn:'4h'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject('no se pudo crear el token')
            }
            resolve(token)
        })

    })

}

module.exports=generarJWT